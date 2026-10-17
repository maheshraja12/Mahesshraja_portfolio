import React, { useState, useEffect } from 'react';
import { Download, Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MobileNavigation } from './MobileNavigation';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollY = window.scrollY;

      // 1. If at or near top of the page, always activate Home / hero
      if (scrollY < 200) {
        setActiveSection('hero');
        return;
      }

      // 2. If scrolled to near the bottom of the page, activate Contact
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // 3. Viewport-accurate section detection in visual order
      const sectionsInOrder = [
        'contact',
        'research',
        'experience',
        'skills',
        'projects',
        'about',
        'hero',
      ];

      for (const id of sectionsInOrder) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when the section top is above the reading line (240px from top)
          // and bottom is still visible (> 100px from top)
          if (rect.top <= 240 && rect.bottom >= 100) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#06080F]/90 backdrop-blur-md shadow-sm dark:shadow-lg border-b border-[#E4EAF5] dark:border-slate-800/80 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Minimal MR Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Mahesh Raja Homepage"
          >
            <span className="text-2xl font-black bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              MR
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 bg-[#F1F5FF]/90 dark:bg-[#0D121F]/80 border border-[#E4EAF5] dark:border-slate-800/80 px-2 py-1.5 rounded-full shadow-inner backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-purple-700 bg-purple-100 dark:text-purple-200 dark:bg-purple-600/30 border border-purple-300 dark:border-purple-500/50 shadow-xs dark:shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                      : 'text-[#536078] hover:text-[#11182B] hover:bg-white/80 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />

            <a
              href="/Mahesh_Raja_Resume.pdf"
              download="Mahesh_Raja_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-[#CBD5E1] dark:border-slate-700 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-purple-500/60 text-[#11182B] dark:text-slate-200 shadow-xs cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Download Resume</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl border border-[#E4EAF5] dark:border-slate-800 bg-white dark:bg-[#0D121F] text-[#11182B] dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        navItems={NAV_ITEMS}
      />
    </>
  );
};
