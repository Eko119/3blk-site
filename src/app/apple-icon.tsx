import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
          <polygon points="8,8 48,8 28,48" fill="#C2FF3D" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
