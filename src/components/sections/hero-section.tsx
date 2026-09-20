import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { site } from "@/data/site";
export function HeroSection() {
  return (
    <section className="hero-section">
      <PageContainer>
        <h1 className="hero-heading">Practical ideas.<br /><span>Complete applications.</span></h1>
        <div className="hero-bottom">
          <p className="max-w-xl text-lg leading-relaxed text-muted">{site.hero.description}</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="editorial-link">Explore my work <ArrowDown size={18} aria-hidden="true" /></a>
            <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="editorial-link text-muted">Resume <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-footnote"><span>Full-stack web development</span><span>Next.js / Spring Boot / PostgreSQL</span></div>
      </PageContainer>
    </section>
  );
}
