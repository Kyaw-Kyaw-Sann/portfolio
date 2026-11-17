import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

type InteractiveCardProps = CardProps & {
  interactive?: boolean;
};

export function Card({ className = "", interactive = false, ...props }: InteractiveCardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface-subtle p-5 transition-[background-color,border-color,box-shadow,transform] duration-200 sm:p-6 ${
        interactive ? "hover:-translate-y-0.5 hover:border-signal/50 hover:bg-surface hover:shadow-[0_18px_45px_var(--shadow-color)]" : ""
      } ${className}`}
      {...props}
    />
  );
}
