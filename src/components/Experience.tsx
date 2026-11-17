import { MapPin } from "lucide-react";
import { experience, sections } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

/** Split layout: sticky company/role column + project groups. No cards — hairline rows. */
export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index={3} {...sections.experience} />

        <ol>
          {experience.map((job, i) => (
            <li key={job.company} className="grid gap-8 border-t border-white/[0.08] py-10 lg:grid-cols-12 lg:gap-10 lg:py-14">
              {/* left: company + career progression */}
              <Reveal className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <h3 className={`font-display font-semibold tracking-[-0.03em] text-ivory ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
                    {job.company}
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-navy-300">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {job.location}
                  </p>

                  <ol className="relative mt-7 space-y-5 border-l border-white/10 pl-5" aria-label="Roles">
                    {job.roles.map((role, r) => (
                      <li key={role.title} className="relative">
                        <span
                          className={`absolute -left-[25px] top-1.5 h-2 w-2 rounded-full ring-4 ring-navy-950 ${
                            r === 0 ? "bg-accent" : "bg-navy-400"
                          }`}
                          aria-hidden
                        />
                        <p className={`font-medium ${r === 0 ? "text-accent-soft" : "text-navy-100"}`}>{role.title}</p>
                        <p className="mt-0.5 font-mono text-xs text-navy-300">{role.period}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              {/* right: project groups */}
              <div className="space-y-10 lg:col-span-8">
                {job.groups.map((g, gi) => (
                  <Reveal key={g.title ?? gi} delay={gi * 80}>
                    {g.title && (
                      <div className="mb-4 flex items-baseline gap-3">
                        <span className="font-mono text-xs text-accent">{String.fromCharCode(65 + gi)}</span>
                        <h4 className="font-display text-xl font-medium tracking-tight text-ivory sm:text-2xl">{g.title}</h4>
                      </div>
                    )}
                    <ul className={`space-y-3 ${g.title ? "sm:pl-6" : ""}`}>
                      {g.points.map((pt) => (
                        <li key={pt} className="flex gap-4 leading-relaxed text-navy-200">
                          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent/70" aria-hidden />
                          <span className="text-pretty">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}

                {job.tech && (
                  <Reveal>
                    <p className="label mb-3">Technologies</p>
                    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                      {job.tech.map((t) => (
                        <li key={t} className="chip">{t}</li>
                      ))}
                    </ul>
                  </Reveal>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
