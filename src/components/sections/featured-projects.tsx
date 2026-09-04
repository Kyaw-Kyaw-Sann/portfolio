import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

function ProjectPreview({ project }: { project: Project }) {
  const screenshot = project.screenshots[0];

  return (
    <Card interactive className="relative grid gap-6 overflow-hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:items-center">
      <Link
        href={project.caseStudyUrl}
        aria-label={`Read the ${project.name} case study`}
        className="absolute inset-0 z-10 rounded-xl focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      />
      <div className="pointer-events-none relative z-20">
        <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 text-base text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <Badge key={technology} tone={technology === "AI Integration" ? "accent" : "default"}>
              {technology}
            </Badge>
          ))}
        </div>
        <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="pointer-events-auto mt-6 flex flex-wrap gap-3">
          <Link href={project.caseStudyUrl} className={buttonClassName("secondary")}>
            Case Study
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonClassName("secondary")}
            >
              GitHub
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-muted">
              GitHub · Pending
            </span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonClassName("primary")}
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>

      {screenshot ? (
        <div className="pointer-events-none relative z-20 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-contain object-center"
          />
        </div>
      ) : null}
    </Card>
  );
}

export function FeaturedProjects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading" className="border-t border-border">
      <PageContainer>
        <p className="text-sm font-medium text-accent">Selected work</p>
        <h2 id="projects-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Featured projects
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Three complete products that demonstrate web, mobile, backend, and product-focused engineering.
        </p>
        <div className="mt-8 space-y-5">
          {projects.map((project) => (
            <ProjectPreview key={project.slug} project={project} />
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
