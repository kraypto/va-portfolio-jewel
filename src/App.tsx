import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import { ShieldCheck, Mail, Linkedin, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Smooth scroll handler with support for sticky navbar offsets
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 75; // height offset of sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans flex flex-col relative w-full overflow-x-hidden">
      
      {/* Sticky Top Header */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* Main Single-View Modules */}
      <main className="flex-grow">
        {/* Section 1: Hero Segment */}
        <Hero
          onScrollToSection={handleScrollToSection}
          onDownloadResume={handleDownloadResume}
        />

        {/* Section 2: Conversational About & Backstory */}
        <About onScrollToSection={handleScrollToSection} />

        {/* Section 3: Benefit-driven Services & Pricing packages */}
        <Services onScrollToSection={handleScrollToSection} />

        {/* Section 4: Cognitive & Technical Skills */}
        <Skills />

        {/* Section 5: Repackaged Professional Experience */}
        <Experience />

        {/* Section 6: Interactive VA Playground Sandbox */}
        <Portfolio />

        {/* Section 7: Slider Testimonials */}
        <Testimonials />

        {/* Section 8: Inbound Contact & Secure Freelance Channels */}
        <Contact />
      </main>

      {/* Visually Stunning Corporate Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10 relative z-10" id="site-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Column 1: Brand details */}
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2 text-left group">
                <div className="bg-teal-600 p-1.5 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-display font-bold text-lg tracking-tight flex items-center leading-none">
                    Jewel <span className="text-teal-400 font-normal ml-1">Santiago</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest block uppercase mt-0.5 leading-none">
                    SECURE & EFFICIENT PORTFOLIO
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Specialized in transitioning high-pressure auditing and medical secretarial precision into airtight administrative, data, and inbox support for business leaders worldwide.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-display text-xs font-bold uppercase tracking-wider mb-4 font-mono">
                Site Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                {['home', 'about', 'services', 'skills', 'experience', 'portfolio', 'testimonials', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleScrollToSection(item)}
                      className="hover:text-teal-400 transition-colors uppercase font-mono text-[10px] text-left cursor-pointer"
                    >
                      • {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Summary */}
            <div>
              <h4 className="text-white font-display text-xs font-bold uppercase tracking-wider mb-4 font-mono">
                Secure Channels
              </h4>
              <p className="text-xs leading-normal">
                Timezone availability: <strong className="text-slate-200">US Eastern / PHT (GMT+8)</strong>
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-800 hover:border-teal-500 hover:bg-slate-850 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn Business profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:virtual.assistant@example.com"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-800 hover:border-teal-500 hover:bg-slate-850 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                  aria-label="Send professional email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          <hr className="border-white/5 my-8" />

          {/* Copyright block */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
            <p>© {new Date().getFullYear()} Jewel Santiago. All rights reserved. Built with uncompromised precision.</p>
            <div className="flex gap-4">
              <span className="text-emerald-400">Available For Immediate Hire</span>
              <span>100% HIPAA & GDPR Compliant Handling</span>
            </div>
          </div>
        </div>

        {/* Scroll back to top floating button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-6 bottom-6 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer"
          aria-label="Scroll back to top"
          id="scroll-top-btn"
        >
          <ArrowUp className="w-5 h-5 text-teal-400" />
        </button>
      </footer>

      {/* Resume Curriculum Vitae Modal Overlay */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
