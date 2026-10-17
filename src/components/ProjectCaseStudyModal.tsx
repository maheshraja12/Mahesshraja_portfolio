import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck, Cpu, Layers } from 'lucide-react';
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-[#E4EAF5] dark:border-slate-800 flex items-start justify-between bg-[#F8FAFC] dark:bg-[#121829]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
                {project.category.toUpperCase()}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {project.statusBadge}
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
        <div className="p-6 overflow-y-auto space-y-6 text-[#11182B] dark:text-slate-200">
          {/* Visual Banner */}
          <div className="rounded-2xl overflow-hidden border border-[#E4EAF5] dark:border-slate-800 bg-slate-950 relative">
            {project.image ? (
              <div className="relative w-full h-56 sm:h-72">
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

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Implemented Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Architectural Components</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.caseStudy.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80 text-xs text-[#475569] dark:text-slate-300 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5 shadow-[0_0_8px_#A855F7]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Features & Functional Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.caseStudy.keyFeatures.map((feat, idx) => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <h5 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Technical Challenges Overcome
              </h5>
              <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80">
                {project.caseStudy.challenges}
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider">
                Boundaries & Practical Limitations
              </h5>
              <p className="text-xs text-[#475569] dark:text-slate-300 leading-relaxed p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800/80">
                {project.caseStudy.limitations}
              </p>
            </div>
          </div>

          {/* Testing Note */}
          {project.caseStudy.testingNote && (
            <div className="text-xs p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40 text-purple-900 dark:text-purple-200 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>
                <strong>Testing & Verification:</strong> {project.caseStudy.testingNote}
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
