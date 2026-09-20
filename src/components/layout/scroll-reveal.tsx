"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let routeFrame = 0;
    let layoutFrame = 0;

    const scrollToRouteTarget = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const target = hash ? document.getElementById(hash) : null;

      if (target) {
        target.scrollIntoView({ block: "start", behavior: motion.matches ? "auto" : "smooth" });
      } else if (pathname.startsWith("/projects/")) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    routeFrame = requestAnimationFrame(() => {
      layoutFrame = requestAnimationFrame(scrollToRouteTarget);
    });
    window.addEventListener("hashchange", scrollToRouteTarget);

    const cleanupRouteScroll = () => {
      cancelAnimationFrame(routeFrame);
      cancelAnimationFrame(layoutFrame);
      window.removeEventListener("hashchange", scrollToRouteTarget);
    };

    if (motion.matches || !("IntersectionObserver" in window)) return cleanupRouteScroll;
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
    return () => {
      cleanupRouteScroll();
      observer.disconnect();
      revealAll();
      motion.removeEventListener("change", revealAll);
    };
  }, [pathname]);
  return null;
}
