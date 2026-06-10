import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Linkedin,
  Send,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please write a brief summary of requirements';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Using Web3Forms public API to deliver submissions directly to target email: santiagojewelm@gmail.com
    // Fallback key: '8c13f639-6e3e-43f0-bb53-6ecba592df87' (or direct configuration instructions)
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_KEY || '8c13f639-6e3e-43f0-bb53-6ecba592df87';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: `[Portfolio Hire Request] from ${formData.name}`,
        from_name: "Jewel Santiago Admin Workspace",
        company: formData.company || 'Not Specified',
        role_requirement: formData.role || 'Not Specified',
        message: formData.message,
        replyto: formData.email,
        to: 'jancodrey.delosreyes@gmail.com'
      })
    })
      .then(async (response) => {
        const json = await response.json();
        if (response.ok && json.success) {
          setFormSubmitted(true);
        } else {
          console.error('Web3Forms Error payload:', json);
          // Standard mailto fallback explanation
          setSubmitError(json.message || 'Verification token or access key missing. Please double-check VITE_WEB3FORMS_KEY configuration.');
        }
      })
      .catch((error) => {
        console.error('Submission connection issue:', error);
        setSubmitError('Unable to securely sync form. System is offline or rate-limited. Please email directly at jancodrey.delosreyes@gmail.com');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', company: '', role: '', message: '' });
    setSubmitError(null);
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-teal-100/35 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header summary */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-widest block mb-2">
            SECURE COLLABORATION DISCUSSIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-none mb-4">
            Simplify Your Daily Operations Today
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Let’s work together and simplify your daily operations. Send a direct request secure portal below or sync through standard freelancer links.
          </p>
          <div className="h-1 w-12 bg-teal-600 rounded mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-outer-block">
          
          {/* Left Column: Direct coordinates & Freelance Links */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-slate-900 text-xl leading-snug">
                Connect Through Secure Freelance Channels
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
                Prefer to handle milestone payments, hour sheets, and secure corporate escrow via established platforms? You can find my active profiles here:
              </p>

              {/* Badges and listings */}
              <div className="space-y-3" id="freelance-agency-badges">
                
                {/* LinkedIn Link */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-teal-500 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">LinkedIn Business Portal</h4>
                      <p className="text-[10px] text-slate-400">Professional networking & career history</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-450 group-hover:text-teal-600 transition-colors" />
                </a>

                {/* Upwork Profile */}
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-teal-500 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-teal-600 font-mono font-bold text-sm">Up</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Upwork Top-Rated Profile</h4>
                      <p className="text-[10px] text-slate-400">Contract auditing & hourly tracking safeguards</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-450 group-hover:text-teal-600 transition-colors" />
                </a>

                {/* Fiverr Profile */}
                <a
                  href="https://fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-teal-500 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-teal-600 font-mono font-bold text-sm">Fi</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Fiverr Pro Gig Directory</h4>
                      <p className="text-[10px] text-slate-400">Bespoke pricing gigs and rapid SOP tasks</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-450 group-hover:text-teal-600 transition-colors" />
                </a>

                {/* Direct Email Link */}
                <a
                  href="mailto:jancodrey.delosreyes@gmail.com"
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 hover:border-teal-500 rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Direct Business Email</h4>
                      <p className="text-[10px] text-teal-600 select-all group-hover:text-teal-700 transition-colors">jancodrey.delosreyes@gmail.com</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-450 group-hover:text-teal-600 transition-colors" />
                </a>

              </div>
            </div>

            {/* Quick security reassurance */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex items-start gap-3 shadow-md">
              <ShieldAlert className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-100">Discretion Guaranteed</h4>
                <p className="text-[10px] text-slate-450 leading-relaxed mt-1">
                  All requests processed through this portal are treated as highly confidential. Complete NDA sign-offs can be dispatched prior to our initial onboarding consultation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Workspace */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 flex flex-col justify-center relative min-h-[440px]">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                  id="active-contract-inbound-form"
                >
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-4 block">
                    Submit Inbound Requirement Summary:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label htmlFor="name-input" className="text-[11px] font-bold text-slate-700">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name-input"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full p-3 rounded-lg bg-slate-50 border text-xs focus:outline-none focus:bg-white transition-all ${
                          formErrors.name ? 'border-rose-500' : 'border-slate-200 focus:border-teal-500'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[10px] text-rose-500 font-semibold">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="email-input" className="text-[11px] font-bold text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email-input"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className={`w-full p-3 rounded-lg bg-slate-50 border text-xs focus:outline-none focus:bg-white transition-all ${
                          formErrors.email ? 'border-rose-500' : 'border-slate-200 focus:border-teal-500'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[10px] text-rose-500 font-semibold">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company name */}
                    <div className="space-y-1">
                      <label htmlFor="company-input" className="text-[11px] font-bold text-slate-700">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="company-input"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corporation"
                        className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:bg-white focus:border-teal-500 transition-all"
                      />
                    </div>

                    {/* Current Role/Target need */}
                    <div className="space-y-1">
                      <label htmlFor="role-input" className="text-[11px] font-bold text-slate-700">
                        Core Administrative Need
                      </label>
                      <input
                        type="text"
                        id="role-input"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="e.g. Executive Scheduling, Bulk Sifting"
                        className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:bg-white focus:border-teal-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message requirements summary */}
                  <div className="space-y-1">
                    <label htmlFor="message-input" className="text-[11px] font-bold text-slate-700">
                      Requirements Summary *
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi, we are looking for a remote Virtual Assistant to take over email inbox management for our founder, handle weekly customer support tickets under SLA controls, and check Excel sheets. Let's discuss details."
                      className={`w-full p-3 rounded-lg bg-slate-50 border text-xs focus:outline-none focus:bg-white transition-all ${
                        formErrors.message ? 'border-rose-500' : 'border-slate-200 focus:border-teal-500'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[10px] text-rose-500 font-semibold">{formErrors.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-3 bg-rose-50 border border-rose-150 rounded-xl text-rose-700 text-xs flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 font-bold">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        Form Configuration Required
                      </div>
                      <p className="leading-relaxed text-slate-650">
                        {submitError}
                      </p>
                      <div className="p-2 bg-white/60 rounded border border-rose-100 text-[11px] leading-normal font-sans">
                        <strong>To connect email:</strong> Go to <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline text-teal-600 font-bold">web3forms.com</a>, submit your email to get a free Access Key instantly, then set <code>VITE_WEB3FORMS_KEY="your-key-here"</code> in your environment parameters.
                        <div className="mt-2 pt-2 border-t border-rose-100">
                          <strong>Or mail directly:</strong> <a href={`mailto:jancodrey.delosreyes@gmail.com?subject=Contact%20by%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`} className="underline font-bold text-slate-900 hover:text-slate-950">Click here to send standard email</a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CTA Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white font-display text-xs font-bold uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-teal-700 opacity-80 cursor-not-allowed'
                        : 'bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-teal-900/30 cursor-pointer'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending Request...' : 'Hire Me Today'}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-5 py-6"
                  id="success-inbox-submission"
                >
                  <div className="w-16 h-16 bg-teal-50 border border-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg">
                      Requirements Submission Received!
                    </h3>
                    <p className="text-slate-500 text-xs mt-1 max-w-sm mx-auto leading-relaxed">
                      Thank you for trusting my professional background, <strong>{formData.name}</strong>. I will analyze your requirements log and draft a tailored proposal envelope back to <strong>{formData.email}</strong> within 12 hours.
                    </p>
                  </div>



                  <button
                    onClick={handleResetForm}
                    className="text-slate-400 hover:text-slate-600 text-xs font-mono select-none underline mt-2 block mx-auto cursor-pointer"
                  >
                    Reset Form and Submit New Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
