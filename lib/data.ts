export const profile = {
  name: "Jaseem Quraishi",
  role: "Full Stack Software Engineer",
  location: "Indore, India",
  relocation: "Open to relocate to Delhi NCR",
  email: "jaseem1quraishi@gmail.com",
  currentRole: "Frontend Developer",
  currentCompany: "FloorWalk Consultants Pvt. Ltd.",
  experience: "1+ year of professional experience",
  preferredRoles: [
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "Product Engineer",
    "Software Engineer (React / Next.js / Python)",
  ],
  preferredLocations: ["Delhi NCR", "Remote India"],
  availability: "Open to opportunities",
  github: "github.com/Zasim1074",
  githubUrl: "https://github.com/Zasim1074",
  linkedin: "linkedin.com/in/jaseem-quraishi",
  linkedinUrl: "https://www.linkedin.com/in/jaseem-quraishi",
  portfolioUrl: "https://jaseem-codes.vercel.app/",
  profileImageUrl: "/jaseem.png",
  resumeUrl: "https://github.com/Zasim1074/Zasim1074/raw/refs/heads/main/Jaseem_Quraishi_Full_Stack_Engineer.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Full Stack Software Engineer with 1+ year of professional experience as a Frontend Developer at FloorWalk Consultants Pvt. Ltd. I develop production React, Next.js, and TypeScript applications and contribute practical backend work with Python and FastAPI.",
    "My work includes an internal real-estate CRM, operational portals, reusable API handling, real-time dashboard updates, and backend APIs for scheduled AI-powered audit report analysis.",
    "I also build full-stack projects with React, FastAPI, and PostgreSQL, including TrackHire, a job application platform with JWT authentication, database migrations, and automated tests. I'm interested in Full Stack Software Engineer and Product Engineer roles.",
  ],
};

export const skills = [
  {
    group: "Frontend",
    color: "blue",
    items: [ "React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "TanStack Query", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"]
  },
  {
    group: "Backend",
    color: "cyan",
    items: [ "Python", "FastAPI", "SQLAlchemy", "Pydantic", "REST APIs", "JWT Authentication", "WebSockets"]
  },
  {
    group: "Database",
    color: "purple",
    items: [ "PostgreSQL", "SQLite", "Relational Database Design", "Alembic", "Database Migrations"]
  },
  {
    group: "Testing",
    color: "green",
    items: [ "Pytest", "React Testing Library", "API Testing", "Postman" ]
  },
  {
    group: "Tools & Deployment",
    color: "orange",
    items: [ "Git", "GitHub", "Docker", "Vercel", "Railway", "cPanel", "WHM" ]
  }
];

export const featuredStack = [ "React", "Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"];

export const experience = [{
  role: "Frontend Developer", company: "FloorWalk Consultants Pvt. Ltd.", period: "August 2025 – Present", location: "Indore, India",
  points: [
    "Developed and maintained production React, Next.js, and TypeScript applications, contributing to a real-estate CRM used daily by approximately 10–15 internal users across manager, broker, staff, and sales workflows.",
    "Contributed to client, auditor, manager, and other operational portals, including multilingual interfaces supporting 8+ languages.",
    "Implemented backend APIs for a production AI-powered audit report analysis feature using the Claude API. A scheduled weekly batch workflow processes approved reports, stores structured insights, and makes them available in the client portal.",
    "Contributed to approximately 25% lower server costs by batching LLM requests rather than sending individual calls per submission.",
    "Reduced production build size by approximately 81% (70 MB to 13 MB) through dependency cleanup, asset optimization, and lazy loading. Manually observed page-load times improved from approximately 6–8 seconds to 3–4 seconds.",
    "Implemented WebSocket-driven updates for dashboards, analytics, report updates, and notification counts.",
    "Developed reusable API handling with caching, retries, centralized error handling, and custom hooks.",
  ],
}];

export const engineeringHighlights = [
  { value: "~81%", label: "Build size reduction", detail: "Approx. 70 MB → 13 MB" },
  { value: "~6–8s → 3–4s", label: "Page-load time", detail: "Manual testing; approximate" },
  { value: "~10–15", label: "Daily CRM users", detail: "Internal users; approximate" },
  { value: "~25%", label: "Server-cost reduction", detail: "Contribution from LLM batching" },
  { value: "8+", label: "Supported languages", detail: "Multilingual interfaces" },
];

export const projects = [
  { title: "TrackHire", type: "Full stack project", icon: "briefcase", featured: true,
    summary: "A full-stack job application tracking platform for managing applications, companies, interviews, resumes, and activity.",
    stack: ["React", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic", "JWT", "Pytest", "React Testing Library"],
    highlights: ["REST API architecture built with FastAPI and Pydantic.", "PostgreSQL persistence with SQLAlchemy and Alembic migrations.", "JWT authentication, plus search, filtering, and pagination.", "Automated backend and frontend tests with Pytest and React Testing Library."],
    liveUrl: "https://track-hire-jq.vercel.app/", repoUrl: "https://github.com/Zasim1074/track-hire" },
  { title: "LLM Reliability Lab", type: "Engineering evaluation MVP", icon: "sparkles", featured: true,
    summary: "A local-first engineering workspace for experimenting with semantic caching, LLM evaluation, bias signals, and RAG prompt-injection testing.",
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "SQLite", "PostgreSQL", "SQLAlchemy", "Alembic", "Pytest", "Vitest"],
    highlights: [
      "Benchmarks cache behavior with TTL and invalidation controls.",
      "Compares provider-based evaluation with clearly labeled demo scoring; demo scores are not production evaluations.",
      "Tests RAG prompt-injection patterns and reports false positives/negatives; pattern-based checks are not security guarantees.",
      "Stores experiment history and reports for benchmark, evaluation, bias, and security runs.",
    ],
    liveUrl: "", repoUrl: "https://github.com/Zasim1074/llm-reliability-lab" },
  { title: "Hotel Sanwariya", type: "Freelance client project", icon: "sparkles", featured: false,
    summary: "A freelance hotel website featuring responsive room information and WhatsApp-based booking inquiries.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: ["Responsive Next.js interface with mobile-friendly layouts.", "Room information and booking inquiries through WhatsApp.", "Production deployment at sanwariyahotel.com."],
    liveUrl: "https://sanwariyahotel.com/", repoUrl: "https://github.com/Zasim1074/hotel_sanwariya" },
];

export const capabilities = [
  {
    title: "Frontend Engineering",
    description:
      "Building production interfaces with React, Next.js, TypeScript, reusable components, state management, and performance optimization.",
  },
  {
    title: "Backend Development",
    description:
      "Developing REST APIs with Python, FastAPI, SQLAlchemy, Pydantic, authentication, and relational databases.",
  },
  {
    title: "AI Integration",
    description:
      "Integrating LLM APIs into production workflows with scheduled processing, structured outputs, and database-backed reporting.",
  },
  {
    title: "Engineering Quality",
    description:
      "Writing automated tests, managing database migrations, handling errors, and maintaining reliable application workflows.",
  },
];

export const education = [
  {
    degree: "B.Sc. Information Technology",
    school: "Guru Nanak Dev University",
    location: "Amritsar, India",
    period: "2022–2025",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  // { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
