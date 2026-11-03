import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, AlertCircle, Monitor, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';
import { WhatsAppIcon } from './WhatsAppButton';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  message: string;
  botHoneypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const WHATSAPP_DIRECT_URL = 'https://wa.me/919398961621?text=Hello%20Mahesh%2C%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect.';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    botHoneypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState<string>('');
  const [lastWebmailUrl, setLastWebmailUrl] = useState<string>('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      errs.name = 'Please provide your full name.';
    } else if (trimmedName.length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    } else if (trimmedName.length > 100) {
      errs.name = 'Name cannot exceed 100 characters.';
    }

    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    const trimmedMessage = formData.message.trim();
    if (!trimmedMessage) {
      errs.message = 'Please enter your message.';
    } else if (trimmedMessage.length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    } else if (trimmedMessage.length > 3000) {
      errs.message = 'Message cannot exceed 3000 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Silently trap automated bot submissions via hidden honeypot
    if (formData.botHoneypot) {
      setIsSubmitted(true);
      return;
    }

    if (!validate()) return;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    const subjectText = `Portfolio Inquiry from ${trimmedName}`;
    const bodyText = `Hi Mahesh,\n\n${trimmedMessage}\n\n---\nSender: ${trimmedName}\nEmail: ${trimmedEmail}`;

    const mailtoUrl = `mailto:maheshrajagaridepalli954@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    const webmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=maheshrajagaridepalli954@gmail.com&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    setLastMailtoUrl(mailtoUrl);
    setLastWebmailUrl(webmailUrl);

    // Launch visitor's configured email application
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Fallback handled by the UI links
    }

    setIsSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#8B5CF6', '#3B82F6', '#A855F7', '#60A5FA'],
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      botHoneypot: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('maheshrajagaridepalli954@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+919398961621');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#06080F] border-t border-[#E4EAF5] dark:border-slate-900 transition-colors relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">
            LET'S CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11182B] dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#475569] dark:text-slate-400 max-w-2xl">
            Whether you have an engineering opportunity, a technical collaboration, or an inquiry regarding AI systems and full-stack development, feel free to reach out.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Recruiter Actions & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            {/* Quick Action Buttons: Email Me, WhatsApp Me, Call Me */}
            <div className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs space-y-2">
              <span className="text-[10px] text-[#64748B] dark:text-slate-500 block uppercase font-bold tracking-wider">
                Direct Recruiter Access
              </span>
              <div className="grid grid-cols-3 gap-2">
                {/* Email Me */}
                <a
                  href="mailto:maheshrajagaridepalli954@gmail.com"
                  className="py-2 px-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-semibold flex flex-col items-center justify-center gap-1 transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>

                {/* WhatsApp Me */}
                <a
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-semibold flex flex-col items-center justify-center gap-1 transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                {/* Call Me */}
                <a
                  href="tel:+919398961621"
                  className="py-2 px-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold flex flex-col items-center justify-center gap-1 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Me</span>
                </a>
              </div>
            </div>

            {/* Email card with Copy button */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#64748B] dark:text-slate-500 block uppercase font-bold tracking-wider">Email Address</span>
                  <a
                    href="mailto:maheshrajagaridepalli954@gmail.com"
                    className="text-xs font-semibold text-[#11182B] dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate block"
                    title="maheshrajagaridepalli954@gmail.com"
                  >
                    maheshrajagaridepalli954@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone card with Copy button */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#64748B] dark:text-slate-500 block uppercase font-bold tracking-wider">Phone / WhatsApp</span>
                  <a
                    href="tel:+919398961621"
                    className="text-xs font-semibold text-[#11182B] dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block"
                  >
                    +91-9398961621
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-lg text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                title="Copy phone number"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location card */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none">
              <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-500/30 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-[#64748B] dark:text-slate-500 block uppercase font-bold tracking-wider">Location</span>
                <span className="text-xs font-semibold text-[#11182B] dark:text-white block">
                  Hyderabad, Telangana, India
                </span>
              </div>
            </div>

            {/* Professional Profiles (GitHub & LinkedIn) */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://github.com/maheshraja12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-[#CBD5E1] dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#0D121F] text-[#11182B] dark:text-slate-200 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 text-xs font-semibold transition-all shadow-xs"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://linkedin.com/in/garidepalli-mahesh-raja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-[#CBD5E1] dark:border-slate-800 bg-[#F8FAFC] dark:bg-[#0D121F] text-[#11182B] dark:text-slate-200 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-semibold transition-all shadow-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Center Column: Validated Message Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-sm dark:shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Anti-spam honeypot (hidden from human visitors) */}
                <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
                  <label htmlFor="botHoneypot">Do not fill this field if you are human</label>
                  <input
                    type="text"
                    id="botHoneypot"
                    name="botHoneypot"
                    value={formData.botHoneypot}
                    onChange={(e) => setFormData({ ...formData, botHoneypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-semibold text-[#475569] dark:text-slate-400 mb-1">
                      Your Name <span className="text-purple-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-white dark:bg-[#121829] border ${errors.name ? 'border-rose-400 dark:border-rose-500' : 'border-[#CBD5E1] dark:border-slate-800 focus:border-purple-500'
                        } text-[#11182B] dark:text-white placeholder-[#94A3B8] dark:placeholder-slate-500 focus:outline-none transition-colors shadow-xs`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-semibold text-[#475569] dark:text-slate-400 mb-1">
                      Your Email <span className="text-purple-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-white dark:bg-[#121829] border ${errors.email ? 'border-rose-400 dark:border-rose-500' : 'border-[#CBD5E1] dark:border-slate-800 focus:border-purple-500'
                        } text-[#11182B] dark:text-white placeholder-[#94A3B8] dark:placeholder-slate-500 focus:outline-none transition-colors shadow-xs`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] font-semibold text-[#475569] dark:text-slate-400 mb-1">
                    Message <span className="text-purple-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Describe your inquiry, project scope, or engineering opportunity..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-white dark:bg-[#121829] border ${errors.message ? 'border-rose-400 dark:border-rose-500' : 'border-[#CBD5E1] dark:border-slate-800 focus:border-purple-500'
                      } text-[#11182B] dark:text-white placeholder-[#94A3B8] dark:placeholder-slate-500 focus:outline-none transition-colors shadow-xs resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs shadow-md dark:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client</span>
                </button>

                {/* Accurate Confirmation Message */}
                {isSubmitted && (
                  <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs text-purple-950 dark:text-purple-200 space-y-2 animate-in fade-in duration-300">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block text-purple-900 dark:text-purple-200">
                          Your email app is opening with your message ready. Please press Send to deliver it.
                        </span>
                        <p className="text-[11px] text-purple-800 dark:text-purple-300 mt-1">
                          If your email client didn't launch automatically, choose an option below:
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-purple-200 dark:border-purple-800/60 flex flex-wrap items-center gap-2">
                      {lastWebmailUrl && (
                        <a
                          href={lastWebmailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-semibold transition-colors shadow-xs"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Open in Gmail (Web)</span>
                        </a>
                      )}

                      {lastMailtoUrl && (
                        <a
                          href={lastMailtoUrl}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-purple-300 dark:border-purple-700 bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-300 text-[11px] font-medium transition-colors"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Retry Mail Client</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={handleReset}
                        className="text-[11px] text-purple-700 dark:text-purple-300 underline hover:no-underline ml-auto cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Workstation Graphic (3 cols) */}
          <div className="lg:col-span-3 flex justify-center items-center">
            <div className="w-full rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 p-5 relative overflow-hidden flex flex-col justify-between aspect-[4/3] shadow-md dark:shadow-2xl">
              {/* Purple backlight glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-600/15 dark:bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />

              {/* Monitor visual */}
              <div className="relative z-10 flex flex-col items-center justify-center flex-1">
                <div className="w-32 h-20 rounded-lg bg-slate-900 dark:bg-[#070A14] border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] flex flex-col items-center justify-center p-2 relative">
                  <Monitor className="w-6 h-6 text-purple-400 mb-1" />
                  <span className="text-[11px] font-black text-white tracking-widest">MR</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute top-2 right-2 animate-pulse" />
                </div>
                {/* Monitor Stand */}
                <div className="w-3 h-4 bg-slate-400 dark:bg-slate-700" />
                <div className="w-12 h-1 bg-slate-400 dark:bg-slate-600 rounded-full" />
              </div>

              {/* Neon Sign in Workstation Corner */}
              <div className="relative z-10 p-2.5 rounded-xl border border-pink-500/40 bg-pink-100/60 dark:bg-pink-950/30 text-center shadow-[0_0_15px_rgba(236,72,153,0.25)] mt-2">
                <span className="text-[10px] font-mono tracking-widest font-black text-pink-700 dark:text-pink-300 uppercase block">
                  GOOD IDEAS<br />BETTER BUILDS
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
