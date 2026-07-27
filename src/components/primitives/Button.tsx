import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "solid" | "line" | "line-on-bone";

type VariantSpec = {
  readonly frame: string;
  readonly wipe: string;
  readonly label: string;
};

/**
 * Hover fills the button from the floor up rather than swapping a
 * background colour — the label inverts as the fill passes it.
 */
const VARIANTS: Record<ButtonVariant, VariantSpec> = {
  solid: {
    frame: "border-oxblood bg-oxblood",
    wipe: "bg-bone",
    label: "text-bone group-hover:text-on-bone-accent group-focus-visible:text-on-bone-accent",
  },
  line: {
    frame: "border-rule-strong bg-transparent",
    wipe: "bg-bone",
    label:
      "text-text-primary group-hover:text-on-bone group-focus-visible:text-on-bone",
  },
  "line-on-bone": {
    frame: "border-rule-bone-strong bg-transparent",
    wipe: "bg-oxblood",
    label: "text-on-bone group-hover:text-bone group-focus-visible:text-bone",
  },
};

const SHELL =
  "group relative isolate inline-flex items-center justify-center overflow-hidden border px-8 py-4 font-mono text-meta uppercase";

function inner(variant: ButtonVariant, children: ReactNode) {
  const spec = VARIANTS[variant];
  return (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-base ease-inout group-hover:scale-y-100 group-focus-visible:scale-y-100 ${spec.wipe}`}
      />
      <span className={`inline-flex items-center gap-3 transition-colors duration-base ease-inout ${spec.label}`}>
        {children}
      </span>
    </>
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  readonly variant?: ButtonVariant;
  readonly children: ReactNode;
};

export function ButtonLink({
  variant = "solid",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={`${SHELL} ${VARIANTS[variant].frame} ${className}`.trim()} {...rest}>
      {inner(variant, children)}
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly variant?: ButtonVariant;
  readonly children: ReactNode;
};

export function Button({
  variant = "solid",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${SHELL} ${VARIANTS[variant].frame} ${className}`.trim()} {...rest}>
      {inner(variant, children)}
    </button>
  );
}
