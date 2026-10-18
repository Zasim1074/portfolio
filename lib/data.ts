export const profile = {
  name: "Jaseem Quraishi",
  role: "Full Stack Developer",
  location: "Indore, India",
  relocation: "Open to relocate to Delhi NCR",
  email: "jaseem1quraishi@gmail.com",
  github: "github.com/Zasim1074",
  githubUrl: "https://github.com/Zasim1074",
  linkedin: "linkedin.com/in/jaseem-quraishi",
  linkedinUrl: "https://www.linkedin.com/in/jaseem-quraishi",
  portfolioUrl: "https://jaseem-codes.vercel.app/",
  resumeUrl: "https://github.com/Zasim1074/Zasim1074/raw/refs/heads/main/Jaseem_Quraishi_Full_Stack_Developer.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer with 1+ year of professional experience at FloorWalk Consultants in Indore, where I build React and Next.js applications, including a real-estate CRM and several client portals, and implemented the backend APIs for an AI report-analysis feature that runs in production.",
    "Outside work I build full-stack projects with FastAPI, PostgreSQL, and React, such as TrackHire, a job application tracker with JWT authentication and tests. I'm looking for a Full Stack Developer role at a product company in Delhi NCR.",
  ],
};

export const skills = [
  { group: "Frontend", color: "blue", items: ["React", "Next.js", "TypeScript", "JavaScript", "Redux", "TanStack Query", "Tailwind CSS", "shadcn/ui", "WebSockets", "HTML", "CSS"] },
  { group: "Backend", color: "cyan", items: ["Python", "FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "PostgreSQL", "Alembic", "REST APIs", "JWT", "RBAC"] },
  { group: "Testing and Tools", color: "green", items: ["Pytest", "React Testing Library", "Git", "GitHub", "Postman", "Vercel"] },
];

export const experience = [{
  role: "Frontend Developer", company: "FloorWalk Consultants Pvt. Ltd.", period: "Aug 2025 - Present", location: "Indore, India",
  points: [
    'Implemented the backend APIs for an AI report-analysis feature now live in production: a scheduled weekly job sends approved audit reports in a batch to the Claude API, stores the "what went well / what didn\'t / what to improve" output in the database, and serves it in the client portal.',
    "Reduced the production build from 70 MB to 13 MB (about 81%) by removing unused libraries and dead code, compressing images, and adding lazy loading; load time improved from roughly 6-8s to 3-4s in manual testing.",
    "Built the frontend of a real-estate CRM (Next.js, React, TypeScript) used daily by 10-15 internal users, with role-based access control for managers, brokers, staff, and salespeople.",
    "Built a reusable API layer (caching, retries, centralized error handling) and custom hooks that replaced per-component fetch logic across modules.",
    "Implemented WebSocket-driven dashboards that push report updates, analytics, and notification counts without page refresh.",
    "Redesigned the client portal and Shopper app; built features across the auditor and manager portals and the company websites; shipped multilingual interfaces (8+ languages).",
  ],
}];

export const engineeringHighlights = [
  { value: "81%", label: "Build size reduction", detail: "70 MB to 13 MB" },
  { value: "6-8s to 3-4s", label: "Page load", detail: "Manual testing" },
  { value: "10-15", label: "Daily CRM users", detail: "Frontend I built" },
  { value: "Live", label: "AI report analysis", detail: "Claude API" },
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
];

export const education = [{ degree: "B.Sc. Information Technology", school: "Guru Nanak Dev University, Amritsar, India", period: "Aug 2022 - Jul 2025", desc: "" }];

export const navLinks = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Experience", href: "#experience" }, { label: "Projects", href: "#projects" }, { label: "Skills", href: "#skills" }, { label: "Education", href: "#education" }, { label: "Contact", href: "#contact" },
];
