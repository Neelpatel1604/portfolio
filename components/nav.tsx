"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const border = "border-neutral-900 dark:border-neutral-600";

export default function Nav() {
  const [open, setOpen] = useState(false);

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
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 md:block">
            Portfolio
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
          <a
            href="#contact"
            className={`flex items-center bg-neutral-900 px-6 font-mono text-[11px] uppercase tracking-widest text-neutral-50 transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-white`}
          >
            Hire me ↗
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`ml-auto flex items-center border-l px-5 md:hidden ${border}`}
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
          className={`mx-auto max-w-6xl border-l border-r ${border} md:hidden`}
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
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center bg-neutral-900 px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950"
          >
            Hire me ↗
          </a>
        </div>
      )}
    </nav>
  );
}
