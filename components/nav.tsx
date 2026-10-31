"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSystem } from "@/components/system-context";

const links = [
  { label: "Story",      href: "#about",      id: "about" },
  { label: "Work",       href: "#work",       id: "work" },
  { label: "Projects",   href: "#projects",   id: "projects" },
  { label: "Leadership", href: "#leadership", id: "leadership" },
  { label: "Stack",      href: "#skills",     id: "skills" },
  { label: "Recognition",href: "#achievements", id: "achievements" },
];

const sectionIds = links.map((l) => l.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const active = useActiveSection(sectionIds);
  const { setCmdOpen } = useSystem();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-neutral-50/85 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/85">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Left: Identity */}
        <a
          href="#about"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span>Neel Patel</span>
          <span className="hidden sm:inline-block rounded-full border border-neutral-200 bg-white px-2 py-0.5 font-mono text-[10px] font-normal text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
            neelbuilds
          </span>
        </a>

        {/* Center: Clean Pill Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950"
                    : "text-neutral-600 hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Ask AI & Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCmdOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-emerald-500/60 dark:hover:text-emerald-400 cursor-pointer"
          >
            <Sparkles className="size-3.5 text-emerald-500" />
            <span className="hidden sm:inline">Ask AI</span>
            <kbd className="font-mono text-[10px] text-neutral-400">⌘K</kbd>
          </button>

          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex size-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 cursor-pointer"
          >
            <Sun className="hidden size-3.5 dark:block" strokeWidth={1.5} />
            <Moon className="block size-3.5 dark:hidden" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex size-8 items-center justify-center rounded-full border border-neutral-200 bg-white md:hidden dark:border-neutral-800 dark:bg-neutral-900"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4 md:hidden dark:border-neutral-800 dark:bg-neutral-950">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-200/60 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
