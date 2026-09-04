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
        <p className="text-sm font-medium text-accent">Workflow</p>
        <h2 id="workflow-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {workflow.title}
        </h2>
        <ol className="mt-8 flex flex-col gap-3 xl:flex-row xl:items-stretch">
          {workflow.steps.map((step, index) => (
            <li key={step} className="flex flex-1 flex-col items-stretch gap-3 xl:contents">
              <Card className="flex min-h-24 flex-1 items-center gap-3 py-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent/15 text-sm font-semibold text-focus">
                  {index + 1}
                </span>
                <span className="text-sm font-medium">{step}</span>
              </Card>
              {index < workflow.steps.length - 1 ? (
                <span aria-hidden="true" className="text-xl text-accent xl:hidden">↓</span>
              ) : null}
              {index < workflow.steps.length - 1 ? (
                <span aria-hidden="true" className="hidden text-xl text-accent xl:self-center xl:block">→</span>
              ) : null}
            </li>
          ))}
        </ol>
        {workflow.note ? <p className="mt-4 text-sm text-muted">{workflow.note}</p> : null}
      </PageContainer>
    </Section>
  );
}
