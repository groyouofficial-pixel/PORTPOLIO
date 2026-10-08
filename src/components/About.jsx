import React from 'react';
import stackImage from '../assets/about/image.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">About Me</h2>
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-red-50">
            Hi, I'm <span className="text-black text-xl font-black mx-1 tracking-wide uppercase bg-white/20 px-2 py-0.5 rounded">SUJITH THANGAVEL</span>, a Digital Marketing & Brand Manager. I don't just manage social media — I combine <strong>Marketing + Branding + Creativity + Technology + Business Growth</strong> to build and scale brands.
          </p>

          <p className="text-base font-semibold mb-8 text-black/90 bg-white/90 p-4 rounded-xl shadow-lg border border-black/10">
            🎯 <strong>Core Flow:</strong> Strategy → Content → Website → Advertising → Leads → E-commerce → Scale
          </p>

          {/* Key Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
              <div className="text-2xl md:text-3xl font-black text-white">7+</div>
              <div className="text-xs text-red-100 font-bold uppercase tracking-wider mt-1">Years Exp</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
              <div className="text-2xl md:text-3xl font-black text-white">100M+</div>
              <div className="text-xs text-red-100 font-bold uppercase tracking-wider mt-1">Views</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
              <div className="text-2xl md:text-3xl font-black text-white">2Cr+</div>
              <div className="text-xs text-red-100 font-bold uppercase tracking-wider mt-1">Leads</div>
            </div>
            <div className="bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center">
              <div className="text-2xl md:text-3xl font-black text-white">Multi</div>
              <div className="text-xs text-red-100 font-bold uppercase tracking-wider mt-1">Industry</div>
            </div>
          </div>

          {/* Career Journey Timeline */}
          <div className="mb-8">
            <h3 className="text-xl font-black text-black uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>🚀</span> Career Journey (2019 — 2026)
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-bold text-black">
              <span className="bg-white/90 px-3 py-1.5 rounded-full shadow-sm">Kalimar News</span>
              <span>→</span>
              <span className="bg-white/90 px-3 py-1.5 rounded-full shadow-sm">News Tamil 24x7</span>
              <span>→</span>
              <span className="bg-white/90 px-3 py-1.5 rounded-full shadow-sm">Jaya TV</span>
              <span>→</span>
              <span className="bg-white/90 px-3 py-1.5 rounded-full shadow-sm">Aditya Music</span>
              <span>→</span>
              <span className="bg-white/90 px-3 py-1.5 rounded-full shadow-sm">OrangeSmith</span>
              <span>→</span>
              <span className="bg-black text-white px-3 py-1.5 rounded-full shadow-md">4D Motion Pictures</span>
            </div>
          </div>

          {/* Horizontal Skills Badges */}
          <div id="skills" className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/20">
            {['Digital Marketing', 'Brand Strategy', 'Google Ads', 'Meta Ads', 'Shopify E-commerce', 'Social Media Growth', 'SEO/GEO/AEO', 'Creative Direction'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-black/40 text-white font-bold text-xs rounded-lg border border-white/20 backdrop-blur-sm">
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
