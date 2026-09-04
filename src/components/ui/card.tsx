import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-5 shadow-sm transition-colors hover:border-muted/40 sm:p-6 ${className}`}
      {...props}
    />
  );
}
