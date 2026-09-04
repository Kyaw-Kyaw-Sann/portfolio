"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { buttonClassName } from "@/components/ui/button";
import { PageContainer } from "./page-container";
import { ThemeToggle } from "./theme-toggle";

const navigationLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: site.resumeUrl, label: "Resume", external: true },
  {
    href: "https://github.com/Kyaw-Kyaw-Sann",
    label: "GitHub",
    external: true,
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <PageContainer>
        <div className="flex min-h-16 items-center justify-between gap-3 py-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3 rounded-md text-sm font-semibold text-foreground transition-colors duration-200 hover:text-focus"
          >
            <span className="grid size-8 place-items-center rounded-md bg-accent text-lg font-bold text-white">
              K
            </span>
            <span className="truncate">{site.name}</span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-x-4 text-sm md:flex lg:gap-x-5">
            {navigationLinks.map(({ href, label, external }) => (
              <a
                key={label}
                href={href}
                className="rounded-md text-muted transition-colors duration-200 hover:text-foreground"
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {label}
              </a>
            ))}
            <Link href="/#contact" className={buttonClassName("primary", "min-h-9 px-3 py-1.5")}>
              Contact
            </Link>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-px hover:border-muted/50 hover:bg-surface-raised hover:text-foreground"
            >
              {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          inert={!isMenuOpen || undefined}
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out md:hidden ${
            isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="grid gap-1 border-t border-border py-3">
              {navigationLinks.map(({ href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground"
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {label}
                </a>
              ))}
              <Link href="/#contact" onClick={closeMenu} className={buttonClassName("primary", "mt-2 w-full")}>
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </PageContainer>
    </header>
  );
}
