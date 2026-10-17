import React, { useState, useRef } from 'react';
import { Play, Download, Mail, ExternalLink, Globe, Code2, BarChart3, Settings, Camera, UploadCloud } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);
  const [localPhoto, setLocalPhoto] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mahesh_profile_preview');
    }
    return null;
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#8B5CF6', '#3B82F6', '#A855F7', '#60A5FA'],
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setLocalPhoto(result);
        localStorage.setItem('mahesh_profile_preview', result);
        setPhotoError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setLocalPhoto(result);
        localStorage.setItem('mahesh_profile_preview', result);
        setPhotoError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const activePhotoSrc = localPhoto || '/profile.png';

  return (
    <section
      id="hero"
      className="relative pt-36 sm:pt-44 md:pt-48 pb-16 md:pb-24 overflow-hidden bg-white dark:bg-[#06080F] transition-colors duration-200"
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
          
          {/* Left Column: Intro & Headline (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_8px_#A855F7]" />
              <span>AI SOFTWARE ENGINEER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#11182B] dark:text-white tracking-tight leading-[1.1]">
              Hi, I’m <br />
              Mahesh{' '}
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-400 dark:via-violet-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                Raja
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-base sm:text-lg font-semibold text-[#334155] dark:text-slate-200 tracking-tight leading-snug">
              I build real-world applications with AI, web technologies and data-driven solutions.
            </h2>

            {/* Authentic Description */}
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 max-w-lg leading-relaxed">
              Computer Science and Engineering graduate with a strong interest in AI/ML, full-stack development and automation. I turn ideas into useful products that solve real-world problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#projects"
                onClick={triggerConfetti}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all group cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>View My Projects</span>
              </a>

              <a
                href="/Mahesh_Raja_Resume.pdf"
                download="Mahesh_Raja_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#CBD5E1] dark:border-slate-700 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-purple-500/50 text-[#11182B] dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Script Doodle */}
            <div className="pt-2 w-full flex items-center justify-between relative">
              <div className="flex items-center gap-3">
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
              </div>

              {/* Hand-drawn style doodle text pointing to portrait */}
              <div className="hidden sm:flex items-center gap-1.5 text-purple-800 dark:text-purple-300 font-mono text-xs font-semibold italic pr-2 select-none">
                <span>Turning Ideas into Impact!</span>
                <span className="text-lg">⤴</span>
              </div>
            </div>
          </div>

          {/* Center Column: Dedicated Profile Photo Space with Neon Glow Ring (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            {/* Hidden file input for one-click photo upload */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Outer Circular Neon Glow Ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1 ring-4 ring-purple-500 dark:ring-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.35)] dark:shadow-[0_0_65px_rgba(168,85,247,0.6),inset_0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center bg-purple-50 dark:bg-[#090D18] overflow-hidden group">
              
              {!photoError ? (
                <div className="relative w-full h-full">
                  <img
                    src={activePhotoSrc}
                    alt="Garidepalli Mahesh Raja"
                    onError={() => {
                      if (!localPhoto) {
                        setPhotoError(true);
                      }
                    }}
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Interactive hover overlay */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-purple-300"
                    title="Click to change profile photo"
                  >
                    <Camera className="w-7 h-7 mb-1" />
                    <span className="text-[11px] font-bold text-white">Change Photo</span>
                    <span className="text-[9px] text-purple-300/80">Click to upload</span>
                  </div>
                </div>
              ) : (
                /* Profile Photo Placeholder Area */
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  className="w-full h-full rounded-full bg-gradient-to-b from-purple-100 to-indigo-50 dark:from-[#13192B] dark:to-[#0A0D17] flex flex-col items-center justify-center text-center p-6 relative cursor-pointer group/placeholder hover:bg-purple-200/50 dark:hover:bg-[#161D33] transition-all"
                  title="Click or drag an image here to preview your profile photo"
                >
                  <div className="w-36 h-36 rounded-full bg-purple-500/20 dark:bg-purple-600/25 blur-xl absolute -z-0" />
                  
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white dark:bg-purple-950/70 border border-purple-300 dark:border-purple-500/50 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-3 shadow-md dark:shadow-[0_0_25px_rgba(168,85,247,0.35)] group-hover/placeholder:scale-105 transition-all">
                    <Camera className="w-9 h-9" />
                  </div>

                  <span className="relative z-10 text-xs font-bold text-[#11182B] dark:text-white tracking-wide">
                    Mahesh Raja
                  </span>
                  <span className="relative z-10 text-[10px] text-purple-700 dark:text-purple-300/90 mt-1 flex items-center gap-1">
                    <UploadCloud className="w-3 h-3 text-purple-500" />
                    <span>Upload Profile Photo</span>
                  </span>
                </div>
              )}

              {/* Floating Rocket Emoji Badge at bottom center of circle */}
              <div 
                className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/95 dark:bg-[#0B0E1B]/95 backdrop-blur-md border border-purple-300 dark:border-purple-500/60 shadow-md dark:shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center text-sm z-20 pointer-events-none select-none"
                aria-hidden="true"
              >
                <span className="leading-none flex items-center justify-center">🚀</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Code Card & Stacked Tech Pillars (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4 relative">
            
            {/* 1. Floating Code Card (Developer Syntax Theme) */}
            <div className="rounded-2xl bg-[#0D121F] border border-slate-800 p-4 shadow-xl text-left hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="font-mono text-[11px] leading-relaxed text-slate-300 space-y-0.5">
                <p>
                  <span className="text-purple-400 font-semibold">const</span>{' '}
                  <span className="text-blue-400 font-bold">developer</span> = &#123;
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">name</span>: <span className="text-emerald-400">"Mahesh Raja"</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">role</span>: <span className="text-emerald-400">"AI Software Engineer"</span>,
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">skills</span>: [
                  <span className="text-amber-300">"Python"</span>,{' '}
                  <span className="text-amber-300">"Java"</span>,{' '}
                  <span className="text-amber-300">"AI/ML"</span>],
                </p>
                <p className="pl-3">
                  <span className="text-slate-400">goals</span>: <span className="text-emerald-400">"Build impactful solutions"</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>

            {/* 2. Stacked Tech Pillars with dual light & dark classes */}
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800 shadow-xs hover:border-purple-400 dark:hover:border-purple-500/40 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#11182B] dark:text-slate-200">AI / ML</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800 shadow-xs hover:border-purple-400 dark:hover:border-purple-500/40 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#11182B] dark:text-slate-200">&lt;/&gt; Full Stack</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800 shadow-xs hover:border-purple-400 dark:hover:border-purple-500/40 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#11182B] dark:text-slate-200">Data Analytics</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800 shadow-xs hover:border-purple-400 dark:hover:border-purple-500/40 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <Settings className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#11182B] dark:text-slate-200">Automation</span>
              </div>
            </div>

            {/* Dev Workstation status indicator */}
            <div className="hidden lg:flex items-center justify-end pr-2 pt-1 opacity-80">
              <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-purple-300/80 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Dev Workstation · Hyderabad</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
