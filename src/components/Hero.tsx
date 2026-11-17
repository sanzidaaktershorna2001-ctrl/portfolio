import { ArrowRight, GraduationCap } from "lucide-react";
import { site, links } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import ResumeButton from "./ResumeButton";
import HeroVisual from "./HeroVisual";
import HeroSpotlight from "./HeroSpotlight";
import Accent from "./Accent";

const iconLink =
  "grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-navy-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-ivory";

export default function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  const [first, ...rest] = site.name.split(" ");
  const last = rest.pop();
  const middle = rest.join(" ");

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-28 lg:pt-28 lg:pb-24">
      <HeroSpotlight />

      <div className="container-page">
        {/* meta row */}
        <div className="animate-fade-up label flex items-center justify-between border-b border-white/[0.07] pb-4">
          <span className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 bg-accent" aria-hidden />
            Portfolio
          </span>
          <span className="hidden sm:inline">Full-stack · AI integration</span>
        </div>

        {/* name */}
        <h1 className="mt-8 font-display font-semibold leading-[0.86] tracking-[-0.045em] text-ivory sm:mt-10">
          <span className="animate-fade-up block text-[clamp(3.6rem,11vw,7.75rem)] [animation-delay:60ms]">
            <span className="block sm:inline">{first}</span> <span className="block sm:inline">{middle}</span>
          </span>
          <span className="animate-fade-up mt-1 flex flex-wrap items-end gap-x-8 gap-y-3 [animation-delay:140ms]">
            <span className="bg-gradient-to-r from-accent-soft via-accent to-cyan bg-clip-text pr-[0.12em] font-serif text-[clamp(4.2rem,12.5vw,8.9rem)] font-normal italic leading-[0.95] tracking-[-0.01em] text-transparent">
              {last}
            </span>
            <span className="mb-[0.9em] hidden font-mono text-sm font-normal leading-relaxed tracking-normal text-navy-300 lg:block">
              <span className="text-accent">/</span> {site.role}
              <br />
              <span className="text-accent">/</span> {site.headline}
            </span>
          </span>
        </h1>

        {/* intro + spec sheet */}
        <div className="mt-10 grid gap-12 border-t border-white/[0.07] pt-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="animate-fade-up max-w-2xl font-display text-2xl font-normal leading-[1.25] tracking-[-0.02em] text-balance text-ivory [animation-delay:220ms] sm:text-[2rem]">
              <Accent text={site.statement} />
            </p>
            <p className="animate-fade-up mt-5 max-w-xl text-pretty leading-relaxed text-navy-200 [animation-delay:280ms] sm:text-lg">
              {site.tagline}
            </p>
            <p className="animate-fade-up mt-5 inline-flex items-center gap-2 font-mono text-xs text-navy-300 [animation-delay:320ms]">
              <GraduationCap className="h-4 w-4 text-accent" aria-hidden />
              {site.education}
            </p>

            <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:380ms]">
              <a href="#projects" className="btn btn-primary group">
                View my work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </a>
              <ResumeButton available={resumeAvailable} variant="ghost" />
              <div className="flex items-center gap-2 sm:ml-1">
                <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={iconLink}>
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={iconLink}>
                  <LinkedInIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:420ms] lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
