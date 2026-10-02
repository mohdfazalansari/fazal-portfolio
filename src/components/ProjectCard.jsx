import React, { useState } from "react";
import { 
  ArrowRight, 
  Layers, 
  ImageIcon,
  CheckCircle2
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const isFeatured = project.featured;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasValidImage = imageLoaded && !imageError;
  const projectTitle = project.title || project.name;

  return (
    <div
      className={`group rounded-2xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isFeatured
          ? "col-span-1 lg:col-span-12"
          : "col-span-1 lg:col-span-6"
      }`}
    >
      <div>
        {/* 16:9 DEDICATED PROJECT IMAGE CONTAINER AT THE TOP */}
        <div 
          onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
          className="project-image relative w-full bg-[#F7F8F6] dark:bg-[#101412] border-b border-[#E2E6E3] dark:border-[#29332E] overflow-hidden cursor-pointer flex items-center justify-center select-none"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none" />

          {/* Real <img> element: hidden until verified loaded */}
          <img
            src={project.image}
            alt={`${projectTitle} project screenshot`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.01] ${
              hasValidImage ? "block" : "hidden"
            }`}
          />

          {/* Clean Editorial 16:9 Placeholder */}
          {!hasValidImage && (
            <div className="project-image-placeholder w-full h-full flex flex-col items-center justify-center p-6 text-center select-none z-10">
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#171C19] border border-[#E2E6E3] dark:border-[#29332E] shadow-2xs flex items-center justify-center mb-2.5 group-hover:border-[#087F5B] dark:group-hover:border-[#35B982] transition-colors">
                <ImageIcon className="w-5 h-5 text-[#087F5B] dark:text-[#35B982]" />
              </div>

              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#151817] dark:text-[#F1F4F2]">
                PROJECT SCREENSHOT
              </span>

              <span className="text-[11px] text-[#66706B] dark:text-[#9AA59F] mt-0.5">
                Add project image here
              </span>
            </div>
          )}

          {/* Subtle View Hint on Hover */}
          <div className="absolute bottom-2.5 right-2.5 z-10 px-2 py-1 rounded bg-[#151817]/80 dark:bg-black/80 backdrop-blur-xs text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <span>View Details</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#35B982]" />
          </div>
        </div>

        {/* PROJECT CONTENT UNDERNEATH THE IMAGE */}
        <div className="p-5 sm:p-6">
          
          {/* Category / Architecture Label & Source Link */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              {isFeatured && (
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#DDF5EB] dark:bg-[rgba(53,185,130,0.15)] text-[#087F5B] dark:text-[#35B982]">
                  FEATURED SYSTEM
                </span>
              )}
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F]">
                {project.category || "Spring Boot Architecture"}
              </span>
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#66706B] dark:text-[#9AA59F] hover:text-[#151817] dark:hover:text-[#F1F4F2] px-2 py-0.5 rounded border border-[#E2E6E3] dark:border-[#29332E] hover:border-[#66706B] dark:hover:border-[#9AA59F] transition-colors"
                title="GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>

          {/* Title & Subtitle */}
          <div className="mb-3">
            <h3 
              onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
              className="text-lg sm:text-xl font-bold tracking-tight text-[#151817] dark:text-[#F1F4F2] group-hover:text-[#087F5B] dark:group-hover:text-[#35B982] transition-colors cursor-pointer"
            >
              {projectTitle}
            </h3>
            {project.subtitle && (
              <p className="text-xs text-[#66706B] dark:text-[#9AA59F] mt-0.5 font-normal">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description (1-2 sentences) */}
          <p className="text-xs sm:text-sm text-[#66706B] dark:text-[#9AA59F] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Featured InvenTrack Architecture Pipeline Preview */}
          {isFeatured && (
            <div className="mb-4 p-3 rounded-lg bg-[#F7F8F6] dark:bg-[#101412] border border-[#E2E6E3] dark:border-[#29332E]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] font-medium mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#087F5B] dark:text-[#35B982]" />
                <span>Request Pipeline Architecture Preview:</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E]">
                  Client
                </span>
                <span className="text-[#66706B]">→</span>
                <span className="px-2 py-0.5 rounded bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E]">
                  REST API
                </span>
                <span className="text-[#66706B]">→</span>
                <span className="px-2 py-0.5 rounded bg-[#DDF5EB] dark:bg-[rgba(53,185,130,0.15)] text-[#087F5B] dark:text-[#35B982] font-semibold border border-[#E2E6E3] dark:border-[#29332E]">
                  Spring Security (JWT)
                </span>
                <span className="text-[#66706B]">→</span>
                <span className="px-2 py-0.5 rounded bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E]">
                  Service Layer
                </span>
                <span className="text-[#66706B]">→</span>
                <span className="px-2 py-0.5 rounded bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E]">
                  JPA / Hibernate
                </span>
                <span className="text-[#66706B]">→</span>
                <span className="px-2 py-0.5 rounded bg-white dark:bg-[#171C19] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E]">
                  PostgreSQL
                </span>
              </div>
            </div>
          )}

          {/* Key Engineering Features for Featured / Key Projects */}
          {project.keyFeatures && (
            <div className="mb-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#66706B] dark:text-[#9AA59F] font-medium mb-2">
                KEY FEATURES:
              </div>
              <div className={`grid gap-1.5 text-xs text-[#66706B] dark:text-[#9AA59F] ${isFeatured ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                {project.keyFeatures.slice(0, isFeatured ? 6 : 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087F5B] dark:text-[#35B982] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E2E6E3] dark:border-[#29332E]">
            {project.technologies.slice(0, isFeatured ? 8 : 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F7F8F6] dark:bg-[#101412] text-[#151817] dark:text-[#F1F4F2] border border-[#E2E6E3] dark:border-[#29332E]"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="px-5 py-3 sm:px-6 sm:py-3.5 bg-[#F7F8F6]/60 dark:bg-[#101412]/60 border-t border-[#E2E6E3] dark:border-[#29332E] flex items-center justify-between text-xs">
        <button
          onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 font-medium text-[#087F5B] dark:text-[#35B982] hover:underline transition-colors"
        >
          <span>View Project →</span>
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[#66706B] dark:text-[#9AA59F] hover:text-[#151817] dark:hover:text-[#F1F4F2] transition-colors"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
}
