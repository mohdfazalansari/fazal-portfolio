import React from "react";
import { ExternalLink } from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 border-t border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#087F5B] dark:text-[#35B982] mb-2 block">
            CAREER & MILESTONES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#151817] dark:text-[#F1F4F2]">
            Experience & Internships
          </h2>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l border-[#E2E6E3] dark:border-[#29332E] ml-2 sm:ml-3 space-y-10 pl-6 sm:pl-8">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Emerald Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#087F5B] dark:bg-[#35B982] ring-4 ring-[#DDF5EB] dark:ring-[rgba(53,185,130,0.15)] bg-clip-padding" />

              {/* Header: Title, Org, Date */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#151817] dark:text-[#F1F4F2]">
                    {item.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-[#66706B] dark:text-[#9AA59F]">
                    {item.company} {item.location ? `• ${item.location}` : ""}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#66706B] dark:text-[#9AA59F] sm:text-right shrink-0">
                  {item.period}
                </div>
              </div>

              {/* Concise Impact Description */}
              <p className="text-xs sm:text-sm text-[#66706B] dark:text-[#9AA59F] leading-relaxed max-w-4xl">
                {item.description}
              </p>

              {/* Key Highlights (Filtered to remove 1:1 duplicates from paragraph) */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.highlights.slice(0, 4).map((highlight, hIdx) => (
                    <span 
                      key={hIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              {/* Certificate Action */}
              {item.certificateUrl && (
                <div className="mt-3">
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#087F5B] dark:text-[#35B982] hover:underline transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
