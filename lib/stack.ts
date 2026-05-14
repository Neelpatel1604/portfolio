// ─── Technical Stack Data ─────────────────────────────────────────────────────
// Edit this file to update the Technical Stack section on the portfolio.

export type StackRow = {
  category: string;
  items: string[];
};

export const stack: StackRow[] = [
  { category: "Languages",    items: ["Python", "TypeScript", "Rust", "JavaScript", "SQL", "Bash", "C/C++", "Java"] },
  { category: "Cloud & Infra", items: ["AWS", "GCP", "Terraform", "Docker", "CI/CD", "Serverless"] },
  { category: "Backend",      items: ["FastAPI", "AWS Lambda", "API Gateway", "DynamoDB", "SQS", "Stripe", "Cloud Run"] },
  { category: "AI & Data",    items: ["LangChain", "Cohere", "LlamaIndex", "MCP", "Agent Skills", "Amazon Bedrock", "RAG", "Vector DBs", "Vertex AI"] },
  { category: "Databases",    items: ["Snowflake", "Amazon RDS", "Redshift", "ClickHouse", "Databricks", "BigQuery", "Microsoft Fabric", "Postgres"] },
  { category: "ML & Vision",  items: ["PyTorch", "OpenCV", "Amazon Nova", "OpenSCAD"] },
  { category: "Frontend",     items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"] },
];
