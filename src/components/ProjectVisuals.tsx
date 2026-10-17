import React from 'react';
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Mic, 
  Heart, 
  Activity, 
  Calculator, 
  BarChart2, 
  CheckCircle, 
  FileSpreadsheet, 
  Terminal, 
  Cpu, 
  Zap, 
  Calendar,
  Layers
} from 'lucide-react';

interface VisualProps {
  type: string;
}

export const ProjectVisual: React.FC<VisualProps> = ({ type }) => {
  switch (type) {
    case 'real-estate':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-[#111A2E] dark:to-[#17233E] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#1A253E]/90 text-[#3563FF] border border-[#3563FF]/20 shadow-xs">
              Hyderabad Properties
            </span>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SQLite WAL Active</span>
            </div>
          </div>

          {/* Mini Real Estate UI Mockup */}
          <div className="z-10 bg-white/95 dark:bg-[#121A2C]/95 p-3 rounded-xl border border-[#E4EAF5] dark:border-slate-700/60 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#3563FF]" />
                <span className="text-xs font-bold text-[#11182B] dark:text-white">Madhapur Premium Villa</span>
              </div>
              <span className="text-xs font-black text-[#3563FF] dark:text-blue-400">₹1.85 Cr</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[10px] text-[#536078] dark:text-slate-300">
              <span className="bg-[#F1F5FF] dark:bg-slate-800 px-1.5 py-0.5 rounded text-center">4 BHK · 3,400 sq.ft</span>
              <span className="bg-[#F1F5FF] dark:bg-slate-800 px-1.5 py-0.5 rounded text-center">Gated Society</span>
              <span className="bg-blue-50 dark:bg-blue-900/40 text-[#3563FF] dark:text-blue-300 font-medium px-1.5 py-0.5 rounded text-center">Enquiry Modal</span>
            </div>
          </div>

          {/* Background subtle graphic */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#3563FF]/10 dark:bg-[#3563FF]/20 rounded-full blur-xl pointer-events-none" />
        </div>
      );

    case 'clean-sweep':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-[#0B1E1A] dark:to-[#112F29] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#163832]/90 text-emerald-700 dark:text-emerald-300 border border-emerald-300/30 shadow-xs">
              CSV Pipeline
            </span>
            <span className="text-[10px] text-teal-700 dark:text-teal-300 font-mono bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
              100k Row Cap
            </span>
          </div>

          {/* Mini Data Cleaner Metrics */}
          <div className="z-10 bg-white/95 dark:bg-[#0D2621]/95 p-3 rounded-xl border border-[#E4EAF5] dark:border-slate-700/60 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Quality Audit Report</span>
              </span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">98.4% Clean</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[10px] font-mono">
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-1 rounded text-center">
                <div className="text-[#536078] dark:text-slate-400 text-[9px]">Duplicates</div>
                <div className="font-bold text-emerald-700 dark:text-emerald-300">-128 rows</div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-1 rounded text-center">
                <div className="text-[#536078] dark:text-slate-400 text-[9px]">Imputed</div>
                <div className="font-bold text-emerald-700 dark:text-emerald-300">Mean/Mode</div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-1 rounded text-center">
                <div className="text-[#536078] dark:text-slate-400 text-[9px]">IQR Trim</div>
                <div className="font-bold text-emerald-700 dark:text-emerald-300">Outliers 0</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      );

    case 'aegis':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-[#131627] dark:to-[#1D213A] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#1E233E]/90 text-indigo-600 dark:text-indigo-300 border border-indigo-300/30 shadow-xs">
              8-Stage Self-Healing Engine
            </span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
              AST Sandbox
            </span>
          </div>

          {/* 8-Stage Pipeline Miniature */}
          <div className="z-10 bg-white/95 dark:bg-[#14182B]/95 p-3 rounded-xl border border-[#E4EAF5] dark:border-slate-700/60 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                <span>Incident Patch Verifier</span>
              </span>
              <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">GPT-4o / Heuristic</span>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 dark:text-slate-400 pt-1">
              <span className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">1. Ingest</span>
              <span>→</span>
              <span className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">2. AST Check</span>
              <span>→</span>
              <span className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">3. Consensus</span>
              <span>→</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">4. Telemetry</span>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      );

    case 'jarvis':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-violet-50 to-purple-100 dark:from-[#17102A] dark:to-[#22183D] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#251A44]/90 text-[#7655FF] dark:text-violet-300 border border-violet-300/30 shadow-xs">
              Local Voice Assistant HUD
            </span>
            <span className="text-[10px] text-violet-700 dark:text-violet-300 font-mono bg-violet-50 dark:bg-violet-950/60 px-2 py-0.5 rounded border border-violet-200 dark:border-violet-800">
              127.0.0.1:8000
            </span>
          </div>

          {/* Voice Waveform and Memory Indicator */}
          <div className="z-10 bg-white/95 dark:bg-[#1A1230]/95 p-3 rounded-xl border border-[#E4EAF5] dark:border-slate-700/60 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5 text-[#7655FF]" />
                <span>Audio Waveform Capture</span>
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Loopback Bound</span>
            </div>
            {/* Simulated Animated Waveform */}
            <div className="flex items-center justify-center gap-1 h-5 pt-1">
              {[40, 75, 25, 90, 60, 100, 45, 80, 30, 95, 50, 70, 35].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-1 bg-gradient-to-t from-[#7655FF] to-[#3563FF] rounded-full"
                />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-violet-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      );

    case 'fsindhu':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-[#261019] dark:to-[#381625] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#3A1828]/90 text-rose-600 dark:text-rose-300 border border-rose-300/30 shadow-xs">
              Personalized Web App
            </span>
            <span className="text-[10px] text-rose-600 dark:text-rose-300 font-medium bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-800">
              Vercel Deployed
            </span>
          </div>

          <div className="z-10 bg-white/95 dark:bg-[#2A111E]/95 p-3 rounded-xl border border-[#E4EAF5] dark:border-slate-700/60 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>Interactive Celebration Experience</span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-[10px] text-[#536078] dark:text-slate-300 leading-snug">
              Bespoke birthday gift application with custom chapter navigation, particle animations, and tailored UX.
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-rose-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      );

    case 'cancer-ai':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-[#0E1B26] dark:to-[#142B3E] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#152F43]/90 text-cyan-700 dark:text-cyan-300 border border-cyan-300/30 shadow-xs">
              Research Prototype
            </span>
            <span className="text-[10px] text-cyan-700 dark:text-cyan-300 font-semibold bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800">
              ICCET 2026
            </span>
          </div>

          <div className="z-10 bg-white/95 dark:bg-[#102230]/95 p-3 rounded-xl border border-[#E4EAF5] dark:border-slate-700/60 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-600" />
                <span>Stain-Invariant Histopathology</span>
              </span>
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">CNN Model</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-[9px] text-center font-mono">
              <span className="bg-cyan-50 dark:bg-cyan-950/50 p-1 rounded text-cyan-800 dark:text-cyan-300">Stain Norm</span>
              <span className="bg-cyan-50 dark:bg-cyan-950/50 p-1 rounded text-cyan-800 dark:text-cyan-300">Nuclear Atypia</span>
              <span className="bg-cyan-50 dark:bg-cyan-950/50 p-1 rounded text-cyan-800 dark:text-cyan-300">Keras / TF</span>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      );

    case 'loan-system':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-[#241A0E] dark:to-[#382613] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#3A2914]/90 text-amber-700 dark:text-amber-300 border border-amber-300/30 shadow-xs">
              Financial Engine
            </span>
            <span className="text-[10px] text-amber-700 dark:text-amber-300 font-mono bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
              Concept
            </span>
          </div>

          <div className="z-10 bg-white/95 dark:bg-[#281C0F]/95 p-3 rounded-xl border border-[#E4EAF5] dark:border-slate-700/60 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-amber-600" />
                <span>EMI & Tenure Calculator</span>
              </span>
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">Reducing Balance</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[10px] font-mono text-center">
              <div className="bg-amber-50 dark:bg-amber-950/40 p-1 rounded">
                <span className="text-[9px] text-[#536078] dark:text-slate-400">Tenure Curve</span>
                <div className="font-bold text-amber-800 dark:text-amber-200">15 / 20 / 30 Yrs</div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/40 p-1 rounded">
                <span className="text-[9px] text-[#536078] dark:text-slate-400">Interest Ratio</span>
                <div className="font-bold text-amber-800 dark:text-amber-200">Net Amortization</div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      );

    case 'analytics-dash':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-sky-100 dark:from-[#0E182A] dark:to-[#142642] p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-[#172A47]/90 text-sky-700 dark:text-sky-300 border border-sky-300/30 shadow-xs">
              BI Dashboard & Forecasting
            </span>
            <span className="text-[10px] text-sky-700 dark:text-sky-300 font-mono bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-800">
              Power Query · SPSS
            </span>
          </div>

          <div className="z-10 bg-white/95 dark:bg-[#112037]/95 p-3 rounded-xl border border-[#E4EAF5] dark:border-slate-700/60 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Executive KPI Scorecard</span>
              </span>
              <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400">SQL + Excel Pivot</span>
            </div>
            {/* Visual mini bar charts */}
            <div className="flex items-end justify-between h-5 gap-1.5 pt-1">
              {[45, 65, 80, 55, 95, 75, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-sky-200 dark:bg-sky-900/60 rounded-t h-full flex items-end">
                  <div style={{ height: `${h}%` }} className="w-full bg-sky-600 dark:bg-sky-400 rounded-t" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
        </div>
      );

    default:
      return (
        <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 p-4 flex items-center justify-center">
          <Terminal className="w-8 h-8 text-slate-400" />
        </div>
      );
  }
};
