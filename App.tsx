
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import MarketStrategy from './components/MarketStrategy';
import Proof from './components/Proof';
import Voices from './components/Voices';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import BackgroundEffects from './components/BackgroundEffects';
import Sidebar from './components/Sidebar';
import Legal from './components/Legal';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Check initial theme
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#bef303] selection:text-black transition-colors duration-500 bg-white dark:bg-black">
      <BackgroundEffects mousePosition={mousePosition} />
      <Sidebar />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10 pt-20 px-4 md:px-12 lg:px-24">
        <Hero />
        <div id="solutions">
          <ValueProp />
        </div>
        <div id="process">
          <MarketStrategy />
        </div>
        <div id="results">
          <Proof />
        </div>
        <Voices />
        <div id="pricing">
          <Pricing />
        </div>
        <FAQ />
        <FooterCTA />
        <Legal />
      </main>

      <footer className="relative z-10 py-12 px-12 text-center text-slate-400 dark:text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Dental Scale. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
