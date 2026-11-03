import React from 'react';
import { Hammer, Lightbulb, BookOpen, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8FAFC] dark:bg-[#06080F] border-t border-[#E4EAF5] dark:border-slate-900 transition-colors scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
            Building technology that solves real problems.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#536078] dark:text-slate-300 leading-relaxed">
            I am an early-career software engineer based in Hyderabad, India, with a dedicated focus on Python backend architecture, applied AI/ML systems, full-stack web platforms, and automated data workflows. I believe software engineering is at its best when it moves beyond theory to deliver reliable, user-friendly, and maintainable systems.
          </p>
        </div>

        {/* 3 Core Pillars: Build, Solve, Learn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Build */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs hover:border-purple-500/50 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center mb-5">
              <Hammer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#11182B] dark:text-white mb-2">
              Build
            </h3>
            <p className="text-sm text-[#536078] dark:text-slate-300 leading-relaxed">
              Turn ideas into functional applications. Whether architecting a real estate platform with SQLite and Express or writing an 8-stage self-healing Python engine, I take pride in shipping verified, production-ready software.
            </p>
          </div>

          {/* Solve */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs hover:border-indigo-500/50 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center mb-5">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#11182B] dark:text-white mb-2">
              Solve
            </h3>
            <p className="text-sm text-[#536078] dark:text-slate-300 leading-relaxed">
              Approach challenges methodically. I break complex systems down into clear workflows—handling missing values and outliers in data, implementing database fallback pipelines, or isolating AST checks.
            </p>
          </div>

          {/* Learn */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center mb-5">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#11182B] dark:text-white mb-2">
              Learn
            </h3>
            <p className="text-sm text-[#536078] dark:text-slate-300 leading-relaxed">
              Explore modern tools and engineering practices. I actively research stain-invariant deep learning architectures, explore modern agent orchestration, and continuously refine my full-stack and systems skills.
            </p>
          </div>
        </div>

        {/* Detailed Areas of Focus & Quick Facts */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800/80 shadow-xs">
          <h3 className="text-base sm:text-lg font-bold text-[#11182B] dark:text-white mb-6">
            Key Technical Interests & Practical Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Full-Stack Web Engineering
              </h4>
              <p className="text-xs text-[#536078] dark:text-slate-300 leading-relaxed">
                Building responsive frontend interfaces using React, Tailwind CSS, and EJS templates, accompanied by resilient Express, Node.js, and Flask backend APIs.
              </p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                AI & Machine Learning
              </h4>
              <p className="text-xs text-[#536078] dark:text-slate-300 leading-relaxed">
                Hands-on model development with TensorFlow and Keras, CNN feature extraction for medical imaging, and integrating LLMs into practical automated workflows.
              </p>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Data Processing & Automation
              </h4>
              <p className="text-xs text-[#536078] dark:text-slate-300 leading-relaxed">
                End-to-end dataset cleaning pipelines with pandas, outlier detection with scikit-learn, and database integrations spanning SQLite, PostgreSQL, and Supabase.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E4EAF5] dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#536078] dark:text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>Location: Hyderabad, Telangana, India</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>Education: B.Tech in CSE (IARE) · CGPA 7.38/10</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Open to Software & AI Engineering Roles</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
