import { ArrowDownRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { technologyGroups } from "@/data/stack";

export function CoreStackSection() {
  return (
    <Section className="stack-section border-y border-border" aria-labelledby="stack-heading">
      <PageContainer>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div data-reveal>
            <h2
              id="stack-heading"
              className="max-w-lg text-4xl font-semibold tracking-[-0.045em] sm:text-5xl"
            >
              A focused stack for complete products.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              My current professional work is web-focused, supported by the backend and mobile experience built through completed products.
            </p>
          </div>

          <div data-reveal className="border-t border-border">
            {technologyGroups.map((group, groupIndex) => (
              <article
                key={group.focus}
                className={`stack-group grid gap-6 border-b border-border py-7 sm:grid-cols-[11rem_1fr] sm:py-9 ${
                  group.focus === "current" ? "stack-group--current" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <ArrowDownRight
                      size={16}
                      className={groupIndex === 0 ? "text-signal-soft" : "text-muted"}
                      aria-hidden="true"
                    />
                    <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
                  </div>
                  <p className="mt-3 text-xs leading-5 text-muted">{group.description}</p>
                </div>

                <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                  {group.technologies.map((technology, index) => (
                    <li
                      key={technology}
                      className="flex items-baseline justify-between gap-3 border-b border-border/80 py-3 text-lg font-medium sm:text-xl"
                    >
                      <span>{technology}</span>
                      <span className="font-mono text-[0.65rem] text-muted">0{index + 1}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
