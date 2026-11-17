import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { ProjectImage } from "@/components/ui/project-image";
import type { Project } from "@/types/portfolio";

export function ScreenshotGallery({ project }: { project: Project }) {
  const screenshots = project.screenshots.slice(1);

  return (
    <Section id="screenshots" aria-labelledby="screenshots-heading" className="scroll-mt-24 border-t border-border">
      <PageContainer>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 id="screenshots-heading" className="case-study-heading">Interface evidence.</h2>
          <p className="max-w-sm text-sm leading-6 text-muted">Real screens from the implemented product workflows.</p>
        </div>

        {screenshots.length ? (
          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
            {screenshots.map((screenshot, index) => {
              const isPortrait = screenshot.orientation === "portrait";
              const isLead = index === 0 && !isPortrait;
              return (
                <figure key={screenshot.src} className={`${isLead ? "md:col-span-2" : ""} ${isPortrait ? "mx-auto w-full max-w-sm" : ""}`}>
                  <div className={`case-screenshot-frame relative overflow-hidden ${isPortrait ? "aspect-[9/16]" : "aspect-[16/10]"}`}>
                    <ProjectImage
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes={isPortrait ? "(min-width: 768px) 384px, 100vw" : isLead ? "(min-width: 1280px) 1200px, 100vw" : "(min-width: 1280px) 580px, (min-width: 768px) 50vw, 100vw"}
                      className="object-contain p-2 sm:p-4"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-6 text-muted">{screenshot.caption}</figcaption>
                </figure>
              );
            })}
          </div>
        ) : (
          <p className="mt-10 border-y border-border py-8 text-sm text-muted">Screenshots will be added when they are available.</p>
        )}
      </PageContainer>
    </Section>
  );
}
