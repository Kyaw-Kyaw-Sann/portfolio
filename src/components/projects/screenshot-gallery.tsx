import { ProjectImage } from "@/components/ui/project-image";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";

type ScreenshotGalleryProps = {
  project: Project;
};

export function ScreenshotGallery({ project }: ScreenshotGalleryProps) {
  const galleryScreenshots = project.screenshots.slice(1);

  return (
    <Section id="screenshots" aria-labelledby="screenshots-heading" className="scroll-mt-24 border-t border-border">
      <PageContainer>
        <h2 id="screenshots-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          Product interface evidence
        </h2>
        {galleryScreenshots.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {galleryScreenshots.map((screenshot, index) => (
              <figure
                key={screenshot.src}
                className={screenshot.orientation === "portrait" ? "mx-auto w-full max-w-md" : project.caseStudy.highlightFirstScreenshot && index === 0 ? "sm:col-span-2" : ""}
              >
                <Card className="p-3 sm:p-4">
                  <div className={`relative overflow-hidden rounded-lg border border-border bg-background ${screenshot.orientation === "portrait" ? "aspect-[9/16]" : "aspect-[16/10]"}`}>
                    <ProjectImage
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes={screenshot.orientation === "portrait" ? "(min-width: 640px) 448px, 100vw" : project.caseStudy.highlightFirstScreenshot && index === 0 ? "(min-width: 1280px) 1152px, 100vw" : "(min-width: 1280px) 560px, (min-width: 640px) 50vw, 100vw"}
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
