// ─── Recognition Data ─────────────────────────────────────────────────────────
// Edit this file to update the Recognition section on the portfolio.

export type RecognitionRow = {
  category: string;
  items: string[];
};

export const recognition: RecognitionRow[] = [
  {
    category: "Certification",
    items: ["AWS Certified Cloud Practitioner · Aug 2024 -Aug 2027"],
  },
  {
    category: "Competitions",
    items: [
      "Gold Medal · Sheridan Skills -Cloud Computing",
      "Silver Medal · Skills Ontario Provincial -Cloud Computing (representing Sheridan College)",
      "Top 12 Finalist of 100+ · InnovaS.E Entrepreneurship Competition",
    ],
  },
  {
    category: "Hackathons",
    items: ["7+ as Participant · 3 as Judge · 4 workshops delivered"],
  },
];
