export const profile = {
  name: "Jaseem Quraishi",
  role: "Frontend Developer",
  tagline: "Building performance-critical web applications that scale.",
  tags: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Performance Engineering",
  ],
  location: "Indore, India",
  relocate: "Open to relocating to Delhi NCR",
  email: "jaseem1quraishi@gmail.com",
  github: "github.com/Zasim1074",
  githubUrl: "https://github.com/Zasim1074",
  linkedin: "linkedin.com/in/jaseem-quraishi/",
  linkedinUrl: "https://www.linkedin.com/in/jaseem-quraishi",
  resumeUrl:
  "https://docs.google.com/document/d/19D_BMhAcrjJqbBVQrMn7y4waBHo2xmsOpoprTVGgMNM/export?format=pdf",
};

export const about = {
  paragraphs: [
    "I'm a Frontend Developer with 1 year of production experience building performance-critical React applications. I specialize in optimizing web performance \u2014 achieving an 81% bundle size reduction and building real-time WebSocket dashboards for high-frequency data.",
    "Based in Indore, India. Open to relocating to Delhi NCR for the right opportunity.",
  ],
  stats: [
    {
      value: "81%",
      label: "Bundle Size Reduction",
      sub: "70MB \u2192 13MB in production",
    },
    {
      value: "1yr",
      label: "Production Experience",
      sub: "React \u00b7 TypeScript \u00b7 Next.js",
    },
  ],
  highlights: [
    {
      title: "Real-time Dashboards",
      desc: "WebSocket-powered high-frequency data streams with minimal re-renders",
    },
    {
      title: "Indore, India",
      desc: "Open to relocating to Delhi NCR",
    },
    {
      title: "5+ Modules",
      desc: "Reusable component architecture across a real estate CRM platform",
    },
  ],
};

export const skills = [
  {
    group: "Core",
    color: "blue",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    group: "State & Data",
    color: "cyan",
    items: ["Redux", "Context API", "React Query", "REST APIs", "WebSockets"],
  },
  {
    group: "Performance",
    color: "green",
    items: [
      "Code Splitting",
      "Lazy Loading",
      "Tree Shaking",
      "useMemo / useCallback",
      "Chrome DevTools Profiling",
    ],
  },
  {
    group: "Tools",
    color: "amber",
    items: ["Git", "GitHub", "Vite", "Postman", "Vercel"],
  },
  {
    group: "Also Familiar With",
    color: "slate",
    items: ["React Native", "Flutter", "Python", "SQL", "SQL Alchemy"],
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "FloorWalk Consultants Pvt. Ltd.",
    period: "01 Aug 2025 \u2013 Present",
    location: "Indore, India",
    points: [
      "Cut production bundle from 70MB → 13MB (-81%) via dead code elimination, tree shaking, and image compression — load time dropped from ~6s to ~4s.",
      "Engineered real-time analytics dashboards over WebSockets with high-frequency UI rendering; optimized to eliminate unnecessary re-renders.",
      "Built a full-featured real estate CRM handling leads, brokers, properties, and follow-up workflows with role-based access (Manager, Broker, Staff).",
      "Designed a custom API layer with caching and retry logic that eliminated redundant network calls and reduced backend server costs.",
      "Identified and resolved interaction latency bottlenecks using Chrome DevTools profiling and component restructuring.",
      "Audited and reduced unnecessary WebSocket calls in coordination with the backend team, directly lowering server load.",
      "Built reusable component architecture adopted across 5+ product modules, cutting dev time on new features by ~30%.",
    ],
  },
];

export const projects = [
  {
    title: "TrackHire",
    icon: "briefcase",
    desc: "A full-featured job application tracking platform. Manage applications, track interview stages, and stay organized throughout your job search.",
    tags: ["React", "Supabase", "Clerk Auth"],
    link: "https://track-hire-jq.vercel.app",
    linkLabel: "track-hire-jq.vercel.app",
  },
  {
    title: "Hotel Sanwariya",
    icon: "building",
    desc: "A modern hospitality website featuring room showcases, amenities, gallery, booking inquiries, SEO optimization, & a fully responsive design.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://sanwariyahotel.com/",
    linkLabel: "sanwariyahotel.com",
  },
  {
    title: "Code Book",
    icon: "code",
    desc: "A browser-based multi-language code editor with execution, AI assistance, and syntax highlighting \u2014 no local setup required.",
    tags: ["React", "Monaco Editor", "Judge0", "Gemini API"],
    link: "https://code-book1.vercel.app",
    linkLabel: "code-book1.vercel.app",
  },
];

export const education = [
  {
    degree: "B.Sc. Information Technology",
    school: "Guru Nanak Dev University, Amritsar",
    period: "2022 \u2013 2025",
    desc: "Focused on software development fundamentals, web technologies, and computer science principles. Built a strong foundation in algorithms, data structures, and modern development practices.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];