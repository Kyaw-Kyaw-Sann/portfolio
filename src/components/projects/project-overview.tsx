import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type ProjectOverviewProps = {
  project: Project;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const { overview, problem, solution } = project.caseStudy;

  return (
    <Section aria-labelledby="overview-heading">
      <PageContainer>
        <p className="text-sm font-medium text-accent">Overview</p>
        <h2 id="overview-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Product context
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-3">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p className="mt-3 max-w-4xl leading-7 text-muted">{overview}</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Problem</h3>
            <p className="mt-3 leading-7 text-muted">{problem}</p>
          </Card>
          <Card className="lg:col-span-2">
            <h3 className="text-lg font-semibold">Solution</h3>
            <p className="mt-3 leading-7 text-muted">{solution}</p>
          </Card>
        </div>
      </PageContainer>
    </Section>
  );
}
