import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Design System | Portfolio",
  description: "Portfolio design system preview.",
};

const tokenItems = [
  ["Background", "#0B0F19", "bg-background"],
  ["Surface", "#111827", "bg-surface"],
  ["Accent", "#6366F1", "bg-accent"],
] as const;

export default function DesignSystemPage() {
  return (
    <main>
      <Section className="border-b border-border">
        <PageContainer>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Design system
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Reusable visual primitives for a calm, technical, dark-first portfolio.
          </p>
        </PageContainer>
      </Section>

      <PageContainer>
        <Section aria-labelledby="tokens-heading">
          <h2 id="tokens-heading" className="text-2xl font-semibold tracking-tight">
            Color tokens
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {tokenItems.map(([name, value, colorClass]) => (
              <Card key={name} className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className={`size-10 shrink-0 rounded-lg border border-border ${colorClass}`}
                />
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="mt-1 text-sm text-muted">{value}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section aria-labelledby="typography-heading" className="border-t border-border">
          <h2 id="typography-heading" className="text-2xl font-semibold tracking-tight">
            Typography
          </h2>
          <Card className="mt-6">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Clear hierarchy supports quick scanning.
            </h3>
            <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
              Body copy uses comfortable line height and muted contrast for readable,
              focused technical content.
            </p>
          </Card>
        </Section>

        <Section aria-labelledby="buttons-heading" className="border-t border-border">
          <h2 id="buttons-heading" className="text-2xl font-semibold tracking-tight">
            Buttons
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button>Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
            <Button variant="ghost">Ghost action</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section aria-labelledby="badges-heading" className="border-t border-border">
          <h2 id="badges-heading" className="text-2xl font-semibold tracking-tight">
            Badges and tech tags
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Next.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge tone="accent">Spring Boot</Badge>
            <Badge tone="accent">PostgreSQL</Badge>
          </div>
        </Section>

        <Section aria-labelledby="cards-heading" className="border-t border-border">
          <h2 id="cards-heading" className="text-2xl font-semibold tracking-tight">
            Cards
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
              <h3 className="text-lg font-semibold">Standard surface</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                A restrained border and surface color create separation without visual noise.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Responsive spacing</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Containers, sections, and cards adapt from compact mobile spacing to generous desktop
                layouts.
              </p>
            </Card>
          </div>
        </Section>
      </PageContainer>
    </main>
  );
}
