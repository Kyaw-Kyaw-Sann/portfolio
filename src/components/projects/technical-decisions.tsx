import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type TechnicalDecisionsProps = {
  project: Project;
};

export function TechnicalDecisions({ project }: TechnicalDecisionsProps) {
  return (
    <Section aria-labelledby="decisions-heading" className="border-t border-border">
      <PageContainer>
        <p className="text-sm font-medium text-accent">Technical decisions</p>
        <h2 id="decisions-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Deliberate implementation choices
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {project.caseStudy.technicalDecisions.map((decision, index) => (
            <li key={decision}>
              <Card className="flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent/15 text-sm font-semibold text-focus">
                  {index + 1}
                </span>
                <p className="leading-7 text-muted">{decision}</p>
              </Card>
            </li>
          ))}
        </ol>
      </PageContainer>
    </Section>
  );
}
