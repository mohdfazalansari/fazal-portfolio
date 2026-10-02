import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Projects({ onOpenCaseStudy, onOpenDetails }) {
  const handleOpenModal = onOpenCaseStudy || onOpenDetails;

  return (
    <section id="projects" className="py-20 md:py-24 border-t border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#087F5B] dark:text-[#35B982] mb-2 block">
              SELECTED WORK
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#151817] dark:text-[#F1F4F2]">
              Things I've built
            </h2>

            <p className="text-xs sm:text-sm text-[#66706B] dark:text-[#9AA59F] mt-2 max-w-xl leading-relaxed">
              Production-grade backend architectures, role-based authorization pipelines, and relational & document data models.
            </p>
          </div>
          
          <a
            href="https://github.com/mohdfazalansari?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#087F5B] dark:text-[#35B982] hover:underline self-start sm:self-auto shrink-0"
          >
            <span>All repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={handleOpenModal}
            />
          ))}
        </div>

        {/* Subtle Verification Footer Note */}
        <div className="mt-10 p-4 rounded-xl border border-[#E2E6E3] dark:border-[#29332E] bg-white dark:bg-[#171C19] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#66706B] dark:text-[#9AA59F] shadow-editorial">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#087F5B] dark:bg-[#35B982] shrink-0" />
            <span>
              All projects represent verified code written and tested with Postman collections and database clusters.
            </span>
          </div>
          <a
            href="https://github.com/mohdfazalansari"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[#087F5B] dark:text-[#35B982] hover:underline shrink-0"
          >
            github.com/mohdfazalansari →
          </a>
        </div>

      </div>
    </section>
  );
}
