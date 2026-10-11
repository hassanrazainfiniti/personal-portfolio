import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { RESUME_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Generate text/markdown or trigger print to save as PDF
    const resumeText = `# ${RESUME_DATA.name} - ${RESUME_DATA.title}
Email: ${RESUME_DATA.email} | WhatsApp: ${RESUME_DATA.phone} | Location: ${RESUME_DATA.location}

## Professional Summary
${RESUME_DATA.summary}

## Experience
${RESUME_DATA.experience
  .map(
    (exp) =>
      `### ${exp.role} - ${exp.company} (${exp.period})\n${exp.highlights.map((h) => `- ${h}`).join('\n')}`
  )
  .join('\n\n')}

## Education
${RESUME_DATA.education
  .map((edu) => `### ${edu.degree} - ${edu.institution} (${edu.period})\n${edu.details}`)
  .join('\n\n')}

## Core Technical Skills
${RESUME_DATA.skills
  .map((s) => `- **${s.category}**: ${s.items.join(', ')}`)
  .join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Muhammad-Hassan-Raza-Resume.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full my-auto max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm sm:text-base">Muhammad Hassan Raza — Curriculum Vitae</span>
            <span className="text-xs font-mono text-purple-400 bg-purple-950 px-2 py-0.5 rounded-sm hidden sm:inline">
              Verified Dossier
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Print / Save as PDF"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white print:p-0 print:m-0">
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {RESUME_DATA.name}
                </h1>
                <p className="text-base font-semibold text-purple-700 mt-0.5">
                  {RESUME_DATA.title}
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 font-mono sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{RESUME_DATA.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{RESUME_DATA.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{RESUME_DATA.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-1 border-b border-slate-100">
              <Briefcase className="w-4 h-4 text-purple-700" />
              <span>Professional Experience</span>
            </div>

            <div className="space-y-6">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-slate-900">{exp.role}</span>
                      <span className="text-xs text-slate-500 sm:ml-2">· {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  </div>

                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-1 border-b border-slate-100">
              <Award className="w-4 h-4 text-purple-700" />
              <span>Technical Skills & Core Proficiencies</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESUME_DATA.skills.map((skillGroup, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                  <div className="font-bold text-slate-900 mb-1">{skillGroup.category}</div>
                  <div className="text-slate-600 leading-relaxed">
                    {skillGroup.items.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-1 border-b border-slate-100">
              <GraduationCap className="w-4 h-4 text-purple-700" />
              <span>Education</span>
            </div>

            <div className="space-y-3">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-slate-900">{edu.degree}</span>
                    <span className="font-mono text-slate-500">{edu.period}</span>
                  </div>
                  <div className="text-slate-600">{edu.institution}</div>
                  <p className="text-slate-500 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Note on PDF Upload */}
          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-purple-900 flex items-start gap-2.5">
            <ExternalLink className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Honest Setup Note: </span>
              This interactive resume view is generated directly from Hassan's verified technical profile. You can print/save directly as a PDF using your browser's Print dialog, or download the structured document file.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
