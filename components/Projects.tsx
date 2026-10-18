import { Briefcase, ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal, Stagger, StaggerItem, SpotlightCard, TiltCard } from "@/components/motion";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon === "briefcase" ? Briefcase : Sparkles;
  const body = <div className="card flex h-full flex-col border-white/10 bg-surface-dark/80 shadow-none transition-colors hover:border-cyan/30">
    <div className="flex items-center justify-between gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan"><Icon size={18} /></span><span className="mono-label rounded-full border border-white/10 px-3 py-2 text-muted-dark">{project.type}</span></div>
    <h3 className="mt-5 font-display text-2xl font-semibold text-ink-dark">{project.title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted-dark">{project.summary}</p>
    <Stagger className="mt-5 flex flex-wrap gap-2" delay={0.035}>{project.stack.map((item) => <StaggerItem key={item}><span className="badge border-white/10 bg-white/[0.03] font-mono text-[11px] text-muted-dark">{item}</span></StaggerItem>)}</Stagger>
    <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-dark">{project.highlights.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" /><span>{item}</span></li>)}</ul>
    <div className="mt-auto flex flex-wrap gap-3 pt-7"><a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"><Github size={15} />GitHub</a>{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-ink-dark transition-colors hover:border-cyan/50 hover:text-cyan"><ExternalLink size={15} />Live Project</a> : null}</div>
  </div>;
  return project.featured ? <TiltCard className="h-full">{body}</TiltCard> : <Reveal as="article" className="h-full">{body}</Reveal>;
}

export function Projects() {
  return <section id="projects" className="section relative"><div className="section-inner"><Reveal><h2 id="projects-title" className="mono-label text-cyan" aria-labelledby="projects-title">Selected Work</h2></Reveal><div className="mt-8 grid items-stretch gap-5 lg:grid-cols-2">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div></div></section>;
}
