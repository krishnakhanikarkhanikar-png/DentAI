
import React from 'react';

const LogoBar: React.FC = () => {
  const logos = [
    { name: 'CHEXX', style: 'tracking-[-0.1em]' },
    { name: '1XBET', style: 'italic tracking-tighter' },
    { name: 'FONBET', style: 'tracking-tight' },
    { name: '1win', style: 'lowercase font-black' },
    { name: 'LEON', style: 'italic' },
    { name: 'Slott', style: 'font-light' },
  ];

  return (
    <section className="py-20 w-full overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Fading Mask for Horizontal Scroll if needed, but here it's static like image */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className={`text-2xl md:text-5xl font-black font-heading text-white select-none transition-all duration-500 hover:scale-110 ${logo.style}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle edge fades like the screenshot */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default LogoBar;
