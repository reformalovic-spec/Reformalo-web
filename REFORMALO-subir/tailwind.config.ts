import type { Config } from "tailwindcss";

// Paleta extraída de la web en producción (reformalo.netlify.app).
// Los derivados salen siempre de la misma familia de azul.
const config: Config = {
  // Los estados :hover solo se aplican en dispositivos con ratón (no al tocar).
  future: { hoverOnlyWhenSupported: true },
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5170FF",
          dark: "#3A52CC",
          light: "#7A91FF",
          soft: "#C3CDFB",
          softer: "#DCE3FF",
          mist: "#EEF1FF",
        },
        ink: {
          DEFAULT: "#101426",
          muted: "#5A6072",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-strong": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,20,38,.04), 0 8px 24px -8px rgba(58,82,204,.18)",
        lift: "0 2px 4px rgba(16,20,38,.05), 0 24px 48px -16px rgba(58,82,204,.35)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        float: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
        blink: {
          "0%,80%,100%": { opacity: ".25" },
          "40%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
