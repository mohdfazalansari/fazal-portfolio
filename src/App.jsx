import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyModal from "./components/CaseStudyModal";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8F6] dark:bg-[#101412] text-[#151817] dark:text-[#F1F4F2] flex flex-col font-sans transition-colors duration-200">
      
      {/* Editorial Sticky Navigation with Monogram */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Ordered Editorial Content */}
      <main className="flex-1">
        {/* 1. Hero: Editorial headline, subtle tags, dual CTAs, portrait composition */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About: Narrative story + clean information card */}
        <About />

        {/* 3. Experience & Internships: Vertical editorial timeline with emerald dots */}
        <Experience />

        {/* 4. Projects: Things I've built with 16:9 screenshot placeholders */}
        <Projects onOpenDetails={(proj) => setSelectedProject(proj)} />

        {/* 5. Skills: Clean horizontal matrix (Backend, Frontend, Databases, Tools, AI/ML) */}
        <Skills />

        {/* 6. Learning & Certifications: Clean horizontal cards */}
        <Learning />

        {/* 7. Contact: Direct communication channels & minimal form */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Print / ATS-Friendly Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
