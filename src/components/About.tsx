import { about, sections } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Editorial layout: oversized headline, lead paragraph, hairline fact list. */
export default function About() {
  const [lead, ...rest] = about.paragraphs;
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index={1} {...sections.about} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal as="p" className="text-pretty text-xl leading-relaxed text-ivory sm:text-[1.4rem] sm:leading-[1.6]">
              {lead}
            </Reveal>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-200 sm:text-[1.05rem]">
              {rest.map((p, i) => (
                <Reveal as="p" key={i} delay={(i + 1) * 80} className="text-pretty">
                  {p}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal as="dl" delay={120} className="self-start border-t border-white/[0.08] lg:col-span-4 lg:col-start-9">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="group flex items-baseline justify-between gap-6 border-b border-white/[0.08] py-4 transition-colors duration-200"
              >
                <dt className="label shrink-0 transition-colors duration-200 group-hover:text-accent">{h.label}</dt>
                <dd className="text-right font-display text-[15px] font-medium tracking-tight text-ivory">{h.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
