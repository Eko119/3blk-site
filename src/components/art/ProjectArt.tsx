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
 * Awktane Studios — a cutting-table layout. Pattern pieces on a
 * marking grid, joined by a run of basting stitch: one-of-one
 * garments, drawn the way they are actually made.
 */
function AwktanePlate({ className }: PlateProps) {
  /** Dashed seam runs — x1,y1,x2,y2 */
  const seams: ReadonlyArray<readonly [number, number, number, number]> = [
    [150, 250, 150, 560],
    [330, 250, 330, 560],
    [150, 250, 330, 250],
    [470, 300, 470, 620],
    [650, 300, 650, 620],
    [470, 300, 650, 300],
    [180, 700, 620, 700],
    [180, 700, 180, 880],
    [620, 700, 620, 880],
  ];

  return (
    <svg viewBox="0 0 800 1000" className={className} aria-hidden="true" focusable="false">
      <rect width="800" height="1000" fill={INK} />

      {/* Marking grid */}
      <g stroke={OXBLOOD} strokeWidth="0.5" opacity="0.4">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={`v${i}`} x1={100 + i * 86} y1="90" x2={100 + i * 86} y2="910" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={`h${i}`} x1="100" y1={90 + i * 102} x2="702" y2={90 + i * 102} />
        ))}
      </g>

      {/* Pattern pieces */}
      <path d="M150 250 L330 250 L330 470 L240 560 L150 470 Z" fill={OXBLOOD} />
      <path d="M470 300 L650 300 L650 540 L560 620 L470 540 Z" fill="none" stroke={CLAY} strokeWidth="1.5" />
      <path d="M180 700 L620 700 L620 820 L400 880 L180 820 Z" fill={WINE} stroke={CLAY} strokeWidth="1" />

      {/* Basting stitch along the seams */}
      <g stroke={CLAY} strokeWidth="1.5" strokeDasharray="9 11" strokeLinecap="round" opacity="0.95">
        {seams.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}-${x2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>

      {/* Notches */}
      <g fill={BONE} opacity="0.8">
        <rect x="238" y="246" width="4" height="14" />
        <rect x="558" y="296" width="4" height="14" />
        <rect x="398" y="696" width="4" height="14" />
      </g>
    </svg>
  );
}

/**
 * DJ Turnt — a room lit from a single point. Beams open across the
 * floor over a run of level bars: a promoter's work is a crowd and
 * the light hitting it.
 */
function DjTurntPlate({ className }: PlateProps) {
  const beams = [-58, -36, -15, 6, 27, 48];
  const bars = [64, 128, 92, 176, 240, 148, 208, 116, 268, 152, 96, 200];

  return (
    <svg viewBox="0 0 800 1000" className={className} aria-hidden="true" focusable="false">
      <rect width="800" height="1000" fill={INK} />

      {/* Beams from the rig */}
      <g opacity="0.55">
        {beams.map((deg) => (
          <polygon
            key={deg}
            points="0,-16 620,-150 620,150 0,16"
            fill={deg % 2 === 0 ? OXBLOOD : WINE}
            transform={`translate(400 170) rotate(${deg + 90})`}
          />
        ))}
      </g>

      {/* The source */}
      <circle cx="400" cy="170" r="46" fill={CLAY} />
      <circle cx="400" cy="170" r="76" fill="none" stroke={CLAY} strokeWidth="1" opacity="0.7" />

      {/* Floor line and crowd level */}
      <rect x="96" y="792" width="608" height="1" fill={BONE} opacity="0.4" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={96 + i * 52}
          y={792 - h}
          width={34}
          height={h}
          fill={h > 200 ? CLAY : OXBLOOD}
        />
      ))}

      {/* Marquee band. Bulbs span 130→670 so the run stays inside
          the band rather than spilling onto the floor past 704. */}
      <rect x="96" y="856" width="608" height="52" fill={OXBLOOD} />
      <g fill={BONE} opacity="0.9">
        {Array.from({ length: 11 }, (_, i) => (
          <circle key={i} cx={130 + i * 54} cy="882" r="5" />
        ))}
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
  djturnt: DjTurntPlate,
};

type ProjectArtProps = {
  readonly art: Project["art"];
  readonly className?: string;
};

export function ProjectArt({ art, className = "" }: ProjectArtProps) {
  const Plate = PLATES[art];
  return <Plate className={`h-full w-full object-cover ${className}`.trim()} />;
}
