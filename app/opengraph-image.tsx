import { ImageResponse } from "next/og";

// Boarding-pass share card. Latin-only on purpose: Satori has no CJK font here,
// so Chinese would render as tofu — the English line carries the brand instead.
export const alt = "Dignity · Anderson Chen — Real estate can be fun. Now recruiting.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F3ECDD",
          padding: 52,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
            border: "3px solid #16263B",
            borderRadius: 28,
            background: "#FBF7EC",
            padding: "46px 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              letterSpacing: 6,
              fontWeight: 700,
            }}
          >
            <div style={{ display: "flex", color: "#D8401D" }}>BOARDING PASS · DG 2026</div>
            <div style={{ display: "flex", color: "#6b6151" }}>BUKIT JALIL · KL</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 88, fontWeight: 800, color: "#1C1813", lineHeight: 1 }}>
              Real estate
            </div>
            <div style={{ display: "flex", fontSize: 88, fontWeight: 800, color: "#D8401D", lineHeight: 1.15 }}>
              can be fun.
            </div>
            <div style={{ display: "flex", marginTop: 22, fontSize: 30, color: "#6b6151" }}>
              Join Anderson Chen&apos;s team · Dignity Group Realty
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#D8401D",
                color: "#F3ECDD",
                fontSize: 25,
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: 12,
                letterSpacing: 2,
              }}
            >
              NOW RECRUITING — 5 SEATS LEFT
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 116,
                height: 116,
                borderRadius: 60,
                border: "4px solid #D8401D",
                color: "#D8401D",
                fontSize: 21,
                fontWeight: 800,
                transform: "rotate(-10deg)",
              }}
            >
              APPROVED
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
