import type { ElementType, HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  readonly children: ReactNode;
  readonly as?: ElementType;
};

/** The page measure: centred, capped, and inset by the gutter. */
export function Container({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-container px-gutter ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
