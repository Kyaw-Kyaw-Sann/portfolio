import Image from "next/image";
import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const stackSummary = "Spring Boot · PostgreSQL · Next.js · React Native";

export function HeroSection() {
  const readora = projects[0];
  const readoraScreenshot = readora.screenshots[0];

  return (
    <Section className="py-16 sm:py-20 lg:py-24">
      <PageContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <p className="inline-flex rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-sm font-medium text-focus">
              {site.role}
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {site.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              {site.hero.description}
            </p>
            <p className="mt-5 text-sm font-medium text-foreground">{stackSummary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={buttonClassName("primary")}>
                View Projects
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonClassName("secondary")}
              >
                Resume
              </a>
            </div>
          </div>

          {readoraScreenshot ? (
            <Card className="p-3 sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background">
                <Image
                  src={readoraScreenshot.src}
                  alt={readoraScreenshot.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-contain object-center"
                />
              </div>
              <p className="px-1 pt-3 text-sm text-muted">{readora.tagline}</p>
            </Card>
          ) : null}
        </div>
      </PageContainer>
    </Section>
  );
}
