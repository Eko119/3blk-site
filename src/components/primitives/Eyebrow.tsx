import type { ReactNode } from "react";

type EyebrowProps = {
  readonly children: ReactNode;
  readonly className?: string;
  /** Renders for the Bone surface instead of Ink. */
  readonly onBone?: boolean;
};

/**
 * Sectional marker. Mono, uppercase, widely tracked, preceded by
 * a short rule — the editorial equivalent of a folio line.
 */
export function Eyebrow({ children, className = "", onBone = false }: EyebrowProps) {
  const tone = onBone ? "text-on-bone-accent" : "text-text-accent";
  const rule = onBone ? "bg-on-bone-accent" : "bg-text-accent";
  return (
    <span
      className={`flex items-center gap-3 font-mono text-overline uppercase ${tone} ${className}`.trim()}
    >
      <span aria-hidden="true" className={`h-px w-8 shrink-0 ${rule}`} />
      {children}
    </span>
  );
}
