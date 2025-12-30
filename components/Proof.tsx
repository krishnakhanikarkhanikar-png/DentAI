
import React, { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { generateDentalImage } from '../lib/gemini';

interface CardProps {
  id: string;
  name: string;
  followers: string;
  initial: string;
  prompt: string;
  delay: string;
}

const ProofCard: React.FC<CardProps> = ({ id, name, followers, initial, prompt, delay }) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImg = async () => {
      const cacheKey = `proof_card_v3_${id}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        setImage(cached);
      } else {
        const img = await generateDentalImage(prompt, "9:16");
        if (img) {
          setImage(img);
          localStorage.setItem(cacheKey, img);
        }
      }
    };
    fetchImg();
  }, [id, prompt]);

  return (
    <div 
      className={`relative shrink-0 w-[280px] md:w-[380px] group rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:border-neon/30 hover:shadow-[0_40px_100px_rgba(190,243,3,0.15)]`}
      style={{ transitionDelay: delay }}
    >
      <div className="aspect-[9/16] bg-slate-100 dark:bg-black/40 relative">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-slate-200 dark:border-white/5 border-t-neon rounded-full animate-spin" />
          </div>
        )}
        
        {/* Bottom Overlay Info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        
        <div className="absolute bottom-8 left-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-sm font-bold text-white uppercase overflow-hidden shadow-lg">
            {initial}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white tracking-wide">{name}</span>
              <CheckCircle2 size={14} className="text-blue-400 fill-blue-400/10" />
            </div>
            <div className="text-[10px] text-white/60 font-medium tracking-wide uppercase">{followers} Patients Reached</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Proof: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = [
    { id: '1', name: 'r3winded', initial: 'R', followers: '320K', prompt: 'Cinematic wide shot of a luxury modern dental clinic with sleek black chairs and neon accents', delay: '0.1s' },
    { id: '2', name: 'cloudi.kiss', initial: 'C', followers: '150K', prompt: 'Macro shot of high-tech orthodontic tools glowing on a dark glass surface', delay: '0.2s' },
    { id: '3', name: 'blushyvoid', initial: 'B', followers: '210K', prompt: 'Futuristic dentist working with holographic projection of human teeth', delay: '0.3s' },
    { id: '4', name: 'zoomech0', initial: 'Z', followers: '440K', prompt: 'Luxury clinic lobby with high-end designer furniture and digital welcome screens', delay: '0.4s' },
    { id: '5', name: 'v1bezilla', initial: 'V', followers: '320K', prompt: 'Portrait of a stylish dentist wearing designer medical scrubs in a dark studio', delay: '0.5s' },
    { id: '6', name: 'driftm0de', initial: 'D', followers: '88K', prompt: 'Detailed close up of a perfect smile in cinematic lighting with bokeh backgrounds', delay: '0.6s' },
    { id: '7', name: 'aether_smile', initial: 'A', followers: '1.2M', prompt: 'Modern dental lab with white robotic arms working on 3D printed teeth models', delay: '0.7s' },
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      // Timeout to check scroll after animation
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section id="results" className="py-32 max-w-full overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full mb-8">
              <Star className="text-neon" size={14} fill="currentColor" />
              <span className="text-xs font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest">Global Portfolio</span>
            </div>
            <h2 className="text-6xl md:text-[9rem] font-heading font-extrabold tracking-tight leading-[0.85] text-slate-900 dark:text-white">
              The New <br />
              <span className="text-slate-300 dark:text-white/20 italic font-light">Standard.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-6 mb-4">
            <p className="text-slate-500 dark:text-white/40 text-lg font-light leading-relaxed max-w-xs text-right border-r border-slate-200 dark:border-white/10 pr-8">
              Swipe through the visual transformation of practices that chose autonomous growth.
            </p>
            {/* Navigation Controls */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`p-4 rounded-full border transition-all ${canScrollLeft ? 'border-neon text-neon hover:bg-neon hover:text-black cursor-pointer' : 'border-slate-200 dark:border-white/5 text-slate-300 dark:text-white/10 cursor-not-allowed'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`p-4 rounded-full border transition-all ${canScrollRight ? 'border-neon text-neon hover:bg-neon hover:text-black cursor-pointer' : 'border-slate-200 dark:border-white/5 text-slate-300 dark:text-white/10 cursor-not-allowed'}`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-8 px-[10%] overflow-x-auto no-scrollbar pb-20 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card) => (
          <div key={card.id} className="snap-start">
            <ProofCard {...card} />
          </div>
        ))}
        {/* Spacer for ending padding */}
        <div className="shrink-0 w-24" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default Proof;
