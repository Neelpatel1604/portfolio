"use client";

import { motion } from "framer-motion";
import { leadership } from "@/lib/leadership";
import { SectionHeader } from "@/components/section-header";
import { B } from "@/lib/styles";

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function LeadershipSection() {
  return (
    <motion.section id="leadership" variants={item}>
      <SectionHeader index="04" title="Leadership" />
      <div className={`grid grid-cols-1 md:grid-cols-2 border-b ${B}`}>
        {leadership.map((l, i, arr) => {
          const cols = 2;
          const isLastRow = i >= arr.length - (arr.length % cols === 0 ? cols : arr.length % cols);
          return (
          <div
            key={l.org}
            className={`group p-6 transition-colors hover:bg-neutral-100/80 dark:hover:bg-neutral-900/40 md:p-10
              ${!isLastRow ? `border-b ${B}` : ""}
              ${i % cols === 0 ? `md:border-r ${B}` : ""}
              ${i === arr.length - 1 && arr.length % 2 !== 0 ? "md:col-span-2" : ""}`}
          >
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-300">
              {l.period}
            </p>
            <h3 className="mt-3 text-base font-semibold">{l.role}</h3>
            <p className="mt-1 font-mono text-xs text-neutral-600 dark:text-neutral-300">{l.org}</p>
            <ul className="mt-5 space-y-2">
              {l.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-neutral-400" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          );
        })}
      </div>
    </motion.section>
  );
}
