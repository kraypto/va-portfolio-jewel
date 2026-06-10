import { motion } from 'motion/react';
import { ArrowRight, Download, Shield, Briefcase, Lock } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onDownloadResume: () => void;
}

export default function Hero({ onScrollToSection, onDownloadResume }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-50 text-slate-900 flex items-center pt-28 pb-16 overflow-hidden w-full"
    >
      {/* Visual Glowing Spheres under the hood */}
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35rem] h-[35rem] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Bento Card 1: Headline and Copy (Full Width) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between"
            id="hero-copy-container"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              {/* Status Indicator Trust Hook */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-full py-1.5 px-3.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-medium text-teal-300 uppercase tracking-widest">
                  Available for International Clients & Contract Roles
                </span>
              </motion.div>

              {/* Core Client Hook */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold tracking-tight leading-[1.12]"
              >
                Your Reliable VA for <span className="text-teal-400">Admin Support</span> & Data Integrity
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl"
              >
                Leveraging a background in Fraud Analysis and Medical Administration to provide high-accuracy support in email management, scheduling, and executive coordination.
              </motion.p>
            </div>

            <div className="space-y-6 pt-6 mt-8">
              {/* Conversion CTA Segment */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
                id="hero-cta-buttons"
              >
                <button
                  onClick={() => onScrollToSection('contact')}
                  className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white font-display uppercase tracking-wider text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-teal-950/35 cursor-pointer text-center flex items-center justify-center gap-2.5 group font-mono"
                  id="hero-hire-cta"
                >
                  Hire Me Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onDownloadResume}
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-slate-100 font-display uppercase tracking-wider text-xs font-bold px-6 py-3.5 rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-2 font-mono"
                  id="hero-resume-cta"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>

                <button
                  onClick={() => onScrollToSection('services')}
                  className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider text-center py-2 transition-colors cursor-pointer border-b-2 border-transparent hover:border-teal-400 self-center font-mono"
                  id="hero-services-link"
                >
                  View Services
                </button>
              </motion.div>

              {/* Micro Trust Seals */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4"
                id="hero-trust-seals"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-950 rounded-lg">
                    <Lock className="w-4 h-4 text-teal-400 shrink-0" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">100% Confidential</div>
                    <div className="text-[10px] text-slate-400">Security-trained background</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-950 rounded-lg">
                    <Shield className="w-4 h-4 text-teal-400 shrink-0" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">99.9% Task Accuracy</div>
                    <div className="text-[10px] text-slate-400">High-fidelity data entry</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-950 rounded-lg">
                    <Briefcase className="w-4 h-4 text-teal-400 shrink-0" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">Remote Setup Ready</div>
                    <div className="text-[10px] text-slate-400">Instant timezone alignment</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
