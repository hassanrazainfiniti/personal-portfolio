import React, { useState, useRef } from 'react';
import { Sliders, AlertTriangle, CheckCircle2, ArrowRight, Zap, RefreshCw, Layers } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [activeStageStep, setActiveStageStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const transformationStages = [
    { name: 'Analyze', note: 'Audit chaotic legacy workflows & bottle-necks' },
    { name: 'Architect', note: 'Define normalized schemas & REST contract boundaries' },
    { name: 'Design', note: 'Establish 8pt token system & WCAG AA contrast' },
    { name: 'Develop', note: 'Implement modular TypeScript & optimized queries' },
    { name: 'Test', note: 'Automate regression test suites & Lighthouse checks' },
    { name: 'Deliver', note: 'Deploy with zero downtime on modern cloud edge' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPosition(percent);
  };

  return (
    <section id="transformation" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-purple-700 uppercase mb-2">
            03. The Transformation Value
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Before Me. After Me.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Every great digital product begins with a problem. My job is to turn that problem into a solution.
          </p>
          <p className="text-xs text-slate-400 mt-2">
            *Illustrative architectural transformation model of an unoptimized legacy system versus an engineered modern platform.
          </p>
        </div>

        {/* Quick Mode Preset Buttons */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500">Quick Compare:</span>
            <button
              type="button"
              onClick={() => setSliderPosition(15)}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              Show Legacy Problem (Before)
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(50)}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              Split 50/50
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(85)}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-800 transition-colors cursor-pointer"
            >
              Show Engineered Solution (After)
            </button>
          </div>

          <div className="text-xs font-mono text-slate-500">
            Drag the vertical handle across the canvas
          </div>
        </div>

        {/* Interactive Comparison Canvas */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[460px] sm:h-[480px] rounded-2xl border border-slate-300 shadow-xl overflow-hidden select-none cursor-ew-resize bg-slate-100"
        >
          {/* LEFT SIDE: "BEFORE" (Legacy / Problematic State) */}
          <div className="absolute inset-0 bg-slate-200/90 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-300/80 text-slate-700 font-mono text-xs font-bold">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  BEFORE: LEGACY & UNSTRUCTURED
                </div>
                <span className="text-xs font-mono text-slate-500">Page Speed: 34 / 100</span>
              </div>

              {/* Cluttered UI Representation */}
              <div className="space-y-3 max-w-md">
                <div className="p-4 bg-slate-300/70 rounded-md border border-dashed border-slate-400 space-y-2">
                  <div className="h-4 bg-slate-400 rounded-sm w-3/4 animate-pulse" />
                  <div className="text-[11px] font-mono text-slate-600">
                    ⚠ Warning: Unindexed table scan on 4.2M rows (Query took 3,420ms)
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-xs">
                      500 Error Rate: 4.8%
                    </span>
                    <span className="text-[10px] bg-slate-400 text-slate-800 px-2 py-0.5 rounded-xs">
                      Layout Shift (CLS): 0.42
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-300/50 rounded-md border border-slate-400/60 text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-700">Pain Points:</div>
                  <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
                    <li>Inconsistent typography, broken contrast & spacing gaps</li>
                    <li>Non-responsive desktop design failing on mobile viewports</li>
                    <li>Uncached server endpoints choking under modest traffic</li>
                    <li>Spaghetti code without component reuse or strict types</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500 border-t border-slate-300 pt-3">
              Status: High technical debt · Disorganized data architecture
            </div>
          </div>

          {/* RIGHT SIDE: "AFTER" (Engineered / Hassan's Modern State) */}
          <div
            className="absolute inset-y-0 right-0 bg-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-100 text-purple-800 font-mono text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
                  AFTER: HASSAN'S FULL-STACK ARCHITECTURE
                </div>
                <span className="text-xs font-mono text-emerald-600 font-bold">
                  Lighthouse: 99 / 100
                </span>
              </div>

              {/* Clean Engineered UI Representation */}
              <div className="space-y-4 max-w-lg">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200/80 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      Optimized Stream & Cache Layer
                    </span>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                      Latency: 1.2ms
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-white rounded-lg border border-purple-100 shadow-2xs">
                      <div className="text-[10px] text-slate-500">Query Time</div>
                      <div className="font-bold text-purple-700 font-mono">0.8ms</div>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-purple-100 shadow-2xs">
                      <div className="text-[10px] text-slate-500">Accessibility</div>
                      <div className="font-bold text-blue-700 font-mono">100% WCAG</div>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-purple-100 shadow-2xs">
                      <div className="text-[10px] text-slate-500">Bundle Size</div>
                      <div className="font-bold text-emerald-700 font-mono">-68% Optimized</div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1.5">
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-600" />
                    Delivered Value & Guarantees:
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                    <li>Modular, reusable React 19 component library in strict TypeScript</li>
                    <li>Fluid mobile-first responsive layouts with clamp typography</li>
                    <li>Automated CI/CD deployment with zero downtime</li>
                    <li>Intuitive UX and elegant editorial visual identity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-mono text-purple-700 border-t border-slate-100 pt-3 flex items-center justify-between">
              <span>Status: Production-grade · Scalable · Maintainable</span>
              <span className="text-slate-400 font-sans">Muhammad Hassan Raza</span>
            </div>
          </div>

          {/* Interactive Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-purple-600 pointer-events-none z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-purple-700 text-white shadow-xl border-2 border-white flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* The 6 Transformation Stages Roadmap */}
        <div className="mt-14">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
              TRANSFORMATION METHODOLOGY // THE 6 PILLARS
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {transformationStages.map((stage, idx) => (
              <button
                key={stage.name}
                type="button"
                onClick={() => setActiveStageStep(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  activeStageStep === idx
                    ? 'bg-purple-50 border-purple-400 shadow-2xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-purple-700">
                    0{idx + 1}
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </div>
                <div className="font-bold text-sm text-slate-900">{stage.name}</div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {stage.note}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
