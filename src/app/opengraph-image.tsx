import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Daniel Vilar Martínez — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#fafafa",
          color: "#18181b",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#4f46e5", display: "flex" }}>
          dvilmar
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
            display: "flex",
          }}
        >
          Daniel Vilar Martínez
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#71717a",
            marginTop: 24,
            display: "flex",
          }}
        >
          Full Stack Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
