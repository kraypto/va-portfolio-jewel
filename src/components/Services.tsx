import { useState } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { servicesData } from '../data/portfolioData';

interface ServicesProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Services({ onScrollToSection }: ServicesProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Helper to dynamically get Lucide icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (!IconComponent) return <LucideIcons.Briefcase className="w-5 h-5 text-teal-400" />;
    return <IconComponent className="w-5 h-5 text-teal-400" />;
  };

  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-[35rem] h-[35rem] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-2">
            WHAT I DO FOR YOU
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span> Core Services Catalog
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every service is engineered around the core metrics you care about: time savings, process efficiency, data reliability, and zero communication slippage.
          </p>
          <div className="h-1 w-12 bg-teal-500 rounded mx-auto mt-4" />
        </div>

        {/* Services Bento Grid with upgraded rounded-3xl cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-block">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              className={`bg-slate-950/65 border rounded-3xl p-6 transition-all duration-300 relative cursor-pointer group flex flex-col justify-between ${
                hoveredCard === service.id || selectedService === service.id
                  ? 'border-teal-500/50 shadow-lg shadow-teal-500/5 transform -translate-y-1 bg-slate-950'
                  : 'border-slate-800'
              }`}
            >
              <div>
                {/* Service Icon with Glow */}
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center transition-colors group-hover:bg-teal-500/20">
                    {renderIcon(service.icon)}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest group-hover:text-teal-400 transition-colors">
                    SECURE VA WORK
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-white text-base group-hover:text-teal-300 transition-colors mb-2.5">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Benefit-driven List */}
                <div className="space-y-2 border-t border-white/5 pt-4">
                  <p className="text-[9px] uppercase font-mono font-bold tracking-widest text-teal-400/80 mb-2">
                    CLIENT VALUE ARRIVAL:
                  </p>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex gap-2">
                      <LucideIcons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-300 leading-normal">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-right w-full">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider group-hover:text-white transition-colors flex items-center justify-end gap-1">
                  Secure service
                  <LucideIcons.ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
