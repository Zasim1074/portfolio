import { capabilities } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Capabilities() {
  return (
    <section id="capabilities" className="section relative">
      <div className="section-inner">
        <Reveal>
          <h2 className="mono-label text-cyan">What I Build</h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" delay={0.06}>
          {capabilities.map((capability) => (
            <StaggerItem key={capability.title}>
              <article className="card h-full border-white/10 bg-surface-dark/80 shadow-none">
                <h3 className="font-display text-xl font-semibold text-ink-dark">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark sm:text-base">
                  {capability.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
