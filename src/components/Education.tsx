import { education, sections } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Compact technical heading + one editorial row with a large CGPA numeral. */
export default function Education() {
  return (
    <section id="education" className="relative border-y border-white/[0.06] bg-navy-900/60 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading index={5} variant="technical" {...sections.education} />
        {education.map((e) => {
          const [score, scale] = e.gpa.replace("CGPA", "").trim().split("/").map((x) => x.trim());
          return (
            <Reveal key={e.degree} className="grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="label mb-4 text-accent">{e.graduated}</p>
                <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.03em] text-balance text-ivory sm:text-4xl">
                  {e.degree}
                </h3>
                <p className="mt-4 text-lg text-navy-200">
                  {e.school}
                  <span className="mx-2 text-navy-400" aria-hidden>·</span>
                  <span className="text-navy-300">{e.location}</span>
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <p className="font-display text-7xl font-semibold leading-none tracking-[-0.05em] text-ivory sm:text-8xl">
                  {score}
                  <span className="font-serif text-4xl font-normal italic tracking-normal text-accent-soft sm:text-5xl"> /{scale}</span>
                </p>
                <p className="label mt-3">Final CGPA</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
