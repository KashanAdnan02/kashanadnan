import { ImageResponse } from "next/og";
import { fiverrProof, site } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          color: "#14120f",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8d8780",
          }}
        >
          {site.role} — {site.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 88, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              lineHeight: 1.3,
              color: "#5f5a53",
              maxWidth: 900,
            }}
          >
            Next.js and MERN web apps with real auth, real data and real users.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 26,
            color: "#e06b2c",
          }}
        >
          <span style={{ display: "flex" }}>
            {fiverrProof.rating} rating on Fiverr
          </span>
          <span style={{ display: "flex", color: "#e2ded6" }}>|</span>
          <span style={{ display: "flex", color: "#5f5a53" }}>
            {fiverrProof.orders} orders delivered
          </span>
          <span style={{ display: "flex", color: "#e2ded6" }}>|</span>
          <span style={{ display: "flex", color: "#5f5a53" }}>
            Founder, Aaghaaz Tech
          </span>
        </div>
      </div>
    ),
    size,
  );
}
