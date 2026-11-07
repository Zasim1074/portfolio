export const profile = {
  name: "Jaseem Quraishi",
  role: "Full Stack Developer",
  location: "Indore, India",
  relocation: "Open to relocate to Delhi NCR",
  email: "jaseem1quraishi@gmail.com",
  currentRole: "Frontend Developer",
  currentCompany: "FloorWalk Consultants Pvt. Ltd.",
  experience: "1+ year of professional experience",
  preferredRoles: [
    "Full Stack Developer",
    "Frontend Developer",
    "React / Next.js Developer",
    "Python / FastAPI Developer",
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
    "I'm a Full Stack Developer with 1+ year of professional experience at FloorWalk Consultants in Indore. I build React and Next.js applications, including a real-estate CRM and client portals, and implemented backend APIs for a production AI report-analysis feature.",
    "Outside work, I build full-stack applications with FastAPI, PostgreSQL, and React. My projects include TrackHire, a job application tracker with JWT authentication, database migrations, and automated tests.",
    "I enjoy solving practical engineering problems, improving performance, and building reliable APIs. I'm looking for Full Stack Developer opportunities at product-focused companies in Delhi NCR or remote within India.",
  ],
};

export const skills = [
  {
    group: "Frontend",
    color: "blue",
    items: [ "React", "Next.js", "TypeScript", "JavaScript", "Redux", "TanStack Query", "Tailwind CSS", "shadcn/ui", "WebSockets", "HTML", "CSS"]
  },
  {
    group: "Backend",
    color: "cyan",
    items: [ "Python", "FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "PostgreSQL", "Alembic", "REST APIs", "JWT Authentication", "Role-Based Access Control (RBAC)"]
  },
  {
    group: "Databases",
    color: "purple",
    items: [ "PostgreSQL", "SQLite", "Relational Database Design", "Database Migrations"]
  },
  {
    group: "Testing & Quality",
    color: "green",
    items: [ "Pytest", "React Testing Library", "API Testing", "Postman" ]
  },
  {
    group: "Deployment & Infrastructure",
    color: "orange",
    items: [ "Vercel", "Railway", "cPanel", "WHM", "Production Deployment", "Environment Configuration", "Domain & Hosting Management" ]
  },
  {
    group: "Development Tools",
    color: "gray",
    items: [ "Git", "GitHub", "VS Code", "Chrome DevTools" ]
  }
];

export const featuredStack = [ "React", "Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"];

export const experience = [{
  role: "Frontend Developer", company: "FloorWalk Consultants Pvt. Ltd.", period: "Aug 2025 - Present", location: "Indore, India",
  points: [
    'Implemented backend APIs for a production AI report-analysis feature. A scheduled weekly job batches approved audit reports for the Claude API, stores its "what went well / what didn\'t / what to improve" output, and serves it in the client portal.',
    "Contributed to an approximately 25% reduction in server costs by batching LLM requests instead of sending individual calls per submission.",
    "Reduced production build size from 70 MB to 13 MB (about 81%) by removing unused libraries and dead code, compressing images, and adding lazy loading. Page load time improved from about 6-8 seconds to 3-4 seconds in manual testing.",
    "Built the frontend of a real-estate CRM using Next.js, React, and TypeScript; it is used daily by about 10-15 internal users and provides role-based interfaces for managers, brokers, staff, and sales teams.",
    "Built a reusable API layer with caching, retries, centralized error handling, and custom hooks, replacing per-component fetch logic across modules.",
    "Implemented WebSocket-driven dashboards for report updates, analytics, and notification counts without page refresh.",
    "Contributed features to client, auditor, and manager portals, the Shopper app, and company websites; implemented multilingual interfaces supporting 8+ languages.",
  ],
}];

export const engineeringHighlights = [
  { value: "81%", label: "Build size reduction", detail: "70 MB to 13 MB" },
  { value: "6-8s to 3-4s", label: "Page load improvement", detail: "Manual testing" },
  { value: "10-15", label: "Daily CRM users", detail: "Internal users" },
  { value: "~25%", label: "Server-cost reduction", detail: "Batch LLM processing" },
  { value: "8+", label: "Supported languages", detail: "Multilingual interfaces" },
];

export const projects = [
  { title: "TrackHire", type: "Full stack project", icon: "briefcase", featured: true,
    summary: "Job application tracker covering applications, companies, interviews, resumes, and activity tracking.",
    stack: ["React", "TanStack Query", "shadcn/ui", "FastAPI", "PostgreSQL", "SQLAlchemy 2.0", "Alembic", "Pydantic v2", "JWT", "Pytest", "React Testing Library"],
    highlights: ["REST API with FastAPI and Pydantic v2 over a normalized PostgreSQL schema with Alembic migrations.", "JWT authentication with protected routes via FastAPI dependency injection.", "Frontend with search, filtering, pagination, and role-based UI.", "Tests with Pytest and React Testing Library."],
    liveUrl: "https://track-hire-jq.vercel.app", repoUrl: "https://github.com/Zasim1074/track-hire" },
  { title: "Hotel Sanwariya", type: "Freelance client project", icon: "sparkles", featured: false,
    summary: "Responsive hotel website.", stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    highlights: ["Room information with mobile-friendly layouts.", "Inquiry/booking forms that route guest details to WhatsApp.", "Deployed on Vercel with a custom domain."],
    liveUrl: "https://sanwariyahotel.com/", repoUrl: "https://github.com/Zasim1074/hotel_sanwariya" },
  { title: "LLM Reliability Lab", type: "AI engineering MVP", icon: "sparkles", featured: true,
    summary: "A local-first workspace for evaluating semantic-cache behavior, model responses, bias signals, and pattern-based RAG prompt-injection tests. Demo scoring and security checks are explicitly limited and are not guarantees.",
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "SQLite", "PostgreSQL", "SQLAlchemy", "Alembic", "Pytest", "Vitest"],
    highlights: [
      "Benchmarks exact-match demo caching and configured semantic matching, with TTL and invalidation controls.",
      "Compares schema-validated provider judge results with clearly labeled deterministic demo scores and bias checks.",
      "Runs a pattern-based RAG prompt-injection harness, reports false positives and negatives, and documents its coverage limits.",
      "Persists benchmark, evaluation, bias, and security runs in experiment history.",
    ],
    liveUrl: "", repoUrl: "https://github.com/Zasim1074/llm-reliability-lab" },
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
    period: "Aug 2022 - Jul 2025",
    cgpa: "6.4/10",
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
