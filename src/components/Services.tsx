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

  // Fictional realistic starter/executive packages to make this a converting freelancers page!
  const tiers = [
    {
      name: 'Administrative Essentials',
      price: '$500',
      period: 'month',
      desc: 'Perfect for busy founders needing core inbox triage, calendar cleanliness, and daily routine reporting.',
      features: [
        '10 hours per week support',
        'Daily Inbox zero & triage rules',
        'Google Calendar overlapping protection',
        'Standard spreadsheet entries & cleans',
        'Weekly activity and progress logs',
        'Discretionary NDA agreement included'
      ],
      cta: 'Book Warm Call',
      popular: false
    },
    {
      name: 'Elite Executive Assistant',
      price: '$950',
      period: 'month',
      desc: 'Our most popular package. Full-featured back-office management, customer support, and meticulous organizational SOPs.',
      features: [
        '20 hours per week support',
        'Priority email coordination & draft responses',
        'Full calendar routing & pre-booking dossiers',
        'Advanced sheets mapping & pivot tracker setups',
        'Customer support tickets (Zendesk / Mail)',
        'SOP wiki document creation',
        'Secure password/credential vault sync'
      ],
      cta: 'Secure Executive VA',
      popular: true
    },
    {
      name: 'Enterprise / Custom Support',
      price: 'Custom',
      period: 'bespoke',
      desc: 'Surgical level integration for larger teams, intensive medical coordination, or comprehensive support structures.',
      features: [
        'Tailored hours matching exact specs',
        'Multi-timezone operations coverage',
        'Comprehensive medical secretary scheduling',
        'Bulk database auditing & cleanup sweeps',
        'Executive travel & itinerary planning',
        'Direct SLA alignment with guaranteed response times'
      ],
      cta: 'Request Bespoke Proposal',
      popular: false
    }
  ];

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

        {/* Pricing tier Packages Block */}
        <div className="mt-28" id="pricing-tiers-block">
          <div className="text-center max-w-lg mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-1">
              PRICING PLANS
            </span>
            <h3 className="text-2xl font-display font-bold text-white flex items-center justify-center gap-2">
              <span className="w-1.5 h-5 bg-teal-500 rounded-full"></span> Support Packages
            </h3>
            <p className="text-slate-400 text-xs mt-2 leading-relaxed">
              Select an ongoing monthly schedule that matches your current workflow. Scalable at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden transition-all border ${
                  tier.popular
                    ? 'bg-slate-950 border-teal-500 shadow-xl shadow-teal-500/10'
                    : 'bg-slate-950/40 border-slate-800'
                }`}
              >
                {/* Popular Flag */}
                {tier.popular && (
                  <div className="absolute top-4 right-4 bg-teal-500/10 text-teal-400 border border-teal-500/30 text-[8px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full font-bold">
                    MOST POPULAR CONTRACT
                  </div>
                )}

                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-200 mb-2 truncate uppercase tracking-widest">
                    {tier.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-display font-bold text-white">{tier.price}</span>
                    <span className="text-slate-400 text-xs font-mono">/ {tier.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal mb-6 pb-6 border-b border-white/5">
                    {tier.desc}
                  </p>

                  <div className="space-y-2.5">
                    <p className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                      INCLUDED IN CONTRACT:
                    </p>
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-2">
                        <LucideIcons.Check className="w-3.5 h-3.5 text-teal-450 text-teal-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-305 text-slate-300 leading-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/5">
                  <button
                    onClick={() => onScrollToSection('contact')}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer ${
                      tier.popular
                        ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/35'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-705 border-slate-850'
                    }`}
                  >
                    {tier.cta}
                  </button>
                  <p className="text-center text-[9px] text-slate-500 font-mono mt-2.5 flex items-center justify-center gap-1">
                    <LucideIcons.Lock className="w-2.5 h-2.5" /> Cancel anytime with 14-days notice
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
