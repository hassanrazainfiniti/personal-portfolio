import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeartHandshake, Lightbulb, Compass, Target, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fafbfc] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-purple-700 uppercase mb-2">
            06. Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            More Than Just Writing Code.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            I combine analytical engineering rigor with thoughtful human-centered design to construct software that solves real problems.
          </p>
        </div>

        {/* Split Grid: Portrait & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
                <div className="aspect-square rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={PERSONAL_INFO.avatarImage}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>
                <div className="p-4 bg-white text-center">
                  <div className="font-bold text-base text-slate-900">{PERSONAL_INFO.name}</div>
                  <div className="text-xs text-purple-700 font-medium">{PERSONAL_INFO.title}</div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Quick Key Pillars */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <div className="font-bold text-slate-900">End-to-End Mindset</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">From schema to UI polish</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <div className="font-bold text-slate-900">Zero Slop</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">High craftsmanship & types</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Philosophy & Content Blocks */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                My Perspective on Building Software
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Too often, software development gets divided into silos: backends that work in isolation and frontends that look nice but lack resilient data logic. My purpose as a Full-Stack Developer is to eliminate that friction.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether modeling relational tables, optimizing cache strategies, translating Figma designs into strict TypeScript, or configuring CI/CD cloud pipelines, I treat every stage of the software lifecycle as interconnected.
              </p>
            </div>

            {/* Philosophy Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-xl border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">
                  Favorite Types of Challenges
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-throughput data dashboards, real-time interactive canvases, and mission-critical workflows where performance and intuitive UX directly drive user productivity.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">
                  Continuous Learning Mindset
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Actively staying abreast of the evolving TypeScript ecosystem, React 19 paradigms, serverless containerization, and modern security standards.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">
                  Approach to Collaboration
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent asynchronous communication, proactive code reviews, empathetic teamwork, and a focus on high-velocity pragmatic delivery without cutting architectural corners.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">
                  Professional Goals
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Partner with ambitious engineering teams and forward-thinking companies to architect and ship scalable products that create lasting tangible value for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
