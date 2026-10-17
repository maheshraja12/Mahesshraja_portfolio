import React from 'react';
import { researchPaper } from '../data/research';
import { Award, BookOpen, AlertCircle, Calendar, Microscope, Layers, ShieldCheck } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-[#F7F9FF] dark:bg-[#0B0F19] border-y border-[#E4EAF5] dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5FF] dark:bg-[#151D33] border border-[#E4EAF5] dark:border-slate-800 text-[#3563FF] dark:text-[#6D8BFF] text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
            Conference Research Presentation
          </h2>
          <p className="mt-3 text-base text-[#536078] dark:text-slate-300 leading-relaxed">
            Presented technical research exploring deep learning methods for histopathological tissue evaluation.
          </p>
        </div>

        {/* Highlighted Research Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#101626] border border-[#E4EAF5] dark:border-slate-800 shadow-md relative overflow-hidden">
          
          {/* Top Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E4EAF5] dark:border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F1F5FF] dark:bg-[#1C2640] text-[#3563FF] dark:text-[#6D8BFF] border border-[#3563FF]/20 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Conference Presentation</span>
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                ICCET 2026
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[#536078] dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-[#3563FF]" />
              <span>{researchPaper.date}</span>
            </div>
          </div>

          {/* Research Title */}
          <div className="py-6 space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#11182B] dark:text-white tracking-tight leading-snug">
              {researchPaper.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#3563FF] dark:text-[#6D8BFF]">
              {researchPaper.conference}
            </p>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 pb-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#11182B] dark:text-slate-200 mb-2 flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-[#3563FF]" />
                  <span>Research Motivation</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#536078] dark:text-slate-300 leading-relaxed">
                  {researchPaper.motivation}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#11182B] dark:text-slate-200 mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#7655FF]" />
                  <span>Project Overview & Scope</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#536078] dark:text-slate-300 leading-relaxed">
                  {researchPaper.overview}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#11182B] dark:text-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Technical Approach & Methodology</span>
              </h4>
              <div className="space-y-2.5">
                {researchPaper.methodology.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F7F9FF] dark:bg-[#151D33] border border-[#E4EAF5]/80 dark:border-slate-800 text-xs text-[#536078] dark:text-slate-300 leading-relaxed"
                  >
                    <span className="font-bold text-[#11182B] dark:text-white mr-1">
                      {idx + 1}.
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Educational Disclaimer Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 dark:text-amber-300/90 leading-relaxed">
              {researchPaper.disclaimer}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
