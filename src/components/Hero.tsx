import React, { useState } from 'react';
import { Play, Download, Mail, ExternalLink, Globe, Code2, BarChart3, Settings, MapPin, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { WhatsAppIcon } from './WhatsAppButton';
import confetti from 'canvas-confetti';

const WHATSAPP_URL = 'https://wa.me/919398961621?text=Hello%20Mahesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20job%20opportunity%20or%20collaboration.';

export const Hero: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);
  const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#8B5CF6', '#3B82F6', '#A855F7', '#60A5FA'],
    });
  };

  const activePhotoSrc = '/profile.png';

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 md:pt-44 pb-16 md:pb-20 overflow-hidden bg-white dark:bg-[#06080F] transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-16 right-12 w-[550px] h-[550px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Decorative Neon Sign in top right background */}
      <div className="hidden 2xl:block absolute top-24 right-16 p-3.5 rounded-xl border border-purple-300 dark:border-purple-500/40 bg-purple-50/80 dark:bg-[#0B0E1B]/70 backdrop-blur-md shadow-xs dark:shadow-[0_0_30px_rgba(168,85,247,0.25)] rotate-3 pointer-events-none z-0">
        <span className="text-[11px] font-mono tracking-widest text-purple-700 dark:text-purple-400 font-black uppercase block leading-tight text-center">
          DISCIPLINE<br />BUILDS<br />FREEDOM
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Intro & Headline (5.5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-5">
            {/* Availability & Location Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to Suitable Opportunities</span>
              </div>

              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#11182B] dark:text-white tracking-tight leading-[1.08]">
              Hi, I’m <br />
              Mahesh{' '}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                Raja
              </span>
            </h1>

            {/* Role & Headline */}
            <div className="space-y-1">
              <h2 className="text-base sm:text-lg font-bold text-purple-700 dark:text-purple-300 tracking-tight">
                AI / Software Engineer · Full-Stack &amp; Systems
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-300 leading-relaxed max-w-lg">
                Computer Science &amp; Engineering graduate (IARE '26, CGPA 7.38) specializing in Python backend architecture, applied AI/ML systems, and robust full-stack web platforms.
              </p>
            </div>

            {/* 4 Action Buttons: View Projects, Download Resume, Contact Me, WhatsApp Me */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 w-full">
              <a
                href="#projects"
                onClick={triggerConfetti}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md dark:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all group cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>View Projects</span>
              </a>

              <a
                href="/Mahesh_Raja_Resume.pdf"
                download="Mahesh_Raja_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#CBD5E1] dark:border-slate-700 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-purple-500/50 text-[#11182B] dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-900/80 dark:hover:bg-slate-800 text-[#11182B] dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                aria-label="WhatsApp Mahesh Raja directly"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Social Links & Script Doodle */}
            <div className="pt-2 w-full flex items-center justify-between relative">
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/maheshraja12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-700 dark:hover:text-white hover:border-purple-500/50 transition-all shadow-xs"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com/in/garidepalli-mahesh-raja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-500" />
                </a>

                <a
                  href="https://vercel.com/maheshraja12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-700 dark:hover:text-white hover:border-purple-500/50 transition-all shadow-xs"
                  aria-label="Vercel Projects"
                  title="Vercel Projects"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="mailto:maheshrajagaridepalli954@gmail.com"
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-700 dark:hover:text-white hover:border-purple-500/50 transition-all shadow-xs"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsResumePreviewOpen(true)}
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white hover:bg-slate-100 dark:bg-[#0D121F] dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-700 dark:hover:text-white hover:border-purple-500/50 transition-all shadow-xs cursor-pointer"
                  aria-label="Preview Resume Document"
                  title="Preview Resume"
                >
                  <Eye className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </button>
              </div>

              {/* Hand-drawn style doodle text pointing to portrait */}
              <div className="hidden sm:flex items-center gap-1.5 text-purple-800 dark:text-purple-300 font-mono text-xs font-semibold italic pr-2 select-none">
                <span>Turning Ideas into Impact!</span>
                <span className="text-lg">⤴</span>
              </div>
            </div>
          </div>

          {/* Center Column: Dedicated Profile Photo with Neon Glow Ring (3.5 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            {/* Outer Circular Neon Glow Ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1 ring-4 ring-purple-500 dark:ring-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.35)] dark:shadow-[0_0_65px_rgba(168,85,247,0.6),inset_0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center bg-purple-50 dark:bg-[#090D18] overflow-hidden group">
              {!photoError ? (
                <div className="relative w-full h-full overflow-hidden rounded-full">
                  <img
                    src={activePhotoSrc}
                    alt="Garidepalli Mahesh Raja"
                    width={320}
                    height={320}
                    fetchPriority="high"
                    onError={() => setPhotoError(true)}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-b from-purple-100 to-indigo-50 dark:from-[#13192B] dark:to-[#0A0D17] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-20 h-20 rounded-2xl bg-white dark:bg-purple-950/70 border border-purple-300 dark:border-purple-500/50 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-3 shadow-md">
                    <span className="text-2xl font-black">MR</span>
                  </div>
                  <span className="text-xs font-bold text-[#11182B] dark:text-white tracking-wide">
                    Mahesh Raja
                  </span>
                </div>
              )}

              {/* Floating Rocket Emoji Badge */}
              <div 
                className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/95 dark:bg-[#0B0E1B]/95 backdrop-blur-md border border-purple-300 dark:border-purple-500/60 shadow-md dark:shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center text-sm z-20 pointer-events-none select-none"
                aria-hidden="true"
              >
                <span className="leading-none flex items-center justify-center">🚀</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Code Card & Stacked Tech Pillars (3.5 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 relative">
            
            {/* 1. Floating Code Card */}
            <div className="rounded-2xl bg-[#0D121F] border border-slate-800 p-4 shadow-xl text-left hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="font-mono text-[11px] leading-relaxed text-slate-300 space-y-0.5">
                <p>
                  <span className="text-purple-400 font-semibold">const</span>{' '}
                  <span className="text-blue-400 font-bold">engineer</span> = &#123;
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">name</span>: <span className="text-emerald-400">"Mahesh Raja"</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">role</span>: <span className="text-emerald-400">"AI / Software Eng"</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">stack</span>: [
                  <span className="text-amber-300">"Python"</span>,{' '}
                  <span className="text-amber-300">"Node.js"</span>,{' '}
                  <span className="text-amber-300">"React"</span>],
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">status</span>: <span className="text-emerald-400">"Available"</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>

            {/* 2. Stacked Tech Pillars */}
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800 shadow-xs hover:border-purple-400 dark:hover:border-purple-500/40 transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#11182B] dark:text-slate-200">AI / Machine Learning</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800 shadow-xs hover:border-blue-400 dark:hover:border-blue-500/40 transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#11182B] dark:text-slate-200">&lt;/&gt; Full-Stack &amp; APIs</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#11182B] dark:text-slate-200">Data &amp; Automation</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800 shadow-xs hover:border-violet-400 dark:hover:border-violet-500/40 transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <Settings className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#11182B] dark:text-slate-200">Systems &amp; DevOps</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Resume In-Page Preview Modal */}
      {isResumePreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsResumePreviewOpen(false)}
        >
          <div
            className="bg-white dark:bg-[#0D121F] rounded-3xl border border-[#E4EAF5] dark:border-slate-800 max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-preview-title"
          >
            <div className="p-4 sm:p-5 border-b border-[#E4EAF5] dark:border-slate-800 flex items-center justify-between bg-[#F8FAFC] dark:bg-[#121829]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 id="resume-preview-title" className="text-sm sm:text-base font-bold text-[#11182B] dark:text-white">
                  Resume Document Preview · Garidepalli Mahesh Raja
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/Mahesh_Raja_Resume.pdf"
                  download="Mahesh_Raja_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsResumePreviewOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close resume preview"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex-1 w-full bg-slate-100 dark:bg-slate-900">
              <iframe
                src="/Mahesh_Raja_Resume.pdf"
                title="Garidepalli Mahesh Raja Resume"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
