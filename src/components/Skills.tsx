import React, { useState } from 'react';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { skillGroups } from '../data/skills';

interface TechItem {
  name: string;
  category: string;
  color: string;
  badge: string;
}

const PRIMARY_TECHS: TechItem[] = [
  { name: 'Python', category: 'Backend & AI', color: 'from-blue-500 to-yellow-500', badge: '🐍' },
  { name: 'Java', category: 'OOP & Systems', color: 'from-red-500 to-amber-600', badge: '☕' },
  { name: 'JavaScript', category: 'Frontend & Node', color: 'from-yellow-400 to-amber-500', badge: 'JS' },
  { name: 'SQL', category: 'Databases', color: 'from-sky-500 to-blue-600', badge: '🗄️' },
  { name: 'React', category: 'Frontend UI', color: 'from-cyan-400 to-blue-500', badge: '⚛️' },
  { name: 'Node.js', category: 'Runtime', color: 'from-emerald-500 to-green-600', badge: '🟢' },
  { name: 'Express.js', category: 'Backend APIs', color: 'from-slate-400 to-slate-200', badge: 'ex' },
  { name: 'Flask', category: 'Python Web', color: 'from-indigo-400 to-purple-400', badge: '🧪' },
  { name: 'TensorFlow', category: 'Deep Learning', color: 'from-amber-500 to-orange-600', badge: '🔶' },
  { name: 'Keras', category: 'Neural Networks', color: 'from-rose-500 to-red-600', badge: 'K' },
  { name: 'OpenAI', category: 'LLM Agents', color: 'from-emerald-400 to-teal-500', badge: '🤖' },
  { name: 'Git', category: 'Version Control', color: 'from-orange-500 to-rose-500', badge: '🌿' },
  { name: 'Docker', category: 'Containers', color: 'from-blue-400 to-sky-500', badge: '🐳' },
  { name: 'Supabase', category: 'Cloud Postgres', color: 'from-emerald-400 to-teal-400', badge: '⚡' },
];

export const Skills: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#06080F] border-t border-[#E4EAF5] dark:border-slate-900 transition-colors scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
              TECHNICAL SKILLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
              Tools and Technologies I Work With
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E4EAF5] dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#0D121F] hover:border-purple-500/50 text-[#475569] dark:text-slate-300 hover:text-[#11182B] dark:hover:text-white text-xs font-semibold transition-all cursor-pointer shadow-xs self-start sm:self-auto"
          >
            <span>{showAll ? 'Collapse Breakdown' : 'View All Skills'}</span>
            {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />}
          </button>
        </div>

        {/* Primary Icon Shelf matching screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 mb-6">
          {PRIMARY_TECHS.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F]/90 backdrop-blur-md border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs dark:shadow-none hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#141A2B] border border-[#E4EAF5] dark:border-slate-700/60 flex items-center justify-center text-lg sm:text-xl mb-2.5 group-hover:scale-110 transition-transform shadow-xs dark:shadow-inner">
                {tech.badge}
              </div>
              <span className="text-xs font-bold text-[#11182B] dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-[#64748B] dark:text-slate-500 truncate w-full mt-0.5">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown when View All is toggled */}
        {showAll && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-[#E4EAF5] dark:border-slate-800/80 animate-in fade-in duration-300">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 space-y-3 shadow-xs dark:shadow-none"
              >
                <h3 className="text-sm font-bold text-[#11182B] dark:text-white flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-[10px] font-normal text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800/50">
                    {group.skills.length} skills
                  </span>
                </h3>
                <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                  {group.description}
                </p>
                <div className="space-y-1.5 pt-1">
                  {group.skills.map((s) => (
                    <div
                      key={s.name}
                      className="p-2 rounded-lg bg-white dark:bg-[#121829] border border-[#E4EAF5] dark:border-slate-800 flex items-center justify-between text-xs"
                    >
                      <span className="font-semibold text-[#11182B] dark:text-slate-200">{s.name}</span>
                      <span className="text-[10px] text-[#64748B] dark:text-slate-400">{s.context}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
