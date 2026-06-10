import { X, Download, ShieldCheck, Mail, Printer, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleTriggerDownload = () => {
    // Standard mock download feedback log
    alert('Mock Resume Download Initiated successfully: Saving "Virtual_Assistant_Resume_Candidate.pdf" (142 KB)');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Frame paper wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white border border-slate-200 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 text-slate-800 z-10 font-sans"
        id="resume-modal-curriculum"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close resume preview"
          id="close-resume-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Print & Download actions headers */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Verified Professional CV Record
            </span>
          </div>
          <div className="flex items-center gap-2 pr-8 sm:pr-0">
            <button
              onClick={handleTriggerDownload}
              className="px-3.5 py-1.5 bg-teal-600 hover:bg-teal-500 text-white font-mono text-[10px] font-bold rounded uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow"
              id="resume-pdf-save-btn"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </button>
          </div>
        </div>

        {/* ACTUAL RESUME CONTENT ACCORDING TO SPECS */}
        <div className="space-y-6 text-left" id="resume-paper-body">
          {/* Resume Header */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold font-display tracking-tight text-slate-900 leading-none">
              Eliot Mercer
            </h2>
            <p className="text-sm font-semibold text-teal-600 mt-1.5 uppercase font-mono tracking-wider">
              Professional Virtual Assistant & Operations Guard Specialist
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> virtual.assistant@example.com
              </span>
              <span>• GMT-8 Timezone Coordination</span>
              <span>• Remote Setup Equipped</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Profile Summary */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mb-2">
              Professional Pitch & Transition Statement:
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Meticulous, process-driven professional transitioning from high-stakes fraud analysis and healthcare administration into a dedicated career as a Virtual Assistant. Expert at triaging inbox backlogs, preventing micro timezone calendar overlaps, executing complex spreadsheets with formula barriers, and supporting executive workflows under strict confidentiality rules.
            </p>
          </div>

          {/* Experience Grid Timeline */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400">
              Employment Records Timeline:
            </h3>

            <div className="space-y-4 border-l-2 border-slate-100 pl-4 ml-2">
              {/* Job 1 */}
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-teal-500 border-2 border-white" />
                <div className="flex justify-between items-baseline gap-2 flex-wrap">
                  <h4 className="text-xs font-bold text-slate-900">Fraud specialist & Data profile auditor</h4>
                  <span className="text-[10px] font-mono text-slate-450 shrink-0">2023 - Present (Remote Platform)</span>
                </div>
                <p className="text-[10px] text-slate-500 italic mt-0.5">FinTech Financial Audit Systems</p>
                <p className="text-slate-650 text-[11px] mt-1 leading-normal">
                  Inspected over 10,000+ sensitive monetary transaction records with 100% security accuracy. Maintained strict GDPR files and drafted report briefings for management reviews.
                </p>
              </div>

              {/* Job 2 */}
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-teal-500 border-2 border-white" />
                <div className="flex justify-between items-baseline gap-2 flex-wrap">
                  <h4 className="text-xs font-bold text-slate-900">Medical Secretary & Patient Coordinator</h4>
                  <span className="text-[10px] font-mono text-slate-450 shrink-0">2021 - 2023</span>
                </div>
                <p className="text-[10px] text-slate-500 italic mt-0.5">Community General Hospital Surgical Wings</p>
                <p className="text-slate-650 text-[11px] mt-1 leading-normal">
                  Orchestrated complex daily timetables for 12 surgeons. Managed private healthcare dossiers in complete alignment with HIPAA/privacy rules.
                </p>
              </div>

              {/* Job 3 */}
              <div className="relative">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-teal-500 border-2 border-white" />
                <div className="flex justify-between items-baseline gap-2 flex-wrap">
                  <h4 className="text-xs font-bold text-slate-900">Customer Desk Relations Assistant</h4>
                  <span className="text-[10px] font-mono text-slate-450 shrink-0">2019 - 2021</span>
                </div>
                <p className="text-[10px] text-slate-500 italic mt-0.5">Premium Hospitality Services Center</p>
                <p className="text-slate-650 text-[11px] mt-1 leading-normal">
                  Resolved multi-channel complaints with a 98.7% positive satisfaction metric, optimizing check-in lines speed by 30%.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Core Competencies */}
            <div>
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                Core Competencies:
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['Gmail Triage', 'Google Sheets', 'Google Calendar', 'Data Validation', 'CRM Entry', 'SOP Wiki Creation', 'HIPAA Auditing', 'NDA discretion', 'Hospitality Comms', 'Meeting Minutes'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold bg-slate-100 rounded-md py-1 px-2.5 border border-slate-200 text-slate-700 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Certified Academic Education */}
            <div>
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                Education & Accolades:
              </h3>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    B.S. in Hospitality Management (Cum Laude)
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                    • Consecutive President’s Lister Honors Academic<br />
                    • Specialization in VIP communication & operational standards
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Print trigger footer action */}
        <div className="pt-6 border-t border-slate-100 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-400 italic font-mono text-center sm:text-left">
            Candidate verification key: COG_SEC_991823a-VA
          </p>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => alert('Printing CV... (Simulated browser action)')}
              className="flex-grow sm:flex-grow-0 px-4 py-2 border border-slate-250 hover:border-slate-350 text-slate-700 bg-white hover:bg-slate-50 text-[10px] font-mono font-bold rounded-xl uppercase flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print CV
            </button>
            <button
              onClick={handleTriggerDownload}
              className="flex-grow sm:flex-grow-0 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-mono font-bold rounded-xl uppercase flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-teal-400" />
              Save to Local
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
