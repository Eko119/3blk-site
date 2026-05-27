import type { ReactNode } from "react";

type EyebrowProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`text-overline uppercase text-text-accent ${className}`.trim()}
    >
      {children}
    </span>
  );
}
