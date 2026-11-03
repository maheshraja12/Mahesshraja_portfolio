import React, { useState } from 'react';
import { Briefcase, GraduationCap, FileText, Download, Printer, X, Mail, Phone, ExternalLink, Check, Copy, Award, Code2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';

const WHATSAPP_URL = 'https://wa.me/919398961621?text=Hello%20Mahesh%2C%20I%20reviewed%20your%20Recruiter%20Snapshot%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity.';

export const RecruiterSnapshot: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('maheshrajagaridepalli954@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919398961621');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="recruiter-snapshot" className="py-12 bg-[#F1F5FF]/70 dark:bg-[#0A0E1A] border-y border-[#E4EAF5] dark:border-slate-800/80 transition-colors scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Recruiter Badge */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E4EAF5] dark:border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Recruiter Quick-View Snapshot</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
              Executive Engineering Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 mt-1 max-w-2xl">
              Compact technical briefing designed for technical recruiters, engineering managers, and talent partners evaluating early-career software talent.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md dark:shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Recruiter Profile Brief</span>
            </button>

            <a
              href="/Mahesh_Raja_Resume.pdf"
              download="Mahesh_Raja_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#CBD5E1] dark:border-slate-700 bg-white dark:bg-[#0D121F] hover:bg-slate-50 dark:hover:bg-slate-800 text-[#11182B] dark:text-slate-200 text-xs font-semibold transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* 4 High-Density Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* 1. Education & Grade */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="text-xs font-bold text-[#11182B] dark:text-white">
              B.Tech in Computer Science &amp; Engineering
            </div>
            <div className="text-[11px] text-[#475569] dark:text-slate-400">
              Institute of Aeronautical Engineering (IARE)
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="font-mono text-purple-700 dark:text-purple-300 font-semibold">Class of 2026</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
                CGPA: 7.38 / 10
              </span>
            </div>
          </div>

          {/* 2. Internship Experience */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>Internship</span>
            </div>
            <div className="text-xs font-bold text-[#11182B] dark:text-white">
              Software Development &amp; AI Intern
            </div>
            <div className="text-[11px] text-[#475569] dark:text-slate-400">
              Main Flow Services and Technologies
            </div>
            <div className="text-[11px] text-purple-700 dark:text-purple-300 font-mono pt-1">
              Sep 2025 – May 2026 · Hyderabad (Hybrid)
            </div>
          </div>

          {/* 3. Core Tech Stack */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Core Stack</span>
            </div>
            <div className="text-xs font-bold text-[#11182B] dark:text-white">
              Python · Node.js · React · SQL
            </div>
            <div className="flex flex-wrap gap-1 text-[10px] text-slate-600 dark:text-slate-300 font-mono pt-1">
              <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">FastAPI</span>
              <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Express</span>
              <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">TensorFlow</span>
              <span className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">Docker</span>
            </div>
          </div>

          {/* 4. Contact & Fast Dispatch */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Candidate Availability</span>
            </div>
            <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Suitable Opportunities</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:maheshrajagaridepalli954@gmail.com"
                className="py-1.5 px-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Printable Recruiter Profile Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white dark:bg-[#0D121F] rounded-3xl border border-[#E4EAF5] dark:border-slate-800 max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-[#11182B] dark:text-white print:p-0 print:border-none print:shadow-none print:max-w-none print:bg-white print:text-black"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="recruiter-modal-title"
          >
            {/* Action Bar (Hidden in print) */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E4EAF5] dark:border-slate-800 print:hidden">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Verified Candidate Profile
                </span>
                <span className="text-xs text-slate-500">Printable 1-Page Summary</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Brief</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Profile Brief Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h1 id="recruiter-modal-title" className="text-2xl sm:text-3xl font-black tracking-tight">
                    Garidepalli Mahesh Raja
                  </h1>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                    AI / Software Engineer · Python, Applied AI/ML &amp; Full-Stack Systems
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Hyderabad, Telangana, India · Open to Hybrid, Remote &amp; Relocation
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-purple-500" />
                    <span>maheshrajagaridepalli954@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-500" />
                    <span>+91-9398961621</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                    <span>github.com/maheshraja12</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Professional Summary
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Early-career Computer Science and Engineering graduate (Class of 2026, CGPA 7.38/10) with verified hands-on experience in full-stack web platforms, Python backend architectures, applied deep learning research, and infrastructure resilience tooling. Experienced in translating complex functional specifications into verified, modular software systems.
                </p>
              </div>

              {/* Education & Experience in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                    Education
                  </span>
                  <div className="text-xs font-bold">B.Tech in Computer Science &amp; Engineering</div>
                  <div className="text-[11px] text-slate-500">Institute of Aeronautical Engineering (IARE), Hyderabad</div>
                  <div className="text-[11px] font-mono text-purple-600 dark:text-purple-400">2023 – 2026 · CGPA: 7.38 / 10</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block">
                    Internship Experience
                  </span>
                  <div className="text-xs font-bold">Software Development &amp; AI Intern</div>
                  <div className="text-[11px] text-slate-500">Main Flow Services and Technologies</div>
                  <div className="text-[11px] font-mono text-purple-600 dark:text-purple-400">Sep 2025 – May 2026 · Hyderabad</div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Core Technical Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div><strong>Languages &amp; Runtimes:</strong> Python 3.10+, Node.js, JavaScript (ES6+), Java, SQL</div>
                  <div><strong>Frontend Engineering:</strong> React 19, TypeScript, Tailwind CSS, HTML5, Responsive UI</div>
                  <div><strong>Backend &amp; APIs:</strong> Express.js, FastAPI, Flask, REST APIs, WebSockets</div>
                  <div><strong>AI &amp; Data:</strong> TensorFlow, Keras, CNNs, pandas, numpy, scikit-learn, OpenAI APIs</div>
                  <div><strong>Databases &amp; Storage:</strong> PostgreSQL, Supabase, SQLite (WAL mode), relational indexing</div>
                  <div><strong>DevOps &amp; Tools:</strong> Git, GitHub, Docker, pytest, Vercel, GitHub Actions CI/CD</div>
                </div>
              </div>

              {/* Research Presentation */}
              <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/50 space-y-1 text-xs">
                <div className="font-bold text-purple-800 dark:text-purple-300">
                  Conference Research Presentation · ICCET 2026 (March 2026)
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-[11px]">
                  "Computationally Efficient AI Framework for Early-Stage Lung Cancer Classification Using Stain-Invariant Histopathological Features" — 14th International Conference on Contemporary Engineering and Technology.
                </div>
              </div>

              {/* Contact Direct Buttons in Modal */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 print:hidden">
                <div className="flex items-center gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp Me</span>
                  </a>

                  <a
                    href="mailto:maheshrajagaridepalli954@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'Copied Phone' : 'Copy Phone'}</span>
                  </button>
                </div>

                <a
                  href="/Mahesh_Raja_Resume.pdf"
                  download="Mahesh_Raja_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 text-xs font-semibold hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Complete Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

