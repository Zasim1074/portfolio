"use client";

import { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function AnimationProvider({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with data-observe attribute
    const elementsToObserve = document.querySelectorAll("[data-observe]");
    elementsToObserve.forEach((el) => observer.observe(el));

    // Handle scroll-based parallax and effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Parallax effect for hero section
      const heroElements = document.querySelectorAll("[data-parallax]");
      heroElements.forEach((el) => {
        const offset = el.getAttribute("data-parallax");
        const speed = parseInt(offset || "0.5");
        (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });

      // Navbar background blur on scroll
      const navbar = document.querySelector("header");
      if (navbar) {
        if (scrollY > 50) {
          navbar.classList.add("backdrop-blur-lg", "bg-opacity-95");
        } else {
          navbar.classList.remove("backdrop-blur-lg", "bg-opacity-95");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
