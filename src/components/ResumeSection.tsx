import React from 'react';
import { FileText, Download, Eye, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-purple-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-purple-400 uppercase mb-3">
              07. Credentials & Background
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 [text-wrap:balance]">
              Want the Full Picture?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 [text-wrap:balance]">
              Explore my professional background, technical skills, projects, and experience in a clean, comprehensive format.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume Online</span>
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Resume</span>
              </button>
            </div>

            {/* Transparent Note */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <FileText className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                Standard filename: Muhammad-Hassan-Raza-Resume.pdf · Instant browser print & download
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
