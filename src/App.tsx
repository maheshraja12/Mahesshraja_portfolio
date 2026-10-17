import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProfileHighlights } from './components/ProfileHighlights';
import { ProjectGrid } from './components/ProjectGrid';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#06080F] text-[#11182B] dark:text-[#F8FAFC] selection:bg-purple-600/30 selection:text-purple-600 dark:selection:text-purple-300 transition-colors duration-200">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Page Content matching reference screenshot layout */}
      <main>
        {/* 1. Hero Section with Neon Portrait Ring, Floating Code Card & Stacked Tech Pills */}
        <Hero />

        {/* 2. 4-Metric Glassmorphism Highlights Bar */}
        <ProfileHighlights />

        {/* 3. Featured Work: Projects Grid (4-Column Layout with Filter Pills) */}
        <ProjectGrid />

        {/* 4. Technical Skills: 14-Item Tech Icon Shelf */}
        <Skills />

        {/* 5. 2-Column Section: Journey (Experience & Education) + Research (Conference & What Drives Me) */}
        <ExperienceTimeline />

        {/* 6. Contact: 3-Column Layout (Direct Info, Message Form, & Developer Workstation graphic) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
