import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProfileHighlights } from './components/ProfileHighlights';
import { RecruiterSnapshot } from './components/RecruiterSnapshot';
import { About } from './components/About';
import { ProjectGrid } from './components/ProjectGrid';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { GitHubActivity } from './components/GitHubActivity';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#06080F] text-[#11182B] dark:text-[#F8FAFC] selection:bg-purple-600/30 selection:text-purple-600 dark:selection:text-purple-300 transition-colors duration-200 relative">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section with Availability Badge, Target Roles & 4 Primary Action Buttons */}
        <Hero />

        {/* 2. 4-Metric Glassmorphism Highlights Bar */}
        <ProfileHighlights />

        {/* 3. Recruiter Quick-View Snapshot & 1-Page Printable Profile Brief */}
        <RecruiterSnapshot />

        {/* 4. About Section: Narrative, Core Engineering Pillars, Capabilities */}
        <About />

        {/* 5. Featured Work: 6 Verified Project Case Studies with Interactive Search & Filters */}
        <ProjectGrid />

        {/* 6. Technical Skills: 6 Grouped Disciplines with Project Attribution */}
        <Skills />

        {/* 7. Journey (Experience & Education) + ICCET 2026 Research Presentation */}
        <ExperienceTimeline />

        {/* 8. Open Source & Codebase Activity: Live GitHub Repositories */}
        <GitHubActivity />

        {/* 9. Contact: Direct Access Actions (Email, WhatsApp, Phone) & Validated Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
