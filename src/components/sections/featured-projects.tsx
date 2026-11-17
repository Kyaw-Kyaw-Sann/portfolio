import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { ProjectImage } from "@/components/ui/project-image";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

const projectOrder = ["notiva", "quickseat", "readora"];
const orderedProjects = projectOrder.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

function ProjectMedia({ project }: { project: Project }) {
  const primaryScreenshot = project.screenshots[0];

  if (!primaryScreenshot) {
    return (
      <div className="project-media-stage grid min-h-80 place-items-center text-sm text-muted">
        Project preview unavailable
      </div>
    );
  }

  return (
    <div className="project-media-stage">
      <ProjectImage
        src={primaryScreenshot.src}
        alt={primaryScreenshot.alt}
        fill
        sizes="(min-width: 1280px) 650px, (min-width: 1024px) 52vw, 100vw"
        className="object-contain p-2 sm:p-4"
      />
    </div>
  );
}

function ProjectPreview({ project, index }: { project: Project; index: number }) {
  const reverseLayout = index % 2 === 1;

  return (
    <article data-reveal className="project-showcase group relative border-t border-border py-12 lg:py-20">
      <Link
        href={project.caseStudyUrl}
        scroll
        aria-label={`Read the ${project.name} case study`}
        className="absolute inset-0 z-10 rounded-sm focus-visible:outline-offset-4"
      />

      <div className="mb-8 flex items-start justify-between gap-5 lg:mb-10">
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-sm text-signal-soft">0{index + 1}</span>
          <div>
            <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{project.name}</h3>
            <p className="mt-2 text-sm text-muted sm:text-base">{project.tagline}</p>
          </div>
        </div>
        <ArrowUpRight
          className="shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal-soft"
          aria-hidden="true"
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.16fr)_minmax(20rem,0.84fr)] lg:items-center lg:gap-16">
        <div className={`pointer-events-none ${reverseLayout ? "lg:order-2" : ""}`}>
          <ProjectMedia project={project} />
        </div>

        <div className={`pointer-events-none ${reverseLayout ? "lg:order-1" : ""}`}>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="signal">{project.statusLabel}</Badge>
            {project.stack.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>

          <p className="mt-6 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {project.description}
          </p>

          <ol className="mt-7 border-y border-border">
            {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
              <li
                key={highlight}
                className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border py-4 text-sm leading-6 text-muted last:border-b-0"
              >
                <span className="font-mono text-xs text-signal-soft">{highlightIndex + 1}</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ol>

          <div className="relative z-20 mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={project.caseStudyUrl}
              scroll
              className={buttonClassName("primary", "pointer-events-auto gap-2")}
            >
              Case study
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href={`${project.caseStudyUrl}#screenshots`}
              className={buttonClassName("secondary", "pointer-events-auto")}
            >
              Screenshots
            </Link>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                className="editorial-link pointer-events-auto text-sm"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                className="editorial-link pointer-events-auto text-sm"
                target="_blank"
                rel="noreferrer"
              >
                Live demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <PageContainer>
        <div className="grid gap-6 border-b border-border pb-10 md:grid-cols-[1fr_0.7fr] md:items-end">
          <h2
            id="projects-heading"
            className="max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            Products built from end to end.
          </h2>
          <p className="max-w-md text-sm leading-6 text-muted md:justify-self-end">
            Three completed applications demonstrating product thinking, backend architecture, and practical interface work.
          </p>
        </div>

        <div>
          {orderedProjects.map((project, index) => (
            <ProjectPreview key={project.slug} project={project} index={index} />
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
