"use client";

import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { BrandMark } from "./brand-mark";
import { PageContainer } from "./page-container";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: site.resumeUrl, label: "Resume" },
  {
    href: site.socialLinks.find((link) => link.label === "GitHub")!.href,
    label: "GitHub",
    external: true,
  },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function closeMenu() {
    dialog.current?.close();
  }

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const desktop = matchMedia("(min-width: 768px)");
    const closeAtDesktop = () => {
      if (desktop.matches) dialog.current?.close();
    };

    document.body.style.overflow = "hidden";
    desktop.addEventListener("change", closeAtDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeAtDesktop);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <PageContainer className="flex min-h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-md"
          aria-label={`${site.name} — Home`}
        >
          <BrandMark />
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-semibold tracking-tight text-foreground">
              {site.name}
            </span>
            <span className="mt-0.5 block text-[0.65rem] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-signal-soft">
              {site.role}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link"
              aria-current={!link.external && link.href === pathname ? "page" : undefined}
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            ref={trigger}
            type="button"
            className="grid size-11 place-items-center rounded-md border border-border-strong bg-ink text-muted transition-[background-color,border-color,color] duration-200 hover:border-signal hover:bg-surface-subtle hover:text-foreground md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => {
              dialog.current?.showModal();
              setOpen(true);
            }}
          >
            <Menu size={21} aria-hidden="true" />
          </button>
        </div>
      </PageContainer>

      <dialog
        ref={dialog}
        id="mobile-navigation"
        aria-labelledby="menu-title"
        className="mobile-drawer"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
      >
        <div className="drawer-content">
          <div className="flex items-center justify-between border-b border-border pb-6">
            <div className="flex items-center gap-3">
              <BrandMark className="size-10" />
              <span id="menu-title" className="font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <button
              type="button"
              autoFocus
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="grid size-11 place-items-center rounded-md border border-border-strong bg-ink text-muted transition-colors hover:border-signal hover:text-foreground"
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="mt-8 grid">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center gap-4 border-b border-border py-5 text-2xl transition-colors hover:border-signal/60 hover:text-signal-soft"
                aria-current={!link.external && link.href === pathname ? "page" : undefined}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
                {link.external ? (
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="ml-auto text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                ) : (
                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                    className="ml-auto text-muted transition-transform duration-200 group-hover:translate-x-1"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-border pt-6 text-sm text-muted">
            <p>{site.role}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-signal-soft">
              Portfolio / 2026
            </p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
