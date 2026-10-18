// El logo original vive en el repo como texto base64 (assets/logo.png.b64)
// porque se sube con una herramienta que solo admite texto. Antes de cada
// build se reconstruye el PNG byte a byte y se comprueba su huella.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";

const EXPECTED =
  "a2966da97257ddca76b1dedf8c63dfd4ba496c9071dc713bcf8d6236451769eb";

const b64 = readFileSync("assets/logo.png.b64", "utf8").replace(/\s+/g, "");
const png = Buffer.from(b64, "base64");
const hash = createHash("sha256").update(png).digest("hex");

if (hash !== EXPECTED) {
  console.error(`logo.png corrupto: sha256 ${hash} (esperado ${EXPECTED})`);
  process.exit(1);
}

// El mismo logo sirve como imagen de la web y como favicon.
for (const out of ["public/logo.png", "app/icon.png"]) {
  writeFileSync(out, png);
}
console.log("logo.png reconstruido y verificado");
