export const profile = {
  name: "Jaseem Quraishi",
  role: "Full-Stack Engineer",
  tagline:
    "I build production-grade web applications with a focus on scalable frontend architecture, backend APIs, performance, and real-time systems.",
  tags: ["React", "TypeScript", "Python", "FastAPI", "Next.js"],
  location: "Indore, India",
  email: "jaseem1quraishi@gmail.com",
  github: "github.com/Zasim1074",
  githubUrl: "https://github.com/Zasim1074",
  linkedin: "linkedin.com/in/jaseem-quraishi",
  linkedinUrl: "https://www.linkedin.com/in/jaseem-quraishi",
  portfolioUrl: "https://jaseem-codes.vercel.app/",
  resumeUrl:
    "https://docs.google.com/document/d/19D_BMhAcrjJqbBVQrMn7y4waBHo2xmsOpoprTVGgMNM/export?format=pdf",
};

export const about = {
  paragraphs: [
    "I’m a Full-Stack Engineer working across product interfaces and backend systems, with a strong focus on React, Next.js, TypeScript, Python, and FastAPI. My work is centered on shipping production-grade web applications that are reliable, maintainable, and performance-aware.",
    "I build interactive frontend experiences, integrate APIs, and support the backend pieces that make those experiences reliable in real business workflows—authentication, RBAC, uploads, reporting, and real-time dashboards. I care about clean architecture, practical engineering decisions, and shipping software that holds up under production use.",
  ],
  highlights: [
    {
      title: "Frontend engineering",
      desc: "React, Next.js, TypeScript, UI architecture, and product-focused performance work",
    },
    {
      title: "Backend capability",
      desc: "Python, FastAPI, PostgreSQL, REST APIs, JWT, RBAC, and service integration",
    },
    {
      title: "Production systems",
      desc: "Real-time dashboards, charts, uploads, role-driven workflows, and resilient product tooling",
    },
  ],
};

export const skills = [
  {
    group: "Frontend",
    color: "blue",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Shadcn UI",
      "HTML",
      "CSS",
    ],
  },
  {
    group: "Backend",
    color: "cyan",
    items: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Alembic",
      "REST APIs",
      "JWT",
      "Authentication",
      "Authorization",
      "RBAC",
    ],
  },
  {
    group: "Testing & Engineering",
    color: "green",
    items: ["Pytest", "React Testing Library", "Git", "GitHub", "Postman", "Docker"],
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "FloorWalk Consultants Pvt. Ltd.",
    period: "August 2025 – Present",
    location: "Indore, India",
    points: [
      "Built and optimized production React/Next.js modules across CRM workflows, improving maintainability and performance for manager, broker, and staff role-based access flows.",
      "Delivered real-time WebSocket dashboards and reporting views for operational data, with API integrations for platforms including Housing.com and 99acres.",
      "Implemented caching and retry patterns around external API calls to improve reliability, reduce redundant requests, and stabilize integrations.",
      "Reduced frontend bundle size from approximately 70MB to 13MB and improved page load time from approximately 6 seconds to 4 seconds through code splitting, dependency cleanup, and asset optimization.",
      "Optimized high-traffic modules for approximately 30% faster performance by refining rendering paths, component structure, and interaction flow across complex dashboards.",
      "Worked across authentication, uploads, reports, charts, multilingual interfaces, and role-based access to ship production features with a strong focus on usability and reliability.",
    ],
  },
];

export const engineeringHighlights = [
  {
    value: "81%",
    label: "Bundle-size reduction",
    detail: "70MB → 13MB",
  },
  {
    value: "~33%",
    label: "Initial loading improvement",
    detail: "~6s → ~4s",
  },
  {
    value: "30%",
    label: "Faster optimized modules",
    detail: "Refined render paths and workflows",
  },
  {
    value: "Real-time",
    label: "WebSocket dashboards",
    detail: "Operational, data-heavy product views",
  },
];

export const projects = [
  {
    title: "TrackHire",
    type: "Engineering project",
    icon: "briefcase",
    summary:
      "An end-to-end hiring platform backend designed around authentication, role-based access control, candidate workflows, and maintainable API architecture.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy 2.0",
      "Alembic",
      "Pydantic",
      "JWT",
      "Docker",
      "Pytest",
    ],
    highlights: [
      "Built JWT-based authentication and RBAC for end-to-end hiring workflows.",
      "Designed API-first backend patterns around candidate lifecycle and authorization.",
      "Used SQLAlchemy models, migrations, and Dockerized local development workflows.",
      "Added test coverage for core API behavior using Pytest.",
    ],
    githubUrl: "https://github.com/Zasim1074",
    demoUrl: null,
  },
  {
    title: "Hotel Sanwariya",
    type: "Deployed product",
    icon: "sparkles",
    summary:
      "A real hospitality website focused on room presentation, guest information, responsive browsing, and a polished business-facing experience for a live brand.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "SEO"],
    highlights: [
      "Built a hotel-facing experience centered on room presentation, amenities, and information discovery.",
      "Designed a mobile-friendly layout that stays clean and readable across devices.",
      "Focused on SEO-friendly structure and business-ready presentation for a live website.",
    ],
    githubUrl: "https://github.com/Zasim1074",
    demoUrl: "https://sanwariyahotel.com/",
  },
  {
    title: "CodeBook",
    type: "Developer tool",
    icon: "code",
    summary:
      "A browser-based coding workspace built with React and Monaco to support execution, code review workflows, and a cleaner developer-focused experience.",
    stack: ["React", "Next.js", "TypeScript", "Monaco Editor", "AI Integration"],
    highlights: [
      "Built a modern editor experience centered on developer workflows and fast iteration.",
      "Structured the UI around code execution and a lightweight, responsive interaction model.",
      "Combined React architecture with AI-assisted tooling patterns in a focused product flow.",
    ],
    githubUrl: "https://github.com/Zasim1074",
    demoUrl: null,
  },
  {
    title: "RefundAI",
    type: "AI support workflow",
    icon: "sparkles",
    summary:
      "An AI-assisted customer support workflow focused on refund conversations and automated support interactions using API-driven logic.",
    stack: ["Python", "FastAPI", "REST APIs", "AI Integration"],
    highlights: [
      "Explored practical support automation patterns around customer refund workflows.",
      "Built API-driven logic for conversational support and response handling.",
      "Focused on real-world product constraints rather than generic demo-only functionality.",
    ],
    githubUrl: "https://github.com/Zasim1074",
    demoUrl: null,
  },
];

export const education: Array<{
  degree: string;
  school: string;
  period: string;
  desc: string;
}> = [];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];