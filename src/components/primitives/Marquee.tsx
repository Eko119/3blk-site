type MarqueeProps = {
  readonly phrases: readonly string[];
};

/**
 * A slow running band of studio statements. The track holds two
 * identical runs and translates by exactly half its width, so the
 * loop closes with no visible seam. Hovering pauses it.
 */
export function Marquee({ phrases }: MarqueeProps) {
  const run = (
    <ul className="flex shrink-0 items-center">
      {phrases.map((phrase) => (
        <li key={phrase} className="flex items-center whitespace-nowrap">
          <span className="px-8 font-display text-h1 text-text-primary">
            {phrase}
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-text-accent" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee flex overflow-hidden border-y border-rule py-6">
      <div className="marquee-track flex w-max">
        {run}
        {/* Second run is decorative — the list above is the content. */}
        <div aria-hidden="true" className="flex">
          {run}
        </div>
      </div>
    </div>
  );
}
