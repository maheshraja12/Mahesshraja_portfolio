import React from 'react';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Project } from '../types/portfolio';
import { ProjectVisual } from './ProjectVisuals';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const hasLive = Boolean(project.liveUrl);
  const hasGithub = Boolean(project.githubUrl);

  return (
    <div className="h-full flex flex-col justify-between overflow-hidden group bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs hover:shadow-xl dark:hover:border-purple-500/40 dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 rounded-2xl">
      {/* 1. Visual Thumbnail Area (Fixed Height) */}
      <div 
        className="relative w-full h-48 sm:h-52 shrink-0 overflow-hidden bg-slate-950 cursor-pointer"
        onClick={() => onOpenCaseStudy(project)}
      >
        {project.image ? (
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-[#0D121F] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          </div>
        ) : (
          <ProjectVisual type={project.visualType} />
        )}
        
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#0D121F]/90 text-xs font-bold text-slate-800 dark:text-white shadow-xl border border-purple-300 dark:border-purple-500/40 flex items-center gap-1.5 backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5 text-purple-600 dark:text-[#A855F7]" />
            <span>View Full Case Study</span>
          </span>
        </div>
      </div>

      {/* 2. Content Body (Uniform section heights to keep all cards locked into perfect alignment) */}
      <div className="p-5 flex flex-col flex-1">
        {/* Standardized Title Container: 2-line height locked */}
        <div className="h-12 sm:h-14 flex items-start mb-2">
          <h3 
            onClick={() => onOpenCaseStudy(project)}
            className="text-sm sm:text-base font-bold text-[#11182B] dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors cursor-pointer leading-snug line-clamp-2"
            title={project.title}
          >
            {project.title}
          </h3>
        </div>

        {/* Standardized Description Container: High contrast & 2-line clamp */}
        <div className="h-10 sm:h-11 flex items-start mb-3">
          <p 
            className="text-xs sm:text-[13px] text-[#475569] dark:text-slate-300 leading-relaxed line-clamp-2 overflow-hidden text-ellipsis break-normal"
            title={project.description}
          >
            {project.description}
          </p>
        </div>

        {/* Standardized Tag Row: Single row with overflow hidden to prevent jagged wraps */}
        <div className="h-7 overflow-hidden flex items-center gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-purple-700 border border-slate-200 dark:bg-slate-800/80 dark:text-purple-200 dark:border-slate-700/60 shrink-0 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3. Pinned Action Buttons: Guaranteed zero duplicate buttons & uniform visual weight */}
        <div className="mt-auto pt-4 border-t border-[#E4EAF5] dark:border-slate-800/80 w-full flex items-center">
          {/* Case 1: Both Live Demo and GitHub exist (e.g. SV Real Estate) */}
          {hasLive && hasGithub && (
            <div className="flex items-center gap-2 w-full">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-[#11182B] dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          )}

          {/* Case 2: Only GitHub exists (e.g. CleanSweep, AEGIS, JARVIS) */}
          {!hasLive && hasGithub && (
            <div className="flex items-center gap-2 w-full">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-[#11182B] dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project)}
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Case 3: Only Live Demo exists (e.g. FSindhu App) */}
          {hasLive && !hasGithub && (
            <div className="flex items-center gap-2 w-full">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project)}
                className="flex-1 py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-[#11182B] dark:text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Case 4: Neither Live nor GitHub exists (e.g. Intelligent Loan, Business Analytics, Lung Cancer) */}
          {/* Centered button with max-width matching the primary buttons on companion cards */}
          {!hasLive && !hasGithub && (
            <div className="flex justify-center w-full">
              <button
                type="button"
                onClick={() => onOpenCaseStudy(project)}
                className="w-full max-w-[170px] py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <span>Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
