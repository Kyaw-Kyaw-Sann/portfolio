import Image from "next/image";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type ScreenshotGalleryProps = {
  project: Project;
};

export function ScreenshotGallery({ project }: ScreenshotGalleryProps) {
  return (
    <Section aria-labelledby="screenshots-heading" className="border-t border-border">
      <PageContainer>
        <p className="text-sm font-medium text-accent">Screenshots</p>
        <h2 id="screenshots-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Product interface evidence
        </h2>
        {project.screenshots.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((screenshot, index) => (
              <figure
                key={screenshot.src}
                className={project.caseStudy.highlightFirstScreenshot && index === 0 ? "sm:col-span-2" : ""}
              >
                <Card className="p-3 sm:p-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-background">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-contain object-center"
                    />
                  </div>
                  <figcaption className="px-1 pt-3 text-sm text-muted">{screenshot.caption}</figcaption>
                </Card>
              </figure>
            ))}
          </div>
        ) : (
          <Card className="mt-8">
            <p className="text-muted">Screenshots will be added when they are available.</p>
          </Card>
        )}
      </PageContainer>
    </Section>
  );
}
