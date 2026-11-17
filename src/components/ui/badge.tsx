import type { HTMLAttributes } from "react";

type BadgeTone = "default" | "accent" | "signal";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  default: "border-border bg-transparent text-muted",
  accent: "border-accent/30 bg-accent/10 text-focus",
  signal: "border-signal/35 bg-signal/10 text-signal-soft",
};

export function Badge({
  className = "",
  tone = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${toneClasses[tone]} ${className}`}
      {...props}
    />
  );
}
