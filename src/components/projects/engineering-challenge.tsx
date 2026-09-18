import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type EngineeringChallengeProps = {
  project: Project;
};

export function EngineeringChallenge({ project }: EngineeringChallengeProps) {
  return (
    <Section aria-labelledby="challenge-heading" className="border-t border-border">
      <PageContainer>
        <Card className="border-accent/30 bg-surface-raised">
          <h2 id="challenge-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
            The main technical focus
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-muted">{project.caseStudy.engineeringChallenge}</p>
        </Card>
      </PageContainer>
    </Section>
  );
}
