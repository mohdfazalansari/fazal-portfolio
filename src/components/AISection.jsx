import React from "react";
import { aiKnowledge } from "../data/portfolioData";

export default function AISection() {
  return (
    <section id="ai-knowledge" className="py-12 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-900 dark:text-white font-bold">
            AI / ML Knowledge
          </h2>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            Studied & explored concepts
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-4">
          I have studied and explored core concepts in:
        </p>

        {/* Clean, minimal horizontal pills/list */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {aiKnowledge.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
