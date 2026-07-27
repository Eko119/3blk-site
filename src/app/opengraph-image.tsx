import { ImageResponse } from "next/og";
import { PROMISE, SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${PROMISE.short}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Share card. Set in the fallback serif rather than the display
 * face — next/og rasterises at build time and loading a font here
 * would put a network fetch inside the build.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0A09",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 8, height: 52, background: "#C98D82" }} />
            <div style={{ width: 13, height: 52, background: "#C98D82" }} />
            <div style={{ width: 8, height: 52, background: "#C98D82" }} />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#A8A099",
            }}
          >
            3BLK Studios
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#F2EDE6",
            fontSize: 86,
            fontFamily: "Georgia, serif",
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
          }}
        >
          <span>We build the site first.</span>
          <span>You pay only if you love it.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #232120",
            paddingTop: 28,
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8A817A",
          }}
        >
          <span>No deposit &middot; No obligation</span>
          <span>3blk.studio</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
