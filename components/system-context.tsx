"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SystemContextType {
  cmdOpen: boolean;
  setCmdOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  openAiWithPrompt: (prompt?: string) => void;
  selectedQuestion: string | null;
  setSelectedQuestion: (q: string | null) => void;
  activeSkillFilter: string | null;
  setActiveSkillFilter: (skill: string | null) => void;
}

const SystemContext = createContext<SystemContextType | null>(null);

export function SystemProvider({ children }: { children: React.ReactNode }) {
  const [cmdOpen, setCmdOpen] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(null);

  const openAiWithPrompt = (prompt?: string) => {
    if (prompt) {
      setSelectedQuestion(prompt);
    }
    setCmdOpen(true);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setCmdOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <SystemContext.Provider
      value={{
        cmdOpen,
        setCmdOpen,
        openAiWithPrompt,
        selectedQuestion,
        setSelectedQuestion,
        activeSkillFilter,
        setActiveSkillFilter,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
}

export function useSystem() {
  const ctx = useContext(SystemContext);
  if (!ctx) throw new Error("useSystem must be used inside SystemProvider");
  return ctx;
}
