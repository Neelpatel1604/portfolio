"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GitBranch, Mail, MapPin } from "lucide-react";

const B = "border-neutral-900 dark:border-neutral-600";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className={`flex items-center justify-between border-b border-r px-6 py-4 md:px-10 ${B}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
        {title}
      </span>
      <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-600">{index}</span>
    </div>
  );
}

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <motion.main
        className={`mx-auto max-w-6xl border-l ${B}`}
        initial="hidden"
        animate="show"
        variants={container}
      >

        {/* ── 01 ABOUT ─────────────────────────────────────────────── */}
        <motion.section id="about" variants={item}>
          <SectionHeader index="01" title="About" />
          <div className={`grid grid-cols-1 lg:grid-cols-12 border-b border-r ${B}`}>

            {/* Bio */}
            <div className={`border-b lg:border-b-0 lg:border-r lg:col-span-8 px-6 py-10 md:px-10 md:py-14 ${B}`}>
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                <MapPin className="size-3.5 shrink-0" strokeWidth={1.5} />
                Toronto, ON · Open to roles
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Neel Patel
              </h1>
              <p className="mt-2 font-mono text-sm text-neutral-500 dark:text-neutral-400">
                Developer · Cloud Architect · Community Lead
              </p>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                I build systems that stay boring in production — edge AI pipelines,
                cloud migrations, and developer tooling. I care about clarity at
                every layer: architecture, interface, and process.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className={`inline-flex items-center justify-center border ${B} bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-50 transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950`}
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center border ${B} px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900`}
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Metric tiles — 2×2 grid, always 4 equal cells */}
            <div className={`grid grid-cols-4 lg:grid-cols-2 lg:col-span-4 ${B}`}>
              {[
                { k: "Storage", v: "5 TB", d: "migrated" },
                { k: "Members", v: "120+", d: "AWS Cloud Club" },
                { k: "Cloud", v: "AWS", d: "primary platform" },
                { k: "Focus", v: "AI", d: "edge & data" },
              ].map((m, i) => (
                <div
                  key={m.k}
                  className={`flex flex-col justify-between px-4 py-6 md:px-6
                    ${i % 2 === 0 ? `border-r ${B}` : ""}
                    ${i < 2 ? `border-b ${B}` : ""}
                    ${i === 1 || i === 3 ? "" : ""}
                  `}
                >
                  <MonoLabel>{m.k}</MonoLabel>
                  <p className="mt-4 font-mono text-xl font-semibold tabular-nums lg:mt-8 lg:text-2xl">
                    {m.v}
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-neutral-500">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 02 EXPERIENCE ────────────────────────────────────────── */}
        <motion.section id="work" variants={item}>
          <SectionHeader index="02" title="Experience" />
          <div className={`border-b border-r ${B}`}>
            {[
              {
                period: "2024 — Present",
                role: "Software Developer",
                org: "Edge AI Innovations",
                desc: "Build and maintain inference-adjacent features, tighten observability pipelines, and keep production releases uneventful.",
                tags: ["Python", "AWS", "Edge AI"],
              },
              {
                period: "2023 — 2024",
                role: "Cloud Club Lead",
                org: "AWS Cloud Club — Sheridan",
                desc: "Grew membership to 120+, ran hands-on workshops, and helped members land cloud certifications and industry roles.",
                tags: ["AWS", "Community", "Leadership"],
              },
              {
                period: "2022 — 2023",
                role: "Cloud / IT Intern",
                org: "Placeholder Co.",
                desc: "Managed a 5 TB storage migration and helped standardise the internal cloud environment across three departments.",
                tags: ["Azure", "Migration", "IaC"],
              },
            ].map((role, i, arr) => (
              <div
                key={role.org}
                className={`grid grid-cols-1 gap-0 lg:grid-cols-12
                  ${i < arr.length - 1 ? `border-b ${B}` : ""}`}
              >
                <div className={`px-6 py-8 lg:col-span-3 lg:border-r lg:px-10 ${B}`}>
                  <p className="font-mono text-[11px] text-neutral-500">{role.period}</p>
                  <p className="mt-2 text-sm font-medium">{role.role}</p>
                  <p className="mt-1 font-mono text-[11px] text-neutral-500">{role.org}</p>
                </div>
                <div className="flex flex-col justify-between gap-4 px-6 py-8 lg:col-span-9 lg:px-10">
                  <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {role.desc}
                  </p>
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
            ))}
          </div>
        </motion.section>

        {/* ── 03 PROJECTS ──────────────────────────────────────────── */}
        <motion.section id="projects" variants={item}>
          <SectionHeader index="03" title="Projects" />
          <div className={`grid grid-cols-1 md:grid-cols-2 border-b ${B}`}>
            {[
              {
                title: "Moorcheh",
                year: "2024",
                desc: "A platform built for [describe what Moorcheh does]. Led product and engineering from zero to first users.",
                tags: ["Next.js", "TypeScript", "Postgres"],
              },
              {
                title: "Cloud Migration",
                year: "2023",
                desc: "Designed and executed a 5 TB cloud migration for an organisation, reducing overhead and improving reliability.",
                tags: ["AWS", "Terraform", "IaC"],
              },
              {
                title: "n8n Automation Suite",
                year: "2023",
                desc: "Built an internal workflow automation layer using n8n, cutting manual ops work by a significant margin.",
                tags: ["n8n", "Python", "APIs"],
              },
            ].map((proj, i) => (
              <motion.article
                key={proj.title}
                variants={item}
                className={`flex flex-col justify-between border-b border-r p-6 md:p-10 ${B}
                  ${i === 2 ? "md:col-span-2 md:flex-row md:items-end md:gap-10" : ""}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <MonoLabel>Project</MonoLabel>
                    <span className="font-mono text-[10px] text-neutral-400">{proj.year}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{proj.title}</h3>
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
                <a
                  href="#"
                  className={`mt-6 inline-flex items-center gap-2 self-start border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 md:mt-0 md:self-end ${B}`}
                >
                  View <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* ── 04 LEADERSHIP ────────────────────────────────────────── */}
        <motion.section id="leadership" variants={item}>
          <SectionHeader index="04" title="Leadership" />
          <div className={`grid grid-cols-1 md:grid-cols-2 border-b ${B}`}>
            {[
              {
                role: "Club President",
                org: "AWS Cloud Club — Sheridan College",
                period: "2023 — 2024",
                points: [
                  "Scaled club membership from ~30 to 120+ students",
                  "Organised 10+ hands-on cloud workshops per semester",
                  "Mentored members through AWS certification tracks",
                ],
              },
              {
                role: "Event Lead",
                org: "Sheridan Tech Community",
                period: "2022 — 2023",
                points: [
                  "Co-organised hackathons and networking events",
                  "Coordinated with industry partners for sponsorship",
                  "Managed a volunteer team of 8 organisers",
                ],
              },
            ].map((l, i) => (
              <div
                key={l.org}
                className={`border-b border-r p-6 md:p-10 ${B}
                  ${i % 2 !== 0 ? "md:border-r" : ""}`}
              >
                <MonoLabel>{l.period}</MonoLabel>
                <h3 className="mt-3 text-base font-semibold">{l.role}</h3>
                <p className="mt-1 font-mono text-[11px] text-neutral-500">{l.org}</p>
                <ul className="mt-5 space-y-2">
                  {l.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-neutral-400" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 05 SKILLS ────────────────────────────────────────────── */}
        <motion.section id="skills" variants={item}>
          <SectionHeader index="05" title="Technical Stack" />
          <div className={`border-b border-r ${B}`}>
            {[
              { category: "Languages",    items: ["Python", "TypeScript", "SQL", "Bash"] },
              { category: "Cloud & Infra", items: ["AWS", "Terraform", "Docker", "CI/CD"] },
              { category: "Data & AI",    items: ["Vector DBs", "n8n", "Postgres", "Redis"] },
              { category: "Frontend",     items: ["Next.js", "React", "Tailwind CSS"] },
            ].map((row, i, arr) => (
              <div
                key={row.category}
              className={`grid grid-cols-1 lg:grid-cols-12 ${i < arr.length - 1 ? `border-b ${B}` : ""}`}
            >
              <div className={`flex items-center border-b px-6 py-5 lg:col-span-3 lg:border-b-0 lg:border-r lg:px-10 ${B}`}>
                <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {row.category}
                </span>
              </div>
              <div className="flex items-center px-6 py-5 lg:col-span-9 lg:px-10">
                  <p className="font-mono text-xs text-neutral-800 dark:text-neutral-200">
                    {row.items.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 06 EDUCATION ─────────────────────────────────────────── */}
        <motion.section id="education" variants={item}>
          <SectionHeader index="06" title="Education" />
          <div className={`border-b border-r ${B}`}>
            {[
              {
                institution: "Sheridan College",
                program: "Computer Systems Technology",
                period: "2021 — 2024",
                note: "Honours · Dean's List",
              },
              {
                institution: "Online / Self-directed",
                program: "AWS Solutions Architect — Associate",
                period: "2023",
                note: "Certification",
              },
            ].map((edu, i, arr) => (
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

        {/* ── FOOTER ───────────────────────────────────────────────── */}
        <motion.footer
          id="contact"
          variants={item}
          className={`flex flex-col gap-6 border-b border-r px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 ${B}`}
        >
          <p className="font-mono text-xs text-neutral-500">
            © 2026 Neel Patel · Available for new roles
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { Icon: Mail,      label: "hello@yourname.dev", href: "mailto:hello@yourname.dev" },
              { Icon: GitBranch, label: "GitHub",             href: "#" },
              { Icon: Briefcase, label: "LinkedIn",           href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 font-mono text-xs text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
              >
                <Icon className="size-3.5" strokeWidth={1.5} />
                {label}
              </a>
            ))}
          </div>
        </motion.footer>

      </motion.main>
    </div>
  );
}
