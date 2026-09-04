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
        <p className="text-sm font-medium text-accent">System architecture</p>
        <h2 id="architecture-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Connected application layers
        </h2>
        <div className="mt-8 space-y-4">
          {project.caseStudy.systemArchitecture.map((flow) => {
            const steps = flow.split(" → ");

            return (
              <Card key={flow}>
                <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-4">
                  {steps.map((step, index) => (
                    <li key={step} className="flex flex-1 items-center gap-3 lg:contents">
                      <span className="flex min-h-14 flex-1 items-center justify-center rounded-lg border border-border bg-surface-raised px-4 text-center text-sm font-medium">
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
      </PageContainer>
    </Section>
  );
}
