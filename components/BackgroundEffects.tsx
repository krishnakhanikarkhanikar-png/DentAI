
import React from 'react';

interface BackgroundEffectsProps {
  mousePosition: { x: number; y: number };
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ mousePosition }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-500 bg-white dark:bg-black">
      {/* Top Center Dotted Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#bef303_0%,transparent_70%)] blur-[100px]" />
        
        {/* Animated Grid with Shimmer */}
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-30 [mask-image:radial-gradient(circle_at_top,black,transparent)] text-slate-200 dark:text-[#222]">
          <div className="absolute inset-0 shimmer opacity-10" />
        </div>
      </div>

      {/* Light Field / Beam Texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] rotate-12">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-neon/50 to-transparent animate-beam" style={{ animationDelay: '0s', left: '10%' }} />
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-400 dark:via-white/30 to-transparent animate-beam" style={{ animationDelay: '3s', left: '40%' }} />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-neon/40 to-transparent animate-beam" style={{ animationDelay: '6s', left: '70%' }} />
        </div>
      </div>

      {/* Wispy Abstract Shapes with Parallax */}
      <div 
        className="absolute right-0 top-1/4 w-1/2 h-full opacity-20 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)` }}
      >
        <svg viewBox="0 0 800 1000" className="w-full h-full text-slate-300 dark:text-white/20">
          <path 
            d="M800 200 Q 600 300 750 600 T 800 900" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="animate-pulse"
          />
          <path 
            d="M850 150 Q 550 400 700 700 T 850 950" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            style={{ animationDelay: '1s' }}
            className="animate-pulse"
          />
        </svg>
      </div>
      
      {/* Radial Dynamic Glow following cursor */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[150px] transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #bef303 0%, transparent 70%)',
          transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
        }}
      />

      {/* Dust particles (Static background) */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-slate-400 dark:bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-neon rounded-full animate-ping" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-slate-400 dark:bg-white rounded-full animate-ping" style={{ animationDuration: '4s' }} />
      </div>
    </div>
  );
};

export default BackgroundEffects;
