import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { buttonClassName } from "@/components/ui/button";
import { EmailContact } from "@/components/ui/email-contact";
import { site } from "@/data/site";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume — Kyaw Kyaw Hsan",
  description: "Skills, practical experience, education, and projects of Kyaw Kyaw Hsan, Full-Stack Developer Intern.",
};

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageContainer>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{site.name}</h1>
                <p className="mt-4 text-xl text-muted">{site.role}</p>
              </div>
              <a href={site.resumeUrl} download className={buttonClassName("primary", "gap-2")}>
                <ArrowDownToLine size={18} aria-hidden="true" />Download PDF
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-6">
              <EmailContact />
              <div className="flex flex-wrap items-start gap-6 text-sm">
                <a href={resume.phoneUrl} className="editorial-link">{resume.phone}</a>
                {site.socialLinks.filter((link) => link.label !== "Email").map((link) => (
                  <a key={link.label} href={link.href} className="editorial-link" target="_blank" rel="noopener noreferrer">
                    {link.label}<ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid gap-12 border-t border-border pt-10 lg:grid-cols-[1fr_2fr]">
              <aside className="min-w-0 space-y-10">
                <div>
                  <h2 className="text-lg font-semibold">Education</h2>
                  <p className="mt-4 font-medium">{site.education.institution}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Bachelor of Computer Science (in progress)<br />
                    Final-year student · Expected graduation: {site.education.expectedGraduation}
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Technical skills</h2>
                  <dl className="mt-4 space-y-5">
                    {resume.skills.map((skill) => (
                      <div key={skill.category}>
                        <dt className="font-medium">{skill.category}</dt>
                        <dd className="mt-2 text-sm leading-6 text-muted">{skill.items.join(" · ")}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Languages</h2>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {resume.languages.map((language) => <li key={language}>{language}</li>)}
                  </ul>
                </div>
              </aside>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold">Profile</h2>
                <p className="mt-4 leading-7 text-muted">{resume.profile}</p>
                <h2 className="mt-12 text-lg font-semibold">Practical experience</h2>
                <article className="mt-4 border-b border-border pb-6">
                  <h3 className="font-semibold">{resume.experience.title}</h3>
                  <p className="mt-2 text-sm text-muted">{resume.experience.duration}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                    {resume.experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </article>
                <h2 className="mt-12 text-lg font-semibold">Selected projects</h2>
                <div className="mt-4">
                  {resume.projects.map((project) => (
                    <article key={project.name} className="border-b border-border py-6">
                      <h3 className="text-xl font-semibold">
                        {project.href ? (
                          <Link href={project.href} scroll className="editorial-link">
                            {project.name}<ArrowUpRight size={18} aria-hidden="true" />
                          </Link>
                        ) : project.name}
                      </h3>
                      <p className="mt-3 text-muted">{project.tagline}</p>
                      <p className="mt-2 text-sm text-muted">{project.stack.join(" · ")}</p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
      </main>
      <Footer />
    </>
  );
}
