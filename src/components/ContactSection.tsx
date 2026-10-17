import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, AlertCircle, Monitor } from 'lucide-react';
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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.botHoneypot) return;
    if (!validate()) return;

    const emailTo = 'maheshrajagaridepalli954@gmail.com';
    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] From ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Mahesh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio website.`
    );

    const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#8B5CF6', '#3B82F6', '#A855F7'],
    });

    setFormSubmitted(true);
    
    // Clear form inputs upon successful submission
    setFormData({
      name: '',
      email: '',
      message: '',
      botHoneypot: '',
    });
    setErrors({});

    window.location.href = mailtoUrl;
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
          <p className="mt-2 text-xs sm:text-sm text-[#475569] dark:text-slate-400">
            I'm open to opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        {/* 3-Column Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (3.5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Email card */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-[#64748B] dark:text-slate-500 block uppercase font-bold">Email</span>
                  <a
                    href="mailto:maheshrajagaridepalli954@gmail.com"
                    className="text-xs font-semibold text-[#11182B] dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors truncate block"
                  >
                    maheshrajagaridepalli954@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white transition-colors shrink-0"
                title="Copy email"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone card */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-xs dark:shadow-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#64748B] dark:text-slate-500 block uppercase font-bold">Phone</span>
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
                className="p-2 rounded-lg text-[#64748B] dark:text-slate-400 hover:text-[#11182B] dark:hover:text-white transition-colors shrink-0"
                title="Copy phone"
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
                <span className="text-[10px] text-[#64748B] dark:text-slate-500 block uppercase font-bold">Location</span>
                <span className="text-xs font-semibold text-[#11182B] dark:text-white block">
                  Hyderabad, Telangana, India
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Form (4.5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D121F] border border-[#E4EAF5] dark:border-slate-800 shadow-sm dark:shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <input
                  type="text"
                  name="botHoneypot"
                  value={formData.botHoneypot}
                  onChange={(e) => setFormData({ ...formData, botHoneypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-white dark:bg-[#121829] border ${
                        errors.name ? 'border-rose-400' : 'border-[#CBD5E1] dark:border-slate-800 focus:border-purple-500'
                      } text-[#11182B] dark:text-white placeholder-[#94A3B8] dark:placeholder-slate-500 focus:outline-none shadow-xs dark:shadow-none`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-white dark:bg-[#121829] border ${
                        errors.email ? 'border-rose-400' : 'border-[#CBD5E1] dark:border-slate-800 focus:border-purple-500'
                      } text-[#11182B] dark:text-white placeholder-[#94A3B8] dark:placeholder-slate-500 focus:outline-none shadow-xs dark:shadow-none`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs bg-white dark:bg-[#121829] border ${
                      errors.message ? 'border-rose-400' : 'border-[#CBD5E1] dark:border-slate-800 focus:border-purple-500'
                    } text-[#11182B] dark:text-white placeholder-[#94A3B8] dark:placeholder-slate-500 focus:outline-none shadow-xs dark:shadow-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[10px] text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs shadow-md dark:shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Email client launched with your formatted message!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Workstation Graphic with Neon Sign (3 cols) */}
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

              {/* Neon Sign in Workstation Corner matching screenshot */}
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
