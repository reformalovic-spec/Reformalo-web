/** Transición suave entre páginas (solo CSS, para no retrasar el primer pintado). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
