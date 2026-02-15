import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Trend Wood | Mobilier din Lemn Masiv";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2D4739",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#FDFBF7",
              letterSpacing: "-0.02em",
            }}
          >
            TREND WOOD
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#FDFBF7",
              opacity: 0.8,
              letterSpacing: "0.1em",
            }}
          >
            MOBILIER DIN LEMN MASIV
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
