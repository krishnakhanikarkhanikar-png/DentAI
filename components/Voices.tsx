
import React from 'react';
import { Star, Plus, ArrowUpRight } from 'lucide-react';

const Voices: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/40">
          What Your Peers Are Saying
        </div>
      </div>

      <h2 className="text-7xl md:text-9xl font-heading font-extrabold tracking-tighter mb-16">
        The Word
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-black font-heading">4.9</span>
              <span className="text-white/20 text-xl font-bold">/5</span>
            </div>
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              Consistently rated <span className="text-white font-bold">top-tier</span> by orthodontic and dental groups.
            </p>
          </div>

          <div className="mt-12">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} src={`https://picsum.photos/seed/doctor${i}/64/64`} className="w-10 h-10 rounded-full border-2 border-black" alt="client" />
              ))}
            </div>
            <div className="flex gap-0.5 text-[#bef303] mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Scaling 40+ practices</p>
            
            <button className="w-full mt-8 bg-white text-black py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#bef303] transition-all">
              Join the Cohort <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 relative flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/doc1/100/100" className="w-12 h-12 rounded-lg grayscale group-hover:grayscale-0 transition-all" alt="Daniel" />
                <div>
                  <h4 className="font-bold text-sm">Dr. Daniel Miller</h4>
                  <p className="text-[10px] text-white/30">Miller Dental Group</p>
                </div>
              </div>
              <Plus className="text-white/10 group-hover:text-white/40" size={20} />
            </div>
            
            <div className="flex gap-0.5 text-[#bef303] mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
            </div>

            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/80 group-hover:text-white transition-colors">
              I was skeptical of "AI," but DentAI transformed my front desk. My staff is finally happy because they're not tethered to phones all day.
            </p>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between group">
             <div className="flex items-center justify-between">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/80 group-hover:text-white">
                  Finally an agency that actually understands the margins of a private practice. Our ROI was positive in month two.
                </p>
                <Plus className="text-white/10" size={20} />
             </div>

             <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                <div className="flex gap-0.5 text-[#bef303]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <h4 className="font-bold text-sm">Dr. Amina Hassan</h4>
                    <p className="text-[10px] text-white/30">Noor Orthodontics</p>
                  </div>
                  <img src="https://picsum.photos/seed/doc2/100/100" className="w-12 h-12 rounded-lg grayscale group-hover:grayscale-0 transition-all" alt="Amina" />
                </div>
             </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between group md:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/doc3/100/100" className="w-12 h-12 rounded-lg grayscale group-hover:grayscale-0 transition-all" alt="Alex" />
                <div>
                  <h4 className="font-bold text-sm">Dr. Alex Moritz</h4>
                  <p className="text-[10px] text-white/30">City Center Dental</p>
                </div>
              </div>
              <Plus className="text-white/10" size={20} />
            </div>

             <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                <p className="text-xl md:text-3xl font-medium leading-tight text-white/80 group-hover:text-white max-w-2xl">
                  They didn't just dump a list of names. They built a system that qualifies every single person before they even walk in my door.
                </p>
                <div className="flex gap-0.5 text-[#bef303]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voices;
