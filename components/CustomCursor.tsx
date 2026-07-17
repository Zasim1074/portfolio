"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null ||
          target.classList.contains("interactive") ||
          target.classList.contains("card") ||
          target.classList.contains("badge")
      );
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isPointer ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-4 h-4 bg-accent/40 dark:bg-accent-dark/40 rounded-full blur-sm border border-accent/60 dark:border-accent-dark/60" />
      </motion.div>

      {/* Outer cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden lg:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
        style={{
          opacity: isVisible ? 0.6 : 0,
        }}
      >
        <div className="w-8 h-8 border-2 border-accent/30 dark:border-accent-dark/30 rounded-full" />
      </motion.div>

      {/* Trailing dots */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9997] hidden lg:block"
          animate={{
            x: position.x - 4,
            y: position.y - 4,
          }}
          transition={{
            delay: (i + 1) * 0.05,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          style={{
            opacity: isVisible ? 0.3 - i * 0.08 : 0,
          }}
        >
          <div
            className="w-2 h-2 bg-accent/40 dark:bg-accent-dark/40 rounded-full"
            style={{
              transform: `scale(${1 - i * 0.3})`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}
