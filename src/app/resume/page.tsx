import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, Mail } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { resume } from "@/data/resume";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Resume | ${site.name}`,
  description: `${site.name}'s professional experience, technical focus, education, and selected full-stack projects.`,
};

const selectedProjects = resume.selectedProjectSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

const emailLink = site.socialLinks.find((link) => link.label === "Email");
const githubLink = site.socialLinks.find((link) => link.label === "GitHub");

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className="resume-page">
        <PageContainer>
          <header className="resume-hero border-b border-border py-14 sm:py-20 lg:py-24">
            <Link href="/" className="editorial-link text-sm text-muted">
              <ArrowLeft size={16} aria-hidden="true" />
              Back home
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <h1 className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                  Resume.
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                  {resume.summary}
                </p>
              </div>

              <div className="lg:justify-self-end">
                <a
                  href={resume.downloadUrl}
                  download="Kyaw_Kyaw_Hsan_Resume.pdf"
                  className={buttonClassName("primary", "gap-2")}
                >
                  <Download size={17} aria-hidden="true" />
                  Download PDF
                </a>
                <p className="mt-3 max-w-xs text-xs leading-5 text-muted">
                  Downloadable PDF version for applications and offline review.
                </p>
              </div>
            </div>
          </header>

          <div className="resume-layout grid gap-14 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20 lg:py-24">
            <div className="space-y-16">
              <section aria-labelledby="experience-heading">
                <h2 id="experience-heading" className="resume-section-heading">
                  Experience
                </h2>
                <div className="mt-7 border-t border-border">
                  {resume.experience.map((experience) => (
                    <article
                      key={`${experience.company}-${experience.role}`}
                      className="grid gap-5 border-b border-border py-7 sm:grid-cols-[10rem_1fr]"
                    >
                      <div className="font-mono text-xs leading-5 text-signal-soft">
                        <p>{experience.period}</p>
                        <p className="mt-1 text-muted">{experience.engagement}</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{experience.role}</h3>
                        <p className="mt-1 text-sm text-muted">{experience.company}</p>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                          {experience.summary}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="projects-heading">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h2 id="projects-heading" className="resume-section-heading">
                    Selected projects
                  </h2>
                  <Link href="/#projects" className="editorial-link text-sm text-muted">
                    All project previews
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-7 border-t border-border">
                  {selectedProjects.map((project, index) => (
                    <article
                      key={project.slug}
                      className="group grid gap-5 border-b border-border py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start"
                    >
                      <span className="font-mono text-xs text-signal-soft">0{index + 1}</span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
                        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
                          {project.highlights[0]}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((technology) => (
                            <Badge key={technology}>{technology}</Badge>
                          ))}
                        </div>
                      </div>
                      <Link
                        href={project.caseStudyUrl}
                        className="editorial-link justify-self-start text-sm sm:justify-self-end"
                      >
                        Case study
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-12 lg:border-l lg:border-border lg:pl-8" aria-label="Resume details">
              <section aria-labelledby="skills-heading">
                <h2 id="skills-heading" className="resume-section-heading">
                  Technical focus
                </h2>
                <div className="mt-6 space-y-7">
                  {resume.skillGroups.map((group) => (
                    <div key={group.focus}>
                      <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {group.technologies.map((technology) => (
                          <li key={technology}>
                            <Badge tone={group.focus === "current" ? "signal" : "default"}>
                              {technology}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="education-heading">
                <h2 id="education-heading" className="resume-section-heading">
                  Education
                </h2>
                <div className="mt-6 text-sm leading-6 text-muted">
                  <p className="font-medium text-foreground">{site.education.degree}</p>
                  <p className="mt-2">{site.education.institution}</p>
                  <p className="mt-2 font-mono text-xs">
                    Expected graduation · {site.education.expectedGraduation}
                  </p>
                </div>
              </section>

              <section aria-labelledby="contact-details-heading">
                <h2 id="contact-details-heading" className="resume-section-heading">
                  Contact
                </h2>
                <div className="mt-6 grid gap-3 text-sm">
                  {emailLink ? (
                    <a href={emailLink.href} className="editorial-link break-all">
                      <Mail size={16} aria-hidden="true" />
                      {emailLink.href.replace("mailto:", "")}
                    </a>
                  ) : null}
                  {githubLink ? (
                    <a
                      href={githubLink.href}
                      target="_blank"
                      rel="noreferrer"
                      className="editorial-link"
                    >
                      GitHub
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </section>
            </aside>
          </div>
        </PageContainer>
      </main>
      <Footer />
    </>
  );
}
