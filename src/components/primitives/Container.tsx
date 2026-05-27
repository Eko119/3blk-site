import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  readonly children: ReactNode;
};

export function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
