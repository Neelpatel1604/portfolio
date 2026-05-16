// ─── Projects Data ────────────────────────────────────────────────────────────
// Edit this file to update the Projects section on the portfolio.

export type Project = {
  title: string;
  /** Leave undefined to hide the year label */
  year?: string;
  desc: string;
  tags: string[];
  github: string;
  devpost: string;
};

export const projects: Project[] = [
  {
    title: "Mesh Studio",
    desc: "Cursor for 3D models - a chat-driven editor where AI applies targeted or full-rewrite code changes to OpenSCAD objects, compiling them into STL/3MF previews in real time.",
    tags: ["Next.js", "FastAPI", "OpenSCAD", "Python", "AI"],
    github: "https://github.com/Neelpatel1604/mesh-studio",
    devpost: "https://devpost.com/software/mesh-studio",
  },
  {
    title: "MoveMean",
    desc: "RAG platform for videos - upload a video, get it transcribed and indexed, then ask questions and get grounded answers backed by AWS serverless infrastructure.",
    tags: ["AWS Lambda", "S3", "Bedrock", "Transcribe", "DynamoDB", "SageMaker"],
    github: "https://github.com/Neelpatel1604/movemean",
    devpost: "https://devpost.com/software/movemean",
  },
  {
    title: "NovaBuddy",
    desc: "Serverless AI study companion - upload lecture slides or PDFs, get instant summaries and quizzes, then chat with your material using Amazon Nova 2 Lite's 1M-token context window.",
    tags: ["Amazon Nova", "Next.js", "AWS Lambda", "Bedrock", "DynamoDB", "Terraform"],
    github: "https://github.com/Neelpatel1604/NovaBuddy",
    devpost: "https://devpost.com/software/novabuddy",
  },
  {
    title: "DeepFace",
    desc: "Real-time deepfake protection for live streamers - applies PGD-based perturbations to video frames via OBS WebSocket, making content resistant to deepfake manipulation without affecting viewer quality.",
    tags: ["Python", "PyTorch", "OpenCV", "OBS", "Next.js", "React"],
    github: "https://github.com/Neelpatel1604/DeepFace",
    devpost: "https://devpost.com/software/deepface",
  },
];
