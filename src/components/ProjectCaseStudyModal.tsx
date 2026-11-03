import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck, Cpu, Layers, GitBranch, Lightbulb, Compass, Award } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Project } from '../types/portfolio';
import { ProjectVisual } from './ProjectVisuals';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-4xl my-6 bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-[#E4EAF5] dark:border-slate-800 flex items-start justify-between bg-[#F8FAFC] dark:bg-[#121829]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
                {project.category.toUpperCase()}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {project.statusBadge}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                Type: {project.projectType}
              </span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-[#11182B] dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-[#11182B] dark:text-slate-200">
          {/* Visual Banner */}
          <div className="rounded-2xl overflow-hidden border border-[#E4EAF5] dark:border-slate-800 bg-slate-950 relative">
            {project.image ? (
              <div className="relative w-full h-52 sm:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-[#0D121F] via-transparent to-transparent opacity-60" />
              </div>
            ) : (
              <ProjectVisual type={project.visualType} />
            )}
          </div>

          {/* Why I Built It & My Individual Contribution */}
          {(caseStudy.whyBuilt || caseStudy.myContribution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.whyBuilt && (
                <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 font-bold text-xs uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Why I Built This Project</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                    {caseStudy.whyBuilt}
                  </p>
                </div>
              )}

              {caseStudy.myContribution && (
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>My Individual Contribution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                    {caseStudy.myContribution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Implemented Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Diagram Steps */}
          {caseStudy.architectureDiagram && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  <span>Technical Architecture Pipeline</span>
                </h4>
                <span className="text-[10px] text-slate-500 font-mono">
                  {caseStudy.architectureDiagram.title}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {caseStudy.architectureDiagram.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80 space-y-1.5 relative overflow-hidden group hover:border-purple-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-1.5 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                      {step.tag && (
                        <span className="text-[9px] font-semibold text-slate-500 uppercase">
                          {step.tag}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-[#11182B] dark:text-white">
                      {step.name}
                    </div>
                    <p className="text-[11px] text-[#475569] dark:text-slate-400 leading-normal">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Rationale */}
          {caseStudy.technologiesRationale && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Why These Technologies Were Chosen</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {caseStudy.technologiesRationale.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80 text-xs"
                  >
                    <span className="font-bold text-[#11182B] dark:text-white block mb-0.5">
                      {item.tech}
                    </span>
                    <span className="text-[11px] text-[#475569] dark:text-slate-400 leading-relaxed block">
                      {item.reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Features & Functional Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80 text-xs text-[#475569] dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges & Practical Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="space-y-2">
              <h5 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Technical Challenges Overcome
              </h5>
              <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80">
                {caseStudy.challenges}
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">
                Boundaries & Practical Limitations
              </h5>
              <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80">
                {caseStudy.limitations}
              </p>
            </div>
          </div>

          {/* What I Learned & Future Improvements */}
          {(caseStudy.lessonsLearned || caseStudy.futureImprovements) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.lessonsLearned && (
                <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>What I Learned</span>
                  </div>
                  <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed">
                    {caseStudy.lessonsLearned}
                  </p>
                </div>
              )}

              {caseStudy.futureImprovements && (
                <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Planned Future Improvements</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#475569] dark:text-slate-300">
                    {caseStudy.futureImprovements.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-500">•</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Testing & Verification Note */}
          {(caseStudy.testingDeployment || caseStudy.testingNote) && (
            <div className="text-xs p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40 text-purple-900 dark:text-purple-200 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>
                <strong>Testing & Verification:</strong> {caseStudy.testingDeployment || caseStudy.testingNote}
              </span>
            </div>
          )}
        </div>

        {/* Footer with Action Links */}
        <div className="p-4 sm:p-6 border-t border-[#E4EAF5] dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#121829] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md dark:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Live Application</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white hover:bg-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-[#11182B] dark:text-slate-200 hover:text-purple-600 dark:hover:text-white text-xs font-semibold transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#64748B] dark:text-slate-300 hover:text-[#11182B] dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
