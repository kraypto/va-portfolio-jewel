import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Sample Works', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link calculation
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Title */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="bg-teal-600 p-1.5 rounded-lg group-hover:bg-teal-500 transition-colors shadow-md shadow-teal-900/30">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-display font-bold text-lg tracking-tight flex items-center leading-none">
                Jewel <span className="text-teal-400 font-normal ml-1">Santiago</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest leading-none block uppercase mt-0.5">
                SECURE & EFFICIENT VA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
                  activeSection === link.id
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Urgent CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white text-xs font-bold font-display uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all shadow-md shadow-teal-900/30 flex items-center gap-2 group cursor-pointer"
              id="desktop-hire-btn"
            >
              Hire Me Today
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 mr-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-slate-950 border-b border-white/10 shadow-xl overflow-hidden"
            id="mobile-navigation-panel"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all ${
                    activeSection === link.id
                      ? 'bg-teal-600 text-white font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full text-center bg-teal-600 hover:bg-teal-500 text-white font-display uppercase tracking-wider text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                  id="mobile-hire-btn"
                >
                  <Mail className="w-4 h-4" />
                  Hire Me Today
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
