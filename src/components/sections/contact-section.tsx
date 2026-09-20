import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { site } from "@/data/site";
import { EmailContact } from "@/components/ui/email-contact";
export function ContactSection() {
  return (
    <Section id="contact" aria-labelledby="contact-heading" className="border-t border-border bg-surface/40">
      <PageContainer>
        <div className="flex flex-wrap items-end justify-between gap-8"><h2 id="contact-heading" className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Have something<br />in mind?</h2>
          <EmailContact />
        </div>
        <div className="mt-12 flex flex-wrap gap-7 text-sm">{site.socialLinks.filter((link) => link.label !== "Email").map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="editorial-link">{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}<a href={site.resumeUrl} target="_blank" rel="noreferrer" className="editorial-link">Resume<ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </PageContainer>
    </Section>
  );
}
