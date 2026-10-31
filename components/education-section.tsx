"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/education";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="py-12 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        <GraduationCap className="size-3.5" />
        <span>Education</span>
      </div>

      <div className="mt-4 space-y-4">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm sm:flex-row sm:items-center dark:border-neutral-800 dark:bg-neutral-900/50"
          >
            <div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {edu.institution}
              </h3>
              <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-300">
                {edu.program}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                {edu.period}
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-300">
                {edu.note}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
