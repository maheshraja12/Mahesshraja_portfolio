import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8FAFC] dark:bg-[#06080F] border-t border-[#E4EAF5] dark:border-slate-900 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E4EAF5] dark:border-slate-800/80">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              MR
            </div>
            <div>
              <span className="font-bold text-sm text-[#11182B] dark:text-white block leading-tight">
                Garidepalli Mahesh Raja
              </span>
              <span className="text-[11px] text-[#64748B] dark:text-slate-400">
                AI Software Engineer · Hyderabad, India
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#64748B] dark:text-slate-400">
            <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Experience</a>
            <a href="#research" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Research</a>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
          </div>

          {/* Right Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/maheshraja12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white hover:border-purple-500/50 transition-all shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:maheshrajagaridepalli954@gmail.com"
              className="p-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white hover:border-purple-500/50 transition-all shadow-xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://vercel.com/maheshraja12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-purple-700 dark:hover:text-white hover:border-purple-500/50 transition-all shadow-xs"
              aria-label="Vercel Projects"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-500/50 transition-all shadow-xs cursor-pointer ml-2"
              aria-label="Scroll to top of page"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Garidepalli Mahesh Raja. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Crafted with precision & modern aesthetics</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_6px_#A855F7]" />
            <span>React · TypeScript · Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
