import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  readonly id: string;
  readonly eyebrow: string;
  readonly children: ReactNode;
  readonly description?: ReactNode;
};

export function SectionHeading({ id, eyebrow, children, description }: SectionHeadingProps) {
  return (
    <header className="flex flex-col gap-4 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="text-h2 md:text-h1 text-text-primary">
        {children}
      </h2>
      {description ? (
        <p className="text-body-lg text-text-secondary">{description}</p>
      ) : null}
    </header>
  );
}
