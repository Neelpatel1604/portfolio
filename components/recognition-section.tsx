"use client";

import { motion } from "framer-motion";
import { recognition } from "@/lib/recognition";
import { Trophy, Award, ShieldCheck } from "lucide-react";

export function RecognitionSection() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="py-16 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <Trophy className="size-3.5" />
            <span>Recognition &amp; Credentials</span>
          </div>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
            Medals, certifications &amp; hackathons
          </h2>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {recognition.map((row, idx) => {
          const Icon = idx === 0 ? ShieldCheck : idx === 1 ? Trophy : Award;
          return (
            <div
              key={row.category}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-emerald-500" />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {row.category}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {row.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200"
                    >
                      • {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
