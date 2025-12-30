
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div 
      className={`group border-b border-white/5 transition-all duration-500 overflow-hidden ${isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}
    >
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between py-8 px-6 text-left transition-colors"
      >
        <span className={`text-xl md:text-2xl font-heading font-medium transition-colors ${isOpen ? 'text-neon' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full border transition-all duration-500 ${isOpen ? 'border-neon bg-neon text-black rotate-180' : 'border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <div 
        className={`transition-all duration-500 ease-in-out px-6 ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-white/50 text-lg leading-relaxed max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the AI actually book patients into our calendar?",
      answer: "Our AI systems integrate directly with major Practice Management Systems (PMS) like Dentrix, Eaglesoft, and Open Dental. It uses advanced natural language processing to converse with leads via SMS or web chat 24/7, answering their specific questions before finding an available slot that fits your specified rules."
    },
    {
      question: "Is your AI system HIPAA compliant?",
      answer: "Absolutely. Security is our top priority. All patient data is encrypted in transit and at rest, and our AI logic is designed to minimize the handling of sensitive PHI while adhering to strict HIPAA protocols to ensure your practice remains fully compliant."
    },
    {
      question: "Will this replace my front desk staff?",
      answer: "No. Our goal is to augment your team, not replace them. By handling the repetitive, time-consuming tasks of lead follow-up and appointment scheduling, your front desk staff can focus on providing an exceptional in-person experience for patients already in the office."
    },
    {
      question: "What kind of results can I expect in the first 30 days?",
      answer: "Within the first month, most practices see a 60-80% reduction in lead response time and a measurable increase in 'qualified' consultations. Because the AI never sleeps, you'll start capturing the leads that usually fall through the cracks after-hours."
    },
    {
      question: "Do we have to sign a long-term contract?",
      answer: "We believe in earning your business every month. While we offer discounted annual partnerships, our standard Growth Partner plan is month-to-month. If we aren't delivering the results we promised, you aren't locked in."
    }
  ];

  return (
    <section id="faq" className="py-24 max-w-7xl mx-auto px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
            <HelpCircle size={14} className="text-neon" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Common Questions</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter leading-none mb-6">
            Curious? <br />
            <span className="text-white/20 italic font-light">We have answers.</span>
          </h2>
        </div>
        <div className="md:pt-12">
          <p className="text-white/40 text-xl font-light max-w-sm">
            Everything you need to know about scaling your practice with autonomous systems.
          </p>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/5">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="mt-20 p-10 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold font-heading mb-2">Still have questions?</h4>
          <p className="text-white/40">Our dental growth specialists are available for a 15-minute sync.</p>
        </div>
        <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neon transition-all hover:scale-105 active:scale-95">
          Schedule a Call
        </button>
      </div>
    </section>
  );
};

export default FAQ;
