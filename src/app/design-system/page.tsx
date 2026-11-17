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
  ["Canvas", "#0B0F19", "bg-background"],
  ["Ink", "#060910", "bg-ink"],
  ["Surface", "#111827", "bg-surface"],
  ["Indigo accent", "#6366F1", "bg-accent"],
  ["Signal blue", "#3B82F6", "bg-signal"],
  ["Border", "#1F2937", "bg-border"],
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
            Reusable visual primitives for a calm, technical portfolio built on graphite, black,
            indigo, and restrained blue signals.
          </p>
        </PageContainer>
      </Section>

      <PageContainer>
        <Section aria-labelledby="tokens-heading">
          <h2 id="tokens-heading" className="text-2xl font-semibold tracking-tight">
            Color tokens
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
            <p className="technical-label">Typography / Editorial hierarchy</p>
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
            <Badge>React</Badge>
            <Badge tone="signal">Express</Badge>
            <Badge tone="signal">MySQL</Badge>
            <Badge tone="accent">Spring Boot</Badge>
            <Badge tone="accent">PostgreSQL</Badge>
          </div>
        </Section>

        <Section aria-labelledby="framing-heading" className="border-t border-border">
          <h2 id="framing-heading" className="text-2xl font-semibold tracking-tight">
            Editorial framing
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="editorial-panel p-6">
              <p className="technical-label">Structured content</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">Quiet surfaces, clear edges.</h3>
              <p className="mt-3 max-w-md leading-7 text-muted">
                Near-black layers and restrained borders create hierarchy without turning every
                piece of content into a floating card.
              </p>
            </div>
            <div className="media-frame min-h-56 p-6">
              <div className="flex h-full min-h-44 items-end border border-border bg-surface p-5">
                <div>
                  <p className="technical-label">Media frame</p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                    A single blue rule identifies important imagery without glow or decorative noise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section aria-labelledby="cards-heading" className="border-t border-border">
          <h2 id="cards-heading" className="text-2xl font-semibold tracking-tight">
            Cards
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card interactive>
              <h3 className="text-lg font-semibold">Standard surface</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                A restrained border and surface color create separation without visual noise.
              </p>
            </Card>
            <Card interactive>
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
