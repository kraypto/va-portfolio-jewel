import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileSpreadsheet,
  Mail,
  Calendar,
  FileText,
  CheckCircle2,
  Lock,
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Check,
  Tag,
  AlertTriangle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'email' | 'data' | 'calendar' | 'admin'>('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'email', name: 'Email & Inbox' },
    { id: 'data', name: 'Data & Sheets' },
    { id: 'calendar', name: 'Calendar Booking' },
    { id: 'admin', name: 'SOPs & Admin' }
  ];

  const filteredPortfolio = portfolioData.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  // Render high-fidelity visual mockups of actual work deliverables
  const renderVisualMockup = (previewType: 'inbox' | 'sheet' | 'calendar' | 'report') => {
    switch (previewType) {
      case 'inbox':
        return (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-[10px] text-slate-300 w-full h-[220px] flex flex-col justify-between">
            {/* Folder list header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span className="font-bold text-white text-[11px]">GMAIL TRIAGE SYSTEM</span>
              </div>
              <span className="text-slate-500 text-[9px]">status: sorted</span>
            </div>

            {/* Simulated Email Items */}
            <div className="space-y-1.5 flex-grow overflow-hidden">
              <div className="bg-white/5 border border-white/5 p-2 rounded flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <span className="bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded text-[8px] font-bold">VIP ESCALATED</span>
                  <span className="font-bold text-slate-200 truncate">VeloDigital CEO</span>
                </div>
                <span className="text-[8px] text-slate-550 text-slate-500">Scheduled 9:15 AM</span>
              </div>

              <div className="bg-white/5 border border-white/5 p-2 rounded flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <span className="bg-teal-500/10 text-teal-400 px-1.5 py-0.5 rounded text-[8px] font-bold">CALENDAR SOP</span>
                  <span className="font-bold text-slate-200 truncate">Dr. Sterling Surgery</span>
                </div>
                <span className="text-[8px] text-slate-500">Buffer Locked</span>
              </div>

              <div className="bg-white/5 border border-white/5 p-2 rounded flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <span className="bg-slate-500/10 text-slate-400 px-1.5 py-0.5 rounded text-[8px] font-bold">AUTO ARCHIVE</span>
                  <span className="font-bold text-slate-400 truncate">Newsletter: UX Pro weekly</span>
                </div>
                <span className="text-[8px] text-slate-500">Inbox Zero Rules</span>
              </div>
            </div>

            {/* Status Footer */}
            <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[8px] text-slate-500">
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-3 h-3 text-emerald-400" /> 75% Reduction in response times
              </span>
              <span>100% Guarded</span>
            </div>
          </div>
        );

      case 'sheet':
        return (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-[10px] text-slate-300 w-full h-[220px] flex flex-col justify-between">
            {/* Sheet bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-bold text-white text-[11px]">CLIENT TRANSACTION LOGS</span>
              </div>
              <span className="bg-teal-500/10 text-teal-400 border border-teal-500/30 px-1.5 py-0.5 rounded font-bold text-[8px]">FORMULA SAFEGUARDED</span>
            </div>

            {/* Table Mockup */}
            <div className="space-y-1 overflow-hidden text-[9px]">
              <div className="grid grid-cols-12 gap-1 bg-white/5 p-1 rounded font-bold text-white">
                <div className="col-span-2">ID</div>
                <div className="col-span-5">Client Name</div>
                <div className="col-span-3 text-right">Invoiced</div>
                <div className="col-span-2 text-center text-slate-400">Lock</div>
              </div>
              <div className="grid grid-cols-12 gap-1 border-b border-white/5 py-1">
                <div className="col-span-2 text-slate-500">#01</div>
                <div className="col-span-5 font-bold">Apex Ventures</div>
                <div className="col-span-3 text-right text-emerald-450 text-emerald-400 font-bold">$1,200.00</div>
                <div className="col-span-2 text-center text-teal-400">✓</div>
              </div>
              <div className="grid grid-cols-12 gap-1 border-b border-white/5 py-1">
                <div className="col-span-2 text-slate-500">#02</div>
                <div className="col-span-5 font-bold">Sterling Health</div>
                <div className="col-span-3 text-right text-emerald-450 text-emerald-400 font-bold">$2,400.00</div>
                <div className="col-span-2 text-center text-teal-400">✓</div>
              </div>
              <div className="grid grid-cols-12 gap-1 border-b border-white/5 py-1">
                <div className="col-span-2 text-slate-500">#03</div>
                <div className="col-span-5 font-bold">VeloDigital</div>
                <div className="col-span-3 text-right text-emerald-450 text-emerald-400 font-bold">$1,800.00</div>
                <div className="col-span-2 text-center text-teal-400">✓</div>
              </div>
            </div>

            {/* Guard details */}
            <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[8px] text-slate-500">
              <span className="flex items-center gap-1 text-teal-400">
                <Lock className="w-3 h-3 text-teal-400" /> Data integrity automated audits
              </span>
              <span>Errors Removed: 100%</span>
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-[10px] text-slate-300 w-full h-[220px] flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-teal-400" />
                <span className="font-bold text-white text-[11px]">CROSS-TIMEZONE AGENDA</span>
              </div>
              <span className="text-slate-500 text-[8px]">GMT-8 ⇄ EST Sync</span>
            </div>

            {/* Agenda events */}
            <div className="space-y-1.5 overflow-hidden">
              <div className="border-l-2 border-teal-500 bg-white/5 p-2 rounded">
                <div className="flex justify-between items-center text-[8px] text-slate-400">
                  <span>08:00 AM (EST) / 08:00 PM (MNL)</span>
                  <span className="bg-teal-500/10 text-teal-400 px-1 py-0.5 rounded font-bold">PROACTIVE BRIEF</span>
                </div>
                <p className="font-bold text-white mt-0.5 text-[10px]">Inbox Sync & Critical Dossier Sent</p>
              </div>

              <div className="border-l-2 border-emerald-500 bg-white/5 p-2 rounded">
                <div className="flex justify-between items-center text-[8px] text-slate-400">
                  <span>09:30 AM (EST) / 09:30 PM (MNL)</span>
                  <span className="bg-emerald-500/10 text-emerald-400 px-1 py-0.5 rounded font-bold">CLIENT SYNC</span>
                </div>
                <p className="font-bold text-neutral-300 mt-0.5 text-[10px]">Sterling Surgical Block Safeguarded</p>
              </div>
            </div>

            {/* Booking confirmation metrics */}
            <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[8px] text-slate-500">
              <span className="flex items-center gap-1 text-teal-400">
                <Clock className="w-3 h-3 text-teal-400" /> Travel buffer gaps locked
              </span>
              <span>Zero Overlaps</span>
            </div>
          </div>
        );

      case 'report':
        return (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-[10px] text-slate-300 w-full h-[220px] flex flex-col justify-between">
            {/* SOP bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                <span className="font-bold text-white text-[11px]">STANDARD OPERATING PROCEDURE</span>
              </div>
              <span className="text-[8px] text-slate-500">REF: HIPAA_INDEX.MD</span>
            </div>

            {/* List document layout */}
            <div className="space-y-2 overflow-hidden text-[8px] leading-relaxed text-slate-400">
              <div>
                <p className="font-bold text-white text-[9px] uppercase tracking-wider">1. Customer Onboarding Sequence</p>
                <p>Verify contract, setup NDA credentials pathway, confirm primary communication client channels within 24 hours.</p>
              </div>
              <div className="bg-rose-500/5 border border-rose-500/10 p-1.5 rounded flex gap-2 items-start mt-1">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-450 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-rose-300 uppercase">Fraud Specialist Audit Rules Check</p>
                  <p className="text-[7.5px] text-slate-400 leading-tight">All receipt folders are logged and cross-matched with banking dates proactively.</p>
                </div>
              </div>
            </div>

            {/* SOP validation details */}
            <div className="border-t border-white/5 pt-2 flex items-center justify-between text-[8px] text-slate-500">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Onboard speed minimized to 3 days
              </span>
              <span>HIPAA Compliant</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative">
      <div className="absolute top-[20%] right-[-10%] w-[33rem] h-[33rem] bg-teal-100/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-widest block mb-2">
            PROVEN WORK QUALITY SAMPLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Samples of My Work & Deliverables
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Explore authentic samples of key administration templates, tracking frameworks, and SOP documentation built to resolve friction for my business clients.
          </p>
          <div className="h-1 w-12 bg-teal-600 rounded mx-auto mt-4" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12" id="portfolio-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider font-mono cursor-pointer border ${
                selectedCategory === category.id
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Static Bento Grid of Work Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-bento-grid">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item, index) => {
              const previewBlock = renderVisualMockup(item.previewType);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-teal-500/30 transition-all group hover:shadow-xl hover:shadow-slate-200/40 relative"
                >
                  <div className="space-y-6">
                    {/* Visual mockup slot */}
                    <div className="w-full relative rounded-2xl overflow-hidden bg-slate-950 p-1 group-hover:shadow-md transition-all">
                      {previewBlock}
                    </div>

                    {/* Metadata Header */}
                    <div>
                      <span className="text-[9px] font-mono font-bold text-teal-600 uppercase tracking-widest bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full inline-block mb-3">
                        {item.category === 'email' ? 'Email & Inbox SOP' : item.category === 'data' ? 'Spreadsheets & Data Systems' : item.category === 'calendar' ? 'Calendar Booking & Sync' : 'Guides & Back Office'}
                      </span>
                      <h3 className="font-display font-bold text-slate-950 text-base sm:text-lg leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Challenge & Solution details block */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 block">
                          THE CLIENT CHALLENGE:
                        </span>
                        <p className="text-[11px] text-slate-600 leading-normal">
                          {item.challenge}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-teal-600 block">
                          MY SPECIALIZED SOLUTION:
                        </span>
                        <p className="text-[11px] text-slate-605 text-slate-650 text-slate-600 leading-normal">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Outcome KPI highlights at the bottom wrapper */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-50 border border-emerald-100 p-1 rounded-lg">
                        <Zap className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest block leading-none">
                          PROVEN DELIVERABLE OUTCOME
                        </span>
                        <strong className="text-emerald-700 text-xs font-bold block mt-0.5">
                          {item.outcome}
                        </strong>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-950 font-bold font-mono uppercase tracking-wider group-hover:translate-x-0.5 transition-transform shrink-0"
                    >
                      Enquire SOP
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>



      </div>
    </section>
  );
}
