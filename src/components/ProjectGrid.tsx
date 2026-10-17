import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Apps' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'data', label: 'Data' },
  { id: 'automation', label: 'Automation' },
];

export const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#F8FAFC] dark:bg-[#06080F] border-t border-[#E4EAF5] dark:border-slate-900 transition-colors duration-200 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
              Projects that Create Real Impact
            </h2>
          </div>

          {/* Filter Pills with dual theme classes */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-600 text-white shadow-sm dark:shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                      : 'text-[#64748B] hover:text-[#11182B] dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Case Study In-Depth Modal */}
      <ProjectCaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
