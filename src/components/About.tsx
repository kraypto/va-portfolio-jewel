import { motion } from 'motion/react';
import { Award, ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';

interface AboutProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function About({ onScrollToSection }: AboutProps) {
  const qualities = [
    {
      icon: ShieldCheck,
      title: 'A Security-First Mindset',
      description: 'Having operated as a corporate Fraud Specialist and Medical Secretary, standard operations are backed by rigorous compliance practices, strict NDA handling, and 100% discretion.',
    },
    {
      icon: Award,
      title: 'Cum Laude Polish',
      description: 'Graduating Hospitality Management coordinates onto high-end active writing, elite customer correspondence, and service level metrics that match premium international client tiers.',
    },
    {
      icon: Eye,
      title: 'Obsessive Quality Controls',
      description: 'Trained to audit thousands of sensitive financial transaction profiles with zero errors. Your database management, inbox, and calendar are handled with complete accuracy.',
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-24 right-[-10%] w-[30rem] h-[30rem] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bento Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Block: Bio Card (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 xl:col-span-5 flex flex-col"
            id="about-bio-card-wrapper"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0 border border-teal-100">
                    <Sparkles className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-950 text-base">Elite Administrative VA</h3>
                    <span className="text-[9px] font-mono text-slate-450 uppercase tracking-widest block mt-0.5">
                      REPACKAGED TRANSFERABLE STRENGTHS
                    </span>
                  </div>
                </div>

                <blockquote className="text-slate-600 italic leading-relaxed border-l-2 border-teal-500 pl-4 mb-6 text-xs sm:text-sm">
                  "Handling records as a Fraud Specialist and a Medical Secretary trained me to work under immense operational pressure. I bring this uncompromised focus on accuracy directly to your remote business administration."
                </blockquote>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">Hospitality Management Graduate (Cum Laude)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">10,000+ Sensitive Portals Inspected with Zero Faults</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-tight">Unified Multi-timezone Communication Ready</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-slate-950">100%</div>
                  <div className="text-[9px] uppercase font-mono text-slate-500 tracking-wider">Reliability Score</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-slate-950">GMT-8</div>
                  <div className="text-[9px] uppercase font-mono text-slate-550 text-slate-550 text-slate-500 tracking-wider">Primary Timezone</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-slate-950">Secure</div>
                  <div className="text-[9px] uppercase font-mono text-slate-500 tracking-wider">NDA Guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Narrative and Pitch (Col Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-12 xl:col-span-7 flex flex-col"
            id="about-narrative-container"
          >
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
              
              <div>
                <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-widest block mb-1">
                  ABOUT ME & TRANSITION
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight leading-snug mb-4">
                  Positioned for Precision. Built for Operations.
                </h2>
                <div className="h-1 w-12 bg-teal-600 rounded mb-6" />

                <div className="text-slate-600 space-y-4 text-xs sm:text-sm leading-relaxed">
                  <p>
                    I specialize in relieving international service founders, executives, and medical leaders of routine administration, calendar overlaps, and disorganized customer backlogs.
                  </p>
                  <p>
                    Why work with someone coming from fraud analysis and healthcare secretarial offices? 
                    Because my past environments carried <strong className="text-slate-950 font-semibold">zero allowance for mistakes</strong>. A misplaced decimal in medical records or a missed pattern in fraud documentation had extreme consequences. I bring that same rigorous checklist-driven execution directly to your inbox, client databases, and scheduling workflows.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center gap-4 block">
                <button
                  onClick={() => onScrollToSection('contact')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-display text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
                  id="about-cta-btn"
                >
                  <HeartHandshake className="w-4 h-4 text-teal-400" />
                  Let's Partner Together
                </button>
              </div>

            </div>
          </motion.div>
          
        </div>

        {/* 3-Row/Column Bento Grid for Qualities Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6" id="about-qualities-grid">
          {qualities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 mb-4">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-950 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                
                <div className="mt-6 pt-3 border-t border-slate-100/60 text-[9px] font-mono uppercase tracking-wider text-teal-600/80 font-bold">
                  Guaranteed Skill
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
