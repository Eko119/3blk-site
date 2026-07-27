import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { MaskText } from "./MaskText";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  readonly id: string;
  readonly eyebrow: string;
  /** One entry per display line. */
  readonly lines: readonly string[];
  readonly standfirst?: ReactNode;
  readonly onBone?: boolean;
  readonly className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  lines,
  standfirst,
  onBone = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-block ${className}`.trim()}>
      <Reveal>
        <Eyebrow onBone={onBone}>{eyebrow}</Eyebrow>
      </Reveal>

      <Reveal delay={1}>
        <MaskText
          as="h2"
          id={id}
          lines={lines}
          className={`font-display text-display-3 ${
            onBone ? "text-on-bone" : "text-text-primary"
          }`}
        />
      </Reveal>

      {standfirst ? (
        <Reveal delay={2}>
          <p
            className={`max-w-measure-wide text-body-lg ${
              onBone ? "text-on-bone-secondary" : "text-text-secondary"
            }`}
          >
            {standfirst}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
