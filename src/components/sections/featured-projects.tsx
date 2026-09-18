import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { ProjectImage } from "@/components/ui/project-image";
import { projects } from "@/data/projects";
export function FeaturedProjects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <PageContainer>
        <div className="flex flex-wrap items-end justify-between gap-6"><div><h2 id="projects-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">Built from the ground up.</h2></div><p className="max-w-xs text-sm leading-6 text-muted">Three projects. Web, mobile, and the systems that connect them.</p></div>
        <div className="mt-12">
          {projects.map((project) => (
            <article key={project.slug} data-reveal className="group relative grid gap-8 border-t border-border py-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:py-14">
              <Link href={project.caseStudyUrl} scroll aria-label={`Read the ${project.name} case study`} className="absolute inset-0 z-10 rounded-sm focus-visible:outline-offset-4" />
              {project.screenshots[0] ? <div className="pointer-events-none relative aspect-[16/11] overflow-hidden rounded-md border border-border bg-surface p-4 sm:p-6"><ProjectImage src={project.screenshots[0].src} alt={project.screenshots[0].alt} fill sizes="(min-width: 1280px) 640px, (min-width: 1024px) 55vw, 100vw" className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]" /></div> : null}
              <div className="pointer-events-none relative">
                <div className="flex items-center justify-end"><ArrowUpRight className="text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></div>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
                <p className="mt-4 leading-7 text-muted">{project.description}</p>
                <p className="mt-5 font-mono text-xs leading-6 text-muted">{project.stack.join(" / ")}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">{project.highlights.slice(0, 3).map((highlight) => <li key={highlight} className="border-l border-border pl-4">{highlight}</li>)}</ul>
                <div className="relative z-20 mt-6 flex flex-wrap gap-5">
                  <Link href={project.caseStudyUrl} scroll className="editorial-link pointer-events-auto text-sm">Read case study <ArrowUpRight size={16} aria-hidden="true" /></Link>
                  {project.githubUrl ? <a href={project.githubUrl} className="editorial-link pointer-events-auto text-sm" target="_blank" rel="noreferrer">GitHub</a> : null}
                  {project.liveUrl ? <a href={project.liveUrl} className="editorial-link pointer-events-auto text-sm" target="_blank" rel="noreferrer">Live demo</a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
