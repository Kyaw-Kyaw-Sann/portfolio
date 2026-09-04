import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type ProjectCtaProps = {
  project: Project;
};

export function ProjectCta({ project }: ProjectCtaProps) {
  return (
    <Section className="border-t border-border">
      <PageContainer>
        <Card className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-accent">Explore more</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">See the rest of my project work.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
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
            <Link href="/#projects" className={buttonClassName("primary")}>
              Back to Projects
            </Link>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}
