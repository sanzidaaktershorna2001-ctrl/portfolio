import { skillGroups, sections } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Technical layout on a contrasting band: sticky heading + spec-table rows. */
export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-white/[0.06] bg-navy-900/60 py-24 sm:py-28">
      <div className="container-page grid gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index={2} variant="technical" {...sections.skills} />
          </div>
        </div>

        <div className="lg:col-span-8">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 70}
              className="group grid gap-4 border-t border-white/[0.08] py-7 last:border-b sm:grid-cols-[13rem_1fr] sm:gap-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-lg font-medium tracking-tight text-ivory">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-2 gap-y-2.5">
                {group.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-white/[0.08] px-2.5 py-1 font-mono text-[13px] text-navy-100 transition-colors duration-200 hover:border-accent/50 hover:text-ivory"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
