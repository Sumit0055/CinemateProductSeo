import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const size = {
  width: 1200,
  height: 630,
};

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
          background: "#111111",
          color: "#ffffff",
          padding: "76px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            color: "#f62a66",
            fontSize: 34,
            textTransform: "uppercase",
          }}
        >
          Photography and Video Production
        </div>
        <div style={{ fontSize: 92, lineHeight: 1.05, marginTop: 28 }}>
          {siteConfig.siteName}
        </div>
        <div
          style={{
            fontSize: 34,
            lineHeight: 1.35,
            marginTop: 34,
            maxWidth: 870,
            color: "#d8d8d8",
          }}
        >
          Wedding films, fashion shoots, commercial visuals, and event coverage
          across Delhi NCR and India.
        </div>
      </div>
    ),
    size
  );
}
