import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Reformalo: agencia de soluciones digitales a tu medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #EEF1FF 0%, #FFFFFF 58%, #DCE3FF 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              color: "#3A52CC",
            }}
          >
            Reformalo
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 24,
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.03,
              letterSpacing: -3,
              color: "#101426",
            }}
          >
            <span>Soluciones digitales a tu&nbsp;</span>
            <span style={{ color: "#5170FF" }}>medida.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 30,
              color: "#5A6072",
            }}
          >
            Agencia de soluciones digitales · Osona y Catalunya
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={380} height={380} alt="" />
      </div>
    ),
    { ...size },
  );
}
