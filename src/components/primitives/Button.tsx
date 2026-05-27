import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  readonly variant?: Variant;
  readonly children: ReactNode;
};

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-accent text-text-inverse hover:bg-accent/90 border border-accent",
  secondary:
    "bg-transparent text-text-primary hover:bg-elevated border border-border-strong",
};

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-label font-medium transition-colors duration-default ease-standard";
  return (
    <a className={`${base} ${VARIANT_CLASSES[variant]} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
