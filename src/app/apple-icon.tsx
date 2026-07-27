import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** The triple-bar mark on Ink, drawn at icon proportions. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0A09",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 13,
        }}
      >
        <div style={{ width: 15, height: 104, background: "#C98D82" }} />
        <div style={{ width: 25, height: 104, background: "#C98D82" }} />
        <div style={{ width: 15, height: 104, background: "#C98D82" }} />
      </div>
    ),
    { ...size },
  );
}
