import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { EngineeringChallenge } from "@/components/projects/engineering-challenge";
import { FeatureGroups } from "@/components/projects/feature-groups";
import { ProjectCta } from "@/components/projects/project-cta";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectLearnings } from "@/components/projects/project-learnings";
import { ProjectOverview } from "@/components/projects/project-overview";
import { ProjectWorkflow } from "@/components/projects/project-workflow";
import { ScreenshotGallery } from "@/components/projects/screenshot-gallery";
import { SystemArchitecture } from "@/components/projects/system-architecture";
import { TechnicalDecisions } from "@/components/projects/technical-decisions";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found | Portfolio" };
  }

  return {
    title: `${project.name} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <SystemArchitecture project={project} />
        <ProjectWorkflow project={project} />
        <FeatureGroups project={project} />
        <EngineeringChallenge project={project} />
        <TechnicalDecisions project={project} />
        <ScreenshotGallery project={project} />
        <ProjectLearnings project={project} />
        <ProjectCta project={project} />
      </main>
      <Footer />
    </>
  );
}
