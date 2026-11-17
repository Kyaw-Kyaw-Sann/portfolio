import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  secondary:
    "border border-border-strong bg-ink text-foreground hover:border-signal hover:bg-surface-subtle focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  ghost:
    "border border-transparent text-muted hover:border-border hover:bg-surface-subtle hover:text-foreground focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
};

export function buttonClassName(variant: ButtonVariant, className = "") {
  return `inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variantClasses[variant]} ${className}`;
}

export function Button({
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonClassName(variant, className)} disabled:pointer-events-none disabled:opacity-50`}
      type={type}
      {...props}
    />
  );
}
