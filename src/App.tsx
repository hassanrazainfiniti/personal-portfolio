import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { BeforeAfter } from './components/BeforeAfter';
import { ProcessTimeline } from './components/ProcessTimeline';
import { SkillsUniverse } from './components/SkillsUniverse';
import { About } from './components/About';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { FaqChatbot } from './components/FaqChatbot';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Hero & Signature Problem-Solving Pipeline */}
        <Hero />

        {/* 02. Selected Work / Projects */}
        <Projects />

        {/* 03. Before Me vs. After Me Transformation */}
        <BeforeAfter />

        {/* 04. My Development Process */}
        <ProcessTimeline />

        {/* 05. Technical Skills & Technology Universe */}
        <SkillsUniverse />

        {/* 06. About Me & Engineering Philosophy */}
        <About />

        {/* 07. Full Resume & Credentials */}
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 08. Interactive FAQ Assistant */}
        <FaqChatbot />

        {/* 09. Contact & Collaboration */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Full Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
