import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { buttonClassName } from "@/components/ui/button";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section className="editorial-hero border-b border-border" aria-labelledby="hero-heading">
      <PageContainer>
        <div className="editorial-hero-grid">
          <div className="hero-copy">
            <h1 id="hero-heading" className="editorial-hero-title">
              {site.hero.headline}
              <span>{site.hero.highlight}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              {site.hero.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className={buttonClassName("primary", "gap-2")}>
                Explore projects
                <ArrowDown size={17} aria-hidden="true" />
              </a>
              <Link href={site.resumeUrl} className={buttonClassName("secondary", "gap-2")}>
                Resume
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <figure className="portrait-shell hero-portrait">
            <div className="media-frame relative aspect-[4/5] overflow-hidden">
              <Image
                src="/portfolio.jpg"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(min-width: 768px) 304px, 70vw"
                className="object-cover object-top"
              />
            </div>
          </figure>
        </div>
      </PageContainer>
    </section>
  );
}
