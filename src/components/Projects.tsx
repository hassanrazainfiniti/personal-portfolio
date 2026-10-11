import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, X, Check, Shield, Layers, Code, Zap } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full-Stack SaaS', 'Modern Web Application', 'Developer Tools'];

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedFilter.toLowerCase()) || p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#fafbfc] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-purple-700 uppercase mb-2">
            02. Portfolio Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Selected Work. Real Solutions.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            A selection of digital experiences built with attention to functionality, design, performance, and detail.
          </p>
        </div>

        {/* Category Filters (interactive segmented controls with click handlers) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl max-w-fit mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-lg hover:border-purple-200 transition-all duration-300"
            >
              {/* Project Image Container */}
              <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="w-full py-2 px-3 text-xs font-semibold text-white bg-purple-700/90 hover:bg-purple-700 rounded-lg backdrop-blur-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Architectural Deep-Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Tech strip */}
                  <div className="flex items-center gap-2 text-xs text-purple-700 font-semibold mb-2">
                    <span>{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Problem & Solution Snip */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-xs space-y-2">
                    <div>
                      <span className="font-semibold text-slate-800">Problem: </span>
                      <span className="text-slate-600">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-800">Solution: </span>
                      <span className="text-slate-600">{project.solution}</span>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Technologies (Clean unboxed metadata) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 mb-5">
                    {project.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="font-mono text-[11px] text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-sm">
                          {tech}
                        </span>
                        {tIdx < project.technologies.length - 1 && (
                          <span className="text-slate-300">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Case Study Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-900 transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="text-slate-500 hover:text-purple-700 transition-colors cursor-pointer"
                        title="Inspect Live Architecture"
                        aria-label="Inspect Live Architecture"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full-Screen Lightbox Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-700">
                <span className="font-bold">{activeModalProject.category}</span>
                <span>//</span>
                <span>Architectural Case Study</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Modal Cover Image */}
              <div className="aspect-16/9 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  {activeModalProject.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {activeModalProject.shortDescription}
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    The Challenge & Problem
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                  <h4 className="text-xs font-bold text-purple-800 uppercase tracking-wider mb-1.5">
                    Engineered Solution
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint Details */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key Technical Architectural Decisions
                </h4>
                <div className="space-y-2">
                  {activeModalProject.architectureDetails.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Callout */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between text-xs">
                <div>
                  <div className="text-slate-400 font-mono text-[10px] uppercase">
                    Observed System Impact
                  </div>
                  <div className="font-semibold text-slate-100 mt-0.5">
                    {activeModalProject.impact}
                  </div>
                </div>
                <Zap className="w-5 h-5 text-yellow-400 shrink-0" />
              </div>

              {/* Footer actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 border border-slate-200 flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
