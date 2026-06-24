import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen / bookmark icon for iOS and modern browsers. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
          color: "white",
          fontSize: 64,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          fontFamily: "sans-serif",
        }}
      >
        {siteConfig.shortName}
      </div>
    ),
    { ...size },
  );
}
