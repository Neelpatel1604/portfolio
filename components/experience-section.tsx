"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences, type Experience, type Role } from "@/lib/experience";

const B = "border-neutral-900 dark:border-neutral-600";

const item = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const TYPE_LABEL: Record<Role["type"], string> = {
  "Full-time": "Full-time",
  "Part-time": "Part-time",
  "Full-time Internship": "Full-time Intern",
  Internship: "Intern",
  Contract: "Contract",
  Freelance: "Freelance",
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

function CompanyHeader({ exp }: { exp: Experience }) {
  return (
    <div
      className={`flex items-center justify-between border-b border-r px-6 py-4 md:px-10 bg-neutral-200 dark:bg-neutral-800 ${B}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold tracking-tight">{exp.org}</span>
        <span className="font-mono text-[10px] text-neutral-500 dark:text-neutral-400">
          {exp.location}
        </span>
      </div>
      {exp.link && (
        <a
          href={exp.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          {exp.link.label}
          <ArrowUpRight className="size-3" strokeWidth={1.5} />
        </a>
      )}
    </div>
  );
}

function RoleRow({
  role,
  isLast,
}: {
  role: Role;
  isLast: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 border-r ${!isLast ? `border-b ${B}` : ""} ${B}`}
    >
      {/* Left: period + title + type */}
      <div className={`px-6 py-8 lg:col-span-3 lg:border-r lg:px-10 ${B}`}>
        <p className="font-mono text-[11px] text-neutral-500">{role.period}</p>
        <p className="mt-2 text-sm font-medium leading-snug">{role.title}</p>
        <span
          className={`mt-2 inline-block border px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 ${B}`}
        >
          {TYPE_LABEL[role.type]}
        </span>
      </div>

      {/* Right: bullets + tags */}
      <div className="flex flex-col justify-between gap-5 px-6 py-8 lg:col-span-9 lg:px-10">
        <ul className="space-y-2">
          {role.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
            >
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400"
                aria-hidden
              />
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {role.tags.map((t) => (
            <span
              key={t}
              className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-600 dark:text-neutral-400 ${B}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <motion.section id="work" variants={item}>
      <SectionHeader index="02" title="Experience" />
      <div className={`border-b ${B}`}>
        {experiences.map((exp, ei) => (
          <div key={exp.org}>
            <CompanyHeader exp={exp} />
            {exp.roles.map((role, ri) => (
              <RoleRow
                key={`${exp.org}-${role.period}`}
                role={role}
                isLast={ri === exp.roles.length - 1 && ei === experiences.length - 1}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
