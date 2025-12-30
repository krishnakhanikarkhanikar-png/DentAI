
import React from 'react';
import { Home, Zap, TrendingUp, CreditCard, MessageCircleQuestion, Users } from 'lucide-react';

const Sidebar: React.FC = () => {
  const icons = [
    { Icon: Home, label: 'Home', href: '#' },
    { Icon: Zap, label: 'Solutions', href: '#solutions' },
    { Icon: Users, label: 'Results', href: '#results' },
    { Icon: TrendingUp, label: 'Process', href: '#process' },
    { Icon: CreditCard, label: 'Pricing', href: '#pricing' },
    { Icon: MessageCircleQuestion, label: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2 p-2 bg-slate-100/80 dark:bg-[#1a1a1a]/80 border border-slate-200 dark:border-white/5 rounded-[2rem] backdrop-blur-xl shadow-2xl">
      {icons.map(({ Icon, label, href }, i) => (
        <a 
          key={i} 
          href={href}
          className="p-3 text-slate-400 dark:text-white/30 hover:text-neon hover:bg-white/5 rounded-2xl transition-all relative group"
        >
          <Icon size={20} />
          <span className="absolute left-14 bg-white dark:bg-black/90 backdrop-blur-md text-slate-900 dark:text-white text-[10px] py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-200 dark:border-white/10 uppercase tracking-widest font-bold shadow-xl">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
