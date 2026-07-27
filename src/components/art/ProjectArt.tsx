/* ============================================================
   3BLK STUDIOS — PROJECT PLATES
   Original compositions, one per project. Vector rather than
   photography: they stay sharp at any size, add no image weight
   to the page, and cannot shift the layout while they load.
   Drawn on a 4:5 editorial portrait, flat, no gradients.
   ============================================================ */

import type { Project } from "@/lib/site";

const INK = "#0b0a09";
const WINE = "#4a1a24";
const OXBLOOD = "#6e2733";
const CLAY = "#c98d82";
const BONE = "#f2ede6";

type PlateProps = { readonly className?: string };

/**
 * AngelTarot — a card standing inside its own aura. Concentric
 * arcs read as a halo; the eight-pointed star is the practice's
 * mark, cut once at the optical centre.
 */
function AngelTarotPlate({ className }: PlateProps) {
  const arcs = [340, 288, 236, 184];
  return (
    <svg viewBox="0 0 800 1000" className={className} aria-hidden="true" focusable="false">
      <rect width="800" height="1000" fill={WINE} />

      {arcs.map((r, i) => (
        <circle
          key={r}
          cx="400"
          cy="470"
          r={r}
          fill="none"
          stroke={i === 1 ? CLAY : OXBLOOD}
          strokeWidth={i === 1 ? 1.5 : 1}
          opacity={i === 1 ? 0.9 : 0.55}
        />
      ))}

      {/* The card */}
      <rect x="286" y="250" width="228" height="440" fill={INK} />
      <rect
        x="286"
        y="250"
        width="228"
        height="440"
        fill="none"
        stroke={CLAY}
        strokeWidth="1.5"
      />
      <rect
        x="302"
        y="266"
        width="196"
        height="408"
        fill="none"
        stroke={OXBLOOD}
        strokeWidth="1"
      />

      {/* Eight-pointed star */}
      <g transform="translate(400 470)">
        <path d="M0 -104 L18 -18 L104 0 L18 18 L0 104 L-18 18 L-104 0 L-18 -18 Z" fill={CLAY} />
        <path
          d="M0 -58 L10 -10 L58 0 L10 10 L0 58 L-10 10 L-58 0 L-10 -10 Z"
          fill={WINE}
        />
      </g>

      {/* Folio rules */}
      <rect x="286" y="736" width="228" height="1" fill={OXBLOOD} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={286 + i * 56} y="752" width="20" height="1" fill={CLAY} opacity="0.8" />
      ))}
      <rect x="286" y="820" width="120" height="1" fill={CLAY} />
    </svg>
  );
}

/**
 * Awktane Studios — a contact sheet. An asymmetric modular grid
 * where three cells carry weight and the rest hold their outline,
 * the way an index page carries a few hero frames.
 */
function AwktanePlate({ className }: PlateProps) {
  /** x, y, w, h, fill */
  const cells: ReadonlyArray<readonly [number, number, number, number, string]> = [
    [96, 120, 240, 300, OXBLOOD],
    [360, 120, 344, 140, "none"],
    [360, 284, 344, 136, CLAY],
    [96, 444, 156, 176, "none"],
    [276, 444, 180, 176, "none"],
    [480, 444, 224, 176, WINE],
    [96, 644, 340, 236, "none"],
    [460, 644, 244, 112, OXBLOOD],
    [460, 780, 244, 100, "none"],
  ];

  return (
    <svg viewBox="0 0 800 1000" className={className} aria-hidden="true" focusable="false">
      <rect width="800" height="1000" fill={INK} />

      {cells.map(([x, y, w, h, fill]) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={w}
          height={h}
          fill={fill}
          stroke={fill === "none" ? OXBLOOD : "none"}
          strokeWidth="1"
        />
      ))}

      {/* Registration marks at the trim */}
      <g fill={CLAY}>
        <rect x="96" y="72" width="28" height="1" />
        <rect x="96" y="72" width="1" height="28" />
        <rect x="676" y="72" width="28" height="1" />
        <rect x="703" y="72" width="1" height="28" />
        <rect x="96" y="927" width="28" height="1" />
        <rect x="96" y="900" width="1" height="28" />
        <rect x="676" y="927" width="28" height="1" />
        <rect x="703" y="900" width="1" height="28" />
      </g>
    </svg>
  );
}

/**
 * Son of Sam — a record cropped by the trim, over a level meter.
 * Bar heights are fixed rather than generated so the plate is
 * identical in every build.
 */
function SonOfSamPlate({ className }: PlateProps) {
  const bars = [
    38, 96, 62, 148, 210, 124, 268, 176, 96, 232, 310, 188, 142, 264, 88, 196,
    122, 58, 164, 92,
  ];
  const barWidth = 18;
  const gap = 14;
  const baseline = 880;
  const startX = 96;

  return (
    <svg viewBox="0 0 800 1000" className={className} aria-hidden="true" focusable="false">
      <rect width="800" height="1000" fill={INK} />

      {/* Record, cropped by the right trim */}
      <g>
        <circle cx="620" cy="300" r="260" fill={WINE} />
        <circle cx="620" cy="300" r="260" fill="none" stroke={OXBLOOD} strokeWidth="1" />
        <circle cx="620" cy="300" r="182" fill="none" stroke={OXBLOOD} strokeWidth="1" />
        <circle cx="620" cy="300" r="104" fill="none" stroke={CLAY} strokeWidth="1.5" />
        <circle cx="620" cy="300" r="26" fill={CLAY} />
      </g>

      {/* Level meter */}
      {bars.map((h, i) => (
        <rect
          key={i}
          x={startX + i * (barWidth + gap)}
          y={baseline - h}
          width={barWidth}
          height={h}
          fill={h > 240 ? CLAY : OXBLOOD}
        />
      ))}
      <rect x={startX} y={baseline + 16} width={608} height="1" fill={BONE} opacity="0.35" />
    </svg>
  );
}

const PLATES: Record<Project["art"], (props: PlateProps) => React.JSX.Element> = {
  angeltarot: AngelTarotPlate,
  awktane: AwktanePlate,
  sonofsam: SonOfSamPlate,
};

type ProjectArtProps = {
  readonly art: Project["art"];
  readonly className?: string;
};

export function ProjectArt({ art, className = "" }: ProjectArtProps) {
  const Plate = PLATES[art];
  return <Plate className={`h-full w-full object-cover ${className}`.trim()} />;
}
