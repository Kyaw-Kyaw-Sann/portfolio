import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({ className = "", ...props }: SectionProps) {
  return <section className={`py-12 sm:py-16 lg:py-20 ${className}`} {...props} />;
}
