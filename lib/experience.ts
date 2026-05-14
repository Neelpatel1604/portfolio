// ─── Experience Data ──────────────────────────────────────────────────────────
// Edit this file to update the Experience section on the portfolio.
// Companies are listed newest-first. Roles within each company are newest-first.

export type RoleType =
  | "Full-time"
  | "Part-time"
  | "Full-time Internship"
  | "Internship"
  | "Contract"
  | "Freelance";

export type Role = {
  title: string;
  period: string;
  type: RoleType;
  bullets: string[];
  tags: string[];
};

export type Experience = {
  org: string;
  location: string;
  /** Optional link shown as a small external icon next to the org name */
  link?: { label: string; href: string };
  roles: Role[];
};

export const experiences: Experience[] = [
  {
    org: "Moorcheh - Edge AI Innovation",
    location: "Remote",
    roles: [
      {
        title: "Software Developer",
        period: "May 2026 - Present",
        type: "Full-time Internship",
        bullets: [
          "Own enterprise customer delivery end-to-end: scoping custom integrations, designing solution architecture, and managing ongoing support.",
          "Building Memanto - memory that AI agents love.",
          "Expanding infrastructure onto GCP; architecting Moorcheh on-prem and Moorcheh Edge for self-hosted and edge deployments.",
        ],
        tags: ["GCP", "Agent Skills", "On-prem", "Edge AI", "Enterprise"],
      },
      {
        title: "Software Developer",
        period: "Sept 2025 - Apr 2026",
        type: "Part-time",
        bullets: [
          "Built a production-ready AI chat boilerplate with shadcn/ui (React), featuring 10+ themes and 50+ fonts, adopted as the platform's core UI layer.",
          "Shipped new product features and enhancements continuously; partnered with enterprise customers to design and deliver custom integrations.",
          "Built a custom MCP server and integrated Moorcheh with LangChain and n8n to enable advanced RAG workflows.",
        ],
        tags: ["React", "shadcn/ui", "MCP", "LangChain", "n8n", "RAG"],
      },
      {
        title: "Software Developer",
        period: "May 2025 - Aug 2025",
        type: "Full-time Internship",
        bullets: [
          "Built and architected the entire frontend platform using Next.js App Router, React, TypeScript, and Turbopack -a modern, responsive developer dashboard with dark/light mode that improved user engagement by 40%.",
          "Engineered a production-ready serverless backend with 25+ AWS Lambda functions, API Gateway, DynamoDB, and SQS, enabling scalable AI-powered vector search while reducing compute costs by 60%.",
          "Integrated Stripe billing with 4 monetization models (free tier, add-ons, invoicing, custom plans) via webhooks and DynamoDB-based usage tracking, powering seamless subscriptions for 400+ active users.",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "AWS Lambda",
          "DynamoDB",
          "API Gateway",
          "Stripe",
        ],
      },
    ],
  },
  {
    org: "Analyze Agency",
    location: "Remote",
    link: {
      label: "Letters of Recommendation",
      href: "https://drive.google.com/drive/folders/1LQuVS-ivMgw6r5i67nERLtlzOxQwm6B6?usp=drive_link",
    },
    roles: [
      {
        title: "Cloud Data Engineer",
        period: "Feb 2025 - Feb 2026",
        type: "Freelance",
        bullets: [
          "Automated SQL workflows across 6 cloud platforms with 10+ Python scripts, cutting manual query time by 70%.",
          "Built a performance logging system tracking metrics for 500+ queries, improving data accessibility by 40%.",
          "Designed modular, reusable scripts to standardise cross-platform SQL automation, significantly improving data team efficiency.",
        ],
        tags: ["Python", "SQL", "Cloud Automation", "ETL", "Data Engineering"],
      },
      {
        title: "Technical Writer - Data & ETL",
        period: "Dec 2024 - Feb 2025",
        type: "Freelance",
        bullets: [
          "Configured ETL pipelines from RDS PostgreSQL and Oracle to S3 and Snowflake, improving data transfer efficiency by 95%.",
          "Designed ETL workflows from DynamoDB and SQL Server to ClickHouse and Snowflake, optimising processing performance by 80%.",
          "Produced detailed technical documentation covering ETL architecture, setup guides, visual diagrams, and common error troubleshooting.",
        ],
        tags: [
          "ETL",
          "PostgreSQL",
          "Oracle",
          "Snowflake",
          "ClickHouse",
          "DynamoDB",
          "S3",
        ],
      },
    ],
  },
];
