/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update text, links, skills, experience and projects.
 *  Components only handle layout — you should never need to touch them
 *  to change what the site says.
 *
 *  Content mirrors the finalized résumé (Version A). Keep the two in sync.
 *  Professional projects are described at a high level only: no code,
 *  internal URLs, client names, client data or screenshots.
 * ─────────────────────────────────────────────────────────────
 */

/**
 * Canonical site URL (SEO, sitemap, robots).
 * On Vercel this is picked up automatically from the production domain.
 * To use a custom domain, set NEXT_PUBLIC_SITE_URL in Vercel → Settings → Environment Variables.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Sanjida Akter Shorna",
  shortName: "Sanjida",
  monogram: "SA",
  role: "Software Engineer",
  headline: "Full-Stack & AI Systems",
  /** Hero statement. Words wrapped in *asterisks* render in the editorial serif accent. */
  statement: "Software engineer building *full-stack* products and *AI-powered* systems.",
  education: "B.S. Computer Science & Engineering · North South University",
  url: siteUrl,
  tagline:
    "From frontend interfaces and backend services to REST APIs, RAG chatbots and voice AI integrations, with production deployments on Docker and Nginx.",
  description:
    "Portfolio of Sanjida Akter Shorna, Software Engineer building full-stack web applications and AI-powered systems: REST APIs, conversational AI, RAG chatbots and production deployments.",
};

export const links = {
  github: "https://github.com/sanzidaaktershorna2001-ctrl",
  linkedin: "https://www.linkedin.com/in/sanjida-akter-shorna-738105220",
  email: "sanzidaaktershorna2001@gmail.com",
};

/** Sub-path the site is served from ("" at a domain root, "/portfolio" on GitHub Pages). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const resume = {
  // Buttons enable automatically when public/resume.pdf exists at build time.
  publicFile: "resume.pdf",
  file: `${basePath}/resume.pdf`,
  downloadName: "Sanjida_Akter_Shorna_Software_Engineer_Resume.pdf",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
] as const;

/** Headings and intro lines for each section. *word* = editorial serif accent. */
export const sections = {
  about: {
    eyebrow: "About me",
    title: "Full-stack engineering with *AI at the core*",
  },
  skills: {
    eyebrow: "Technical skills",
    title: "The stack",
    description: "The languages, frameworks and platforms I use across full-stack and AI projects.",
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've *worked*",
  },
  projects: {
    eyebrow: "Projects",
    title: "Selected *work*",
    description:
      "Professional work at Technuf LLC is proprietary, so it's described here at a high level, with no code, client data, screenshots or internal links.",
    featuredLabel: "Featured projects",
    moreLabel: "More projects",
  },
  education: {
    eyebrow: "Education",
    title: "Academic background",
  },
  resume: {
    eyebrow: "Resume",
    title: "Everything, on *one page*.",
    description: "Download my resume for a complete overview of my experience and skills.",
    unavailable: "Resume available on request. Reach out via the contact form below.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something *together*.",
    description: "Have a question or an opportunity? My inbox is open.",
  },
};

/** The "spec sheet" panel in the hero. Verified facts only. */
export const heroSpec = {
  label: "spec.sheet",
  rows: [
    { key: "Role", value: "Software Engineer" },
    { key: "Focus", value: "Full-stack development · AI integration" },
    { key: "Built", value: "Voice agent platforms, RAG chatbots, workforce apps" },
    { key: "Stack", value: "TypeScript · Python · React · Next.js · Node.js · PostgreSQL" },
    { key: "AI", value: "ElevenLabs · OpenAI · LLaMA · Ollama · n8n" },
    { key: "Ships with", value: "Docker · Nginx · AWS · Azure" },
  ],
} as const;

export const about = {
  paragraphs: [
    "I'm a Software Engineer who builds full-stack web applications and AI-powered systems. I joined Technuf LLC in Rockville, Maryland, as a Software Engineer Intern in February 2025 and became a full-time Software Engineer in August 2025.",
    "There I worked on iConnect, an AI voice agent management platform; an AI-powered insurance voice automation system built on ElevenLabs; and Aphelia, a workforce intelligence and timesheet management application. I also built RAG chatbots using n8n, Supabase, pgvector, OpenAI, LLaMA and Ollama.",
    "My work spans frontend interfaces, backend services, REST APIs and databases, through to production deployments with Docker and Nginx. I hold a B.S. in Computer Science and Engineering from North South University, where I also served as a Teaching Assistant.",
  ],
  highlights: [
    { label: "Role", value: "Software Engineer" },
    { label: "Experience", value: "Technuf LLC" },
    { label: "Education", value: "B.S. CSE, North South University" },
    { label: "Focus", value: "Full-stack & AI integrations" },
  ],
};

export type IconName =
  | "mic" | "plug" | "server" | "layout" | "code" | "database" | "sparkles" | "cloud"
  | "waveform" | "phone" | "clock" | "book" | "fileSearch" | "bot" | "calculator" | "notebook";

/** Mirrors the Technical Skills section of the finalized résumé. */
export const skillGroups: { title: string; icon: IconName; skills: string[] }[] = [
  {
    title: "Languages",
    icon: "code",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C#", "C++", "PHP", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Databases",
    icon: "database",
    skills: ["React", "Next.js", "Node.js", "REST APIs", "PostgreSQL", "MySQL", "SQL Server", "MongoDB", "SQLite"],
  },
  {
    title: "AI & LLMs",
    icon: "sparkles",
    skills: ["ElevenLabs", "OpenAI", "LLaMA", "Ollama", "RAG", "Supabase", "pgvector", "n8n"],
  },
  {
    title: "Cloud & Tools",
    icon: "cloud",
    skills: ["AWS", "Microsoft Azure", "Docker", "Nginx", "Linux", "Git", "Postman"],
  },
];

export type ExperienceEntry = {
  company: string;
  location: string;
  /** Most recent first. */
  roles: { title: string; period: string }[];
  /** Optional project sub-groups; use a single group with no title for plain bullets. */
  groups: { title?: string; points: string[] }[];
  tech?: string[];
};

/** Mirrors the Professional Experience section of the finalized résumé. */
export const experience: ExperienceEntry[] = [
  {
    company: "Technuf LLC",
    location: "Rockville, MD",
    roles: [
      { title: "Software Engineer", period: "Aug 2025 – Nov 2026" },
      { title: "Software Engineer Intern", period: "Feb 2025 – Aug 2025" },
    ],
    groups: [
      {
        title: "iConnect: AI Voice Agent Management Platform",
        points: [
          "Developed frontend interfaces, reusable components, backend services, and REST APIs for a full-stack platform that configures and manages AI voice agents.",
          "Implemented AI agent configuration, user management, and role-based access control (RBAC); contributed to database design and architecture planning.",
          "Integrated ElevenLabs and other AI services, supported Docker/Nginx deployments, and fixed production defects.",
        ],
      },
      {
        title: "AI-Powered Insurance Voice Automation",
        points: [
          "Designed conversational AI prompts and integrated ElevenLabs APIs to automate inbound and outbound calls.",
          "Built data collection and validation, call transfer, callback, payment reminder, and follow-up workflows.",
          "Developed backend APIs and database changes; participated in testing, UAT, and production deployment.",
        ],
      },
      {
        title: "Aphelia Workforce Intelligence",
        points: [
          "Developed dashboards, frontend interfaces, backend services, APIs, and database functionality for a workforce intelligence and timesheet management application.",
          "Built desktop activity tracking, browser extension features, and automated timesheet processing; supported Docker and cloud deployment, debugging, and testing.",
        ],
      },
    ],
    tech: ["ElevenLabs", "REST APIs", "RBAC", "Docker", "Nginx", "Python", "n8n", "Supabase", "pgvector", "OpenAI", "LLaMA", "Ollama"],
  },
  {
    company: "North South University",
    location: "Dhaka, Bangladesh",
    roles: [{ title: "Teaching Assistant", period: "2024 – May 2025" }],
    groups: [
      {
        points: [
          "Assisted faculty with classes and course materials, mentored students, and supported academic research.",
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    school: "North South University",
    location: "Dhaka, Bangladesh",
    graduated: "Graduated Sep 2026",
    gpa: "CGPA 3.66 / 4.00",
  },
];

/** Project category — drives the card's accent color and motif. */
export type ProjectKind = "fullstack" | "ai" | "voice" | "tool";

export const projectKinds: Record<ProjectKind, string> = {
  fullstack: "Full-stack application",
  ai: "AI system",
  voice: "Voice AI & automation",
  tool: "Frontend tool",
};

export type Project = {
  title: string;
  kind: ProjectKind;
  category: string;
  icon: IconName;
  summary: string;
  /** Key contributions — shown on featured cards. */
  highlights?: string[];
  /** Only technologies verified for this specific project. */
  tech: string[];
  org: "Technuf LLC" | "Personal";
  featured?: boolean;
  /** Leave undefined to hide the button. */
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  // ── Featured ──
  {
    title: "iConnect",
    kind: "fullstack",
    category: "AI Voice Agent Management Platform",
    icon: "waveform",
    featured: true,
    org: "Technuf LLC",
    summary: "A full-stack platform for configuring and managing AI voice agents.",
    highlights: [
      "Frontend interfaces, reusable components, backend services and REST APIs",
      "AI agent configuration, user management and role-based access control",
      "ElevenLabs integration, Docker/Nginx deployments and production debugging",
    ],
    tech: ["ElevenLabs", "REST APIs", "RBAC", "Docker", "Nginx"],
  },
  {
    title: "AI-Powered Insurance Voice Automation",
    kind: "voice",
    category: "Conversational AI",
    icon: "phone",
    featured: true,
    org: "Technuf LLC",
    summary: "An AI voice agent that automates inbound and outbound insurance calls.",
    highlights: [
      "Conversational AI prompt design and ElevenLabs API integration",
      "Data collection and validation, call transfers, callbacks, payment reminders and follow-ups",
      "Backend APIs and database changes, plus testing, UAT and production deployment",
    ],
    tech: ["ElevenLabs", "Conversational AI", "REST APIs"],
  },
  {
    title: "Aphelia Workforce Intelligence",
    kind: "fullstack",
    category: "Workforce & Timesheet Management",
    icon: "clock",
    featured: true,
    org: "Technuf LLC",
    summary: "A workforce intelligence and timesheet management application.",
    highlights: [
      "Dashboards, frontend interfaces, backend services and APIs",
      "Desktop activity tracking and browser extension features",
      "Automated timesheet processing; Docker and cloud deployment",
    ],
    tech: ["Docker", "Browser extension", "Desktop app"],
  },

  // ── More projects ──
  {
    title: "Handbook Chatbots",
    kind: "ai",
    category: "RAG · Document Q&A",
    icon: "book",
    org: "Technuf LLC",
    summary:
      "RAG-based question answering over organizational handbooks, with PDF ingestion, vector embeddings, pgvector similarity search, and OpenAI and LLaMA models.",
    tech: ["Python", "n8n", "OpenAI", "LLaMA", "Supabase", "PostgreSQL", "pgvector", "Docker"],
  },
  {
    title: "Proposal Intelligence",
    kind: "ai",
    category: "RAG · Document Processing",
    icon: "fileSearch",
    org: "Technuf LLC",
    summary:
      "Document upload, parsing and chunking with Supabase storage and retrieval, used to generate context-aware chatbot responses.",
    tech: ["Python", "n8n", "Supabase", "RAG", "LLMs"],
  },
  {
    title: "Ollama Chatbot",
    kind: "ai",
    category: "Local LLMs",
    icon: "bot",
    org: "Technuf LLC",
    summary:
      "A chatbot running on locally hosted Ollama models, with a Python backend, document-based RAG, vector embeddings and n8n workflows.",
    tech: ["Ollama", "Python", "RAG", "n8n"],
  },
  {
    title: "Meeting Minutes Application",
    kind: "ai",
    category: "Desktop · AI Productivity",
    icon: "notebook",
    org: "Personal",
    summary:
      "A desktop app that records meeting audio, transcribes speech to text, and generates AI summaries and action items, with notes management and user authentication.",
    tech: ["Electron"],
  },
  {
    title: "Pricing Calculator",
    kind: "tool",
    category: "Frontend · Business Tool",
    icon: "calculator",
    org: "Technuf LLC",
    summary:
      "A client-side calculator for product cost, pricing and profitability, with all business logic implemented in JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
];
