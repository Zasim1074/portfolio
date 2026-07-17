"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/hooks";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();

  const directionVariants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  };

  const variants = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={isVisible ? variants.animate : variants.initial}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.21, 0.47, 0.29, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 3,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowingCard({ children, className = "" }: GlowingCardProps) {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={{
        boxShadow: "0 20px 40px rgba(96, 165, 250, 0.2)",
        y: -5,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
