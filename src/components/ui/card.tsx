import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

type InteractiveCardProps = CardProps & {
  interactive?: boolean;
};

export function Card({ className = "", interactive = false, ...props }: InteractiveCardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-5 shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-200 sm:p-6 ${
        interactive ? "hover:-translate-y-0.5 hover:border-muted/50 hover:shadow-md" : ""
      } ${className}`}
      {...props}
    />
  );
}
