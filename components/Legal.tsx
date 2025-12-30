
import React from 'react';

const Legal: React.FC = () => {
  const links = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'HIPAA Compliance', href: '#' },
    { label: 'Accessibility', href: '#' },
  ];

  return (
    <div className="py-20 border-t border-slate-200 dark:border-white/5 bg-slate-50/30 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-12 text-center">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-400 dark:text-white/20 hover:text-neon transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
           <div className="flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.2em] text-slate-300 dark:text-white/10">
            <span>Registered Agency #DENT-2941</span>
            <div className="w-1 h-1 bg-neon rounded-full" />
            <span>Clinic Verified System v2.5</span>
          </div>
          
          <div className="text-[10px] text-slate-400 dark:text-white/20 italic font-medium max-w-sm">
            DentAI Scale Agency is not a medical provider. We provide technical infrastructure and marketing automation services for dental practitioners.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
