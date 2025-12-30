
import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import GlowButton from './ui/GlowButton';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto text-center relative px-4">
      <div className="absolute inset-0 bg-neon/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="group w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 rotate-12 hover:rotate-0 transition-all duration-700 shadow-xl cursor-default hover:border-neon/40 hover:bg-neon/5">
          <Sparkles 
            className="text-neon transition-all duration-700 group-hover:scale-125 group-hover:rotate-[15deg] animate-[pulse_3s_ease-in-out_infinite]" 
            size={32} 
            strokeWidth={1.5}
          />
          {/* Internal Glow Effect on Hover */}
          <div className="absolute inset-0 bg-neon/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
        </div>

        <h2 className="text-5xl md:text-8xl font-heading font-extrabold mb-8 tracking-tighter leading-none text-slate-900 dark:text-white">
          Stop Settling.<br /> 
          Start <span className="text-neon">Scaling.</span>
        </h2>

        <p className="text-lg md:text-xl text-slate-500 dark:text-white/50 max-w-2xl mb-12 leading-relaxed">
          Your competitors are already looking into AI. Don't be the practice that gets left behind. Let's see if your clinic is a fit for our autonomous growth framework.
        </p>

        <GlowButton size="lg">
          Claim Your Free Scaling Audit <ArrowUpRight size={24} className="ml-2" />
        </GlowButton>

        <div className="mt-12 flex items-center gap-6 text-slate-400 dark:text-white/30 text-sm font-medium">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/doc_face${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white dark:border-black shadow-lg" alt="user" />
            ))}
          </div>
          <p className="tracking-wide">Join 40+ dentists reclaiming their time</p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
