import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type ProjectLearningsProps = {
  project: Project;
};

export function ProjectLearnings({ project }: ProjectLearningsProps) {
  return (
    <Section aria-labelledby="learnings-heading" className="border-t border-border">
      <PageContainer>
        <h2 id="learnings-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Practical takeaways
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {project.caseStudy.learnings.map((learning) => (
            <Card key={learning}>
              <p className="leading-7 text-muted">{learning}</p>
            </Card>
          ))}
        </div>
        {project.caseStudy.plannedFeatures?.length ? (
          <Card className="mt-4 border-dashed">
            <h3 className="font-semibold">Planned features</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {project.caseStudy.plannedFeatures.join(" · ")}
            </p>
          </Card>
        ) : null}
      </PageContainer>
    </Section>
  );
}
