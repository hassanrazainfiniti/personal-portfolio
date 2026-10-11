import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['pipeline', 'projects', 'transformation', 'process', 'skills', 'about', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'Projects', href: '#projects' },
    { label: 'Before & After', href: '#transformation' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
            : 'bg-white/60 backdrop-blur-xs py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Clean Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
              aria-label="Muhammad Hassan Raza Home"
            >
              <span className="w-8 h-8 rounded-lg bg-purple-700 text-white font-bold flex items-center justify-center text-sm shadow-xs transition-transform duration-200 group-hover:scale-105">
                HR
              </span>
              <span className="font-bold text-base tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                HASSAN.R
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-purple-700 ${
                      isActive ? 'text-purple-700 font-semibold' : 'text-slate-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 rounded-full" />
                    )}
                  </a>
                );
              })}
              <button
                type="button"
                onClick={onOpenResume}
                className="whitespace-nowrap shrink-0 text-slate-600 hover:text-purple-700 transition-colors py-1 text-sm font-medium cursor-pointer"
              >
                Resume
              </button>
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 active:scale-98 rounded-lg shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-purple-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-16 left-0 right-0 bg-white border-b border-slate-200 px-6 py-6 shadow-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-slate-800 hover:text-purple-700 py-2 border-b border-slate-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="text-left text-base font-medium text-slate-800 hover:text-purple-700 py-2 border-b border-slate-100 transition-colors cursor-pointer"
              >
                Resume
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg shadow-xs transition-colors"
              >
                Let's Talk
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 text-sm font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
              >
                WhatsApp Instant Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
