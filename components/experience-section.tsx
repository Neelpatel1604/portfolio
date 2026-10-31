"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { experiences, type Experience, type Role } from "@/lib/experience";
import { getCompanyTenure } from "@/lib/experience-duration";
import { useSystem } from "@/components/system-context";

const TYPE_LABEL: Record<Role["type"], string> = {
  "Full-time": "Full-time",
  "Part-time": "Part-time",
  "Full-time Internship": "Full-time Intern",
  Internship: "Intern",
  Contract: "Contract",
  Freelance: "Freelance",
};

function formatBullet(bullet: string) {
  const parts = bullet.split(
    /(\b\d+(?:\.\d+)?k?\+?\s*(?:%|GitHub stars|active users|Lambda functions|queries|cloud platforms|themes|fonts|months)\b|~?\d+%)/gi
  );
  return parts.map((part, idx) => {
    if (
      /(\d+(?:\.\d+)?k?\+?\s*(?:%|GitHub stars|active users|Lambda functions|queries|cloud platforms|themes|fonts|months)|~?\d+%)/i.test(
        part
      )
    ) {
      return (
        <strong
          key={idx}
          className="font-semibold text-neutral-950 underline decoration-emerald-500/50 decoration-2 underline-offset-2 dark:text-white"
        >
          {part}
        </strong>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

function CompanyCard({ exp }: { exp: Experience }) {
  const tenure = getCompanyTenure(exp.roles);
  const { activeSkillFilter, setActiveSkillFilter } = useSystem();

  return (
    <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 md:p-8">
      {/* Company Header */}
      <div className="flex flex-col justify-between gap-2 border-b border-neutral-200/80 pb-5 sm:flex-row sm:items-center dark:border-neutral-800">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {exp.org}
            </h3>
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 font-mono text-[11px] text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
              {exp.location}
            </span>
          </div>
          {tenure && (
            <p className="mt-1 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              {tenure.range} ·{" "}
              <span className="font-medium text-emerald-600 dark:text-emerald-400">
                {tenure.duration}
              </span>
            </p>
          )}
        </div>

        {exp.link && (
          <a
            href={exp.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-950 sm:self-auto dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-white"
          >
            <span>{exp.link.label}</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>

      {/* Connected Role Progression Timeline */}
      <div className="mt-6 space-y-8">
        {exp.roles.map((role, rIdx) => {
          const isCurrent = /present/i.test(role.period);
          const matchesFilter =
            !activeSkillFilter ||
            role.tags.some((t) =>
              t.toLowerCase().includes(activeSkillFilter.toLowerCase())
            ) ||
            role.bullets.some((b) =>
              b.toLowerCase().includes(activeSkillFilter.toLowerCase())
            );

          return (
            <div
              key={`${exp.org}-${role.period}`}
              className={`relative pl-6 transition-opacity ${
                rIdx !== exp.roles.length - 1
                  ? "border-l border-neutral-200 dark:border-neutral-800 pb-2"
                  : "border-l border-transparent"
              } ${activeSkillFilter && !matchesFilter ? "opacity-35" : ""}`}
            >
              {/* Timeline Dot */}
              <span
                className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ring-4 ring-white dark:ring-neutral-900 ${
                  isCurrent
                    ? "bg-emerald-500"
                    : "bg-neutral-300 dark:bg-neutral-700"
                }`}
              />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    {role.title}
                  </h4>
                  <span className="rounded-md bg-neutral-100 px-2 py-0.5 font-mono text-[11px] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    {TYPE_LABEL[role.type]}
                  </span>
                </div>
                <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                  {role.period}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {role.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                  >
                    • {formatBullet(b)}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.tags.map((t) => {
                  const selected =
                    activeSkillFilter?.toLowerCase() === t.toLowerCase();
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() =>
                        setActiveSkillFilter(selected ? null : t)
                      }
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] transition-colors cursor-pointer ${
                        selected
                          ? "border-emerald-500 bg-emerald-500 text-neutral-950 font-semibold"
                          : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:border-neutral-600"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const { activeSkillFilter, setActiveSkillFilter } = useSystem();

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="py-16 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <Briefcase className="size-3.5" />
            <span>Experience</span>
          </div>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
            Where I&apos;ve built &amp; scaled systems
          </h2>
        </div>

        {activeSkillFilter ? (
          <button
            type="button"
            onClick={() => setActiveSkillFilter(null)}
            className="self-start rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-700 dark:text-emerald-300 cursor-pointer"
          >
            Filtered by: {activeSkillFilter} ×
          </button>
        ) : (
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            Intern → Software Engineer → Founding Engineer
          </p>
        )}
      </div>

      <div className="mt-8 space-y-6">
        {experiences.map((exp) => (
          <CompanyCard key={exp.org} exp={exp} />
        ))}
      </div>
    </motion.section>
  );
}
