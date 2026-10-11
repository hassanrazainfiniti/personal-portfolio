import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-slate-900">
              <span className="w-7 h-7 rounded-md bg-purple-700 text-white font-bold flex items-center justify-center text-xs">
                HR
              </span>
              <span className="font-bold text-base tracking-tight">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              Building thoughtful digital experiences from data to deployment. Specialized in modern TypeScript, React, Python, and scalable web architectures.
            </p>
            <div className="text-[11px] font-mono text-slate-400">
              {PERSONAL_INFO.location}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3">
              Sections
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#pipeline" className="hover:text-purple-700 transition-colors">
                  01. Problem-Solving Pipeline
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-700 transition-colors">
                  02. Selected Work
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-purple-700 transition-colors">
                  03. Before vs. After
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-purple-700 transition-colors">
                  04. Development Process
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-700 transition-colors">
                  05. Technical Stack
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-700 transition-colors">
                  06. About & Philosophy
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="hover:text-purple-700 transition-colors cursor-pointer text-left"
                >
                  07. Verified Resume
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-700 transition-colors">
                  08. FAQ Assistant
                </a>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-3">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-purple-700 font-mono transition-colors block truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 font-mono transition-colors block"
                >
                  {PERSONAL_INFO.phoneFormatted} (WhatsApp)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all"
                title="GitHub"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all"
                title="LinkedIn"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all"
                title="Email"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved. Crafted with care in React & TypeScript.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-purple-700 transition-all cursor-pointer shadow-2xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
