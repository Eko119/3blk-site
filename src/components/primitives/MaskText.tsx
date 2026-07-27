import type { CSSProperties, ElementType } from "react";

type MaskTextProps = {
  /** One entry per typographic line. Line breaks are deliberate. */
  readonly lines: readonly string[];
  readonly as?: ElementType;
  readonly className?: string;
  readonly id?: string;
  /**
   * `load` plays immediately from CSS — used for the first screen so
   * the largest text is not waiting on hydration. `scroll` defers to
   * the surrounding Reveal.
   */
  readonly trigger?: "load" | "scroll";
  /** Stagger offset applied before the first line. */
  readonly delay?: number;
};

/**
 * Sets a heading as masked lines that travel up into place. Each
 * line is a clipping block; the span inside it is what moves.
 */
export function MaskText({
  lines,
  as: Tag = "span",
  className = "",
  id,
  trigger = "scroll",
  delay = 0,
}: MaskTextProps) {
  return (
    <Tag id={id} className={className}>
      {lines.map((line, index) => (
        <span
          key={line}
          className={`mask-line ${trigger === "load" ? "hero-line" : ""}`.trim()}
          style={{ "--reveal-delay": delay + index } as CSSProperties}
        >
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
