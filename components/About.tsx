import { engineeringHighlights, about } from "@/lib/data";
import {
  CountUp,
  Reveal,
  SpotlightCard,
  Stagger,
  StaggerItem,
} from "@/components/motion";

function ImpactValue({ value }: { value: string }) {
  if (value === "81%")
    return (
      <CountUp
        value={81}
        suffix="%"
        className="font-display text-4xl font-bold tracking-tight accent-text"
      />
    );
  return (
    <span className="font-display text-4xl font-bold tracking-tight accent-text">
      {value}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="section-inner">
        <Reveal>
          <h2
            id="about-title"
            className="mono-label text-cyan"
            aria-labelledby="about-title"
          >
            About
          </h2>
        </Reveal>
        <Reveal
          delay={0.05}
          className="mt-5 max-w-4xl space-y-4 text-base leading-relaxed text-muted-dark"
        >
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Stagger
          className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          delay={0.08}
        >
          {engineeringHighlights.map((item) => (
            <StaggerItem key={item.label}>
              <SpotlightCard className="card h-full border-white/10 bg-surface-dark/80 shadow-none">
                <ImpactValue value={item.value} />
                <p className="mt-3 text-sm font-medium text-ink-dark">
                  {item.label}
                </p>
                <p className="mono-label mt-2 text-muted-dark">{item.detail}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
