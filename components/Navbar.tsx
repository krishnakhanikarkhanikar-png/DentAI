
import React from 'react';
import { Mail, Send, Sparkles, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Results', href: '#results' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-16 backdrop-blur-md bg-white/5 dark:bg-black/5 border-b border-slate-200 dark:border-white/5">
      <div 
        className="flex items-center gap-3 group cursor-pointer" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="relative w-10 h-10 flex items-center justify-center">
           <div className="absolute inset-0 bg-neon/20 rounded-xl blur-lg group-hover:bg-neon/40 transition-all duration-500" />
           <div className="relative w-full h-full bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center group-hover:border-neon/50 transition-colors overflow-hidden">
              <Sparkles 
                className="text-neon w-5 h-5 transition-all duration-500 animate-sparkle-bounce group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(190,243,3,0.8)] group-hover:animate-[pulse_2.5s_ease-in-out_infinite]" 
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neon rotate-45" />
           </div>
        </div>
        <div className="flex flex-col">
          <span className="font-heading font-black tracking-tight text-lg leading-none text-slate-900 dark:text-white">
            DENT<span className="text-neon">AI</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-white/30 leading-none mt-1 group-hover:text-slate-600 dark:group-hover:text-white/60 transition-colors">
            Scale Agency
          </span>
        </div>
      </div>

      {/* Center Nav Links */}
      

      <div className="flex items-center gap-3">
        {/* Theme Toggle Switch */}
        <button 
          onClick={toggleTheme}
          className="relative flex items-center w-14 h-8 px-1 bg-slate-200 dark:bg-white/10 rounded-full transition-colors focus:outline-none group overflow-hidden border border-slate-300 dark:border-white/5"
          aria-label="Toggle Theme"
        >
          <div className={`absolute inset-0 bg-neon/20 opacity-0 group-hover:opacity-100 transition-opacity`} />
          <div className={`
            relative z-10 w-6 h-6 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-md transform transition-transform duration-500
            ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}
          `}>
            {isDarkMode ? (
              <Moon size={14} className="text-neon" />
            ) : (
              <Sun size={14} className="text-slate-600" />
            )}
          </div>
        </button>

        <button className="p-3 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white rounded-full hover:bg-neon hover:text-black transition-all duration-300">
          <Mail size={18} />
        </button>
        <button className="p-3 bg-neon text-black rounded-full hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(190,243,3,0.3)]">
          <Send size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
