import { buttonClassName } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <Section id="contact" aria-labelledby="contact-heading" className="border-t border-border">
      <PageContainer>
        <Card className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div>
            <p className="text-sm font-medium text-accent">Contact</p>
            <h2 id="contact-heading" className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Let&apos;s build something practical together.
            </h2>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {site.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  className="rounded-md text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={buttonClassName("primary")}
          >
            View Resume
          </a>
        </Card>
      </PageContainer>
    </Section>
  );
}
