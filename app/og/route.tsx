import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lazing turns intention into living systems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #fbfcff 0%, #f7f7ff 46%, #fff4ea 100%)",
          color: "#0d0d14",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 32,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#747784",
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 28,
              background: "linear-gradient(135deg,#687CFF,#A259FF 38%,#FF66C7 68%,#FF9A3C)",
            }}
          />
          Lazing
        </div>
        <div style={{ fontSize: 84, lineHeight: 0.95, marginTop: 42, maxWidth: 860 }}>
          The system adapts to you.
        </div>
        <div style={{ fontSize: 34, color: "#555866", marginTop: 34, maxWidth: 900 }}>
          Local-first AI command center for scoped, living systems.
        </div>
      </div>
    ),
    size,
  );
}
