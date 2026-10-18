import { MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { PipelineDiagram, Reveal, Stagger, StaggerItem, TimelineLine } from "@/components/motion";

export function Experience() {
  return <section id="experience" className="section relative">
    <div className="section-inner">
      <Reveal><h2 id="experience-title" className="mono-label text-cyan" aria-labelledby="experience-title">Experience</h2></Reveal>
      <Reveal delay={0.05}><p className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-dark sm:text-4xl">Product engineering work with real business context.</p></Reveal>
      <TimelineLine className="mt-9 pl-9">
        {experience.map((job) => <article key={job.company} className="relative rounded-3xl border border-white/10 bg-surface-dark/80 p-5 sm:p-8">
          <span aria-hidden="true" className="absolute -left-[29px] top-8 h-3 w-3 rounded-full border-2 border-cyan bg-bg-dark shadow-[0_0_0_5px_rgba(6,182,212,0.12)]" />
          <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-xl font-semibold text-ink-dark">{job.role}</p><p className="mt-1 text-sm font-medium text-cyan">{job.company}</p></div>
            <div className="flex flex-col text-sm text-muted-dark sm:items-end"><span>{job.period}</span><span className="mt-1 inline-flex items-center gap-1"><MapPin size={14} />{job.location}</span></div>
          </div>
          <Stagger as="ul" className="mt-5 space-y-4" delay={0.08}>
            {job.points.map((point) => <StaggerItem as="li" key={point} className="flex gap-3 text-sm leading-relaxed text-muted-dark sm:text-base"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" /><span>{point}</span></StaggerItem>)}
          </Stagger>
        </article>)}
      </TimelineLine>
      <PipelineDiagram />
    </div>
  </section>;
}
