"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/portfolio";
import ResumeButton from "./ResumeButton";

export default function Navbar({ resumeAvailable }: { resumeAvailable: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/[0.06] bg-navy-950/75 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div
        ref={progressRef}
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-gradient-to-r from-accent-strong via-accent to-accent-soft"
        aria-hidden
      />
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md border border-accent/40 bg-accent/[0.08] font-serif text-lg italic leading-none text-accent-soft transition-all duration-300 group-hover:border-accent group-hover:bg-accent/15">
            {site.monogram}
          </span>
          <span className="font-display text-[15px] font-medium tracking-tight text-ivory lg:hidden xl:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative px-3 py-2 text-[13px] tracking-tight transition-colors duration-200 ${
                  active === item.id ? "text-ivory" : "text-navy-300 hover:text-ivory"
                }`}
              >
                <span
                  className={`absolute bottom-0.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ${
                    active === item.id ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  aria-hidden
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ResumeButton available={resumeAvailable} label="Resume" className="hidden !px-4 !py-2 sm:inline-flex" />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-ivory transition-colors hover:bg-white/[0.06] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        hidden={!open}
      >
        <ul className="container-page flex flex-col gap-1 pb-6 pt-2">
          {navItems.map((item, i) => (
            <li
              key={item.id}
              className={open ? "animate-fade-up" : ""}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 font-display text-lg tracking-tight transition-colors ${
                  active === item.id ? "bg-white/[0.06] text-ivory" : "text-navy-200 hover:bg-white/[0.04] hover:text-ivory"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 sm:hidden">
            <ResumeButton available={resumeAvailable} className="w-full" />
          </li>
        </ul>
      </div>
    </header>
  );
}
