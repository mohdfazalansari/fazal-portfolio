import React, { useEffect } from "react";
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  MapPin, 
  FileText 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo, aboutContent, skillsGroups, projects, experienceData } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  const { education } = aboutContent;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-[#171C19] border border-[#E2E6E3] dark:border-[#29332E] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#087F5B] dark:text-[#35B982]" />
            <span className="font-mono text-xs font-bold text-[#151817] dark:text-[#F1F4F2] uppercase tracking-wider">
              Mohammad_Fazal_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] text-xs font-mono font-medium hover:border-[#087F5B] dark:hover:border-[#35B982] transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS-Friendly Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 font-sans text-zinc-800 dark:text-zinc-200 print:text-black print:bg-white space-y-6">
          
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white uppercase">
              {personalInfo.name}
            </h1>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono mt-1">
              Software Engineer • Backend Focus (Java & Spring Boot)
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3 h-3 text-zinc-400" />
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <LinkedinIcon className="w-3 h-3 text-zinc-400" />
                linkedin.com/in/{personalInfo.linkedinUsername}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <GithubIcon className="w-3 h-3 text-zinc-400" />
                github.com/{personalInfo.githubUsername}
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs">
              <div>
                <div className="font-bold text-zinc-900 dark:text-white text-sm">
                  {education.institution}
                </div>
                <div className="text-zinc-600 dark:text-zinc-300">
                  {education.degree}
                </div>
              </div>
              <div className="text-right font-mono">
                <div>Expected {education.expected}</div>
                <div className="font-semibold text-zinc-800 dark:text-zinc-200">CGPA: {education.cgpa}</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              {skillsGroups.map((group) => (
                <div key={group.title}>
                  <span className="font-mono font-bold text-zinc-900 dark:text-white mr-2">
                    {group.title}:
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {group.items.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-2">
              Experience & Internships
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="font-bold text-zinc-900 dark:text-white text-sm">
                      {exp.role} — <span className="font-semibold text-emerald-600 dark:text-emerald-400">{exp.company}</span>
                    </span>
                    <span className="font-mono text-zinc-400">{exp.period}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-1 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.highlights && (
                    <ul className="list-disc list-inside space-y-0.5 text-zinc-500 dark:text-zinc-400">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 border-b border-zinc-200 dark:border-zinc-800 pb-1 mb-2">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="font-bold text-zinc-900 dark:text-white text-sm">
                      {proj.name} — <span className="font-normal text-zinc-500">{proj.subtitle}</span>
                    </span>
                    <span className="font-mono text-zinc-400">
                      {proj.keyTech.join(" • ")}
                    </span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-zinc-500 dark:text-zinc-400">
                    {proj.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-between text-xs">
          <span className="text-zinc-400 font-mono text-[11px]">
            Authentic academic & internship credentials
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 text-white dark:bg-emerald-500 dark:text-zinc-950 font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
