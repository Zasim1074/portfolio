import { education } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function Education() {
  return <section id="education" className="section relative"><div className="section-inner"><Reveal><h2 id="education-title" className="mono-label text-cyan" aria-labelledby="education-title">Education</h2></Reveal>
    <div className="mt-8 space-y-6">{education.map((edu) => <Reveal key={edu.degree} className="rounded-3xl border border-white/10 bg-surface-dark/80 p-6 sm:p-8"><div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"><div><h3 className="text-lg font-bold text-ink-dark">{edu.degree}</h3><p className="mt-1 text-sm font-medium text-cyan">{edu.school}</p></div><span className="mono-label text-muted-dark">{edu.period}</span></div>{edu.desc ? <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-dark">{edu.desc}</p> : null}</Reveal>)}</div>
  </div></section>;
}
