"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

const B = "border-neutral-900 dark:border-neutral-600";

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div
      className={`flex items-center justify-between border-b border-r px-6 py-4 md:px-10 bg-neutral-100 dark:bg-neutral-900 ${B}`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
        {title}
      </span>
      <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-600">
        {index}
      </span>
    </div>
  );
}


export function ProjectsSection() {
  return (
    <motion.section id="projects" variants={item}>
      <SectionHeader index="03" title="Projects" />
      <div className={`grid grid-cols-1 md:grid-cols-2 border-b ${B}`}>
        {projects.map((proj, i) => (
          <motion.article
            key={proj.title}
            variants={item}
            className={`flex flex-col justify-between border-b border-r p-6 md:p-10 ${B}
              ${i === projects.length - 1 && projects.length % 2 !== 0
                ? "md:col-span-2 md:flex-row md:items-end md:gap-10"
                : ""
              }`}
          >
            <div>
              {proj.year && (
                <span className="font-mono text-[10px] text-neutral-400">
                  {proj.year}
                </span>
              )}
              <div className={`flex items-center justify-between gap-4 ${proj.year ? "mt-3" : ""}`}>
                <h3 className="text-lg font-semibold tracking-tight">{proj.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className={`inline-flex items-center justify-center border p-1.5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 ${B}`}
                  >
                    <svg viewBox="0 0 16 16" className="size-3.5 fill-current" aria-hidden>
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a
                    href={proj.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 ${B}`}
                  >
                    View <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {proj.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 ${B}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
