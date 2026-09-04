"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/education";
import { SectionHeader } from "@/components/section-header";
import { B } from "@/lib/styles";

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function EducationSection() {
  return (
    <motion.section id="education" variants={item}>
      <SectionHeader index="06" title="Education" />
      <div className={`border-b ${B}`}>
        {education.map((edu, i, arr) => (
          <div
            key={edu.institution}
            className={`grid grid-cols-1 lg:grid-cols-12 transition-colors hover:bg-neutral-100/50 dark:hover:bg-neutral-900/30 ${i < arr.length - 1 ? `border-b ${B}` : ""}`}
          >
            <div className={`px-6 py-7 lg:col-span-3 lg:border-r lg:px-10 ${B}`}>
              <p className="font-mono text-xs text-neutral-600 dark:text-neutral-300">{edu.period}</p>
              <p className="mt-1 text-sm font-medium">{edu.institution}</p>
            </div>
            <div className="flex flex-col justify-center gap-1 px-6 py-7 lg:col-span-9 lg:px-10">
              <p className="text-sm font-medium">{edu.program}</p>
              <p className="font-mono text-xs text-neutral-600 dark:text-neutral-300">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
