type ThreeBlkLogoProps =
  | { variant: "primary"; className?: string; title?: string }
  | { variant: "reversed"; className?: string; title?: string }
  | { variant: "stacked"; className?: string; title?: string }
  | { variant: "mark"; className?: string; title?: string }
  | { variant: "mark-filled"; className?: string; title?: string }
  | { variant: "wordmark"; className?: string; title?: string }
  | { variant: "single-color"; className?: string; title?: string; color?: string };

const FONT_STACK = "var(--font-geist-sans), 'Geist Sans', system-ui, sans-serif";

export function ThreeBlkLogo(props: ThreeBlkLogoProps) {
  const label = props.title ?? "3BLK";

  switch (props.variant) {
    case "primary":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 56"
          width="160"
          height="56"
          role="img"
          aria-label={label}
          className={props.className}
        >
          <title>{label}</title>
          <g transform="translate(4,4)">
            <line x1="8" y1="4" x2="8" y2="44" stroke="#C2FF3D" strokeWidth="4" strokeLinecap="square" />
            <line x1="24" y1="4" x2="24" y2="44" stroke="#C2FF3D" strokeWidth="5" strokeLinecap="square" />
            <line x1="40" y1="4" x2="40" y2="44" stroke="#C2FF3D" strokeWidth="4" strokeLinecap="square" />
          </g>
          <text x="67" y="40" fontFamily={FONT_STACK} fontWeight="700" fontSize="28" fill="#FFFFFF" letterSpacing="-1.12">
            3BLK
          </text>
        </svg>
      );

    case "reversed":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 56"
          width="160"
          height="56"
          role="img"
          aria-label={label}
          className={props.className}
        >
          <title>{label}</title>
          <g transform="translate(4,4)">
            <line x1="8" y1="4" x2="8" y2="44" stroke="#111111" strokeWidth="4" strokeLinecap="square" />
            <line x1="24" y1="4" x2="24" y2="44" stroke="#111111" strokeWidth="5" strokeLinecap="square" />
            <line x1="40" y1="4" x2="40" y2="44" stroke="#111111" strokeWidth="4" strokeLinecap="square" />
          </g>
          <text x="67" y="40" fontFamily={FONT_STACK} fontWeight="700" fontSize="28" fill="#111111" letterSpacing="-1.12">
            3BLK
          </text>
        </svg>
      );

    case "stacked":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 88"
          width="120"
          height="88"
          role="img"
          aria-label={label}
          className={props.className}
        >
          <title>{label}</title>
          <g transform="translate(36,4)">
            <line x1="8" y1="4" x2="8" y2="44" stroke="#C2FF3D" strokeWidth="4" strokeLinecap="square" />
            <line x1="24" y1="4" x2="24" y2="44" stroke="#C2FF3D" strokeWidth="5" strokeLinecap="square" />
            <line x1="40" y1="4" x2="40" y2="44" stroke="#C2FF3D" strokeWidth="4" strokeLinecap="square" />
          </g>
          <text
            x="60"
            y="82"
            textAnchor="middle"
            fontFamily={FONT_STACK}
            fontWeight="700"
            fontSize="22"
            fill="#FFFFFF"
            letterSpacing="-0.88"
          >
            3BLK
          </text>
        </svg>
      );

    case "mark":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 56"
          width="56"
          height="56"
          role="img"
          aria-label={props.title ?? "3BLK mark"}
          className={props.className}
        >
          <title>{props.title ?? "3BLK mark"}</title>
          <g transform="translate(4,4)">
            <line x1="8" y1="4" x2="8" y2="44" stroke="#C2FF3D" strokeWidth="4" strokeLinecap="square" />
            <line x1="24" y1="4" x2="24" y2="44" stroke="#C2FF3D" strokeWidth="5" strokeLinecap="square" />
            <line x1="40" y1="4" x2="40" y2="44" stroke="#C2FF3D" strokeWidth="4" strokeLinecap="square" />
          </g>
        </svg>
      );

    case "mark-filled":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 56"
          width="56"
          height="56"
          role="img"
          aria-label={props.title ?? "3BLK mark"}
          className={props.className}
        >
          <title>{props.title ?? "3BLK mark"}</title>
          <g transform="translate(4,4)">
            <rect x="4" y="4" width="8" height="40" fill="#C2FF3D" />
            <rect x="19" y="4" width="10" height="40" fill="#C2FF3D" />
            <rect x="36" y="4" width="8" height="40" fill="#C2FF3D" />
          </g>
        </svg>
      );

    case "wordmark":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 40"
          width="120"
          height="40"
          role="img"
          aria-label={label}
          className={props.className}
        >
          <title>{label}</title>
          <text x="0" y="30" fontFamily={FONT_STACK} fontWeight="700" fontSize="28" fill="#FFFFFF" letterSpacing="-1.12">
            3BLK
          </text>
        </svg>
      );

    case "single-color": {
      const fill = props.color ?? "#FFFFFF";
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 56"
          width="160"
          height="56"
          role="img"
          aria-label={label}
          className={props.className}
        >
          <title>{label}</title>
          <g transform="translate(4,4)">
            <line x1="8" y1="4" x2="8" y2="44" stroke={fill} strokeWidth="4" strokeLinecap="square" />
            <line x1="24" y1="4" x2="24" y2="44" stroke={fill} strokeWidth="5" strokeLinecap="square" />
            <line x1="40" y1="4" x2="40" y2="44" stroke={fill} strokeWidth="4" strokeLinecap="square" />
          </g>
          <text x="67" y="40" fontFamily={FONT_STACK} fontWeight="700" fontSize="28" fill={fill} letterSpacing="-1.12">
            3BLK
          </text>
        </svg>
      );
    }
  }
}
