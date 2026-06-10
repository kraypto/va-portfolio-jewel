import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, MapPin, Briefcase, ChevronRight, Check } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<string>('exp-1');

  const selectedExp = experienceData.find((item) => item.id === activeTab) || experienceData[0];

  return (
    <section id="experience" className="py-24 bg-slate-950 text-white relative">
      {/* Decorative Blur and grid lines */}
      <div className="absolute top-[30%] right-[-10%] w-[33rem] h-[33rem] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[33rem] h-[33rem] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Segment */}
        <div className="mb-14 text-left max-w-xl">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-2">
            REPACKAGED TRANSFERABLE HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none mb-4">
            Elite Corporate Background
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            I don’t come from a generic outsourcing template. My skills are tested in extreme stakes banking environments, medical boards, and upscale service hubs.
          </p>
          <div className="h-1 w-16 bg-teal-500 rounded mt-4" />
        </div>

        {/* Timeline Tabs + Details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" id="experience-timeline-container">
          
          {/* Left Column: Job Selector Buttons */}
          <div className="lg:col-span-4 space-y-3">
            {experienceData.map((job) => (
              <button
                key={job.id}
                onClick={() => setActiveTab(job.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer ${
                  activeTab === job.id
                    ? 'bg-slate-900 border-teal-500/55 shadow-md shadow-teal-500/5 text-white'
                    : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex gap-4 items-start">
                  <div className={`p-2 rounded-xl mt-0.5 transition-colors ${
                    activeTab === job.id ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-500'
                  }`}>
                    <Briefcase className="w-4 h-4 shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs tracking-wide uppercase">
                      {job.role.split('/')[0]}
                    </h3>
                    <p className={`text-[11px] font-mono mt-1 ${
                      activeTab === job.id ? 'text-teal-300' : 'text-slate-500'
                    }`}>
                      {job.company}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${
                  activeTab === job.id ? 'translate-x-1 text-teal-400' : 'group-hover:translate-x-0.5'
                }`} />
              </button>
            ))}
          </div>
 
          {/* Right Column: Key Transferable Details */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Job Title and details header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4 gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {selectedExp.role}
                    </h3>
                    <p className="text-sm font-semibold text-teal-400 mt-1 flex items-center gap-2">
                      {selectedExp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-slate-400 text-xs font-mono">
                    <span className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-teal-500" />
                      {selectedExp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-teal-500" />
                      {selectedExp.location}
                    </span>
                  </div>
                </div>

                {/* Job Summary Description */}
                <div>
                  <h4 className="text-[10px] tracking-widest font-mono font-bold uppercase text-slate-500 mb-2">
                    ROLE PARAMETERS
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {selectedExp.description}
                  </p>
                </div>

                {/* VA Transferable Skills Badges */}
                <div>
                  <h4 className="text-[10px] tracking-widest font-mono font-bold uppercase text-teal-400 mb-3">
                    VA-TRANSFERABLE STRENGTH IMPLEMENTED:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.vaTransferableSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold bg-teal-500/10 border border-teal-500/20 text-teal-300 py-1 px-3 rounded-full flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements block */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] tracking-widest font-mono font-bold uppercase text-slate-500">
                    REAL BUSINESS IMPACT:
                  </h4>
                  <div className="space-y-3">
                    {selectedExp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex gap-3 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60 hover:border-slate-800/90 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{ach}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
