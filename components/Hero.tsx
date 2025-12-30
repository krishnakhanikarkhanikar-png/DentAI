
import React from 'react';
import { User, Eye, Code, ArrowUpRight } from 'lucide-react';
import InteractiveParticles from './InteractiveParticles';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[95vh] flex flex-col items-center justify-center max-w-full mx-auto py-20 relative px-4 md:px-12 text-center overflow-hidden">
      {/* Background Particle Layer */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <InteractiveParticles />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto">
        <div className="reveal-item inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-10 group cursor-pointer hover:border-neon/50 transition-colors backdrop-blur-md">
          <div className="w-8 h-4 bg-slate-200 dark:bg-white/10 rounded-sm flex items-center justify-center text-[8px] font-bold overflow-hidden relative">
            <span className="relative z-10 text-slate-800 dark:text-white">LIVE</span>
            <div className="absolute inset-0 bg-neon/20 animate-pulse" />
          </div>
          <span className="text-xs text-slate-500 dark:text-white/70">Transforming 40+ practices this month →</span>
        </div>

        <h1 className="reveal-item text-5xl md:text-8xl lg:text-[10rem] font-heading font-extrabold tracking-tight leading-[0.95] mb-12 max-w-7xl text-slate-900 dark:text-white">
          Practice Dentistry.<br />
          <span className="block mt-4 md:mt-8 text-3xl md:text-6xl lg:text-7xl font-light tracking-tight text-slate-700 dark:text-white/80">
            <span className="relative inline-block mr-2 group">
              <span className="bg-neon text-black px-6 py-2 rounded-2xl inline-block relative z-10 font-black shadow-[0_0_40px_rgba(190,243,3,0.4)] group-hover:scale-105 transition-transform duration-500">
                LET AI
              </span>
              <span className="absolute inset-0 bg-neon blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            </span> 
            <span className="relative">
              handle the rest.
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon to-transparent opacity-50" />
            </span>
          </span>
        </h1>

        <p className="reveal-item text-lg md:text-2xl text-slate-500 dark:text-white/50 max-w-3xl mb-12 leading-relaxed font-light mx-auto">
          Stop chasing leads and managing messy marketing. We build autonomous AI systems that fill your chairs with high-value patients while you focus on what you love: <span className="text-slate-800 dark:text-white/80 font-medium italic">your craft.</span>
        </p>

        <div className="reveal-item flex flex-wrap items-center justify-center gap-8 md:gap-20 mb-16">
          {[
            { Icon: User, val: "100%", label: "Hands-off growth" },
            { Icon: Eye, val: "4.2x", label: "Average Lead ROI" },
            { Icon: Code, val: "24/7", label: "Autonomous Booking" }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-2xl text-neon group-hover:bg-neon group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg border border-slate-200 dark:border-white/5 group-hover:border-neon/50">
                <stat.Icon size={24} />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-neon transition-colors">{stat.val}</div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/30 group-hover:text-slate-600 dark:group-hover:text-white/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item flex flex-col md:flex-row items-center gap-6">
          <button className="relative flex items-center gap-6 bg-slate-900 dark:bg-white text-white dark:text-black pl-10 pr-2 py-2.5 rounded-full font-bold transition-all duration-500 group mx-auto 
            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] 
            hover:shadow-[0_0_60px_rgba(190,243,3,0.4)] hover:scale-[1.05] active:scale-95
            border border-slate-800/50 dark:border-white/10 hover:border-neon/50
            overflow-hidden">
            <span className="text-xl tracking-tight">Get Your Free Scaling Audit</span>
            <div className="bg-[#bef303] w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-[#bef303] transition-all duration-500 overflow-hidden relative shadow-lg">
              <ArrowUpRight size={28} strokeWidth={2.5} className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </button>
        </div>
        <p className="reveal-item mt-8 text-slate-300 dark:text-white/20 text-[10px] uppercase tracking-[0.3em] font-black animate-pulse">
          Only 3 Partnership Slots Remaining for Q3
        </p>
      </div>
    </section>
  );
};

export default Hero;
