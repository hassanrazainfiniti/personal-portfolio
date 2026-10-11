import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Terminal, Database, Sparkles, Layers, Info } from 'lucide-react';

export const SkillsUniverse: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [inspectedSkill, setInspectedSkill] = useState<{
    name: string;
    level: string;
    usage: string;
  } | null>(SKILL_CATEGORIES[0].skills[0]);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-purple-700 uppercase mb-2">
            05. Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Technical Stack & Ecosystem.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            A purposeful, production-tested toolkit for building reliable software from database to browser.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => {
                setActiveCategoryIndex(idx);
                setInspectedSkill(cat.skills[0]);
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-purple-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Layout & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skills Grid for active category */}
          <div className="lg:col-span-8">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-900">{activeCategory.title}</h3>
              <p className="text-xs text-slate-500">{activeCategory.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeCategory.skills.map((skill) => {
                const isSelected = inspectedSkill?.name === skill.name;

                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setInspectedSkill(skill)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-purple-50/70 border-purple-500 shadow-2xs translate-y-[-1px]'
                        : 'bg-white border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-slate-900">{skill.name}</span>
                      <span className="text-[11px] font-mono text-purple-700 font-medium">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {skill.usage}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contextual Technical Inspector (Right Column) */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-lg sticky top-24">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-4 pb-3 border-b border-slate-800">
              <Terminal className="w-4 h-4" />
              <span>TECHNOLOGY INSPECTOR</span>
            </div>

            {inspectedSkill ? (
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-400 font-mono">SELECTED TECHNOLOGY:</div>
                  <h4 className="text-xl font-bold text-white mt-0.5">{inspectedSkill.name}</h4>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Proficiency Standard:</span>
                    <span className="font-mono text-emerald-400 font-bold">{inspectedSkill.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Application Mode:</span>
                    <span className="font-mono text-purple-300">Production Systems</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-mono mb-1.5">ENGINEERING APPLICATION:</div>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/60 p-3 rounded-lg border border-slate-700/60">
                    {inspectedSkill.usage}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    Chosen for maintainability, type-soundness, and long-term production reliability.
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-slate-400">
                Click any technology tile on the left to inspect architectural details.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
