import React from "react";
import { aboutContent } from "../data/portfolioData";

export default function About() {
  const { paragraphs, education } = aboutContent;

  return (
    <section id="about" className="py-20 md:py-24 border-t border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column: Editorial Heading & Story */}
          <div className="md:col-span-7 flex flex-col items-start">
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#087F5B] dark:text-[#35B982] mb-3">
              ABOUT ME
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#151817] dark:text-[#F1F4F2] leading-tight mb-6">
              A passionate <br />
              learner and builder.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#66706B] dark:text-[#9AA59F] leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Editorial Information Card */}
          <div className="md:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial">
              
              {/* Education Block */}
              <div className="mb-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] font-medium block mb-1.5">
                  Education
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-[#151817] dark:text-[#F1F4F2]">
                  {education.degree}
                </h3>
                <p className="text-xs sm:text-sm text-[#66706B] dark:text-[#9AA59F] mt-0.5">
                  {education.institution}
                </p>
              </div>

              <div className="border-t border-[#E2E6E3] dark:border-[#29332E] my-4" />

              {/* CGPA & Graduation Blocks */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] font-medium block mb-1">
                    CGPA
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#151817] dark:text-[#F1F4F2]">
                    {education.cgpa}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] font-medium block mb-1">
                    Graduation
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#087F5B] dark:text-[#35B982] inline-block px-2 py-0.5 rounded bg-[#DDF5EB] dark:bg-[rgba(53,185,130,0.12)]">
                    Expected {education.expected}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
