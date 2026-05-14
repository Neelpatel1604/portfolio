"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#work" },
  { label: "Projects",   href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Stack",      href: "#skills" },
  { label: "Education",  href: "#education" },
];

const border = "border-neutral-900 dark:border-neutral-600";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b bg-neutral-50 dark:bg-neutral-950 ${border}`}
    >
      <div className={`mx-auto flex max-w-6xl items-stretch border-l border-r ${border}`}>
        {/* Logo / name */}
        <a
          href="/"
          className={`flex flex-1 items-center gap-3 border-r px-6 py-4 md:flex-none ${border}`}
        >
          <span className="text-sm font-semibold tracking-tight">
            Neel Patel
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-stretch md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center border-r px-6 font-mono text-[11px] uppercase tracking-widest text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100 ${border}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme toggle — desktop */}
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className={`ml-auto hidden items-center border-l px-5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 md:flex ${border}`}
        >
          {mounted && resolvedTheme === "dark"
            ? <Sun className="size-4 text-neutral-400" strokeWidth={1.5} />
            : <Moon className="size-4 text-neutral-600" strokeWidth={1.5} />
          }
        </button>

        {/* GitHub icon — rightmost on desktop */}
        <a
          href="https://github.com/Neelpatel1604"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`hidden items-center border-l px-5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 md:flex ${border}`}
        >
          <svg viewBox="0 0 16 16" className="size-4 fill-current text-neutral-600 dark:text-neutral-400" aria-hidden>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`flex items-center border-l px-5 md:hidden ${border}`}
        >
          {open ? (
            <X className="size-4" strokeWidth={1.5} />
          ) : (
            <Menu className="size-4" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className={`mx-auto max-w-6xl border-l border-r border-t ${border} md:hidden`}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center border-b px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 ${border}`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setTheme(resolvedTheme === "dark" ? "light" : "dark"); setOpen(false); }}
            className={`flex w-full items-center gap-2 border-b px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 ${border}`}
          >
            {mounted && resolvedTheme === "dark"
              ? <><Sun className="size-3.5" strokeWidth={1.5} /> Light Mode</>
              : <><Moon className="size-3.5" strokeWidth={1.5} /> Dark Mode</>
            }
          </button>
          <a
            href="https://github.com/Neelpatel1604"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2 border-b px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900 ${border}`}
          >
            <svg viewBox="0 0 16 16" className="size-3.5 fill-current" aria-hidden>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
