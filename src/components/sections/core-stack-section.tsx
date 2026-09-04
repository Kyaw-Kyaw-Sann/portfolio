import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { coreStack } from "@/data/stack";

export function CoreStackSection() {
  return (
    <Section aria-labelledby="stack-heading" className="border-t border-border">
      <PageContainer>
        <p className="text-sm font-medium text-accent">Core stack</p>
        <h2 id="stack-heading" className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies I build with
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreStack.map((item) => (
            <Card key={item.category}>
              <p className="text-sm text-muted">{item.category}</p>
              <p className="mt-2 text-lg font-semibold">{item.technology}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
