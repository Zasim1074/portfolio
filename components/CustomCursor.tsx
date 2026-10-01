"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
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
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 22,
          mass: 0.5,
        }}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="h-5 w-5 rounded-full border border-accent/60 bg-accent/20 blur-[1px] dark:border-accent-dark/60 dark:bg-accent-dark/20" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed z-[9998] hidden lg:block"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
          mass: 0.7,
        }}
        style={{ opacity: isVisible ? 0.6 : 0 }}
      >
        <div className="h-9 w-9 rounded-full border border-accent/25 dark:border-accent-dark/25" />
      </motion.div>
    </>
  );
}
