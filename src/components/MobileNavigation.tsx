import React from 'react';
import { X, Download, ExternalLink, Mail } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { ThemeToggle } from './ThemeToggle';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  navItems: { label: string; href: string }[];
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  activeSection,
  navItems,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-xs h-full bg-white dark:bg-[#0D121F] border-l border-[#E4EAF5] dark:border-slate-800 shadow-2xl flex flex-col p-6 z-10 transition-transform duration-300">
        <div className="flex items-center justify-between pb-6 border-b border-[#E4EAF5] dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              MR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-[#11182B] dark:text-white leading-tight">
                Mahesh Raja
              </span>
              <span className="text-[11px] text-purple-600 dark:text-purple-400">
                AI Software Engineer
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col py-6 space-y-2 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800/50 shadow-xs dark:shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                    : 'text-[#475569] hover:text-[#11182B] hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#A855F7]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#E4EAF5] dark:border-slate-800 flex flex-col gap-3">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-medium text-[#64748B] dark:text-slate-400">Theme</span>
            <ThemeToggle />
          </div>

          <a
            href="/Mahesh_Raja_Resume.pdf"
            download="Mahesh_Raja_Resume.pdf"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md dark:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://github.com/maheshraja12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:maheshrajagaridepalli954@gmail.com"
              className="p-2 text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white transition-colors"
              aria-label="Email Mahesh Raja"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://vercel.com/maheshraja12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white transition-colors"
              aria-label="Vercel Projects"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
