import React, { useState } from 'react';
import { Compass, Search, Palette, Code, CheckSquare, CloudUpload, ArrowRight, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessTimeline: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const getStepIcon = (index: number) => {
    const className = 'w-5 h-5';
    switch (index) {
      case 0:
        return <Compass className={className} />;
      case 1:
        return <Search className={className} />;
      case 2:
        return <Palette className={className} />;
      case 3:
        return <Code className={className} />;
      case 4:
        return <CheckSquare className={className} />;
      case 5:
        return <CloudUpload className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  const currentStep = PROCESS_STEPS[selectedStepIndex];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#fafbfc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-purple-700 uppercase mb-2">
            04. Methodological Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            My Development Process.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            From the initial question to the production URL: an intentional, battle-tested full-stack engineering path.
          </p>
        </div>

        {/* Connected Interactive Process Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Timeline Stepper */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-purple-600 shadow-md translate-x-1'
                      : 'bg-white/60 hover:bg-white border-slate-200/80 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-purple-700 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {getStepIcon(idx)}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-purple-700">
                          {step.step}.
                        </span>
                        <span className="font-bold text-sm text-slate-900">
                          {step.title}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 truncate max-w-[200px] sm:max-w-[260px]">
                        {step.tagline}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-purple-700 translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Details Drawer for Selected Step */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold font-mono text-xs flex items-center justify-center">
                  {currentStep.step}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {currentStep.title} — {currentStep.tagline}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-purple-600 bg-purple-50 px-2 py-1 rounded-md">
                Phase {currentStep.step} of 06
              </span>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {currentStep.description}
            </p>

            {/* Deliverables Box */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                Explicit Phase Deliverables
              </div>
              <div className="space-y-2">
                {currentStep.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tooling & Standards */}
            <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-100 text-xs">
              <span className="font-semibold text-purple-900">Applied Tech & Tooling: </span>
              <span className="text-purple-800 font-mono text-[11px]">{currentStep.techInvolved}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
