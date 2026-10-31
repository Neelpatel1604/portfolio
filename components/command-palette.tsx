"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CornerDownLeft,
  ArrowUpRight,
  X,
  MessageSquare,
  Compass,
  Mail,
  FileText,
} from "lucide-react";
import { experiences } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { stack } from "@/lib/stack";
import { leadership } from "@/lib/leadership";
import { recognition } from "@/lib/recognition";
import { useSystem } from "@/components/system-context";

const QUICK_QUESTIONS = [
  "Who is Neel in 30 seconds?",
  "What is Memanto (1.8k★)?",
  "Biggest latency & cost wins?",
  "Tell me about his best projects",
  "Leadership & Cloud medals?",
];

function answerQuestion(qRaw: string): { title: string; body: string[]; pills: string[] } {
  const q = qRaw.toLowerCase();

  if (q.includes("memanto") || q.includes("1.8k") || q.includes("star") || q.includes("memory")) {
    return {
      title: "Memanto — Open-Source Memory Layer for AI Agents",
      body: [
        "Built by Neel at Moorcheh, Memanto is an open-source memory layer that gives AI agents persistent, low-latency context across sessions.",
        "It reached 1,800+ GitHub stars in just 3 months and ships with native integrations across Agno, Mastra, CAMEL-AI, and AgentScope.",
      ],
      pills: ["1.8k+ GitHub Stars", "Agno & Mastra", "Open Source"],
    };
  }

  if (q.includes("latency") || q.includes("cost") || q.includes("metric") || q.includes("win") || q.includes("scale")) {
    return {
      title: "Verified Production Impact & Benchmarks",
      body: [
        "• 80% lower vector infrastructure cost vs. server-based vector DBs for enterprise deployments at Moorcheh.",
        "• 72% faster core search latency across GCP, on-prem, and edge deployments.",
        "• 60% compute cost reduction by engineering 25+ AWS Lambda functions, API Gateway, DynamoDB & SQS.",
        "• 95% faster ETL data transfer from PostgreSQL/Oracle to S3 & Snowflake at Analyze Agency.",
      ],
      pills: ["-80% Vector Cost", "-72% Search Latency", "-60% AWS Compute", "+95% ETL Speed"],
    };
  }

  if (q.includes("project") || q.includes("porchline") || q.includes("mesh") || q.includes("movemean") || q.includes("novabuddy") || q.includes("deepface")) {
    return {
      title: "Selected Systems & Projects",
      body: projects.map((p) => `• ${p.title}: ${p.desc}`),
      pills: projects.map((p) => p.title),
    };
  }

  if (q.includes("leader") || q.includes("medal") || q.includes("aws") || q.includes("club") || q.includes("hackathon")) {
    return {
      title: "Community Leadership & Cloud Competitions",
      body: [
        `• ${leadership[0].role} at ${leadership[0].org}: Leading 700+ student builders with a core team of 10 and 7+ workshops delivered.`,
        `• Cloud Computing Medalist: ${recognition[1].items[0]} & ${recognition[1].items[1]}.`,
        "• Hackathon Veteran: Competed in 7+ hackathons and invited to judge 3 hackathons.",
      ],
      pills: ["700+ AWS Members", "Gold & Silver Medalist", "3x Hackathon Judge"],
    };
  }

  const moorcheh = experiences[0];
  return {
    title: "Neel Patel — AI Infrastructure & Cloud Engineer",
    body: [
      `Neel is a Toronto-based engineer and Founding Engineer at ${moorcheh.org}. He builds the backend systems that make AI products work in production — RAG pipelines, agent memory (Memanto, 1.8k★), and serverless runtimes across AWS, GCP, and edge.`,
      `He focuses on measurable systems engineering: cutting search latency by 72%, slashing vector costs by 80%, and leading a 700+ member AWS community at Sheridan College (${stack[0].items.slice(0, 4).join(", ")}).`,
    ],
    pills: ["Founding Engineer @ Moorcheh", "Memanto (1.8k★)", "Toronto, ON"],
  };
}

export function CommandPalette() {
  const { cmdOpen, setCmdOpen, selectedQuestion, setSelectedQuestion } = useSystem();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const activeAnswer = selectedQuestion
    ? { question: selectedQuestion, ...answerQuestion(selectedQuestion) }
    : null;

  useEffect(() => {
    if (cmdOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [cmdOpen]);

  const handleAsk = (questionText: string) => {
    const trimmed = questionText.trim();
    if (!trimmed) return;
    setSelectedQuestion(trimmed);
    setInput("");
  };

  const jumpTo = (hash: string) => {
    setCmdOpen(false);
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sleek Floating Bottom Bar when closed */}
      <div className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 px-4">
        <button
          type="button"
          onClick={() => setCmdOpen(true)}
          className="group flex items-center gap-3 rounded-full border border-neutral-300/90 bg-white/90 px-4 py-2.5 text-xs shadow-lg shadow-neutral-950/5 backdrop-blur-md transition-all hover:scale-[1.02] hover:border-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/90 dark:shadow-black/40 dark:hover:border-neutral-600 cursor-pointer"
        >
          <span className="flex size-2 rounded-full bg-emerald-500" />
          <span className="font-medium text-neutral-800 dark:text-neutral-200">
            Ask AI about Neel or jump anywhere
          </span>
          <kbd className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-mono text-[10px] text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {cmdOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setCmdOpen(false)}
            className="fixed inset-0 z-50 flex items-start justify-center bg-neutral-950/60 px-4 pt-[10vh] backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
            >
              {/* Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAsk(input);
                }}
                className="flex items-center border-b border-neutral-200 px-4 py-3.5 dark:border-neutral-800"
              >
                <Sparkles className="mr-3 size-4 shrink-0 text-emerald-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Neel (e.g. Memanto, latency wins, projects)..."
                  className="flex-1 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none dark:text-neutral-100"
                />
                {input.trim() ? (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1 rounded-md bg-neutral-900 px-2.5 py-1 font-mono text-[11px] font-medium text-white dark:bg-neutral-100 dark:text-neutral-950 cursor-pointer"
                  >
                    <span>Ask</span>
                    <CornerDownLeft className="size-3" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCmdOpen(false)}
                    className="rounded-md p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-900 dark:hover:text-neutral-200 cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </form>

              <div className="max-h-[68vh] overflow-y-auto p-5 space-y-5">
                {/* Active AI Answer if present */}
                {activeAnswer && (
                  <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.04] p-4 dark:bg-emerald-500/[0.06]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                        Memanto Knowledge Synthesis
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400">
                        Grounded on /llm.txt
                      </span>
                    </div>
                    <h4 className="mt-1.5 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {activeAnswer.title}
                    </h4>
                    <div className="mt-2 space-y-1.5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {activeAnswer.body.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {activeAnswer.pills.map((p) => (
                        <span
                          key={p}
                          className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-700 dark:text-emerald-300"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested Questions */}
                <div>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                    Ask Neel&apos;s Agent
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {QUICK_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleAsk(q)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 transition-colors hover:border-emerald-500 hover:bg-emerald-500/5 hover:text-emerald-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-emerald-500/60 dark:hover:text-emerald-300 cursor-pointer"
                      >
                        <MessageSquare className="size-3 text-emerald-500" />
                        <span>{q}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Section Jump */}
                <div>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                    Jump to Section
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                    {[
                      { label: "Story & Pillars", hash: "#about" },
                      { label: "Experience", hash: "#work" },
                      { label: "Selected Projects", hash: "#projects" },
                      { label: "Leadership", hash: "#leadership" },
                      { label: "Tech Stack", hash: "#skills" },
                      { label: "Recognition", hash: "#achievements" },
                    ].map((s) => (
                      <button
                        key={s.hash}
                        type="button"
                        onClick={() => jumpTo(s.hash)}
                        className="flex items-center justify-between rounded-lg border border-neutral-200/80 px-3 py-2 text-left text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-900 cursor-pointer"
                      >
                        <span>{s.label}</span>
                        <Compass className="size-3 text-neutral-400" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Links */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-3 text-xs dark:border-neutral-800">
                  <div className="flex items-center gap-4">
                    <a
                      href="mailto:neelvp2004@gmail.com"
                      className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      <Mail className="size-3.5" />
                      <span>neelvp2004@gmail.com</span>
                    </a>
                    <a
                      href="/llm.txt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      <FileText className="size-3.5" />
                      <span>/llm.txt</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400">ESC to close</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
