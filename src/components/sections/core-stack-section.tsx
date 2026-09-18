import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { coreStack } from "@/data/stack";
export function CoreStackSection() {
  return (
    <Section className="border-y border-border bg-surface/40" aria-labelledby="stack-heading">
      <PageContainer className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div><h2 id="stack-heading" className="text-3xl font-semibold tracking-tight">From API<br />to interface.</h2></div>
        <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {coreStack.map((item) => <div key={item.category} className="flex items-baseline justify-between gap-4 border-b border-border py-5"><dt className="font-mono text-xs text-muted">{item.category}</dt><dd className="text-lg font-medium">{item.technology}</dd></div>)}
        </dl>
      </PageContainer>
    </Section>
  );
}
