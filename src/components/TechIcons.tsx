import React from 'react';

interface TechIconProps {
  className?: string;
}

export const PythonIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.914 2c-5.26 0-4.933 2.28-4.933 2.28l.006 2.36h5.012v.709H4.992S2 7.02 2 12.283c0 5.262 2.604 5.074 2.604 5.074h1.554v-2.176s-.084-2.603 2.56-2.603h4.972v-.748h-7.01v-3.13h7.01c2.645 0 2.234-2.298 2.234-2.298V4.28S17.173 2 11.914 2zm-1.42 1.488a.82.82 0 110 1.64.82.82 0 010-1.64z"
      fill="#387EB8"
    />
    <path
      d="M12.086 22c5.26 0 4.933-2.28 4.933-2.28l-.006-2.36h-5.012v-.709h7.007s2.992.329 2.992-4.934c0-5.262-2.604-5.074-2.604-5.074h-1.554v2.176s.084 2.603-2.56 2.603h-4.972v.748h7.01v3.13h-7.01c-2.645 0-2.234 2.298-2.234 2.298v4.402S6.827 22 12.086 22zm1.42-1.488a.82.82 0 110-1.64.82.82 0 010 1.64z"
      fill="#FFE873"
    />
  </svg>
);

export const JavaIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.86 17.5c-2.45.2-4.28.65-4.28 1.18 0 .7 3.2 1.27 7.15 1.27 3.96 0 7.16-.57 7.16-1.27 0-.53-1.84-.98-4.3-1.18.96.26 1.4.52 1.4.78 0 .5-2.07.9-4.63.9-2.56 0-4.63-.4-4.63-.9 0-.25.46-.51 1.13-.78z"
      fill="#5382A1"
    />
    <path
      d="M7.74 14.8c-2.8.23-4.88.74-4.88 1.34 0 .8 3.73 1.45 8.34 1.45 4.6 0 8.33-.65 8.33-1.45 0-.6-2.1-1.11-4.9-1.34 1.1.3 1.6.6 1.6.9 0 .57-2.36 1.03-5.28 1.03-2.92 0-5.28-.46-5.28-1.03 0-.3.51-.6 1.07-.9z"
      fill="#5382A1"
    />
    <path
      d="M13.2 10.4c1.17 1.17-.3 2.24-1.9 2.94-1.6.7-3.1.5-4.27-.67-1.17-1.17.3-2.24 1.9-2.94 1.6-.7 3.1-.5 4.27.67z"
      fill="#E76F00"
    />
    <path
      d="M15.4 6.8c1.7 1.7-.44 3.27-2.78 4.29-2.34 1.02-4.53.73-6.23-.97-1.7-1.7.44-3.27 2.78-4.29 2.34-1.02 4.53-.73 6.23.97z"
      fill="#E76F00"
    />
    <path
      d="M10.8 1.2c.5 1.5-1.5 2.5-3 3.5-1.5 1-2.5 2.5-2 4 .5-1.5 2-2.5 3.5-3.5s2.5-2.5 1.5-4z"
      fill="#E76F00"
    />
  </svg>
);

export const JavaScriptIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path
      d="M7.5 17.5c.8.5 1.6.8 2.5.8 1.4 0 2.2-.7 2.2-1.7v-7.1H9.8v7.1c0 .5-.3.8-.8.8-.5 0-.9-.2-1.5-.5v.6zm7.2 0c.9.5 2 .8 3.1.8 1.7 0 2.7-.9 2.7-2.2 0-1.3-.8-1.9-2.3-2.5-.9-.4-1.5-.7-1.5-1.3 0-.5.4-.9 1.2-.9.8 0 1.5.3 2.1.6v-1.6c-.6-.3-1.4-.5-2.2-.5-1.6 0-2.7.9-2.7 2.2 0 1.2.8 1.8 2.2 2.4.9.4 1.6.8 1.6 1.4 0 .6-.5 1-1.3 1-.9 0-1.8-.4-2.4-.8v1.6z"
      fill="#000000"
    />
  </svg>
);

export const SqlIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#0284C7" />
    <path d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#0284C7" strokeWidth="2" fill="none" />
    <path d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#0284C7" strokeWidth="2" fill="none" />
    <path d="M4 16v3c0 1.66 3.58 3 8 3s8-1.34 8-3v-3" stroke="#0284C7" strokeWidth="2" fill="none" />
  </svg>
);

export const ReactIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

export const NodeIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z"
      fill="#5FA04E"
    />
    <path
      d="M12 4.2L5 8.2v7.6l7 4 7-4V8.2l-7-4zm0 2.2l5 2.9v5.4l-5 2.9-5-2.9V9.3l5-2.9z"
      fill="#FFFFFF"
      fillOpacity="0.85"
    />
  </svg>
);

export const ExpressIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#1E293B" />
    <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">
      ex
    </text>
  </svg>
);

export const FlaskIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 3h6v3l3.5 6.5A4 4 0 0115 19H9a4 4 0 01-3.5-6.5L9 6V3zm1 2v2.5L6.5 14a2 2 0 001.7 3h7.6a2 2 0 001.7-3L14 7.5V5h-4z"
      fill="#A855F7"
    />
    <circle cx="12" cy="14" r="1.5" fill="#A855F7" />
  </svg>
);

export const TensorflowIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z" fill="#FF6F00" opacity="0.15" />
    <path d="M12 3.5l6.5 3.8v7.4L12 18.5 5.5 14.7V7.3L12 3.5z" fill="#FF6F00" />
    <path d="M12 3.5v15M5.5 7.3L12 11l6.5-3.7" stroke="#FFFFFF" strokeWidth="1.2" />
  </svg>
);

export const KerasIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#D00000" />
    <path d="M7 6v12h3v-4.5l4 4.5h4l-5-5.5 4.5-6.5h-4l-3.5 5V6H7z" fill="#FFFFFF" />
  </svg>
);

export const OpenAiIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.5 10.3a5.2 5.2 0 00-.4-3.8 5.3 5.3 0 00-4.6-2.6h-.7a5.2 5.2 0 00-4.4-2.4 5.3 5.3 0 00-5 3.6 5.3 5.3 0 00-3.3 2.5 5.2 5.2 0 00-.4 4.5 5.2 5.2 0 00.4 3.8 5.3 5.3 0 004.6 2.6h.7a5.2 5.2 0 004.4 2.4 5.3 5.3 0 005-3.6 5.3 5.3 0 003.3-2.5 5.2 5.2 0 00.4-4.5zm-8.8 9.9a3.7 3.7 0 01-2.6-1.1l2.4-1.4 3.1 1.8a3.7 3.7 0 01-2.9.7zm-6.2-2.3a3.7 3.7 0 01-1.3-2.5l2.4 1.4v3.6a3.7 3.7 0 01-1.1-2.5zm-1.8-6.1a3.7 3.7 0 011.3-2.5v2.8l3.1 1.8a3.7 3.7 0 01-4.4-2.1zm8.7-2.6l-3.1-1.8a3.7 3.7 0 012.9-.7 3.7 3.7 0 012.6 1.1l-2.4 1.4zm4.8 3.5l-3.1-1.8a3.7 3.7 0 011.3 2.5 3.7 3.7 0 01-1.3 2.5v-2.8zm-2.4 4.9l-2.4-1.4v-3.6a3.7 3.7 0 011.1 2.5 3.7 3.7 0 011.3 2.5z"
      fill="#10A37F"
    />
  </svg>
);

export const GitIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.7 10.6l-8.3-8.3a1.9 1.9 0 00-2.8 0L8.8 4.2l3.5 3.5a2.2 2.2 0 012.3 2.3l3.4 3.4a2.2 2.2 0 11-1.4 1.4l-3.2-3.2v4.8a2.3 2.3 0 11-2 0V9.8L7.7 6.1 2.3 11.5a2 2 0 000 2.8l8.3 8.3a2 2 0 002.8 0l8.3-8.3a2 2 0 000-2.8z"
      fill="#F05032"
    />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 11c-.3-.2-1.7-.5-2.7.2-.6.4-1 1.1-1.2 1.6-.8-.2-2-.3-3.1.5-.1 0-.3-.3-.4-.5-.8-1-2-1.6-3.3-1.6-3.7 0-6.1 2.9-6.1 5.9 0 4.1 3.5 6.7 8.5 6.7 5.6 0 9-3 9.4-7.5.3-.2.9-.6 1.3-1.4.3-.8.2-1.8-.2-2.3 0-.1-1.8-1.4-2.2-1.6zM2 13h2.3v2H2v-2zm3.1 0h2.3v2H5.1v-2zm3.1 0h2.3v2H8.2v-2zm3.1 0h2.3v2h-2.3v-2zm-6.2-2.7h2.3v2H5.1v-2zm3.1 0h2.3v2H8.2v-2zm3.1 0h2.3v2h-2.3v-2zm0-2.7h2.3v2h-2.3v-2z"
      fill="#2496ED"
    />
  </svg>
);

export const SupabaseIcon: React.FC<TechIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.4 2.1a1.2 1.2 0 00-1.9.4L3.6 14.6a1.2 1.2 0 001.2 1.8h7.8l-2 5.5a1.2 1.2 0 001.9 1.1l8.9-10.7a1.2 1.2 0 00-1-1.8H12.5l2.4-7.2a1.2 1.2 0 00-1.5-1.2z"
      fill="#3ECF8E"
    />
  </svg>
);
