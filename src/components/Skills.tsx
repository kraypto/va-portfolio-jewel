import { useState } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const renderIcon = (iconName: string, className = "w-5 h-5 text-teal-600") => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.Check className={className} />;
    return <IconComponent className={className} />;
  };

  const filteredCategories = activeCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-50 relative">
      <div className="absolute top-[10%] left-[-5%] w-[30rem] h-[30rem] bg-indigo-100/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left">
            <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-widest block mb-2">
              MY COGNITIVE & TECHNICAL ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Elite Administrative Skillsets
            </h2>
            <div className="h-1 w-12 bg-teal-600 rounded mt-3" />
          </div>
          <p className="text-slate-600 text-sm max-w-sm mt-3 md:mt-0 leading-relaxed">
            Tested in environments where 100% accuracy and complete privacy safety are the baseline standards.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-5" id="skills-selector-bar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            All Skill Areas
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {renderIcon(cat.icon, 'w-4 h-4 shrink-0')}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="skills-bento-grid">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl shadow-slate-200/40 flex flex-col justify-between"
            >
              {/* Category Title bar */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {renderIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-sm">{category.title}</h3>
                    <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                      CERTIFIED / VERIFIED STACK
                    </span>
                  </div>
                </div>

                {/* Progress Sliders & Tags */}
                <div className="space-y-5">
                  {category.skills.map((skill, skIdx) => (
                    <div key={skIdx} className="space-y-1.5">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          • {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded font-bold">
                          {skill.level}% Proficiency
                        </span>
                      </div>
                      
                      {/* Fake Custom Progress bar representing precise calibration */}
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden flex">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400`}
                        />
                      </div>

                      {/* Tool/Tech Tags */}
                      {skill.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[9px] font-mono py-0.5 px-2 bg-slate-100 rounded-full border border-slate-200 text-slate-500 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Trust Sign */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <LucideIcons.ShieldAlert className="w-3.5 h-3.5 text-teal-500" />
                  Audit checks verified
                </span>
                <span>ISO 27001 / HIPAA Standard Acknowledged</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
