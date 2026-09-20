import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type SystemArchitectureProps = {
  project: Project;
};

export function SystemArchitecture({ project }: SystemArchitectureProps) {
  return (
    <Section aria-labelledby="architecture-heading" className="border-t border-border">
      <PageContainer>
        <h2 id="architecture-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Connected application layers
        </h2>
        <div className="mt-8 space-y-4">
          {project.caseStudy.systemArchitecture.map((flow) => {
            const steps = flow.split(" → ");

            return (
              <Card key={flow}>
                <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-4">
                  {steps.map((step, index) => (
                    <li key={step} className="flex min-w-0 flex-1 flex-col items-stretch gap-3 lg:contents">
                      <span className="flex min-h-14 min-w-0 flex-1 items-center justify-center rounded-lg border border-border bg-surface-raised px-4 py-3 text-center text-sm font-medium">
                        {step}
                      </span>
                      {index < steps.length - 1 ? (
                        <span aria-hidden="true" className="text-xl text-accent lg:hidden">↓</span>
                      ) : null}
                      {index < steps.length - 1 ? (
                        <span aria-hidden="true" className="hidden text-xl text-accent lg:block">→</span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </Card>
            );
          })}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card className="border-accent/30">
            <h3 className="text-lg font-semibold">Main engineering focus</h3>
            <p className="mt-3 leading-7 text-muted">{project.caseStudy.engineeringChallenge}</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Key decisions</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
              {project.caseStudy.technicalDecisions.slice(0, 4).map((decision) => <li key={decision}>— {decision}</li>)}
            </ul>
          </Card>
        </div>
      </PageContainer>
    </Section>
  );
}
