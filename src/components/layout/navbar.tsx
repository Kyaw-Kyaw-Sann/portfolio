"use client";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { PageContainer } from "./page-container";
import { ThemeToggle } from "./theme-toggle";
import { BrandMark } from "./brand-mark";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: site.resumeUrl, label: "Resume", external: true },
  { href: site.socialLinks.find((link) => link.label === "GitHub")!.href, label: "GitHub", external: true },
  { href: "/#contact", label: "Contact" },
];
export function Navbar() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  function closeMenu() { dialog.current?.close(); }
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = matchMedia("(min-width: 768px)");
    const onResize = () => { if (desktop.matches) dialog.current?.close(); };
    desktop.addEventListener("change", onResize);
    return () => { document.body.style.overflow = previous; desktop.removeEventListener("change", onResize); };
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <PageContainer className="flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3 rounded-sm font-semibold tracking-tight" aria-label={site.name + " — Home"}><BrandMark /><span className="text-sm sm:text-base">{site.name}</span></Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => <Link key={link.label} href={link.href} className="nav-link" {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label}</Link>)}
        </nav>
        <div className="flex shrink-0 items-center gap-2"><ThemeToggle /><button ref={trigger} type="button" className="grid size-11 place-items-center rounded-md border border-border md:hidden" aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><Menu size={21} /></button></div>
      </PageContainer>
      <dialog ref={dialog} id="mobile-navigation" aria-labelledby="menu-title" className="mobile-drawer" onClick={(event) => { if (event.target === event.currentTarget) closeMenu(); }} onClose={() => { setOpen(false); trigger.current?.focus(); }}>
        <div className="drawer-content">
          <div className="flex items-center justify-end border-b border-border pb-6"><span id="menu-title" className="sr-only">Navigation</span><button type="button" autoFocus onClick={closeMenu} aria-label="Close navigation menu" className="grid size-11 place-items-center rounded-md border border-border"><X /></button></div>
          <nav aria-label="Mobile navigation" className="mt-8 grid">
            {links.map((link) => <Link key={link.label} href={link.href} onClick={closeMenu} className="flex items-center gap-4 border-b border-border py-5 text-2xl" {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label}<ArrowUpRight size={20} className="ml-auto text-muted" /></Link>)}
          </nav>
          <p className="mt-auto pt-12 text-sm text-muted">{site.name}<br />{site.role}</p>
        </div>
      </dialog>
    </header>
  );
}
