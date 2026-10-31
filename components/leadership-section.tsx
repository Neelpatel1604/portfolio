"use client";

import { motion } from "framer-motion";
import { leadership } from "@/lib/leadership";
import { Users } from "lucide-react";

const BADGES = [
  "700+ Members Led",
  "250+ Hackathon Attendees",
  "+50% Campus Growth",
  "Hardware & Robotics",
];

export function LeadershipSection() {
  return (
    <motion.section
      id="leadership"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="py-16 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <Users className="size-3.5" />
            <span>Community &amp; Leadership</span>
          </div>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
            Leading builders outside of work
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          Workshops · Hackathons · Student Communities
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {leadership.map((l, i) => (
          <div
            key={l.org}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                  {l.period}
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                  {BADGES[i] || "Community"}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {l.role}
              </h3>
              <p className="mt-0.5 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                {l.org}
              </p>

              <ul className="mt-4 space-y-2">
                {l.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                  >
                    • {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
