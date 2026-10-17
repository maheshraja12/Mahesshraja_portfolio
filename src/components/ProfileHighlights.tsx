import React from 'react';
import { Package, Briefcase, Monitor, GraduationCap } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Package,
    number: '8+',
    label: 'Projects Completed',
    glow: 'text-purple-600 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-950/40 dark:border-purple-800/60',
  },
  {
    icon: Briefcase,
    number: '1',
    label: 'Internship',
    glow: 'text-indigo-600 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-950/40 dark:border-indigo-800/60',
  },
  {
    icon: Monitor,
    number: '1',
    label: 'Conference Presentation',
    glow: 'text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-950/40 dark:border-blue-800/60',
  },
  {
    icon: GraduationCap,
    number: '2026',
    label: 'B.Tech Graduate',
    glow: 'text-violet-600 bg-violet-50 border-violet-200 dark:text-violet-400 dark:bg-violet-950/40 dark:border-violet-800/60',
  },
];

export const ProfileHighlights: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-20 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {HIGHLIGHTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-[#0D121F]/90 backdrop-blur-md border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs hover:shadow-md dark:hover:border-purple-500/40 dark:hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.glow}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#11182B] dark:text-white tracking-tight block">
                  {item.number}
                </span>
                <span className="text-xs font-medium text-[#64748B] dark:text-slate-400 leading-tight block mt-0.5">
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
