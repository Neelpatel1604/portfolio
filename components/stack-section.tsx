"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/stack";
import { useSystem } from "@/components/system-context";
import { Cpu, RotateCcw } from "lucide-react";

export function StackSection() {
  const { activeSkillFilter, setActiveSkillFilter } = useSystem();

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="py-16 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <Cpu className="size-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
            Tools I use in production
          </h2>
        </div>

        {activeSkillFilter ? (
          <button
            type="button"
            onClick={() => setActiveSkillFilter(null)}
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-emerald-500 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-300 cursor-pointer"
          >
            <RotateCcw className="size-3" />
            <span>Clear filter ({activeSkillFilter})</span>
          </button>
        ) : (
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            Click any skill to highlight matching work above
          </p>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((row) => (
          <div
            key={row.category}
            className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50"
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {row.category}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {row.items.map((skill) => {
                const isSelected =
                  activeSkillFilter?.toLowerCase() === skill.toLowerCase();
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() =>
                      setActiveSkillFilter(isSelected ? null : skill)
                    }
                    className={`rounded-full border px-3 py-1 font-mono text-xs transition-all cursor-pointer ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-500 font-semibold text-neutral-950"
                        : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:border-neutral-600"
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
