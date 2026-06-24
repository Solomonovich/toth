import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded social-share card shown when the site is linked on Facebook, X,
 * iMessage, etc. Generated at build time — no binary asset to maintain.
 */
export default function OpengraphImage() {
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
          background: "linear-gradient(135deg, #172554 0%, #2563eb 55%, #ca8a04 130%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 24px",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.35)",
            background: "rgba(255,255,255,0.12)",
            fontSize: 28,
            marginBottom: 40,
          }}
        >
          {siteConfig.contact.city}, {siteConfig.contact.state} · {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 28, color: "rgba(255,255,255,0.9)", maxWidth: 900 }}>
          Your community for connection &amp; growth — activities, education, and friendship for adults 50+.
        </div>
      </div>
    ),
    { ...size },
  );
}
