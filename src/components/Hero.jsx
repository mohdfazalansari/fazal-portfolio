import React, { useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  const [imgError, setImgError] = useState(false);

  const heroTags = [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Databases",
    "AI/ML",
    "React",
  ];

  return (
    <section className="relative pt-28 pb-28 sm:pt-32 sm:pb-32 lg:pt-36 lg:pb-36 border-b border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] transition-colors duration-200">
      <div className="w-full max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: 55% */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Eyebrow: Size 14px, Color #087F5B, Weight 500, Letter spacing 1px */}
            <div className="text-[14px] font-medium tracking-[1px] text-[#087F5B] dark:text-[#35B982] uppercase mb-4">
              COMPUTER SCIENCE STUDENT • BACKEND • AI
            </div>

            {/* Headline: Size 56-64px, Line height 1.0, Weight 700-800, 'Exploring AI.' in green */}
            <h1 className="text-[38px] sm:text-[48px] md:text-[54px] lg:text-[58px] xl:text-[64px] font-extrabold tracking-[-0.03em] text-[#151817] dark:text-[#F1F4F2] leading-[1.0] mb-6">
              Building reliable <br />
              backend systems. <br />
              <span className="text-[#087F5B] dark:text-[#35B982]">Exploring AI.</span> <br />
              Growing into full-stack <br />
              engineering.
            </h1>

            {/* Description: Size 16-18px, Line height 1.6, Color #66706B, Max width 600px */}
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] text-[#66706B] dark:text-[#9AA59F] leading-[1.6] max-w-[600px] mb-7">
              Computer Science student focused on backend engineering with Java and Spring Boot, while expanding into AI-powered application development and modern frontend technologies.
            </p>

            {/* Technology tags: Size 14px, Bg #FFFFFF, Border #E2E6E3, Text #151817, Padding 8px 14px, Radius 8-10px */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="px-[14px] py-[8px] rounded-[9px] text-[14px] font-normal bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E] shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons: Primary (Bg #087F5B, Text #FFFFFF, Radius 10-12px) & Secondary (Bg #FFFFFF, Border #E2E6E3, Text #151817, Radius 10-12px) */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[11px] bg-[#087F5B] hover:bg-[#066849] dark:bg-[#35B982] dark:hover:bg-[#2da371] text-white dark:text-[#101412] font-medium text-sm shadow-editorial transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[11px] border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] font-medium text-sm hover:border-[#66706B] dark:hover:border-[#9AA59F] transition-colors shadow-editorial"
              >
                <Download className="w-4 h-4 text-[#151817] dark:text-[#F1F4F2]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social icons: Color #66706B, Hover #087F5B */}
            <div className="flex items-center gap-5 text-[#66706B] dark:text-[#9AA59F]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#087F5B] dark:hover:text-[#35B982] transition-colors"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#087F5B] dark:hover:text-[#35B982] transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-[#087F5B] dark:hover:text-[#35B982] transition-colors"
                title="Email Me"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: 45% (Portrait frame scaled down ~5-8% for balanced dominance) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[370px] sm:max-w-[400px] lg:max-w-[435px]">
              
              {/* Background shape: Color #DDF5EB, slight rotation/offset, rounded corners: 24px */}
              <div 
                className="absolute -inset-3 sm:-inset-4 rounded-[24px] bg-[#DDF5EB] dark:bg-[rgba(53,185,130,0.18)] -rotate-3 sm:-rotate-[3.5deg] pointer-events-none transition-transform"
                aria-hidden="true"
              />

              {/* Profile image: clean, no outlines, rounded 18px (16-20px) */}
              <div className="relative rounded-[18px] overflow-hidden bg-white dark:bg-[#171C19] aspect-[4/5] shadow-xs">
                {!imgError ? (
                  <img
                    src={personalInfo.profileImage}
                    alt="Mohammad Fazal"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top select-none"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#66706B] dark:text-[#9AA59F]">
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                      Mohammad Fazal
                    </span>
                  </div>
                )}

                {/* Soft bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F7F8F6] dark:from-[#101412] via-[#F7F8F6]/40 dark:via-[#101412]/40 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
