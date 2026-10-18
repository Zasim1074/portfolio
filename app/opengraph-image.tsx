import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jaseem Quraishi | Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "#0f172a", color: "white", fontFamily: "sans-serif" }}>
      <div style={{ fontSize: 64, fontWeight: 700 }}>Jaseem Quraishi</div>
      <div style={{ marginTop: 24, fontSize: 38, color: "#7dd3fc" }}>Full Stack Developer</div>
    </div>, size,
  );
}
