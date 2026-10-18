"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { m as motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Check, Copy } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function useViewportEntry(reduced: boolean | null) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(Boolean(reduced));
  useEffect(() => {
    if (reduced) { setEntered(true); return; }
    const element = ref.current;
    if (!element) return;
    const fallback = window.setTimeout(() => setEntered(true), 850);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setEntered(true); observer.disconnect(); window.clearTimeout(fallback); }
    }, { threshold: 0.1 });
    observer.observe(element);
    return () => { observer.disconnect(); window.clearTimeout(fallback); };
  }, [reduced]);
  return { ref, entered };
}

export function Reveal({ children, className = "", delay = 0, as = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "article" | "li" }) {
  const Tag = as === "article" ? motion.article : as === "li" ? motion.li : motion.div;
  const reduce = useReducedMotion();
  const { ref, entered } = useViewportEntry(reduce);
  return <Tag ref={ref as never} data-motion-reveal="" className={className} initial={false} animate={entered ? { opacity: 1, y: 0 } : { opacity: 0.85, y: 16 }} transition={{ duration: reduce ? 0 : 0.58, delay: reduce ? 0 : delay, ease }}>{children}</Tag>;
}

export function Stagger({ children, className = "", delay = 0.08, as = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "ul" }) {
  const reduce = useReducedMotion();
  const { ref, entered } = useViewportEntry(reduce);
  const Tag = as === "ul" ? motion.ul : motion.div;
  return <Tag ref={ref as never} data-motion-stagger="" className={className} initial="hidden" animate={entered ? "show" : "hidden"} variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : delay } } }}>{children}</Tag>;
}

export function StaggerItem({ children, className = "", as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" }) {
  const Tag = as === "li" ? motion.li : motion.div;
  const reduce = useReducedMotion();
  return <Tag data-motion-item="" className={className} variants={{ hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0.85, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } } }}>{children}</Tag>;
}

export function CountUp({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [count, setCount] = useState(value);
  useEffect(() => {
    if (reduce || !ref.current) { setCount(value); return; }
    setCount(0);
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const update = (now: number) => {
        const progress = Math.min((now - start) / 900, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 4))));
        if (progress < 1) frame = requestAnimationFrame(update);
      };
      frame = requestAnimationFrame(update);
      observer.disconnect();
    }, { threshold: 0.3 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [reduce, value]);
  return <span ref={ref} className={className}>{count}{suffix}</span>;
}

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div aria-hidden="true" className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-600 to-cyan-700" style={{ scaleX: reduce ? 1 : scaleX }} />;
}

function HoverSpotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const update = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => { element.style.setProperty("--pointer-x", `${x}px`); element.style.setProperty("--pointer-y", `${y}px`); frame.current = null; });
  }, []);
  useEffect(() => () => { if (frame.current !== null) cancelAnimationFrame(frame.current); }, []);
  return <div ref={ref} onPointerMove={update} className={`spotlight-card ${className}`}>{children}</div>;
}

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) { return <HoverSpotlight className={className}>{children}</HoverSpotlight>; }

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const [hoverable, setHoverable] = useState(false);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 24 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 24 });
  useEffect(() => setHoverable(window.matchMedia("(hover: hover) and (pointer: fine)").matches), []);
  return <motion.div className={className} style={hoverable && !reduce ? { perspective: 900, rotateX, rotateY } : undefined} onMouseMove={(event) => {
    if (!hoverable || reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 4);
    rotateY.set(x * 4);
  }} onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}><SpotlightCard className="h-full rounded-3xl">{children}</SpotlightCard></motion.div>;
}

export function TimelineLine({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 65%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });
  return <div ref={ref} className={`relative ${className}`}><div aria-hidden="true" className="absolute bottom-2 left-[9px] top-2 w-px bg-white/10"><motion.div className="h-full origin-top bg-gradient-to-b from-blue-500 to-cyan" style={{ scaleY: reduce ? 1 : scaleY }} /></div>{children}</div>;
}

const pipeline = ["Approved audit reports", "Weekly scheduled job", "Batch sent to Claude API", "Stored in database", "Shown in client portal"];
export function PipelineDiagram() {
  const reduce = useReducedMotion();
  const { ref, entered } = useViewportEntry(reduce);
  return <div ref={ref} className="mt-12 rounded-3xl border border-white/10 bg-surface-dark/80 p-6 sm:p-8">
    <h3 className="font-display text-2xl font-semibold text-ink-dark sm:text-3xl">How the AI report analysis works</h3>
    <div className="relative mt-8 grid gap-4 md:grid-cols-5 md:gap-3">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible md:block" viewBox="0 0 1000 120" preserveAspectRatio="none"><motion.path d="M100 60 H900" fill="none" className="text-cyan" stroke="currentColor" strokeWidth="2" initial={false} animate={{ pathLength: reduce || entered ? 1 : 0 }} transition={{ duration: reduce ? 0 : 1.1, ease }} /></svg>
      <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 top-0 h-full w-8 md:hidden" viewBox="0 0 20 500" preserveAspectRatio="none"><motion.path d="M10 20 V480" fill="none" className="text-cyan" stroke="currentColor" strokeWidth="1" initial={false} animate={{ pathLength: reduce || entered ? 1 : 0 }} transition={{ duration: reduce ? 0 : 1.1, ease }} /></svg>
      {pipeline.map((node, index) => <Reveal key={node} delay={index * 0.07} className="relative z-10 flex min-h-24 items-center gap-3 rounded-2xl border border-white/10 bg-surface-dark p-4 md:flex-col md:justify-center md:text-center"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-cyan/40 bg-cyan/10 font-mono text-sm text-cyan">0{index + 1}</span><span className="text-sm font-medium leading-snug text-ink-dark">{node}</span></Reveal>)}
    </div>
    <ol className="sr-only">{pipeline.map((node) => <li key={node}>{node}</li>)}</ol>
  </div>;
}

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${email}`; }
  };
  return <button type="button" onClick={copy} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-700 px-5 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"><motion.span animate={{ rotate: reduce ? 0 : copied ? 0 : -35, scale: copied ? 1 : 0.92 }} transition={{ duration: reduce ? 0 : 0.25 }} aria-hidden="true">{copied ? <Check size={17} /> : <Copy size={17} />}</motion.span>{copied ? "Copied" : email}<span className="sr-only" aria-live="polite">{copied ? "Email copied to clipboard" : ""}</span></button>;
}

export function PointerSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const move = (event: PointerEvent) => {
      if (!ref.current || frame.current !== null) return;
      const x = event.clientX; const y = event.clientY;
      frame.current = requestAnimationFrame(() => { ref.current?.style.setProperty("--spot-x", `${x}px`); ref.current?.style.setProperty("--spot-y", `${y}px`); frame.current = null; });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); if (frame.current !== null) cancelAnimationFrame(frame.current); };
  }, []);
  return <div ref={ref} aria-hidden="true" className="pointer-spotlight pointer-events-none fixed inset-0 z-0" />;
}
