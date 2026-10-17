import React from 'react';
import { Briefcase, GraduationCap, ArrowRight, FileText, Sparkles, Lightbulb, BookOpen, Rocket } from 'lucide-react';
import { experienceData, educationData } from '../data/timeline';
import { researchPaper } from '../data/research';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#F8FAFC] dark:bg-[#06080F] border-t border-[#E4EAF5] dark:border-slate-900 transition-colors relative scroll-mt-24">
      <div id="about" className="absolute -top-24 scroll-mt-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Experience & Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
                JOURNEY
              </span>
              <h2 className="text-3xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
                Experience & Education
              </h2>
            </div>

            {/* Vertical Connected Timeline */}
            <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-slate-300 dark:before:to-slate-800">
              
              {/* 1. Internship */}
              {experienceData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing timeline node */}
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-950 border-2 border-purple-500 flex items-center justify-center shadow-xs dark:shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                    <Briefcase className="w-3 h-3 text-purple-600 dark:text-purple-300" />
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs dark:shadow-none hover:border-purple-500/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-[#11182B] dark:text-white">
                        {item.role}
                      </h3>
                      <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800/40 w-fit">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">
                      {item.organization}
                    </p>

                    <ul className="space-y-1.5 text-xs text-[#475569] dark:text-slate-400">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* 2. Education Items */}
              {educationData.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 border-2 border-indigo-500 flex items-center justify-center shadow-xs dark:shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                    <GraduationCap className="w-3 h-3 text-indigo-600 dark:text-indigo-300" />
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs dark:shadow-none hover:border-indigo-500/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-xs sm:text-sm font-bold text-[#11182B] dark:text-white">
                        {item.role}
                      </h3>
                      <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-300">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#64748B] dark:text-slate-400">{item.organization}</span>
                      {item.grade && (
                        <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
                          {item.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Column: Research & Beyond Code (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Top: Research Presentation Card matching screenshot */}
            <div id="research" className="scroll-mt-28">
              <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
                RESEARCH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11182B] dark:text-white tracking-tight mb-5">
                Conference Presentation
              </h2>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none hover:border-purple-500/50 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all relative group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-500/40 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 dark:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <FileText className="w-6 h-6" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-sm font-bold text-[#11182B] dark:text-white leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      {researchPaper.title}
                    </h3>
                    <p className="text-xs text-[#475569] dark:text-slate-400 leading-relaxed">
                      Presented at the 14th International Conference on Contemporary Engineering and Technology ({researchPaper.conference.includes('ICCET') ? 'ICCET 2026' : researchPaper.conference}). {researchPaper.date}.
                    </p>
                  </div>

                  <div className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: What Drives Me (Beyond Code) matching screenshot */}
            <div>
              <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
                BEYOND CODE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11182B] dark:text-white tracking-tight mb-5">
                What Drives Me
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none hover:border-purple-500/40 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#11182B] dark:text-white">Build</span>
                  <span className="text-[10px] text-[#64748B] dark:text-slate-400 mt-0.5">AI-Powered Products</span>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none hover:border-amber-500/40 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#11182B] dark:text-white">Solve</span>
                  <span className="text-[10px] text-[#64748B] dark:text-slate-400 mt-0.5">Real-World Problems</span>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none hover:border-blue-500/40 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#11182B] dark:text-white">Learn</span>
                  <span className="text-[10px] text-[#64748B] dark:text-slate-400 mt-0.5">New Technologies</span>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none hover:border-rose-500/40 transition-all flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-2">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#11182B] dark:text-white">Create</span>
                  <span className="text-[10px] text-[#64748B] dark:text-slate-400 mt-0.5">Positive Impact</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
