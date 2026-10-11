import React, { useState, useEffect, useRef } from 'react';
import {
  Database,
  Cpu,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  Play,
  Pause,
  ChevronRight,
  Sparkles,
  Server,
  Layers,
  Terminal,
  Activity,
  Globe,
  ArrowRight
} from 'lucide-react';
import { PIPELINE_STAGES } from '../data/portfolioData';
import { PipelineStage } from '../types';

export const PipelineVisualizer: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeStage: PipelineStage = PIPELINE_STAGES[activeStageIndex];

  // Auto-play pipeline simulation every 4.5 seconds if playing
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStageIndex((prev) => (prev + 1) % PIPELINE_STAGES.length);
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleStageSelect = (index: number) => {
    setActiveStageIndex(index);
    setIsPlaying(false);
  };

  const getStageIcon = (iconName: string, active: boolean) => {
    const className = `w-5 h-5 transition-colors ${
      active ? 'text-white' : 'text-slate-500 group-hover:text-purple-600'
    }`;
    switch (iconName) {
      case 'Database':
        return <Database className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Layout':
        return <Layout className={className} />;
      case 'Code2':
        return <Code2 className={className} />;
      case 'CheckCircle2':
        return <CheckCircle2 className={className} />;
      case 'Rocket':
        return <Rocket className={className} />;
      default:
        return <Activity className={className} />;
    }
  };

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* Visualizer Top Bar with Controls */}
      <div className="px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-400 pl-2 border-l border-slate-800">
            fullstack-pipeline // interactive-engine
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            title={isPlaying ? 'Pause auto-cycle' : 'Play auto-cycle'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-purple-400" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-purple-400" />
                <span>Auto-Cycle</span>
              </>
            )}
          </button>

          <span className="text-slate-500 hidden sm:inline">·</span>

          <span className="text-slate-400 font-mono hidden sm:inline">
            Stage {activeStage.stepNumber} of 06
          </span>
        </div>
      </div>

      {/* Main Pipeline Display Area */}
      <div className="p-5 sm:p-7">
        {/* Horizontal Pipeline Track for Desktop */}
        <div className="hidden lg:block mb-8">
          <div className="relative">
            {/* Connecting SVG Bus Path with Flowing Particles */}
            <svg
              className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-10 pointer-events-none z-0"
              preserveAspectRatio="none"
              viewBox="0 0 1000 40"
            >
              <defs>
                <linearGradient id="busGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <line
                x1="40"
                y1="20"
                x2="960"
                y2="20"
                stroke="url(#busGradient)"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-[dash_20s_linear_infinite]"
              />
            </svg>

            {/* Stage Nodes */}
            <div className="grid grid-cols-6 gap-2 relative z-10">
              {PIPELINE_STAGES.map((stage, idx) => {
                const isActive = activeStageIndex === idx;
                const isPassed = activeStageIndex > idx;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => handleStageSelect(idx)}
                    className={`group text-left p-3 rounded-xl transition-all duration-300 relative cursor-pointer ${
                      isActive
                        ? 'bg-purple-950/70 border border-purple-500/80 shadow-lg shadow-purple-900/30 -translate-y-0.5'
                        : isPassed
                        ? 'bg-slate-900/80 border border-slate-700/60 hover:border-slate-600'
                        : 'bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive
                            ? 'text-purple-400'
                            : isPassed
                            ? 'text-blue-400'
                            : 'text-slate-500'
                        }`}
                      >
                        {stage.stepNumber}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xs'
                            : isPassed
                            ? 'bg-slate-800 text-slate-300'
                            : 'bg-slate-800/60 text-slate-500'
                        }`}
                      >
                        {getStageIcon(stage.iconName, isActive)}
                      </div>
                    </div>

                    <div className="font-semibold text-sm text-slate-100 tracking-tight">
                      {stage.title}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      {stage.tagline}
                    </div>

                    {/* Active Indicator Bar */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Stage Selector (Scrollable or Segmented) */}
        <div className="lg:hidden mb-6 flex overflow-x-auto pb-2 gap-2 scrollbar-none">
          {PIPELINE_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => handleStageSelect(idx)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-2 shrink-0 transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-300 border border-slate-700/60'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{stage.stepNumber}</span>
                <span>{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Visual Stage Deep-Dive Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Stage Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/60 rounded-xl p-5 border border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-purple-400">
                <span className="px-2 py-0.5 rounded-sm bg-purple-900/40 border border-purple-800/60">
                  STAGE {activeStage.stepNumber}
                </span>
                <span>//</span>
                <span className="text-slate-400">{activeStage.tagline}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                {activeStage.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {activeStage.description}
              </p>

              <div className="space-y-2 mb-5">
                <div className="text-xs font-semibold text-slate-400 tracking-wider">
                  TECHNICAL DELIVERABLES:
                </div>
                {activeStage.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <ChevronRight className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400">Target Standard:</span>
              <span className="font-mono font-medium text-purple-300 text-right">
                {activeStage.metrics}
              </span>
            </div>
          </div>

          {/* Miniature Interactive Stage Simulation (Right Column) */}
          <div className="lg:col-span-7 bg-slate-950 rounded-xl p-5 border border-slate-800/80 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                Live State Inspector
              </span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE ENGINE
              </span>
            </div>

            {/* Dynamic Interactive Stage Simulator Component */}
            <div className="flex-1 min-h-[220px] flex flex-col justify-center">
              {activeStageIndex === 0 && (
                /* DATA: Ingestion Simulation */
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">Incoming Ingestion Payload:</div>
                    <pre className="text-purple-300 overflow-x-auto text-[11px] leading-tight">
                      {activeStage.sampleSnippet}
                    </pre>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                    <div className="p-2 bg-slate-900 rounded-md border border-slate-800">
                      <div className="text-slate-400">Stream Rate</div>
                      <div className="text-emerald-400 font-bold text-sm">14.8k eps</div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded-md border border-slate-800">
                      <div className="text-slate-400">Null Errors</div>
                      <div className="text-purple-400 font-bold text-sm">0.00%</div>
                    </div>
                    <div className="p-2 bg-slate-900 rounded-md border border-slate-800">
                      <div className="text-slate-400">Schema</div>
                      <div className="text-blue-400 font-bold text-sm">Validated</div>
                    </div>
                  </div>
                </div>
              )}

              {activeStageIndex === 1 && (
                /* PROCESSING: Logic & Transformation */
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">Execution Pipeline:</div>
                    <pre className="text-blue-300 overflow-x-auto text-[11px] leading-tight">
                      {activeStage.sampleSnippet}
                    </pre>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-[11px]">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-purple-400 animate-spin" />
                      <span className="text-slate-300">Async Event Queue Active</span>
                    </div>
                    <span className="text-emerald-400 font-bold">1.8ms Execution</span>
                  </div>
                </div>
              )}

              {activeStageIndex === 2 && (
                /* DESIGN: Wireframe to Component */
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <div className="text-[11px] font-mono text-slate-400 mb-2">
                      Design System Tokens & Micro-Preview:
                    </div>
                    <div className="p-3 bg-white rounded-lg text-slate-900 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
                          UI
                        </div>
                        <div>
                          <div className="text-xs font-bold">Responsive Layout Container</div>
                          <div className="text-[10px] text-slate-500">WCAG AA Contrast Compliant · 60-30-10 Budget</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-sm">
                        Verified
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 bg-slate-900 rounded-md border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Spacing Grid:</span>
                      <span className="text-purple-300">8pt Strict</span>
                    </div>
                    <div className="p-2 bg-slate-900 rounded-md border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Touch Target:</span>
                      <span className="text-emerald-300">&ge; 44px</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStageIndex === 3 && (
                /* CODING: Clean TypeScript Implementation */
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <div className="text-slate-400 text-[11px] mb-1">Typed React Architecture:</div>
                    <pre className="text-emerald-300 overflow-x-auto text-[11px] leading-tight">
                      {activeStage.sampleSnippet}
                    </pre>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Strict Typecheck: Passed (0 errors)</span>
                    <span className="text-blue-400">ESNext · TypeScript 5.8</span>
                  </div>
                </div>
              )}

              {activeStageIndex === 4 && (
                /* TESTING: Test Matrix & Validation */
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Unit Tests (38/38)
                      </span>
                      <span className="text-emerald-400 font-bold">100% PASS</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        API Integration Tests
                      </span>
                      <span className="text-emerald-400 font-bold">PASS (42ms)</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Accessibility & Lighthouse
                      </span>
                      <span className="text-purple-400 font-bold">Score: 99</span>
                    </div>
                  </div>
                  <div className="p-2 bg-slate-900/60 rounded-md border border-slate-800 text-center text-slate-400 text-[11px]">
                    Continuous regression test coverage enforced across all branches.
                  </div>
                </div>
              )}

              {activeStageIndex === 5 && (
                /* DEPLOYMENT: Production Release */
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Production URL:</span>
                      <span className="text-blue-400 font-bold flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        https://production.app
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Release Status:</span>
                      <span className="text-emerald-400 font-bold">Live & Healthy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">CDN Edge Cache:</span>
                      <span className="text-purple-300">Global (28 PoPs)</span>
                    </div>
                  </div>
                  <div className="p-2 bg-emerald-950/40 border border-emerald-800/60 rounded-lg flex items-center justify-between text-[11px]">
                    <span className="text-emerald-300">Zero-downtime rolling deployment finished</span>
                    <Rocket className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              )}
            </div>

            {/* Stepper navigation buttons */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 mt-2">
              <button
                type="button"
                onClick={() =>
                  setActiveStageIndex((prev) =>
                    prev === 0 ? PIPELINE_STAGES.length - 1 : prev - 1
                  )
                }
                className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
              >
                ← Previous Stage
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveStageIndex((prev) => (prev + 1) % PIPELINE_STAGES.length)
                }
                className="text-xs text-purple-300 hover:text-white px-3 py-1 rounded-md bg-purple-900/40 hover:bg-purple-800/60 border border-purple-700/60 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
