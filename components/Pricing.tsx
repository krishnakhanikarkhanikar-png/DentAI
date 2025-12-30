
import React from 'react';
import { Plus, ArrowUpRight, Zap } from 'lucide-react';
import GlowButton from './ui/GlowButton';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <div className="px-4 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/40">
          The Investment
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
        <h2 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter leading-[0.9] max-w-4xl text-slate-900 dark:text-white">
          Scale with a Team <br />
          <span className="text-slate-300 dark:text-white/20 italic font-light">Dedicated to Your Success</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Growth Partner Card */}
        <div className="bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 rounded-[3.5rem] p-10 md:p-14 relative group overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:border-neon/30 hover:shadow-[0_30px_100px_rgba(190,243,3,0.15)]">
          {/* Subtle Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-heading mb-4 text-slate-900 dark:text-white group-hover:text-neon transition-colors duration-500">Growth Partner</h3>
            <p className="text-slate-500 dark:text-white/40 text-lg mb-10 max-w-sm">
              Your fractional AI marketing team. We build, manage, and optimize everything.
            </p>
            
            <div className="flex items-baseline gap-2 mb-12">
              <span className="text-5xl font-black font-heading text-neon">$2,500</span>
              <span className="text-slate-400 dark:text-white/20 text-xl">/mo</span>
            </div>

            <div className="space-y-4 mb-12">
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-white/20 mb-6">What you get</p>
              {[
                "Full-Stack AI Patient Pipeline",
                "24/7 Virtual Receptionist AI",
                "Local Social Domination (Ads & organic)",
                "Weekly Performance Deep-Dives",
                "Exclusive Territory Rights",
                "Direct line to your growth manager"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center border border-slate-300 dark:border-white/10 group-hover:border-neon/40">
                    <Plus size={10} className="text-neon" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <GlowButton variant="outline" className="w-full !rounded-3xl py-6 hover:!bg-neon hover:!text-black text-slate-800 dark:text-white">
              Apply for Partnership <ArrowUpRight size={20} className="ml-2" />
            </GlowButton>
            
            <p className="text-center text-[10px] text-slate-400 dark:text-white/20 mt-4 uppercase tracking-widest font-bold">
              Results Guaranteed or We Work for Free
            </p>
          </div>
        </div>

        {/* The Launchpad Card */}
        <div className="bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 rounded-[3.5rem] p-10 md:p-14 relative group overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:border-slate-400 dark:hover:border-white/20 hover:shadow-[0_30px_100px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_30px_100px_rgba(255,255,255,0.05)]">
          <div className="absolute top-10 right-10">
            <div className="bg-blue-600 text-white text-[10px] font-black uppercase px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-500">
              <Zap size={12} fill="currentColor" /> Quick Launch
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-heading mb-4 text-slate-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">The Launchpad</h3>
            <p className="text-slate-500 dark:text-white/40 text-lg mb-10 max-w-sm">
              Single-objective builds for specific practice needs. Get started fast.
            </p>
            
            <div className="flex items-baseline gap-2 mb-12">
              <span className="text-slate-400 dark:text-white/20 text-xl font-medium">Starting from</span>
              <span className="text-5xl font-black font-heading text-slate-900 dark:text-white">$899</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-white/20 mb-6">One-Time Solutions</p>
                <div className="space-y-4">
                  {[
                    "AI Website Redesign",
                    "Patient Lead Magnet Build",
                    "Custom Ad Campaign Setup",
                    "Reputation Automation",
                    "Local SEO Domination"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center border border-slate-300 dark:border-white/10">
                        <Plus size={10} className="text-slate-400 dark:text-white/40" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-white/20 mb-6">Estimated Cost</p>
                <div className="space-y-4">
                  {[
                    { label: "New Landing Page", price: "$899" },
                    { label: "AI Chatbot Integration", price: "$1200" },
                    { label: "Full Brand Refresh", price: "$2500" }
                  ].map((service, i) => (
                    <div key={i} className="flex justify-between items-center text-xs pb-3 border-b border-slate-200 dark:border-white/5 group-hover:border-slate-400 dark:group-hover:border-white/20 transition-colors">
                      <span className="text-slate-400 dark:text-white/40 font-medium">{service.label}</span>
                      <span className="text-slate-700 dark:text-white/60 font-bold uppercase tracking-tighter">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <GlowButton variant="light" className="w-full !rounded-3xl py-6 bg-slate-900 text-white dark:bg-white dark:text-black">
                Start Building <ArrowUpRight size={20} className="ml-2" />
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
