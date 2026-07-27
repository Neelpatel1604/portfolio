// ─── Leadership Data ──────────────────────────────────────────────────────────
// Edit this file to update the Leadership section on the portfolio.

export type LeadershipEntry = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const leadership: LeadershipEntry[] = [
  {
    role: "Leader · Club President",
    org: "AWS Student Builder Group -Sheridan",
    period: "Nov 2025 - Present",
    points: [
      "Growing a community of 700+ members with a core team of 10",
      "Delivered 5+ hands-on workshops and 1 guest speaker event",
      "Focused on giving students practical, career-relevant cloud experience",
    ],
  },
  {
    role: "Web Developer",
    org: "Google Developer Group -Sheridan",
    period: "Sept 2025 - Apr 2026",
    points: [
      "Built and maintained the club's public website",
      "Organising team member for a hackathon with 250+ participants",
      "Collaborated with the team to promote Google technologies and grow developer community presence on campus",
    ],
  },
  {
    role: "Campus Partner",
    org: "Perplexity AI",
    period: "Jan 2025 - Sept 2025",
    points: [
      "Led a workshop at HackVille introducing students to AI-powered search",
      "Grew Perplexity's presence on campus by 50% through events and outreach",
      "Collaborated with professors to explore Perplexity as a research and learning tool",
    ],
  },
  {
    role: "Club Member",
    org: "Sheridan Robotics Club",
    period: "Sept 2024 - Present",
    points: [
      "Building robotic arms and tethered drones",
      "Programmed LED pattern systems on PSOC microcontrollers",
      "Built RC cars controlled via hand-gesture recognition",
    ],
  },
];
