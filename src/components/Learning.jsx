import React from "react";
import { ExternalLink } from "lucide-react";
import { currentlyLearningData } from "../data/portfolioData";

export default function Learning() {
  const { description, items } = currentlyLearningData;

  const certifications = [
    {
      title: "Google AI/ML In-House Training Program",
      organization: "Medi-Caps University & Google Developer Program",
      description: "Hands-on training in TensorFlow and Keras covering Machine Learning, Computer Vision, and verified badges in TensorFlow, Image Classification, Object Detection, Product Image Search, and Android Studio.",
      date: "July 2026",
      certificateUrl: "https://drive.google.com/drive/folders/1uJK6EApEKUK9HT7TFPpKXuGs0GGToGh2?usp=drive_link",
    },
    {
      title: "Java Full Stack Virtual Internship",
      organization: "EduSkills Foundation",
      description: "Comprehensive curriculum covering Core Java, Spring Boot architecture, RESTful API design, Postman verification, and MySQL relational data modeling.",
      date: "Oct – Dec 2025",
      certificateUrl: null,
    },
    {
      title: "Societal Internship Program",
      organization: "Medi-Caps University",
      description: "60-hour community teaching and mentoring program focused on foundational education and community stakeholder communication.",
      date: "2024",
      certificateUrl: null,
    },
  ];

  return (
    <section id="learning" className="py-20 md:py-24 border-t border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#087F5B] dark:text-[#35B982] mb-2 block">
            CONTINUOUS EDUCATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#151817] dark:text-[#F1F4F2]">
            Learning & Certifications
          </h2>
          <p className="text-xs sm:text-sm text-[#66706B] dark:text-[#9AA59F] mt-2 max-w-xl leading-relaxed">
            Formal training programs, industry-aligned virtual internships, and active technical explorations.
          </p>
        </div>

        {/* Clean Horizontal Certification Cards */}
        <div className="space-y-4 mb-14">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial hover:shadow-editorial-hover transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-[#151817] dark:text-[#F1F4F2]">
                    {cert.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F7F8F6] dark:bg-[#101412] text-[#66706B] dark:text-[#9AA59F] border border-[#E2E6E3] dark:border-[#29332E]">
                    {cert.date}
                  </span>
                </div>

                <div className="text-xs font-medium text-[#087F5B] dark:text-[#35B982] mb-2">
                  {cert.organization}
                </div>

                <p className="text-xs sm:text-sm text-[#66706B] dark:text-[#9AA59F] leading-relaxed max-w-3xl">
                  {cert.description}
                </p>
              </div>

              {cert.certificateUrl && (
                <div className="shrink-0 self-start md:self-center">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#087F5B] dark:text-[#35B982] hover:underline"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Currently Learning Sub-Section */}
        <div className="p-6 rounded-2xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#087F5B] dark:text-[#35B982] font-semibold block mb-1">
                ACTIVE EXPANSION
              </span>
              <h3 className="text-base font-bold text-[#151817] dark:text-[#F1F4F2]">
                Currently Learning
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#66706B] dark:text-[#9AA59F] leading-relaxed mb-4 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-md text-xs font-medium bg-[#F7F8F6] dark:bg-[#101412] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E] flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B] dark:bg-[#35B982]" />
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
