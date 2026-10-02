import React from "react";

export default function Skills() {
  const skillMatrix = [
    {
      category: "BACKEND",
      skills: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "REST APIs",
        "Spring Security",
        "JWT",
        "JPA",
        "Hibernate",
      ],
    },
    {
      category: "FRONTEND",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
    },
    {
      category: "DATABASES",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      category: "TOOLS & OTHERS",
      skills: [
        "Git",
        "GitHub",
        "Maven",
        "Postman",
        "IntelliJ IDEA",
      ],
    },
    {
      category: "AI/ML",
      skills: [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "Computer Vision",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 border-t border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#087F5B] dark:text-[#35B982] mb-2 block">
            TECHNICAL ARSENAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#151817] dark:text-[#F1F4F2]">
            Technologies <br className="sm:hidden" />
            I work with
          </h2>
        </div>

        {/* Clean Editorial Horizontal Skill Matrix */}
        <div className="border-t border-[#E2E6E3] dark:border-[#29332E]">
          {skillMatrix.map((row, idx) => (
            <div
              key={idx}
              className="py-5 sm:py-6 border-b border-[#E2E6E3] dark:border-[#29332E] flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-8"
            >
              {/* Category Label (Emerald accent) */}
              <div className="w-40 shrink-0">
                <span className="text-xs font-mono font-semibold tracking-wider text-[#087F5B] dark:text-[#35B982] uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B] dark:bg-[#35B982]" />
                  {row.category}
                </span>
              </div>

              {/* Technology Tags (White bg, dark text, thin border) */}
              <div className="flex flex-wrap items-center gap-2 flex-1">
                {row.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-xs font-normal bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E] shadow-2xs hover:border-[#66706B] dark:hover:border-[#9AA59F] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
