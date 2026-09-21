import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { ProjectImage } from "@/components/ui/project-image";
import { buttonClassName } from "@/components/ui/button";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

const projectOrder = ["notiva", "quickseat", "readora"];
const orderedProjects = projectOrder.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

function ProjectPreview({ project }: { project: Project }) {
  const screenshot = project.screenshots[0];

  return (
    <article data-reveal className="group relative grid gap-8 border-t border-border py-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:py-14">
      <Link href={project.caseStudyUrl} scroll aria-label={`Read the ${project.name} case study`} className="absolute inset-0 z-10 rounded-sm focus-visible:outline-offset-4" />
      {screenshot ? (
        <div className="pointer-events-none relative aspect-[16/11] overflow-hidden rounded-md border border-border bg-surface p-4 sm:p-6">
          <ProjectImage src={screenshot.src} alt={screenshot.alt} fill sizes="(min-width: 1280px) 640px, (min-width: 1024px) 55vw, 100vw" className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]" />
        </div>
      ) : null}
      <div className="pointer-events-none relative">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted">{project.statusLabel}</span>
          <ArrowUpRight className="text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>
        <p className="mt-4 leading-7 text-muted">{project.description}</p>
        <p className="mt-5 font-mono text-xs leading-6 text-muted">{project.stack.join(" / ")}</p>
        <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">{project.highlights.slice(0, 3).map((highlight) => <li key={highlight} className="border-l border-border pl-4">{highlight}</li>)}</ul>
        <div className="relative z-20 mt-6 flex flex-wrap gap-5">
          <Link href={project.caseStudyUrl} scroll className="editorial-link pointer-events-auto text-sm">Read case study <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Link href={`${project.caseStudyUrl}#screenshots`} className={buttonClassName("secondary", "pointer-events-auto h-9 px-4 text-sm")}>View screenshots</Link>
          {project.githubUrl ? <a href={project.githubUrl} className="editorial-link pointer-events-auto text-sm" target="_blank" rel="noreferrer">GitHub</a> : null}
          {project.liveUrl ? <a href={project.liveUrl} className="editorial-link pointer-events-auto text-sm" target="_blank" rel="noreferrer">Live demo</a> : null}
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <PageContainer>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="projects-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">Selected work.</h2>
          <p className="max-w-sm text-sm leading-6 text-muted">Three completed products spanning knowledge management, booking workflows, and digital reading.</p>
        </div>
        <div className="mt-14">
          <h3 className="text-xl font-semibold tracking-tight">Completed products</h3>
          <div className="mt-5">{orderedProjects.map((project) => <ProjectPreview key={project.slug} project={project} />)}</div>
        </div>
      </PageContainer>
    </Section>
  );
}
