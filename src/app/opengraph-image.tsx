import { ImageResponse } from "next/og";

export const alt = "3BLK — Live in 3 weeks. Built to convert.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "96px",
          gap: "48px",
        }}
      >
        <svg width="160" height="160" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(4,4)">
            <rect x="4" y="4" width="8" height="40" fill="#C2FF3D" />
            <rect x="19" y="4" width="10" height="40" fill="#C2FF3D" />
            <rect x="36" y="4" width="8" height="40" fill="#C2FF3D" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FFFFFF",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          <span>Live in 3 weeks.</span>
          <span>Built to convert.</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
