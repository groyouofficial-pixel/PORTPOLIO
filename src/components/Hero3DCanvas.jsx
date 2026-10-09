import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 1. Particle Cloud
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const redColor = new THREE.Color('#ff2a2a');
    const whiteColor = new THREE.Color('#ffffff');
    const darkRedColor = new THREE.Color('#990000');

    for (let i = 0; i < particleCount; i++) {
      // Sphere distribution with variance
      const radius = 15 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Color mixing
      const mixRatio = Math.random();
      let color;
      if (mixRatio > 0.7) {
        color = whiteColor;
      } else if (mixRatio > 0.3) {
        color = redColor;
      } else {
        color = darkRedColor;
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture creator
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // 2. Central 3D Wireframe Icosahedron
    const geoIcosahedron = new THREE.IcosahedronGeometry(10, 2);
    const matIcosahedron = new THREE.MeshBasicMaterial({
      color: 0xff2a2a,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const icosahedronMesh = new THREE.Mesh(geoIcosahedron, matIcosahedron);
    scene.add(icosahedronMesh);

    // 3. Floating 3D Torus Knot Rings
    const geoTorusKnot = new THREE.TorusKnotGeometry(7, 1.2, 100, 16);
    const matTorusKnot = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const torusKnotMesh = new THREE.Mesh(geoTorusKnot, matTorusKnot);
    scene.add(torusKnotMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff2a2a, 2, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth Mouse Lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate Objects
      particleSystem.rotation.y = elapsedTime * 0.05 + mouseX * 0.5;
      particleSystem.rotation.x = elapsedTime * 0.02 + mouseY * 0.5;

      icosahedronMesh.rotation.x = elapsedTime * 0.15 + mouseY * 0.3;
      icosahedronMesh.rotation.y = elapsedTime * 0.2 + mouseX * 0.3;

      torusKnotMesh.rotation.x = -elapsedTime * 0.1;
      torusKnotMesh.rotation.z = elapsedTime * 0.15;

      // Dynamic Camera Sway
      camera.position.x = mouseX * 3;
      camera.position.y = -mouseY * 3;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      geoIcosahedron.dispose();
      matIcosahedron.dispose();
      geoTorusKnot.dispose();
      matTorusKnot.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70" 
    />
  );
};

export default Hero3DCanvas;
