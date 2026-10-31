"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  FileText,
} from "lucide-react";
import { ArchitectureSpotlight } from "@/components/architecture-spotlight";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { LeadershipSection } from "@/components/leadership-section";
import { StackSection } from "@/components/stack-section";
import { EducationSection } from "@/components/education-section";
import { RecognitionSection } from "@/components/recognition-section";
import { useSystem } from "@/components/system-context";

export default function Home() {
  const { openAiWithPrompt } = useSystem();
  const [copied, setCopied] = useState(false);
  const [lens, setLens] = useState<"story" | "tldr">("story");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyEmail = () => {
    navigator.clipboard?.writeText("neelvp2004@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-[#09090b] dark:text-neutral-100">
      <main className="mx-auto max-w-5xl px-6">
        {/* HERO SECTION — Crystal Clear Identity & Narrative */}
        <section id="about" className="pt-14 pb-16 md:pt-20 md:pb-20">
          {/* Top bar: Location + Quick Lens Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-700 shadow-2xs dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
              <MapPin className="size-3.5 text-emerald-500" />
              <span>Toronto, ON</span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">
                Founding Engineer @ Moorcheh
              </span>
            </div>

            {/* Signature Lens Switch: Story vs 15-Second Recruiter Brief */}
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100/80 p-1 dark:border-neutral-800 dark:bg-neutral-900">
              <button
                type="button"
                onClick={() => setLens("story")}
                className={`rounded-full px-3 py-1 font-mono text-[11px] font-medium transition-all cursor-pointer ${
                  lens === "story"
                    ? "bg-white text-neutral-900 shadow-2xs dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                Full Story
              </button>
              <button
                type="button"
                onClick={() => setLens("tldr")}
                className={`rounded-full px-3 py-1 font-mono text-[11px] font-medium transition-all cursor-pointer ${
                  lens === "tldr"
                    ? "bg-white text-neutral-900 shadow-2xs dark:bg-neutral-800 dark:text-white"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                15s Recruiter TL;DR
              </button>
            </div>
          </div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl md:leading-[1.08] dark:text-white">
              I&apos;m Neel Patel.{" "}
              <span className="text-neutral-500 dark:text-neutral-400">
                I build the cloud &amp; memory infrastructure behind AI products.
              </span>
            </h1>

            <AnimatePresence mode="wait">
              {lens === "story" ? (
                <motion.p
                  key="story-text"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-relaxed dark:text-neutral-300"
                >
                  I&apos;m an{" "}
                  <strong className="font-medium text-neutral-900 dark:text-white">
                    AI Infrastructure &amp; Systems Engineer
                  </strong>
                  . At{" "}
                  <strong className="font-medium text-neutral-900 dark:text-white">
                    Moorcheh
                  </strong>
                  , I grew from Intern to{" "}
                  <strong className="font-medium text-neutral-900 dark:text-white">
                    Founding Engineer
                  </strong>{" "}
                  — building{" "}
                  <strong className="font-medium text-neutral-900 dark:text-white">
                    Memanto
                  </strong>{" "}
                  (an open-source memory layer for AI agents that reached{" "}
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    1.8k+ GitHub stars in 3 months
                  </span>
                  ) and architecting vector search across AWS, GCP, on-prem, and edge
                  that cut latency by{" "}
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    72%
                  </span>{" "}
                  and infrastructure costs by{" "}
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    80%
                  </span>
                  . Outside work, I lead{" "}
                  <strong className="font-medium text-neutral-900 dark:text-white">
                    700+ student builders
                  </strong>{" "}
                  as President of the AWS Student Builder Group at Sheridan.
                </motion.p>
              ) : (
                <motion.div
                  key="tldr-box"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.04] p-6 dark:bg-emerald-500/[0.06]"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Executive Summary — Why Neel Stands Out
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm text-neutral-700 dark:text-neutral-200">
                    <div>
                      • <strong>Role:</strong> Founding Engineer @ Moorcheh (May 2025 – Present)
                    </div>
                    <div>
                      • <strong>Open-Source Flagship:</strong> Creator of Memanto (1.8k+ GitHub stars in 90 days)
                    </div>
                    <div>
                      • <strong>Systems Impact:</strong> -80% vector cost, -72% search latency, -60% AWS Lambda cost
                    </div>
                    <div>
                      • <strong>Community &amp; Awards:</strong> AWS Club President (700+ members) · Cloud Computing Gold &amp; Silver Medalist
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Primary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              >
                <span>Explore my work</span>
                <ArrowUpRight className="size-4" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-700 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="size-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">
                      Copied neelvp2004@gmail.com
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 text-neutral-400" />
                    <span>neelvp2004@gmail.com</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => openAiWithPrompt("Why should our team hire Neel?")}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-500/20 dark:text-emerald-300 cursor-pointer"
              >
                <Sparkles className="size-3.5" />
                <span>Ask AI about me</span>
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/Neelpatel1604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-neutral-200 bg-white px-3.5 py-2 font-mono text-xs text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/neelbuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-neutral-200 bg-white px-3.5 py-2 font-mono text-xs text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600"
                >
                  LinkedIn
                </a>
                <a
                  href="https://blog.neelbuilds.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-neutral-200 bg-white px-3.5 py-2 font-mono text-xs text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600"
                >
                  Blog
                </a>
              </div>
            </div>
          </motion.div>

          {/* 4 Scannable Proof Cards */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              {
                label: "Open-Source Traction",
                value: "1.8k★",
                sub: "Memanto in 3 months",
              },
              {
                label: "Search Latency Cut",
                value: "-72%",
                sub: "Across GCP, edge & on-prem",
              },
              {
                label: "AWS Builder Group",
                value: "700+",
                sub: "Members led as President",
              },
              {
                label: "Hackathons & Workshops",
                value: "7+",
                sub: "Competed · 3 Judged · 7 Taught",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-2xs dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <p className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </p>
                <p className="mt-1.5 font-mono text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive 3-Pillar Architecture Spotlight */}
          <ArchitectureSpotlight />
        </section>

        {/* FLOWING CONTENT SECTIONS */}
        <ExperienceSection />
        <ProjectsSection />
        <LeadershipSection />
        <StackSection />
        <RecognitionSection />
        <EducationSection />

        {/* CLEAN FOOTER */}
        <footer
          id="contact"
          className="mt-8 flex flex-col justify-between gap-6 border-t border-neutral-200/80 py-12 sm:flex-row sm:items-center dark:border-neutral-800/80"
        >
          <div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Neel Patel · neelbuilds
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              AI Infrastructure Engineer · Toronto, ON
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            <a
              href="mailto:neelvp2004@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-neutral-950 dark:hover:text-white"
            >
              <Mail className="size-3.5" />
              <span>neelvp2004@gmail.com</span>
            </a>
            <a
              href="https://github.com/Neelpatel1604"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/neelbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://blog.neelbuilds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 dark:hover:text-white"
            >
              Blog
            </a>
            <a
              href="/llm.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-emerald-600 hover:underline dark:text-emerald-400"
            >
              <FileText className="size-3.5" />
              <span>/llm.txt</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
