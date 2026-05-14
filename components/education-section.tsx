"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/education";

const B = "border-neutral-900 dark:border-neutral-600";

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className={`flex items-center justify-between border-b border-r px-6 py-4 md:px-10 bg-neutral-100 dark:bg-neutral-900 ${B}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
        {title}
      </span>
      <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-600">{index}</span>
    </div>
  );
}

export function EducationSection() {
  return (
    <motion.section id="education" variants={item}>
      <SectionHeader index="06" title="Education" />
      <div className={`border-b border-r ${B}`}>
        {education.map((edu, i, arr) => (
          <div
            key={edu.institution}
            className={`grid grid-cols-1 lg:grid-cols-12 ${i < arr.length - 1 ? `border-b ${B}` : ""}`}
          >
            <div className={`px-6 py-7 lg:col-span-3 lg:border-r lg:px-10 ${B}`}>
              <p className="font-mono text-[11px] text-neutral-500">{edu.period}</p>
              <p className="mt-1 text-sm font-medium">{edu.institution}</p>
            </div>
            <div className="flex flex-col justify-center gap-1 px-6 py-7 lg:col-span-9 lg:px-10">
              <p className="text-sm font-medium">{edu.program}</p>
              <p className="font-mono text-[11px] text-neutral-500">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
