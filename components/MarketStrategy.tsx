
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, BarChart3, Users, Zap, Bell, CheckCircle2 } from 'lucide-react';

const MarketStrategy: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Small delay to ensure the mount transition is visible
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-4">
      <div className="relative bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-[4rem] p-12 md:p-20 overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-30 mb-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-white/5 rounded-full mb-10 border border-slate-300 dark:border-white/10">
              <div className="w-3 h-3 bg-neon rounded-sm shadow-[0_0_10px_#bef303]" />
              <span className="text-xs font-bold text-neon tracking-widest uppercase">Systemized Journey</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.05] max-w-xl text-slate-900 dark:text-white">
              Turn Your Practice Into <br />
              <span className="text-slate-400 dark:text-white/40 italic font-light">The Only Choice</span>
            </h2>
          </div>
          
          <div className="flex-1 max-w-md md:pt-12">
            <p className="text-slate-500 dark:text-white/60 text-xl mb-10 leading-relaxed font-light">
              We build an omnipresent digital footprint. From finding dental ambassadors to nurturing leads across socials, our AI ensures you are seen everywhere.
            </p>
            <button className="flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-black pl-8 pr-2 py-2 rounded-full font-bold hover:bg-neon transition-all duration-300 group">
              <span className="text-lg">Talk to a Growth Specialist</span>
              <div className="bg-neon w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-neon transition-colors">
                <ArrowUpRight size={24} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Enhanced Animated Connecting Lines SVG - High Prominence */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="neonGlowStrong" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                <linearGradient id="lineGradientLeft" x1="150" y1="240" x2="350" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#bef303" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#bef303" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#bef303" stopOpacity="0" />
                </linearGradient>
                
                <linearGradient id="lineGradientRight" x1="850" y1="250" x2="650" y2="310" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#bef303" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#bef303" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#bef303" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Background Static Paths (Ghost lines) */}
              <g opacity="0.1" stroke="#bef303">
                <path d="M150 240 C 250 240, 300 280, 350 280" strokeWidth="2" />
                <path d="M220 380 C 280 380, 320 320, 350 320" strokeWidth="2" />
                <path d="M850 250 C 750 250, 700 290, 650 290" strokeWidth="2" />
                <path d="M780 400 C 720 400, 680 330, 650 330" strokeWidth="2" />
              </g>

              {/* High-Impact Flow Lines with Filters */}
              <g filter="url(#neonGlow)">
                {/* Left Side Flows */}
                <path d="M150 240 C 250 240, 300 280, 350 280" 
                      stroke="url(#lineGradientLeft)" strokeWidth="6" 
                      strokeDasharray="80 300" className="animate-data-flow" />
                <path d="M220 380 C 280 380, 320 320, 350 320" 
                      stroke="url(#lineGradientLeft)" strokeWidth="5" 
                      strokeDasharray="60 350" className="animate-data-flow-delayed" />
                
                {/* Right Side Flows */}
                <path d="M850 250 C 750 250, 700 290, 650 290" 
                      stroke="url(#lineGradientRight)" strokeWidth="6" 
                      strokeDasharray="80 300" className="animate-data-flow-reverse" />
                <path d="M780 400 C 720 400, 680 330, 650 330" 
                      stroke="url(#lineGradientRight)" strokeWidth="5" 
                      strokeDasharray="60 350" className="animate-data-flow-reverse-delayed" />
              </g>

              {/* Extra Sparkle - Moving dots on the same paths */}
              <g filter="url(#neonGlowStrong)">
                <circle r="4" fill="#fff" className="animate-spark-move-1" />
                <circle r="3" fill="#fff" className="animate-spark-move-2" />
                <circle r="4" fill="#fff" className="animate-spark-move-3" />
              </g>
            </svg>
          </div>

          {/* Central Glow & Connections */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[120%] h-[1px] bg-neon/20 blur-[1px]" />
            {/* Main Ambient Glow */}
            <div className="absolute w-[600px] h-[300px] bg-neon/10 blur-[120px]" />
          </div>

          {/* Social Icons Float */}
          <div className="absolute left-0 md:left-10 flex flex-col gap-12 z-20">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl flex items-center justify-center animate-float shadow-xl" style={{ animationDelay: '0s' }}>
              <Users className="text-neon" size={28} />
            </div>
            <div className="w-20 h-20 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl flex items-center justify-center animate-float translate-x-8 shadow-xl" style={{ animationDelay: '1s' }}>
              <Zap className="text-neon" size={32} />
            </div>
          </div>

          {/* Refined AI Dashboard Mockup */}
          <div className="relative z-40 group scale-95 md:scale-110">
            {/* Docking Glows - Subtle Premium highlights specifically at the merging edges */}
            <div className="absolute -left-3 top-[25%] h-[50%] w-6 bg-neon/30 blur-[25px] rounded-full pointer-events-none opacity-40 dark:opacity-60 animate-pulse mix-blend-screen" style={{ animationDuration: '3s' }} />
            <div className="absolute -right-3 top-[25%] h-[50%] w-6 bg-neon/30 blur-[25px] rounded-full pointer-events-none opacity-40 dark:opacity-60 animate-pulse mix-blend-screen" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
            
            {/* Extra pinpoint glows exactly where the thick lines hit the bezel */}
            <div className="absolute -left-1 top-[230px] w-4 h-12 bg-neon/60 blur-[15px] rounded-full pointer-events-none" />
            <div className="absolute -left-1 top-[370px] w-4 h-12 bg-neon/60 blur-[15px] rounded-full pointer-events-none" />
            <div className="absolute -right-1 top-[240px] w-4 h-12 bg-neon/60 blur-[15px] rounded-full pointer-events-none" />
            <div className="absolute -right-1 top-[390px] w-4 h-12 bg-neon/60 blur-[15px] rounded-full pointer-events-none" />

            {/* Phone Body */}
            <div className="w-[300px] h-[580px] bg-white dark:bg-[#050505] rounded-[3.5rem] border-[10px] border-slate-200 dark:border-[#1a1a1a] overflow-hidden shadow-2xl relative">
              {/* Header */}
              <div className="p-8 pb-4 flex justify-between items-center border-b border-slate-100 dark:border-white/5">
                <div>
                  <div className="text-[10px] text-slate-400 dark:text-white/30 uppercase font-black tracking-widest mb-1">Clinic Status</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">DentAI Pro Dashboard</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <Bell size={14} />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="p-6 grid grid-cols-2 gap-3">
                {[
                  { label: 'New Leads', val: '+38', color: 'text-neon' },
                  { label: 'Conversion', val: '84%', color: 'text-slate-900 dark:text-white' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-white/5 rounded-2xl p-4 border border-slate-100 dark:border-white/5">
                    <div className="text-[8px] uppercase tracking-widest text-slate-400 dark:text-white/20 mb-2 font-bold">{stat.label}</div>
                    <div className={`text-xl font-bold font-heading ${stat.color}`}>{stat.val}</div>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="px-6 mb-6">
                <div className="bg-slate-50 dark:bg-white/5 rounded-3xl p-5 border border-slate-100 dark:border-white/5 h-40 flex flex-col justify-end gap-2 relative overflow-hidden">
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                    <span className="text-[8px] uppercase font-bold text-slate-400 dark:text-white/20">Live Volume</span>
                  </div>
                  <div className="flex items-end justify-between h-2/3 gap-1 px-2">
                    {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-slate-200 dark:bg-white/5 rounded-t-lg relative group">
                        <div 
                          className="absolute bottom-0 w-full bg-neon rounded-t-lg transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1)" 
                          style={{ 
                            height: isAnimated ? `${h}%` : '0%', 
                            opacity: 0.3 + (h/200),
                            transitionDelay: `${i * 100}ms`
                          }} 
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-300 dark:text-white/20 font-bold tracking-widest uppercase mt-2">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                  </div>
                </div>
              </div>

              {/* Feed/Activity */}
              <div className="px-6">
                <div className="text-[10px] text-slate-400 dark:text-white/20 uppercase font-black tracking-widest mb-4">Patient Acquisition</div>
                <div className="space-y-3">
                  {[
                    { text: "Lead Booked: All-on-4 Case", time: "2m ago" },
                    { text: "AI Response: Invisalign inquiry", time: "14m ago" },
                    { text: "Consultation Confirmed", time: "1h ago" }
                  ].map((act, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-neon" />
                        <span className="text-[10px] text-slate-700 dark:text-white/70 font-medium">{act.text}</span>
                      </div>
                      <span className="text-[8px] text-slate-400 dark:text-white/20 uppercase font-bold">{act.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-1/2 left-0 right-0 h-1/3 bg-neon/10 blur-[80px] opacity-30 -translate-y-1/2 -z-10" />
            </div>
            
            {/* Hover Floating Element */}
            <div className="absolute -right-20 top-20 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-neon/30 p-4 rounded-2xl shadow-2xl backdrop-blur-xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black font-black text-sm">ROI</div>
                <div>
                  <div className="text-[8px] text-slate-500 dark:text-white/30 uppercase font-bold">Monthly Yield</div>
                  <div className="text-slate-900 dark:text-neon font-bold">+$18,400</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 md:right-10 flex flex-col gap-12 z-20">
            <div className="w-20 h-20 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl flex items-center justify-center animate-float shadow-xl" style={{ animationDelay: '0.5s' }}>
              <BarChart3 className="text-slate-600 dark:text-white/60" size={28} />
            </div>
            <div className="w-14 h-14 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl flex items-center justify-center animate-float -translate-x-12 shadow-xl" style={{ animationDelay: '1.5s' }}>
              <ArrowUpRight className="text-neon" size={20} />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes data-flow {
          0% { stroke-dashoffset: 380; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes data-flow-reverse {
          0% { stroke-dashoffset: -380; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes spark-move-1 {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .animate-data-flow {
          animation: data-flow 2s linear infinite;
        }
        .animate-data-flow-delayed {
          animation: data-flow 2.5s linear infinite;
          animation-delay: 0.8s;
        }
        .animate-data-flow-reverse {
          animation: data-flow-reverse 2.2s linear infinite;
        }
        .animate-data-flow-reverse-delayed {
          animation: data-flow-reverse 2.8s linear infinite;
          animation-delay: 1.2s;
        }
        .animate-spark-move-1 {
          offset-path: path("M150 240 C 250 240, 300 280, 350 280");
          animation: spark-move-1 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-spark-move-2 {
          offset-path: path("M850 250 C 750 250, 700 290, 650 290");
          animation: spark-move-1 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 1.5s;
        }
        .animate-spark-move-3 {
          offset-path: path("M220 380 C 280 380, 320 320, 350 320");
          animation: spark-move-1 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 0.5s;
        }
      `}} />
    </section>
  );
};

export default MarketStrategy;
