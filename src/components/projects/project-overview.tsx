import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import type { Project } from "@/types/portfolio";

export function ProjectOverview({ project }: { project: Project }) {
  const { overview, problem, solution } = project.caseStudy;

  return (
    <Section aria-labelledby="overview-heading">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 id="overview-heading" className="case-study-heading">
            Product context
          </h2>
          <div>
            <p className="text-xl leading-8 text-foreground sm:text-2xl sm:leading-9">{overview}</p>
            <dl className="mt-10 grid border-t border-border md:grid-cols-2">
              <div className="border-b border-border py-6 md:border-r md:pr-8">
                <dt className="font-medium text-foreground">Problem</dt>
                <dd className="mt-3 text-sm leading-7 text-muted">{problem}</dd>
              </div>
              <div className="border-b border-border py-6 md:pl-8">
                <dt className="font-medium text-foreground">Solution</dt>
                <dd className="mt-3 text-sm leading-7 text-muted">{solution}</dd>
              </div>
            </dl>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
