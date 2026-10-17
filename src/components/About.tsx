import React from 'react';
import { Hammer, Lightbulb, BookOpen, Check, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F7F9FF] dark:bg-[#0B0F19] border-y border-[#E4EAF5] dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F5FF] dark:bg-[#151D33] border border-[#E4EAF5] dark:border-slate-800 text-[#3563FF] dark:text-[#6D8BFF] text-xs font-bold tracking-wider uppercase mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
            Building technology that solves real problems.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536078] dark:text-slate-300 leading-relaxed">
            I am an early-career software engineer based in Hyderabad, India, with a strong focus on Python, applied AI/ML systems, full-stack web platforms, and data automation. I believe software engineering is at its best when it moves beyond theory and delivers reliable, user-friendly, and maintainable software.
          </p>
        </div>

        {/* 3 Core Pillars: Build, Solve, Learn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Build */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#101626] border border-[#E4EAF5] dark:border-slate-800 shadow-sm hover:border-[#3563FF]/40 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#3563FF] dark:text-blue-400 flex items-center justify-center mb-5">
              <Hammer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#11182B] dark:text-white mb-2">
              Build
            </h3>
            <p className="text-sm text-[#536078] dark:text-slate-300 leading-relaxed">
              Turn ideas into functional applications. Whether architecting a real estate platform with SQLite and Express or writing an 8-stage self-healing Python engine, I take pride in shipping working software.
            </p>
          </div>

          {/* Solve */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#101626] border border-[#E4EAF5] dark:border-slate-800 shadow-sm hover:border-[#7655FF]/40 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-950/50 text-[#7655FF] dark:text-violet-400 flex items-center justify-center mb-5">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#11182B] dark:text-white mb-2">
              Solve
            </h3>
            <p className="text-sm text-[#536078] dark:text-slate-300 leading-relaxed">
              Approach problems methodically. I break complex systems down into clear workflows—handling missing values and outliers in data, implementing database fallback pipelines, or isolating AST checks.
            </p>
          </div>

          {/* Learn */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#101626] border border-[#E4EAF5] dark:border-slate-800 shadow-sm hover:border-cyan-500/40 transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#11182B] dark:text-white mb-2">
              Learn
            </h3>
            <p className="text-sm text-[#536078] dark:text-slate-300 leading-relaxed">
              Explore new tools and engineering practices. I actively research stain-invariant deep learning architectures, explore modern agent orchestration, and refine my full-stack skills with hands-on practice.
            </p>
          </div>
        </div>

        {/* Detailed Areas of Focus & Quick Facts */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#101626] border border-[#E4EAF5] dark:border-slate-800 shadow-xs">
          <h3 className="text-base sm:text-lg font-bold text-[#11182B] dark:text-white mb-6">
            Key Technical Interests & Practical Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#3563FF] dark:text-[#6D8BFF] uppercase tracking-wider">
                Full-Stack Web Engineering
              </h4>
              <p className="text-xs text-[#536078] dark:text-slate-300 leading-relaxed">
                Building responsive frontend interfaces using React, Tailwind CSS, and EJS templates, accompanied by solid Express, Node.js, and Flask backend APIs.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#7655FF] dark:text-violet-400 uppercase tracking-wider">
                AI & Machine Learning
              </h4>
              <p className="text-xs text-[#536078] dark:text-slate-300 leading-relaxed">
                Hands-on model development with TensorFlow and Keras, CNN feature extraction for medical imaging, and integrating LLMs into practical automated workflows.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Data Processing & Automation
              </h4>
              <p className="text-xs text-[#536078] dark:text-slate-300 leading-relaxed">
                End-to-end dataset cleaning pipelines with pandas, outlier detection with scikit-learn, and database integrations spanning SQLite, PostgreSQL, and Supabase.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E4EAF5] dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#536078] dark:text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#3563FF]" />
              <span>Location: Hyderabad, Telangana, India</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#7655FF]" />
              <span>Education: B.Tech in CSE (IARE)</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-500" />
              <span>Open to Software & AI Engineering Roles</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
