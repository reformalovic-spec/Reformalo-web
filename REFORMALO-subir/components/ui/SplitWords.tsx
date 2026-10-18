import type { ElementType } from "react";

type SplitWordsProps = {
  /** Texto del titular. Las palabras entre *asteriscos* se resaltan. */
  text: string;
  as?: ElementType;
  className?: string;
  /** Retraso inicial en ms. */
  delay?: number;
  /** Subrayado dibujado a mano bajo la palabra resaltada. */
  scribble?: boolean;
};

/**
 * Entrada por palabras hecha solo con CSS: el titular se ve en cuanto carga
 * el CSS, sin esperar a la hidratación (clave para el LCP).
 */
export function SplitWords({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  scribble = false,
}: SplitWordsProps) {
  const tokens = text.split(" ");
  return (
    <Tag className={className}>
      {tokens.map((token, i) => {
        const match = token.match(/^\*(.+)\*(.*)$/);
        const word = match ? match[1] : token;
        const tail = match ? match[2] : "";
        const accent = Boolean(match);
        return (
          <span key={`${token}-${i}`}>
            <span className="relative inline-block">
              <span className="inline-block overflow-hidden pb-[0.12em] align-bottom -mb-[0.12em]">
                <span
                  className={`word-in ${accent ? "text-brand" : ""}`}
                  style={
                    {
                      "--i": i,
                      "--base": `${delay}ms`,
                    } as React.CSSProperties
                  }
                >
                  {word}
                  {tail}
                </span>
              </span>
              {accent && scribble && (
                <svg
                  aria-hidden
                  viewBox="0 0 200 14"
                  preserveAspectRatio="none"
                  className="scribble pointer-events-none absolute -bottom-[0.1em] left-0 h-[0.28em] w-full"
                >
                  <path
                    d="M3 9 C 40 2, 85 13, 125 6 S 185 4, 197 8"
                    pathLength="1"
                    fill="none"
                    stroke="#5170FF"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
            {i < tokens.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
