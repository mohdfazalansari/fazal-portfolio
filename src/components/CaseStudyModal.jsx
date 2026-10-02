import React, { useEffect, useState } from "react";
import { 
  X, 
  ExternalLink, 
  Server, 
  ShieldCheck, 
  Database, 
  Code, 
  Layers, 
  CheckCircle,
  Cpu,
  ArrowRight,
  Terminal,
  FileCode,
  Copy,
  Check
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [copiedPath, setCopiedPath] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  const copyEndpoint = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedPath(text);
    setTimeout(() => setCopiedPath(null), 1800);
  };

  const tabs = [
    { id: "overview", label: "Overview & Problem" },
    { id: "architecture", label: "Architecture & Flow" },
    { id: "security", label: "Security & Auth" },
    { id: "database", label: "Database Schema" },
    { id: "api", label: "REST Endpoints" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#171C19] border border-[#E2E6E3] dark:border-[#29332E] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#E2E6E3] dark:border-[#29332E] bg-[#F7F8F6] dark:bg-[#101412] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#DDF5EB] dark:bg-[rgba(53,185,130,0.15)] text-[#087F5B] dark:text-[#35B982]">
                CASE STUDY
              </span>
              <span className="text-xs text-[#66706B] dark:text-[#9AA59F] font-mono">
                ENGINEERING DOCUMENTATION
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#151817] dark:text-[#F1F4F2]">
              {project.name || project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="View Source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/80 px-4 sm:px-6 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                  : "border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          
          {/* TAB 1: OVERVIEW & PROBLEM */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                  System Overview
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy?.overview || project.description}
                </p>
              </div>

              {caseStudy?.problem && (
                <div className="p-4 rounded-lg bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold mb-1.5">
                    The Problem Solved
                  </h4>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">
                    {caseStudy.problem}
                  </p>
                </div>
              )}

              {/* Technology Rationale */}
              {caseStudy?.techChoices && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-3">
                    Technology Choices & Engineering Rationale
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.techChoices.map((choice, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40"
                      >
                        <div className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                          {choice.tech}
                        </div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                          {choice.reason}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features List */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-3">
                  Key Implemented Capabilities
                </h3>
                <div className="space-y-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & FLOW */}
          {activeTab === "architecture" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                  Technical Architecture
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  End-to-end request pipeline depicting how incoming HTTP packets transition from security filters down to the persistent database layer.
                </p>
              </div>

              {/* Visual Flow Diagram */}
              {project.architectureFlow && (
                <div className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 space-y-3">
                  {project.architectureFlow.map((step, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-[#11131a] gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded font-mono text-xs flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                          {idx + 1}
                        </div>
                        <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
                          {step.step}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                        {step.detail}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Pattern: Layered Controller-Service-Repository with stateless token interception</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SECURITY & AUTH */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                  Security Architecture & Authentication
                </h3>
                {caseStudy?.securityArchitecture && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-semibold mb-4">
                    Mechanism: {caseStudy.securityArchitecture.mechanism}
                  </div>
                )}
              </div>

              {caseStudy?.securityArchitecture?.details && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                    Security Implementation Details
                  </h4>
                  {caseStudy.securityArchitecture.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 flex items-start gap-3"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: DATABASE SCHEMA */}
          {activeTab === "database" && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                    Database Schema & Data Model
                  </h3>
                  {caseStudy?.databaseDesign && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {caseStudy.databaseDesign.dbType}
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  Normalized entity structure engineered with foreign key integrity and indexed search attributes.
                </p>
              </div>

              {caseStudy?.databaseDesign?.entities && (
                <div className="space-y-2.5">
                  {caseStudy.databaseDesign.entities.map((ent, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-black font-mono text-xs text-emerald-400 flex items-start gap-2.5"
                    >
                      <Database className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="break-all">{ent}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: REST ENDPOINTS */}
          {activeTab === "api" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold mb-2">
                  RESTful API Specifications
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  Real API endpoints implemented in the controller layer, validated through Postman test suites.
                </p>
              </div>

              {caseStudy?.sampleEndpoints && (
                <div className="space-y-2 font-mono text-xs">
                  {caseStudy.sampleEndpoints.map((ep, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            ep.method === "GET"
                              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                              : ep.method === "POST"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                              : ep.method === "PATCH" || ep.method === "PUT"
                              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                              : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className="text-zinc-900 dark:text-zinc-200 font-semibold">
                          {ep.path}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-zinc-500 dark:text-zinc-400 font-sans text-xs">
                          {ep.desc}
                        </span>
                        <button
                          onClick={() => copyEndpoint(ep.path)}
                          className="p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                          title="Copy endpoint path"
                        >
                          {copiedPath === ep.path ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-500 font-mono">
            <Code className="w-3.5 h-3.5 text-emerald-500" />
            <span>Architecture & Code: Verified backend implementation</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-800 dark:text-white border border-zinc-700 hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Inspect Repository</span>
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
