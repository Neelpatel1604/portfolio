"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Cloud, CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    id: "memanto",
    badge: "01 · Open-Source Flagship",
    title: "Memanto — Memory Layer for AI Agents",
    metric: "1.8k+ GitHub Stars in 3 Months",
    summary:
      "Most AI agents suffer from amnesia or bloated context windows. I created Memanto at Moorcheh to give agents persistent, fast, retrievable memory across sessions.",
    nodes: [
      { step: "Agent Frameworks", detail: "Agno · Mastra · CAMEL-AI · AgentScope" },
      { step: "Memanto Memory Engine", detail: "Episodic & semantic indexing + fast recall" },
      { step: "Production Outcome", detail: "1,800+ ★ adoption & zero-hallucination context" },
    ],
    highlights: [
      "Shipped official integrations across 4 major agent ecosystems",
      "Adopted by thousands of developers within 90 days of launch",
    ],
    icon: Sparkles,
  },
  {
    id: "moorcheh",
    badge: "02 · Founding Engineer @ Moorcheh",
    title: "Edge & Multi-Cloud Vector Search",
    metric: "-72% Latency · -80% Infra Cost",
    summary:
      "Traditional server-bound vector databases are expensive and slow at the edge. I architected Moorcheh's search engine across AWS, GCP, on-prem, and edge deployments.",
    nodes: [
      { step: "Enterprise Data & Queries", detail: "RAG workloads · LangChain · n8n · Custom MCP" },
      { step: "Moorcheh Edge/Cloud Runtime", detail: "GCP Marketplace · AWS · On-Premise" },
      { step: "Production Outcome", detail: "72% faster search P99 & 80% lower vector cost" },
    ],
    highlights: [
      "Launched Moorcheh directly onto the Google Cloud (GCP) Marketplace",
      "Built custom MCP server + enterprise RAG pipelines from the ground up",
    ],
    icon: Cpu,
  },
  {
    id: "serverless",
    badge: "03 · Cloud & Data Systems",
    title: "Serverless Backends & Multi-Cloud ETL",
    metric: "-60% Compute Cost · +95% ETL Speed",
    summary:
      "From 25+ AWS Lambda microservices powering 400+ active subscribers to cross-cloud SQL/ETL automation across Snowflake, ClickHouse, and S3.",
    nodes: [
      { step: "Source Systems", detail: "PostgreSQL · DynamoDB · Oracle · Stripe Webhooks" },
      { step: "Serverless & ETL Mesh", detail: "25+ AWS Lambdas · API Gateway · SQS · Python" },
      { step: "Production Outcome", detail: "60% lower compute cost & 95% faster data transfer" },
    ],
    highlights: [
      "Architected full Stripe billing engine supporting 4 monetization models",
      "Automated SQL workflows across 6 cloud platforms, cutting manual query time by 70%",
    ],
    icon: Cloud,
  },
];

export function ArchitectureSpotlight() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = PILLARS[activeIdx];

  return (
    <div className="mt-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            What I Actually Do
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
            Three pillars of my engineering work
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
          Select a pillar to inspect the system flow →
        </p>
      </div>

      {/* 3-Tab Selector Cards */}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
        {PILLARS.map((pillar, idx) => {
          const active = idx === activeIdx;
          const Icon = pillar.icon;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`group relative flex flex-col justify-between rounded-2xl border p-5 text-left transition-all cursor-pointer ${
                active
                  ? "border-neutral-900 bg-neutral-900 text-white shadow-lg dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950"
                  : "border-neutral-200/90 bg-white/70 text-neutral-800 hover:border-neutral-400 hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-200 dark:hover:border-neutral-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-wider ${
                      active
                        ? "text-emerald-400 dark:text-emerald-600 font-semibold"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {pillar.badge}
                  </span>
                  <Icon
                    className={`size-4 ${
                      active ? "text-emerald-400 dark:text-emerald-600" : "text-neutral-400"
                    }`}
                  />
                </div>
                <h3 className="mt-2.5 text-base font-semibold leading-snug">
                  {pillar.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between">
                <span
                  className={`font-mono text-xs font-semibold ${
                    active
                      ? "text-emerald-300 dark:text-emerald-700"
                      : "text-emerald-600 dark:text-emerald-400"
                  }`}
                >
                  {pillar.metric}
                </span>
                <ArrowRight
                  className={`size-3.5 transition-transform ${
                    active ? "translate-x-0.5" : "opacity-40 group-hover:translate-x-0.5"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Visual System Flow Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60 md:p-8"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left narrative */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-300">
                {current.metric}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {current.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {current.summary}
              </p>
              <ul className="space-y-2 pt-1">
                {current.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right visual 3-stage architecture diagram */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-neutral-200/80 bg-neutral-50/80 p-5 dark:border-neutral-800 dark:bg-neutral-950/70">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    Architecture Flow
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Production Verified
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {current.nodes.map((node, i) => (
                    <div
                      key={node.step}
                      className="relative flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div>
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          Stage 0{i + 1}
                        </span>
                        <p className="mt-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                          {node.step}
                        </p>
                      </div>
                      <p className="mt-3 font-mono text-[11px] leading-snug text-neutral-500 dark:text-neutral-400">
                        {node.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
