import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type ProjectWorkflowProps = {
  project: Project;
};

export function ProjectWorkflow({ project }: ProjectWorkflowProps) {
  const workflow = project.caseStudy.workflow;

  if (!workflow) {
    return null;
  }

  return (
    <Section aria-labelledby="workflow-heading" className="border-t border-border">
      <PageContainer>
        <h2 id="workflow-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {workflow.title}
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.steps.map((step, index) => (
            <li key={step} className="min-w-0">
              <Card className="flex h-full min-h-24 items-center gap-3 py-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent/15 text-sm font-semibold text-focus">
                  {index + 1}
                </span>
                <span className="min-w-0 text-sm font-medium">{step}</span>
                {index < workflow.steps.length - 1 ? <span aria-hidden="true" className="ml-auto text-accent">→</span> : null}
              </Card>
            </li>
          ))}
        </ol>
        {workflow.note ? <p className="mt-4 text-sm text-muted">{workflow.note}</p> : null}
      </PageContainer>
    </Section>
  );
}
