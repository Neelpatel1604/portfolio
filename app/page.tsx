"use client";



import { useEffect } from "react";

import { motion } from "framer-motion";

import { Mail, MapPin } from "lucide-react";

import { ExperienceSection } from "@/components/experience-section";

import { ProjectsSection } from "@/components/projects-section";

import { LeadershipSection } from "@/components/leadership-section";

import { StackSection } from "@/components/stack-section";

import { EducationSection } from "@/components/education-section";

import { RecognitionSection } from "@/components/recognition-section";

import { SectionHeader } from "@/components/section-header";

import { BTN_PRIMARY, B, LINK_HOVER } from "@/lib/styles";



const container = {

  hidden: { opacity: 0 },

  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.04 } },

};

const item = {

  hidden: { opacity: 0, y: 8 },

  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },

};



function MonoLabel({ children }: { children: React.ReactNode }) {

  return (

    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-300">

      {children}

    </p>

  );

}



export default function Home() {

  useEffect(() => { window.scrollTo(0, 0); }, []);



  return (

    <div className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">

      <motion.main

        className={`mx-auto max-w-6xl border-l border-r ${B}`}

        initial="hidden"

        animate="show"

        variants={container}

      >



        <motion.section

          id="about"

          variants={item}

          className={`flex flex-col min-h-[calc(100dvh-3.25rem)] ${B}`}

        >

          <SectionHeader index="01" title="About" />



          <div className={`flex flex-1 flex-col justify-center border-b px-6 py-10 md:px-10 md:py-14 ${B}`}>

            <div className="flex items-center gap-2 font-mono text-sm text-neutral-700 dark:text-neutral-300">

              <MapPin className="size-3.5 shrink-0 text-neutral-700 dark:text-neutral-300" strokeWidth={1.5} />

              Toronto, ON

            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">

              Neel Patel

            </h1>

            <p className="mt-2 font-mono text-sm text-neutral-800 dark:text-neutral-200">

              Software Developer · Cloud Engineer · Builder

            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-800 dark:text-neutral-200 md:text-lg md:leading-relaxed">

              I build AI products end-to-end - serverless backends, RAG pipelines,

              edge deployments, and open-source tooling. At Moorcheh I ship enterprise AI

              infrastructure; building Memanto, memory that AI agents love. I lead the AWS Student Builder Group at

              Sheridan and compete in (and judge) hackathons.

            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a

                href="#work"

                className={`inline-flex items-center justify-center border px-5 py-2.5 text-sm font-medium transition-colors ${BTN_PRIMARY} ${B}`}

              >

                View work

              </a>

              <a

                href="mailto:neelvp2004@gmail.com"

                className={`inline-flex items-center justify-center border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 ${B}`}

              >

                Get in touch

              </a>

            </div>

          </div>



          <div className={`grid grid-cols-2 border-b md:grid-cols-4 ${B}`}>

            {[

              { k: "Workshops",  v: "7",    d: "delivered" },

              { k: "Members",    v: "700+", d: "Builder Group" },

              { k: "Hackathons", v: "7+",   d: "competed · 3 judged" },

              { k: "Focus",      v: "AI",   d: "edge & cloud" },

            ].map((m, i) => (

              <div

                key={m.k}

                className={`flex flex-col gap-1 px-6 py-6 md:px-10

                  ${i % 2 === 0 ? `border-r ${B}` : ""}

                  ${i === 1 ? `md:border-r ${B}` : ""}

                  ${i < 2 ? `border-b md:border-b-0 ${B}` : ""}

                `}

              >

                <MonoLabel>{m.k}</MonoLabel>

                <p className="mt-2 font-mono text-2xl font-semibold tabular-nums">

                  {m.v}

                </p>

                <p className="font-mono text-[11px] text-neutral-700 dark:text-neutral-300">{m.d}</p>

              </div>

            ))}

          </div>

        </motion.section>



        <ExperienceSection />

        <ProjectsSection />

        <LeadershipSection />

        <StackSection />

        <EducationSection />

        <RecognitionSection />



        <motion.footer

          id="contact"

          variants={item}

          className={`flex flex-col gap-6 border-b px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 ${B}`}

        >

          <p className="font-mono text-sm text-neutral-600 dark:text-neutral-300">

            © 2026 neelbuilds

          </p>

          <div className="flex flex-wrap gap-6">

            <a

              href="mailto:neelvp2004@gmail.com"

              className={`inline-flex items-center gap-2 font-mono text-sm text-neutral-700 dark:text-neutral-300 ${LINK_HOVER}`}

            >

              <Mail className="size-3.5" strokeWidth={1.5} />

              neelvp2004@gmail.com

            </a>

            <a

              href="https://github.com/Neelpatel1604"

              target="_blank"

              rel="noopener noreferrer"

              className={`inline-flex items-center gap-2 font-mono text-sm text-neutral-700 dark:text-neutral-300 ${LINK_HOVER}`}

            >

              <svg viewBox="0 0 16 16" className="size-3.5 fill-current" aria-hidden>

                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.778-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />

              </svg>

              GitHub

            </a>

            <a

              href="https://www.linkedin.com/in/neelbuilds"

              target="_blank"

              rel="noopener noreferrer"

              className={`inline-flex items-center gap-2 font-mono text-sm text-neutral-700 dark:text-neutral-300 ${LINK_HOVER}`}

            >

              <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden>

                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />

              </svg>

              LinkedIn

            </a>

            <a

              href="https://blog.neelbuilds.com/"

              target="_blank"

              rel="noopener noreferrer"

              className={`inline-flex items-center gap-2 font-mono text-sm text-neutral-700 dark:text-neutral-300 ${LINK_HOVER}`}

            >

              <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden>

                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />

              </svg>

              Blog

            </a>

          </div>

        </motion.footer>



      </motion.main>

    </div>

  );

}


