import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  id?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  id,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <p
            className={
              dark
                ? "eyebrow !border-white/15 !bg-white/10 !text-brand-soft"
                : "eyebrow"
            }
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <Tag
          id={id}
          className={`h-display mt-5 text-4xl sm:text-5xl lg:text-[3.5rem] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-lg leading-relaxed sm:text-xl ${
              dark ? "text-brand-soft" : "text-ink-muted"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
