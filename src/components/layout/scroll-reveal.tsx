"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith("/projects/")) {
      window.scrollTo(0, 0);
    }

    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll("main section, [data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("reveal-pending");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });
    targets.forEach((target) => {
      if (target.getBoundingClientRect().top > window.innerHeight) {
        target.classList.add("reveal-pending");
        observer.observe(target);
      }
    });
    const revealAll = () => targets.forEach((target) => target.classList.remove("reveal-pending"));
    motion.addEventListener("change", revealAll);
    return () => { observer.disconnect(); revealAll(); motion.removeEventListener("change", revealAll); };
  }, [pathname]);
  return null;
}
