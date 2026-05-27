import type { ReactNode } from "react";

type MetricProps = {
  readonly value: string;
  readonly label: ReactNode;
};

export function Metric({ value, label }: MetricProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-display-2 text-text-accent">{value}</span>
      <span className="text-body-sm text-text-secondary">{label}</span>
    </div>
  );
}
