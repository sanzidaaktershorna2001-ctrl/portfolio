import { ArrowUp } from "lucide-react";
import { site, links } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center sm:text-left">
          <span className="font-serif text-xl italic text-ivory">{site.name}</span>
          <span className="mt-1 block font-mono text-[11px] text-navy-300">
            © {new Date().getFullYear()} · {site.role}
          </span>
        </p>
        <div className="flex items-center gap-4 text-navy-300">
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-ivory">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ivory">
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="#home"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 font-mono text-[11px] transition-colors hover:border-accent/50 hover:text-ivory"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}
