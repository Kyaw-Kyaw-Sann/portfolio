import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { currentExperience } from "@/data/experience";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-24">
          <div data-reveal>
            <h2 id="about-heading" className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Building is how I learn.
            </h2>
            <div className="about-statement mt-8 space-y-6 border-l border-signal pl-6 sm:pl-8">
              {site.about.slice(0, 2).map((paragraph) => (
                <p key={paragraph} className="text-xl leading-8 text-foreground sm:text-2xl sm:leading-9">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-base leading-7 text-muted">
              {site.about[2]} {site.about[3]}
            </p>
          </div>

          <dl data-reveal className="about-facts border-t border-border">
            <div className="border-b border-border py-6">
              <dt className="flex items-center gap-3 text-sm font-medium text-foreground">
                <BriefcaseBusiness size={18} className="text-signal-soft" aria-hidden="true" />
                Professional experience
              </dt>
              <dd className="mt-4 text-sm leading-6 text-muted">
                <span className="block font-medium text-foreground">{currentExperience.role}</span>
                <span className="mt-1 block">{currentExperience.company}</span>
                <span className="mt-1 block font-mono text-xs">{currentExperience.period}</span>
              </dd>
            </div>

            <div className="border-b border-border py-6">
              <dt className="flex items-center gap-3 text-sm font-medium text-foreground">
                <GraduationCap size={18} className="text-signal-soft" aria-hidden="true" />
                Education
              </dt>
              <dd className="mt-4 text-sm leading-6 text-muted">
                <span className="block font-medium text-foreground">{site.education.degree}</span>
                <span className="mt-1 block">{site.education.institution}</span>
                <span className="mt-1 block font-mono text-xs">
                  Expected graduation · {site.education.expectedGraduation}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </PageContainer>
    </Section>
  );
}
