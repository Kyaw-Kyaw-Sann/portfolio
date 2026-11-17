import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import type { Project } from "@/types/portfolio";

export function FeatureGroups({ project }: { project: Project }) {
  return (
    <Section aria-labelledby="features-heading">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <h2 id="features-heading" className="case-study-heading">Core responsibilities.</h2>
          <div className="grid border-t border-border md:grid-cols-2">
            {project.caseStudy.featureGroups.map((group, index) => {
              const visibleFeatures = group.features.slice(0, 3);
              const remaining = group.features.length - visibleFeatures.length;
              return (
                <article key={group.title} className={`border-b border-border py-6 md:px-6 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                    {visibleFeatures.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 bg-signal" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {remaining > 0 ? <p className="mt-3 font-mono text-xs text-signal-soft">+{remaining} related capabilities</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
