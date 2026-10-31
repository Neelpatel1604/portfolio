"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Sparkles, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { useSystem } from "@/components/system-context";

const PROJECT_STORY: Record<
  string,
  {
    tagline: string;
    impact: string;
    steps: { label: string; sub: string }[];
  }
> = {
  Porchline: {
    tagline: "One phone call → live deployed business website",
    impact: "Zero-touch voice-to-production deployment",
    steps: [
      { label: "Twilio Phone Call", sub: "Owner answers natural voice call" },
      { label: "Higgs Realtime AI", sub: "Conducts live discovery interview" },
      { label: "Gemini Design Synth", sub: "Builds tailored one-page site" },
      { label: "Netlify Edge Deploy", sub: "Instant live URL texted back" },
    ],
  },
  "Mesh Studio": {
    tagline: "Cursor for 3D parametric CAD models",
    impact: "Real-time AI code-to-STL/3MF compiler",
    steps: [
      { label: "Natural Chat Prompt", sub: "Describe 3D part or modification" },
      { label: "Targeted Code Diff", sub: "AI patches OpenSCAD geometry" },
      { label: "FastAPI CAD Worker", sub: "Compiles binary STL / 3MF mesh" },
      { label: "Interactive 3D View", sub: "Live rotatable preview in browser" },
    ],
  },
  MoveMean: {
    tagline: "Grounded RAG search engine for video libraries",
    impact: "Serverless AWS multimodal indexing",
    steps: [
      { label: "S3 Video Upload", sub: "Raw lecture or meeting footage" },
      { label: "AWS Transcribe", sub: "Timestamped speech extraction" },
      { label: "SageMaker + DynamoDB", sub: "Semantic vector chunk indexing" },
      { label: "Amazon Bedrock QA", sub: "Grounded answers with citations" },
    ],
  },
  NovaBuddy: {
    tagline: "1M-token context serverless AI study companion",
    impact: "Full-semester PDFs & slides in a single context window",
    steps: [
      { label: "Slides & PDF Ingest", sub: "Upload entire course materials" },
      { label: "Terraform + Lambda", sub: "100% IaC serverless backend" },
      { label: "Amazon Nova 2 Lite", sub: "1,000,000-token context reasoning" },
      { label: "Quizzes & Study Chat", sub: "Instant summaries & practice tests" },
    ],
  },
  DeepFace: {
    tagline: "Real-time adversarial deepfake shield for streamers",
    impact: "Imperceptible PGD defense at live video frame rates",
    steps: [
      { label: "OBS WebSocket", sub: "Intercepts live streamer video feed" },
      { label: "PyTorch PGD Shield", sub: "Applies adversarial perturbations" },
      { label: "OpenCV Frame Pipe", sub: "Zero visible quality loss to viewers" },
      { label: "Deepfake Immunity", sub: "Breaks downstream face-swap AI" },
    ],
  },
};

export function ProjectsSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { activeSkillFilter } = useSystem();
  const activeProject = projects[selectedIdx] || projects[0];
  const story = PROJECT_STORY[activeProject.title];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="py-16 border-t border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <Layers className="size-3.5" />
            <span>Selected Systems</span>
          </div>
          <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
            Projects I&apos;ve designed &amp; shipped
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          Click any project to inspect its pipeline architecture
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
        {/* Left: Clean Selectable Project List */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {projects.map((proj, idx) => {
            const isSelected = idx === selectedIdx;
            const projStory = PROJECT_STORY[proj.title];
            const matchesFilter =
              !activeSkillFilter ||
              proj.tags.some((t) =>
                t.toLowerCase().includes(activeSkillFilter.toLowerCase())
              ) ||
              proj.desc.toLowerCase().includes(activeSkillFilter.toLowerCase());

            return (
              <button
                key={proj.title}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                onMouseEnter={() => setSelectedIdx(idx)}
                className={`group flex flex-col justify-between rounded-2xl border p-5 text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-neutral-900 bg-neutral-900 text-white shadow-md dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                    : "border-neutral-200/90 bg-white/70 text-neutral-800 hover:border-neutral-400 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-200 dark:hover:border-neutral-700"
                } ${activeSkillFilter && !matchesFilter ? "opacity-35" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-xs ${
                        isSelected
                          ? "text-emerald-400 dark:text-emerald-600 font-semibold"
                          : "text-neutral-400"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <h3 className="text-base font-semibold tracking-tight">
                      {proj.title}
                    </h3>
                  </div>
                  <ArrowRight
                    className={`size-4 transition-transform ${
                      isSelected
                        ? "translate-x-0.5 text-emerald-400 dark:text-emerald-600"
                        : "text-neutral-400 group-hover:translate-x-0.5"
                    }`}
                  />
                </div>

                {projStory && (
                  <p
                    className={`mt-1.5 text-xs ${
                      isSelected
                        ? "text-neutral-300 dark:text-neutral-600"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {projStory.tagline}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Interactive Project Spotlight & Architecture Flow */}
        <div className="lg:col-span-7 lg:sticky lg:top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-8"
            >
              {/* Top Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-neutral-200/80 pb-5 dark:border-neutral-800">
                <div>
                  {story && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                      <Sparkles className="size-3" />
                      {story.impact}
                    </span>
                  )}
                  <h3 className="mt-2.5 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    {activeProject.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 font-mono text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-white"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href={activeProject.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-1.5 font-mono text-xs font-medium text-white transition-colors hover:bg-emerald-600 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-emerald-400"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-base">
                {activeProject.desc}
              </p>

              {/* Visual 4-Step System Pipeline */}
              {story && (
                <div className="mt-6 rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-4 dark:border-neutral-800 dark:bg-neutral-950/60">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    How It Works Under The Hood
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {story.steps.map((step, sIdx) => (
                      <div
                        key={step.label}
                        className="flex items-start gap-3 rounded-lg border border-neutral-200/80 bg-white p-3 dark:border-neutral-800/80 dark:bg-neutral-900"
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                          {sIdx + 1}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                            {step.label}
                          </p>
                          <p className="mt-0.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                            {step.sub}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {activeProject.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
