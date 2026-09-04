"use client";

import { motion } from "framer-motion";
import { recognition } from "@/lib/recognition";

const B = "border-neutral-900 dark:border-neutral-600";

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className={`flex items-center justify-between border-b px-6 py-4 md:px-10 bg-neutral-100 dark:bg-neutral-900 ${B}`}>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
        {title}
      </span>
      <span className="font-mono text-xs text-neutral-500 dark:text-neutral-500">{index}</span>
    </div>
  );
}

export function RecognitionSection() {
  return (
    <motion.section id="achievements" variants={item}>
      <SectionHeader index="07" title="Recognition" />
      <div className={`border-b ${B}`}>
        {recognition.map((row, i, arr) => (
          <div
            key={row.category}
            className={`grid grid-cols-1 lg:grid-cols-12 ${i < arr.length - 1 ? `border-b ${B}` : ""}`}
          >
            <div className={`flex items-center border-b px-6 py-5 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 ${B}`}>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-300">
                {row.category}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-1.5 px-6 py-5 lg:col-span-9 lg:px-10">
              {row.items.map((it) => (
                <p key={it} className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
                  {it}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
