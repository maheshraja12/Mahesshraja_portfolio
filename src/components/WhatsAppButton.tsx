import React, { useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/919398961621?text=Hello%20Mahesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20job%20opportunity%20or%20collaboration.';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.98.58 3.86 1.68 5.48L2 22l4.78-1.25a9.86 9.86 0 005.26 1.48h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0012.04 2zm5.78 14.07c-.24.68-1.4 1.3-1.95 1.38-.5.08-1.14.11-3.67-.93-2.16-.89-3.55-3.09-3.66-3.23-.11-.14-.87-1.16-.87-2.21 0-1.05.55-1.56.74-1.78.2-.21.43-.27.58-.27.14 0 .29 0 .42.01.14.01.32-.05.5.38.18.43.62 1.51.68 1.62.06.11.1.24.02.39-.08.15-.12.24-.23.38-.12.13-.25.3-.36.4-.12.11-.25.24-.11.47.14.24.64 1.05 1.38 1.7.95.85 1.75 1.11 2 .12.25.11.39.24.47.38.08.14.08.79.04.99-.04.2-.24.3-.58.37z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group">
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-slate-700/80 backdrop-blur-md pointer-events-none transition-all duration-200 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
        role="tooltip"
      >
        <span>Chat with me on WhatsApp</span>
      </div>

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label="Chat with Mahesh Raja on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
};
