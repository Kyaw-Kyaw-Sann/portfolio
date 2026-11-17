import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { EmailContact } from "@/components/ui/email-contact";
import { site } from "@/data/site";

export function ContactSection() {
  const externalLinks = site.socialLinks.filter((link) => link.label !== "Email");

  return (
    <Section id="contact" aria-labelledby="contact-heading" className="contact-section border-t border-border">
      <PageContainer>
        <div data-reveal className="contact-panel">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <h2
                id="contact-heading"
                className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl"
              >
                Let&apos;s build something useful.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/80">
                I am open to conversations about junior full-stack opportunities and practical software projects.
              </p>
            </div>

            <div className="contact-actions border-t border-white/20 pt-6 text-white lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
              <EmailContact />

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm">
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    {link.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ))}
                <Link href={site.resumeUrl} className="contact-link">
                  Resume
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
