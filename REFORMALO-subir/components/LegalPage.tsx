type Block = [string, string];

/** Páginas legales: el texto procede de la web actual de Reformalo. */
export function LegalPage({ blocks }: { blocks: Block[] }) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];

  const flush = (key: string) => {
    if (list.length === 0) return;
    out.push(
      <ul
        key={`ul-${key}`}
        className="my-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-ink-muted marker:text-brand"
      >
        {list.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>,
    );
    list = [];
  };

  blocks.forEach(([tag, text], i) => {
    if (tag === "li") {
      list.push(text);
      return;
    }
    flush(String(i));
    if (tag === "h1") {
      out.push(
        <h1 key={i} className="h-display text-4xl sm:text-5xl">
          {text}
        </h1>,
      );
    } else if (tag === "h2") {
      out.push(
        <h2
          key={i}
          className="mt-10 font-display text-2xl font-bold tracking-tight"
        >
          {text}
        </h2>,
      );
    } else if (tag === "h3") {
      out.push(
        <h3 key={i} className="mt-6 font-display text-xl font-bold">
          {text}
        </h3>,
      );
    } else {
      out.push(
        <p key={i} className="mt-4 text-lg leading-relaxed text-ink-muted">
          {text}
        </p>,
      );
    }
  });
  flush("end");

  return (
    <article className="container-x max-w-3xl break-words pb-24 pt-32 sm:pt-40">
      {out}
    </article>
  );
}
