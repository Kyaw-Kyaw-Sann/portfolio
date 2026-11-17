import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { buttonClassName } from "@/components/ui/button";
import type { Project } from "@/types/portfolio";

export function ProjectCta({ project }: { project: Project }) {
  return (
    <Section className="case-cta-section border-t border-border">
      <PageContainer>
        <div className="case-cta-panel">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">Explore the rest of the work.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100/80">See the other completed products or verify this project when public links are available.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonClassName("secondary", "gap-2 border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10")}>
              GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a> : null}
            {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className={buttonClassName("secondary", "gap-2 border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10")}>
              Live demo <ArrowUpRight size={16} aria-hidden="true" />
            </a> : null}
            <Link href="/#projects" className={buttonClassName("secondary", "gap-2 border-white/40 bg-white text-signal-strong hover:border-white hover:bg-blue-50")}>
              <ArrowLeft size={16} aria-hidden="true" /> Back to projects
            </Link>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
