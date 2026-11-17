import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import type { Project } from "@/types/portfolio";

export function ProjectLearnings({ project }: { project: Project }) {
  return (
    <Section aria-labelledby="learnings-heading" className="border-t border-border">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 id="learnings-heading" className="case-study-heading">What the build taught me.</h2>
          <div>
            <ol className="grid border-t border-border md:grid-cols-2">
              {project.caseStudy.learnings.map((learning, index) => (
                <li key={learning} className={`grid grid-cols-[2rem_1fr] gap-3 border-b border-border py-5 text-sm leading-7 text-muted md:px-5 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
                  <span className="font-mono text-xs text-signal-soft">{String(index + 1).padStart(2, "0")}</span>
                  {learning}
                </li>
              ))}
            </ol>
            {project.caseStudy.plannedFeatures?.length ? (
              <div className="mt-7 border-l border-border-strong pl-5">
                <h3 className="text-sm font-medium">Planned, not yet implemented</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{project.caseStudy.plannedFeatures.join(" · ")}</p>
              </div>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
