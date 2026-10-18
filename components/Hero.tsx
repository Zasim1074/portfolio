import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal, SpotlightCard } from "@/components/motion";

const glance = [
  { label: "Role", value: "Frontend Developer, FloorWalk, Aug 2025 - present" },
  { label: "Stack", value: "React / Next.js / TypeScript / Python / FastAPI / PostgreSQL" },
  { label: "Looking for", value: "Full Stack Developer roles, Delhi NCR" },
];

export function Hero() {
  return <section id="home" className="section relative flex min-h-[calc(100svh-4rem)] items-center py-14 sm:py-16 lg:py-20">
    <div aria-hidden="true" className="ambient-glow pointer-events-none absolute -right-32 -top-20 h-[34rem] w-[34rem] rounded-full" />
    <div className="section-inner w-full">
      <div className="mx-auto grid w-full min-w-0 grid-cols-[minmax(0,1fr)] items-center gap-12 lg:max-w-6xl lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="min-w-0 text-left">
          <p className="mono-label inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-3 py-2 text-cyan">Full Stack Developer</p>
          <h1 className="display-title mt-6 max-w-4xl break-words font-display font-bold text-ink-dark">{profile.name}</h1>
          <Reveal delay={0.06} className="mt-5 min-w-0">
            <p className="break-words font-mono text-sm leading-relaxed text-cyan sm:text-base">React | Next.js | TypeScript | Python | FastAPI | PostgreSQL</p>
          </Reveal>
          <Reveal delay={0.12} className="mt-5 min-w-0">
            <p className="max-w-2xl break-words text-base leading-relaxed text-muted-dark sm:text-lg">Frontend Developer at FloorWalk Consultants with 1+ year of production experience, building full-stack projects with FastAPI and PostgreSQL.</p>
          </Reveal>
          <Reveal delay={0.18} className="mt-4">
          <p className="flex flex-wrap items-center gap-2 text-sm font-medium text-emerald-300"><span className="status-pulse h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" /><span>Indore, India | Open to Full Stack Developer roles in Delhi NCR</span></p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-700 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">View Work <ArrowRight size={16} /></a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"><FileText size={16} />Download Resume</a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"><Github size={16} />GitHub</a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"><Linkedin size={16} />LinkedIn</a>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative min-w-0">
          <div aria-hidden="true" className="ambient-glow absolute -inset-10 -z-10 rounded-full" />
          <SpotlightCard className="card min-w-0 rounded-3xl border-white/10 bg-surface-dark/80 p-6 shadow-none backdrop-blur-xl sm:p-8">
            <p className="mono-label text-cyan">At a glance</p>
            <dl className="mt-6 min-w-0 space-y-3">
              {glance.map((item) => <div key={item.label} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.025] p-4"><dt className="mono-label text-muted-dark">{item.label}</dt><dd className="mt-2 break-words text-sm font-semibold leading-relaxed text-ink-dark">{item.value}</dd></div>)}
            </dl>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm text-muted-dark">1+ year of production experience</p>
          </SpotlightCard>
        </Reveal>
      </div>
    </div>
  </section>;
}
