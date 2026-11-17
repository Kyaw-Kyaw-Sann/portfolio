import Link from "next/link";
import { site } from "@/data/site";
import { BrandMark } from "./brand-mark";
import { PageContainer } from "./page-container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink/40 py-8">
      <PageContainer className="flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" aria-label={`${site.name} — Home`} className="flex items-center gap-3 rounded-md">
          <BrandMark className="size-9" />
          <span>
            <span className="block font-medium text-foreground">{site.name}</span>
            <span className="mt-0.5 block text-xs">© {new Date().getFullYear()} Portfolio</span>
          </span>
        </Link>
        <p className="text-xs uppercase tracking-[0.14em] text-signal-soft">{site.role}</p>
      </PageContainer>
    </footer>
  );
}
