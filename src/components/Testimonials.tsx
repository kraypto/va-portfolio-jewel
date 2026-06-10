import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_40%,#0f172a,transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-2">
            CLIENT ENDORSEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none mb-4">
            Trusted by Leaders & Founders
          </h2>
          <div className="h-1 w-12 bg-teal-500 rounded mx-auto mt-4" />
        </div>

        {/* Testimonials Slider Layout */}
        <div className="max-w-4xl mx-auto relative" id="testimonials-carousel">
          
          {/* Card Frame wrapping content */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <Quote className="w-16 h-16 text-teal-500/10 absolute top-6 left-6 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              
              {/* Star Rating list */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonialsData[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                "{testimonialsData[activeIndex].content}"
              </p>

              {/* Client Profile details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={testimonialsData[activeIndex].avatar}
                  alt={testimonialsData[activeIndex].name}
                  className="w-12 h-12 rounded-full border border-teal-500/30 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {testimonialsData[activeIndex].name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {testimonialsData[activeIndex].role}, <span className="text-teal-400">{testimonialsData[activeIndex].company}</span>
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Slider controls Navigation Buttons */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-1">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-6 bg-teal-500' : 'w-2 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Show slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous testimonial"
                id="testimonial-prev-btn"
              >
                <ChevronLeft className="w-5 h-5 text-slate-300" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next testimonial"
                id="testimonial-next-btn"
              >
                <ChevronRight className="w-5 h-5 text-slate-300" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
