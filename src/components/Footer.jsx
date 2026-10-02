import React from "react";
import { personalInfo } from "../data/portfolioData";

export default function Footer({ onOpenResume }) {
  return (
    <footer className="border-t border-[#E2E6E3] dark:border-[#29332E] py-10 text-xs text-[#66706B] dark:text-[#9AA59F] bg-[#F7F8F6] dark:bg-[#101412] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-[#171C19] border border-[#E2E6E3] dark:border-[#29332E] text-[#151817] dark:text-[#F1F4F2]">
            MF
          </span>
          <span>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-5 text-xs font-medium">
          <a href="#about" className="hover:text-[#151817] dark:hover:text-[#F1F4F2] transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-[#151817] dark:hover:text-[#F1F4F2] transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-[#151817] dark:hover:text-[#F1F4F2] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#151817] dark:hover:text-[#F1F4F2] transition-colors">
            Skills
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-[#087F5B] dark:hover:text-[#35B982] transition-colors"
          >
            Resume
          </button>
        </div>
      </div>
    </footer>
  );
}
