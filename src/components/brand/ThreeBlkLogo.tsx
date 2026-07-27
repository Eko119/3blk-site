/* ============================================================
   3BLK STUDIOS — IDENTITY
   The mark is three vertical bars: triple black. It is drawn in
   `currentColor` so a single asset serves the Ink and Bone
   surfaces without a second file or a colour prop.
   ============================================================ */

type MarkProps = {
  readonly className?: string;
  /** Set when the mark stands alone and must name itself. */
  readonly title?: string;
};

/**
 * The bars sit on a 24-unit grid: 3 / 5 / 3 wide, split by two
 * 5-unit voids. The centre bar is heavier so the group reads as
 * composed rather than repeated.
 */
export function ThreeBlkMark({ className, title }: MarkProps) {
  const labelled = typeof title === "string";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 32"
      className={className}
      fill="currentColor"
      role={labelled ? "img" : "presentation"}
      aria-label={labelled ? title : undefined}
      aria-hidden={labelled ? undefined : "true"}
      focusable="false"
    >
      {labelled ? <title>{title}</title> : null}
      <rect x="0" y="0" width="3" height="32" />
      <rect x="8" y="0" width="5" height="32" />
      <rect x="21" y="0" width="3" height="32" />
    </svg>
  );
}

type LockupProps = {
  readonly className?: string;
};

/**
 * Mark plus wordmark. The wordmark is real text rather than
 * outlines, so it renders in the live display face, scales with
 * the type system and stays selectable and searchable.
 */
export function ThreeBlkLockup({ className = "" }: LockupProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <ThreeBlkMark className="h-[1.15em] w-auto shrink-0" />
      <span className="flex items-baseline gap-[0.3em] leading-none">
        <span className="font-display text-[1.35em] leading-none tracking-[-0.02em]">
          3BLK
        </span>
        <span className="font-mono text-[0.5em] uppercase tracking-[0.2em]">
          Studios
        </span>
      </span>
    </span>
  );
}
