import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Terminal, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PipelineVisualizer } from './PipelineVisualizer';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle radial ambient gradients (restrained, anti-slop) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-purple-100/50 via-blue-50/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Typographic Lockup */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          {/* Availability Pill / Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-medium text-slate-700 mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          {/* Name & Title */}
          <div className="text-xs uppercase font-mono tracking-widest text-purple-700 font-semibold mb-3">
            {PERSONAL_INFO.name} · {PERSONAL_INFO.title}
          </div>

          {/* Display Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
            From Raw Data to <span className="bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">Remarkable Digital Experiences.</span>
          </h1>

          {/* Supporting Headline & Description */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 [text-wrap:balance]">
            {PERSONAL_INFO.supportingHeadline}
          </p>

          {/* CTAs & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-purple-700 hover:bg-purple-800 active:scale-98 rounded-xl shadow-xs hover:shadow-md transition-all"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 hover:text-purple-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-2xs transition-all"
            >
              <span>Let's Build Something</span>
              <ArrowUpRight className="w-4 h-4 text-purple-600" />
            </a>
          </div>

          {/* Technology Label Strip (clean typography without pill boxes) */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-500 font-medium">
            <span>React & TypeScript</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Python & REST APIs</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>SQL & Data Pipelines</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Tailwind CSS</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Cloud & CI/CD Deployment</span>
          </div>
        </div>

        {/* Signature Interactive Feature: The Full-Stack Problem-Solving Pipeline */}
        <div id="pipeline" className="mt-6 sm:mt-10 scroll-mt-24">
          <div className="mb-4 text-center">
            <span className="text-xs font-mono font-semibold text-slate-500 tracking-wider">
              INTERACTIVE ARCHITECTURE // DATA TO DEPLOYMENT PIPELINE
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Select or cycle through the six stages to see how I take an initial problem all the way to production.
            </p>
          </div>

          <PipelineVisualizer />
        </div>
      </div>
    </section>
  );
};
