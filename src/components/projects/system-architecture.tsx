import { ArrowDown, ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import type { Project } from "@/types/portfolio";

export function SystemArchitecture({ project }: { project: Project }) {
  const workflow = project.caseStudy.workflow;

  return (
    <Section aria-labelledby="architecture-heading" className="case-architecture border-y border-border">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <h2 id="architecture-heading" className="case-study-heading">Architecture &amp; engineering.</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              How the application layers connect and where the main implementation complexity sits.
            </p>
          </div>

          <div className="space-y-5">
            {project.caseStudy.systemArchitecture.map((flow) => {
              const steps = flow.split(" → ");
              return (
                <ol key={flow} className="case-architecture-flow">
                  {steps.map((step, index) => (
                    <li key={step} className="contents">
                      <span className="case-architecture-step">{step}</span>
                      {index < steps.length - 1 ? (
                        <>
                          <ArrowDown className="mx-auto text-signal-soft lg:hidden" size={18} aria-hidden="true" />
                          <ArrowRight className="hidden text-signal-soft lg:block" size={18} aria-hidden="true" />
                        </>
                      ) : null}
                    </li>
                  ))}
                </ol>
              );
            })}
          </div>
        </div>

        {workflow ? (
          <div className="mt-12 border-t border-border pt-8">
            <h3 className="text-lg font-semibold tracking-tight">{workflow.title}</h3>
            <ol className="mt-5 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {workflow.steps.map((step, index) => (
                <li key={step} className="flex min-h-20 items-center gap-4 bg-surface-subtle p-4">
                  <span className="font-mono text-xs text-signal-soft">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-medium">{step}</span>
                </li>
              ))}
            </ol>
            {workflow.note ? <p className="mt-4 text-xs leading-5 text-muted">{workflow.note}</p> : null}
          </div>
        ) : null}

        <div className="mt-12 grid gap-10 border-t border-border pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="border-l-2 border-signal pl-6">
            <h3 className="text-lg font-semibold">Main engineering challenge</h3>
            <p className="mt-4 text-base leading-8 text-muted">{project.caseStudy.engineeringChallenge}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Key decisions</h3>
            <ol className="mt-4 border-t border-border">
              {project.caseStudy.technicalDecisions.slice(0, 5).map((decision, index) => (
                <li key={decision} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border py-3 text-sm leading-6 text-muted">
                  <span className="font-mono text-xs text-signal-soft">{index + 1}</span>
                  {decision}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
