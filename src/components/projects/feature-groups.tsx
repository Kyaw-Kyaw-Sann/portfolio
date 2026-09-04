import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type FeatureGroupsProps = {
  project: Project;
};

export function FeatureGroups({ project }: FeatureGroupsProps) {
  return (
    <Section aria-labelledby="features-heading" className="border-t border-border">
      <PageContainer>
        <p className="text-sm font-medium text-accent">Key features</p>
        <h2 id="features-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Product responsibilities
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {project.caseStudy.featureGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                {group.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
