
import React from 'react';
import { Target, MessageSquare, LineChart, ShieldCheck } from 'lucide-react';

const ValueProp: React.FC = () => {
  const features = [
    {
      title: "Targeted High-Value Patient Pull",
      desc: "Forget generic ads. Our AI pinpoints local residents specifically searching for implants and veneers, so you spend your time on the cases that matter.",
      icon: Target,
      tag: "The Dream Patient"
    },
    {
      title: "The Virtual Concierge That Never Sleeps",
      desc: "A potential patient lands on your site at 11 PM? Our AI engages, pre-qualifies, and books them directly into your calendar. No more missed opportunities.",
      icon: MessageSquare,
      tag: "Total Automation"
    },
    {
      title: "Maximized Chair Profitability",
      desc: "We don't just fill holes in the schedule; our AI optimizes your patient flow to ensure your high-margin rooms are always the priority. Maximize every hour.",
      icon: LineChart,
      tag: "Pure Profit"
    }
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-neon rounded-full shadow-[0_0_8px_#bef303]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neon">Why Dentists Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Build a Practice that <span className="text-white/40 italic font-light">Serves You</span>, Not Vice Versa.
          </h2>
        </div>
        <div className="text-white/40 max-w-xs text-right hidden md:block border-r border-white/10 pr-6">
          <p className="text-sm">We're not another agency. We're the technical backbone of your practice's future expansion.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div 
            key={i}
            className="group relative p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-neon/30 transition-all duration-500 overflow-hidden hover:-translate-y-2"
          >
            <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(190,243,3,0.05)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 group-hover:border-neon/30 transition-colors">
                <ShieldCheck size={12} className="text-neon" />
                <span className="text-[10px] uppercase font-bold tracking-wider">{f.tag}</span>
              </div>
              
              <div className="w-12 h-12 mb-6 text-neon group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <f.icon size={48} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4">{f.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-neon scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-30" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProp;
