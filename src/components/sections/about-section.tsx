import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { site } from "@/data/site";
export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <PageContainer className="grid gap-10 md:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div><h2 id="about-heading" className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Learning by<br /><span className="text-muted">building.</span></h2></div>
        <div><div className="space-y-5 text-lg leading-relaxed text-muted">{site.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className="mt-10 border-l-2 border-accent pl-5"><p className="font-medium">{site.education.institution}</p><p className="mt-2 text-sm text-muted">{site.education.degree} · Expected {site.education.expectedGraduation}</p></div>
        </div>
      </PageContainer>
    </Section>
  );
}
