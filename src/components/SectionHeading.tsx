import Reveal from "./Reveal";
import Accent from "./Accent";

type Props = {
  index: number;
  eyebrow: string;
  title: string;
  description?: string;
  /**
   * editorial — oversized display headline with a serif accent (story sections)
   * technical — compact mono index + mid-size title (reference sections)
   */
  variant?: "editorial" | "technical";
  className?: string;
};

export default function SectionHeading({ index, eyebrow, title, description, variant = "editorial", className = "" }: Props) {
  const num = String(index).padStart(2, "0");

  if (variant === "technical") {
    return (
      <Reveal className={`mb-10 ${className}`}>
        <p className="label mb-4 flex items-center gap-2">
          <span className="text-accent">{num}</span>
          <span aria-hidden>/</span>
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-medium tracking-tight text-ivory sm:text-4xl">
          <Accent text={title} />
        </h2>
        {description && <p className="mt-4 max-w-md text-pretty leading-relaxed text-navy-200">{description}</p>}
      </Reveal>
    );
  }

  return (
    <Reveal className={`mb-14 sm:mb-16 ${className}`}>
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-xs text-accent">{num}</span>
        <span className="h-px w-12 bg-gradient-to-r from-accent/70 to-transparent" aria-hidden />
        <span className="label">{eyebrow}</span>
      </div>
      <h2 className="max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance text-ivory sm:text-6xl lg:text-7xl">
        <Accent text={title} />
      </h2>
      {description && (
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy-200">{description}</p>
      )}
    </Reveal>
  );
}
