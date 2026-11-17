import { ArrowUpRight, Lock, User } from "lucide-react";
import { projects, projectKinds, sections, type Project, type ProjectKind } from "@/data/portfolio";
import { GitHubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import ProjectMotif from "./ProjectMotif";
import Reveal from "./Reveal";

/** Per-category accent (static class strings so Tailwind can see them). */
const kindStyle: Record<ProjectKind, { text: string; bar: string; dot: string; hoverBorder: string }> = {
  fullstack: { text: "text-accent", bar: "bg-accent", dot: "bg-accent", hoverBorder: "hover:border-accent/35" },
  ai: { text: "text-cyan", bar: "bg-cyan", dot: "bg-cyan", hoverBorder: "hover:border-cyan/35" },
  voice: { text: "text-accent-soft", bar: "bg-accent-soft", dot: "bg-accent-soft", hoverBorder: "hover:border-accent-soft/35" },
  tool: { text: "text-ivory", bar: "bg-ivory", dot: "bg-ivory", hoverBorder: "hover:border-ivory/30" },
};

/** Bento spans: featured (lg 12-col, 2 rows) and secondary (asymmetric). */
const featuredSpan = ["md:col-span-2 lg:col-span-12", "lg:col-span-6", "lg:col-span-6"];
const moreSpan = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3", "lg:col-span-7", "md:col-span-2 lg:col-span-5"];

function KindTag({ kind }: { kind: ProjectKind }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${kindStyle[kind].text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${kindStyle[kind].dot}`} aria-hidden />
      {projectKinds[kind]}
    </span>
  );
}

function CardFooter({ p }: { p: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.06] pt-4 font-mono text-[11px] text-navy-300">
      <span className="inline-flex items-center gap-1.5">
        {p.org === "Personal" ? <User className="h-3 w-3" aria-hidden /> : <Lock className="h-3 w-3" aria-hidden />}
        {p.org === "Personal" ? "Personal project" : `Proprietary · ${p.org}`}
      </span>
      {p.liveUrl && (
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1 text-ivory hover:text-accent-soft">
          Live
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      )}
      {p.codeUrl && (
        <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ivory hover:text-accent-soft">
          <GitHubIcon className="h-3.5 w-3.5" />
          Code
        </a>
      )}
    </div>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
      {tech.map((t) => (
        <li key={t} className="chip">{t}</li>
      ))}
    </ul>
  );
}

/** Accent bar that extends on hover. */
function TopBar({ kind }: { kind: ProjectKind }) {
  return (
    <span
      className={`absolute left-0 top-0 h-[2px] w-12 transition-all duration-500 ease-out group-hover:w-full ${kindStyle[kind].bar}`}
      aria-hidden
    />
  );
}

function Highlights({ p }: { p: Project }) {
  if (!p.highlights) return null;
  return (
    <ul className="space-y-2.5">
      {p.highlights.map((h) => (
        <li key={h} className="flex gap-3 text-sm leading-relaxed text-navy-100">
          <span className={`mt-[0.55em] font-mono text-[10px] leading-none ${kindStyle[p.kind].text}`} aria-hidden>→</span>
          <span className="text-pretty">{h}</span>
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ p, index, large }: { p: Project; index: number; large: boolean }) {
  const s = kindStyle[p.kind];
  const header = (
    <>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-navy-300">{String(index + 1).padStart(2, "0")}</span>
        <KindTag kind={p.kind} />
      </div>
      <h4
        className={`mt-5 pr-14 font-display font-semibold tracking-[-0.03em] text-balance text-ivory ${
          large ? "text-4xl sm:text-6xl" : "text-2xl sm:text-[1.7rem]"
        }`}
      >
        {p.title}
      </h4>
      <p className="mt-2 font-mono text-xs text-navy-300">{p.category}</p>
      <p className={`mt-5 text-pretty leading-relaxed text-navy-200 ${large ? "max-w-md text-lg" : ""}`}>{p.summary}</p>
    </>
  );

  return (
    <article className={`card group relative flex h-full flex-col overflow-hidden p-6 sm:p-8 ${s.hoverBorder}`}>
      <TopBar kind={p.kind} />
      <ProjectMotif
        kind={p.kind}
        className={`pointer-events-none absolute right-6 top-6 opacity-60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:opacity-100 ${s.text} ${
          large ? "h-14 w-14 sm:h-20 sm:w-20" : "h-11 w-11"
        }`}
      />

      {large ? (
        <div className="grid flex-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {header}
            <TechList tech={p.tech} />
          </div>
          <div className="lg:col-span-5 lg:self-end lg:border-l lg:border-white/[0.07] lg:pl-10">
            <p className="label mb-4">Key contributions</p>
            <Highlights p={p} />
          </div>
        </div>
      ) : (
        <>
          {header}
          <div className="mt-6 flex-1">
            <Highlights p={p} />
          </div>
          <TechList tech={p.tech} />
        </>
      )}

      <CardFooter p={p} />
    </article>
  );
}

function SecondaryCard({ p }: { p: Project }) {
  const s = kindStyle[p.kind];
  return (
    <article className={`card group relative flex h-full flex-col overflow-hidden p-6 ${s.hoverBorder}`}>
      <TopBar kind={p.kind} />
      <div className="flex items-start justify-between gap-4">
        <KindTag kind={p.kind} />
        <ProjectMotif
          kind={p.kind}
          className={`h-8 w-8 shrink-0 opacity-50 transition-all duration-500 group-hover:rotate-6 group-hover:opacity-100 ${s.text}`}
        />
      </div>
      <h4 className="mt-4 font-display text-xl font-medium tracking-tight text-ivory">{p.title}</h4>
      <p className="mt-1 font-mono text-[11px] text-navy-300">{p.category}</p>
      <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-navy-200">{p.summary}</p>
      <TechList tech={p.tech} />
      <CardFooter p={p} />
    </article>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="label mb-6 flex items-center gap-4">
      {children}
      <span className="h-px flex-1 bg-white/[0.08]" aria-hidden />
    </h3>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  const kindsUsed = (Object.keys(projectKinds) as ProjectKind[]).filter((k) => projects.some((p) => p.kind === k));

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index={4} {...sections.projects} className="!mb-0 lg:max-w-3xl" />
          {/* category legend */}
          <Reveal as="ul" delay={120} className="grid shrink-0 grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1" aria-label="Project categories">
            {kindsUsed.map((k) => (
              <li key={k} className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.12em] ${kindStyle[k].text}`}>
                <ProjectMotif kind={k} className="h-5 w-5" />
                {projectKinds[k]}
              </li>
            ))}
          </Reveal>
        </div>

        <GroupLabel>{sections.projects.featuredLabel}</GroupLabel>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className={`h-full ${featuredSpan[i] ?? "lg:col-span-4"}`}>
              <FeaturedCard p={p} index={i} large={i === 0} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <GroupLabel>{sections.projects.moreLabel}</GroupLabel>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {more.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80} className={`h-full ${moreSpan[i] ?? "lg:col-span-4"}`}>
                <SecondaryCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
