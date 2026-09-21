import { ProjectImage } from "@/components/ui/project-image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const screenshot = project.screenshots[0];

  return (
    <Section className="border-b border-border py-14 sm:py-16 lg:py-20">
      <PageContainer>
        <Link href="/#projects" className="rounded-md text-sm text-muted transition-colors hover:text-foreground">
          ← Back to projects
        </Link>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">{project.statusLabel}</span>
            </div>
            <p className="mt-3 text-xl text-muted">{project.tagline}</p>
            <p className="mt-5 max-w-2xl leading-7 text-muted">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <Badge key={technology} tone={technology === "AI Integration" ? "accent" : "default"}>
                  {technology}
                </Badge>
              ))}
            </div>
            {project.caseStudy.technologyRoles?.length ? (
              <dl className="mt-6 grid gap-3 border-l-2 border-accent pl-4 text-sm sm:grid-cols-2">
                {project.caseStudy.technologyRoles.map((role) => (
                  <div key={role.technology}>
                    <dt className="font-semibold text-foreground">{role.technology}</dt>
                    <dd className="mt-1 text-muted">{role.responsibility}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {project.screenshots.length > 1 || project.githubUrl || project.liveUrl ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.screenshots.length > 1 ? (
                  <Link href="#screenshots" className={buttonClassName("primary")}>
                    View Screenshots
                  </Link>
                ) : null}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonClassName("secondary")}>
                    GitHub
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className={buttonClassName("primary")}>
                    Live Demo
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          {screenshot ? (
            <Card className="p-3 sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background">
                <ProjectImage
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-contain object-center"
                />
              </div>
              <p className="px-1 pt-3 text-sm text-muted">{screenshot.caption}</p>
            </Card>
          ) : null}
        </div>
      </PageContainer>
    </Section>
  );
}
