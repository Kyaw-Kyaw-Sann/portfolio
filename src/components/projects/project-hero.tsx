import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { ProjectImage } from "@/components/ui/project-image";
import type { Project } from "@/types/portfolio";

export function ProjectHero({ project }: { project: Project }) {
  const screenshot = project.screenshots[0];

  return (
    <section className="case-study-hero border-b border-border py-12 sm:py-16 lg:py-20">
      <PageContainer>
        <Link href="/#projects" className="editorial-link text-sm text-muted">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)] lg:items-end lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="signal">{project.statusLabel}</Badge>
              {project.stack.map((technology) => (
                <Badge key={technology} tone={technology === "AI Integration" ? "accent" : "default"}>
                  {technology}
                </Badge>
              ))}
            </div>
            <h1 className="mt-7 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              {project.name}.
            </h1>
            <p className="mt-5 text-xl leading-8 text-foreground sm:text-2xl">{project.tagline}</p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.screenshots.length > 1 ? (
                <Link href="#screenshots" className={buttonClassName("primary")}>
                  View screenshots
                </Link>
              ) : null}
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonClassName("secondary", "gap-2")}>
                  GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className={buttonClassName("secondary", "gap-2")}>
                  Live demo <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          {project.caseStudy.technologyRoles?.length ? (
            <dl className="border-t border-border">
              {project.caseStudy.technologyRoles.map((role) => (
                <div key={role.technology} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-border py-4 text-sm">
                  <dt className="font-medium text-foreground">{role.technology}</dt>
                  <dd className="leading-6 text-muted">{role.responsibility}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {screenshot ? (
          <figure className="case-hero-media mt-12 sm:mt-16">
            <div className="relative aspect-[16/9] overflow-hidden border border-border bg-surface">
              <ProjectImage
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-contain p-2 sm:p-6"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-muted">{screenshot.caption}</figcaption>
          </figure>
        ) : null}
      </PageContainer>
    </section>
  );
}
