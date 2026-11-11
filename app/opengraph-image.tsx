import { ImageResponse } from "next/og";

export const alt =
  "Jaseem Quraishi, Full Stack Software Engineer specializing in React, Next.js, TypeScript, and Python";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "72px",
        color: "#e2e8f0",
        background:
          "radial-gradient(ellipse at 82% 8%, rgba(37, 99, 235, .32), transparent 42%), linear-gradient(135deg, #0b1120 0%, #111827 100%)",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "24px",
          border: "1px solid rgba(148, 163, 184, .18)",
          borderRadius: "28px",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            color: "#67e8f9",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Jaseem Quraishi
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            maxWidth: 1000,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
          }}
        >
          Full Stack Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            color: "#94a3b8",
            fontSize: 28,
          }}
        >
          React · Next.js · TypeScript · Python · FastAPI
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 50,
            color: "#67e8f9",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          PRODUCTION WEB APPS · REST APIs · PRODUCT ENGINEERING
        </div>
      </div>
    </div>,
    size,
  );
}
