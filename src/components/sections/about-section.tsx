import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-heading" className="border-t border-border">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
          <div>
            <p className="text-sm font-medium text-accent">About</p>
            <h2 id="about-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Building through practice.
            </h2>
          </div>
          <Card>
            <div className="space-y-3 text-muted">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 border-t border-border pt-4 text-sm text-muted">
              {site.education.degree} · {site.education.institution} · Expected graduation {site.education.expectedGraduation}
            </p>
          </Card>
        </div>
      </PageContainer>
    </Section>
  );
}
