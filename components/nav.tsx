"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useActiveSection } from "@/hooks/use-active-section";
import { ACTIVE_NAV, B, LINK_HOVER } from "@/lib/styles";

const links = [
  { label: "About",      href: "#about",      id: "about" },
  { label: "Experience", href: "#work",       id: "work" },
  { label: "Projects",   href: "#projects",   id: "projects" },
  { label: "Leadership", href: "#leadership", id: "leadership" },
  { label: "Stack",      href: "#skills",     id: "skills" },
  { label: "Education",  href: "#education",  id: "education" },
];

const sectionIds = links.map((l) => l.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => setMounted(true), []);

  const linkClass = (id: string, mobile = false) => {
    const isActive = active === id;
    const base = mobile
      ? `flex items-center border-b px-6 py-4 font-mono text-xs uppercase tracking-widest transition-colors ${B}`
      : `flex items-center border-r px-6 font-mono text-xs uppercase tracking-widest transition-colors ${B}`;

    if (isActive) {
      return `${base} ${ACTIVE_NAV}`;
    }
    return `${base} text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100`;
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b bg-neutral-50/95 backdrop-blur-sm dark:bg-neutral-950/95 ${B}`}
    >
      <div className={`mx-auto flex max-w-6xl items-stretch border-l border-r ${B}`}>
        <a
          href="/"
          className={`flex flex-1 items-center gap-3 border-r px-6 py-4 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 md:flex-none ${B}`}
        >
          <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Neel Patel
          </span>
        </a>

        <div className="hidden items-stretch md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass(link.id)}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className={`ml-auto hidden items-center border-l px-5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 md:flex ${B}`}
        >
          {mounted && resolvedTheme === "dark"
            ? <Sun className="size-4 text-neutral-600 dark:text-neutral-300" strokeWidth={1.5} />
            : <Moon className="size-4 text-neutral-700 dark:text-neutral-300" strokeWidth={1.5} />
          }
        </button>

        <a
          href="https://github.com/Neelpatel1604"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={`hidden items-center border-l px-5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900 md:flex ${B} group`}
        >
          <svg viewBox="0 0 16 16" className="size-4 fill-current text-neutral-700 transition-colors group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100" aria-hidden>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.778-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`flex items-center border-l px-5 md:hidden ${B}`}
        >
          {open ? (
            <X className="size-4 text-neutral-900 dark:text-neutral-100" strokeWidth={1.5} />
          ) : (
            <Menu className="size-4 text-neutral-900 dark:text-neutral-100" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {open && (
        <div className={`mx-auto max-w-6xl border-l border-r border-t ${B} md:hidden`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={linkClass(link.id, true)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setTheme(resolvedTheme === "dark" ? "light" : "dark"); setOpen(false); }}
            className={`flex w-full items-center gap-2 border-b px-6 py-4 font-mono text-xs uppercase tracking-widest text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900 ${B}`}
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
            className={`flex items-center gap-2 border-b px-6 py-4 font-mono text-xs uppercase tracking-widest text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900 ${B} ${LINK_HOVER}`}
          >
            <svg viewBox="0 0 16 16" className="size-3.5 fill-current" aria-hidden>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.778-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
