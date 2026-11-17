import { heroSpec } from "@/data/portfolio";

const BARS = Array.from({ length: 14 }, (_, i) => ({
  h: Math.round((0.35 + 0.65 * Math.abs(Math.sin(i * 0.9))) * 100),
  delay: i * 70,
}));

/** "Spec sheet" panel: a datasheet-style summary. Content comes from heroSpec in portfolio.ts. */
export default function HeroVisual() {
  return (
    <figure className="relative overflow-hidden rounded-xl border border-white/[0.09] bg-navy-900/80">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
        <span className="font-mono text-[11px] text-navy-300">
          <span className="text-accent">~/</span>
          {heroSpec.label}
        </span>
        <span className="flex h-4 items-center gap-[2px]" aria-hidden>
          {BARS.map((b, i) => (
            <span
              key={i}
              className="w-[2px] rounded-full bg-cyan/80 animate-wave"
              style={{ height: `${b.h}%`, animationDelay: `${b.delay}ms` }}
            />
          ))}
        </span>
      </div>
      <dl>
        {heroSpec.rows.map((row, i) => (
          <div
            key={row.key}
            className={`group grid grid-cols-[6.5rem_1fr] gap-3 px-5 py-3.5 transition-colors duration-200 hover:bg-white/[0.025] ${
              i > 0 ? "border-t border-white/[0.06]" : ""
            }`}
          >
            <dt className="label !text-[10px] pt-0.5 transition-colors duration-200 group-hover:text-accent">{row.key}</dt>
            <dd className="text-sm leading-relaxed text-ivory/90">{row.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
