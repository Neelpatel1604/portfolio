// ─── Education Data ───────────────────────────────────────────────────────────
// Edit this file to update the Education section on the portfolio.

export type EducationEntry = {
  institution: string;
  program: string;
  period: string;
  note: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Sheridan College",
    program: "Computer Engineering Technology -Advanced Diploma",
    period: "May 2024 - Apr 2027",
    note: "GPA 3.59",
  },
];
