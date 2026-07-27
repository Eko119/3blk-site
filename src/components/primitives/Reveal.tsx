import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  readonly children: ReactNode;
  readonly as?: ElementType;
  readonly className?: string;
  /** Stagger position — multiplied by the global stagger step. */
  readonly delay?: number;
};

/**
 * Marks a block to be revealed on scroll. Deliberately a server
 * component with no state of its own: the page carries dozens of
 * these, and making each one a client island would cost more in
 * hydration than the animation is worth. `RevealObserver` drives
 * every one of them from a single listener instead.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: RevealProps) {
  return (
    <Tag
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": delay } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
