"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background: a faint engineering grid that brightens softly under the pointer.
 * Static (centered) on touch devices and when reduced motion is preferred.
 */
export default function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
        el.style.setProperty("--spot", "1");
      });
    };
    const onLeave = () => el.style.setProperty("--spot", "0");
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 [--mx:70%] [--my:30%] [--spot:0]"
    >
      {/* base grid, fading out toward the bottom */}
      <div className="grid-bg absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]" />
      {/* brighter grid revealed around the pointer */}
      <div
        className="absolute inset-0 transition-opacity duration-500 [background-image:linear-gradient(to_right,rgb(167_139_250/0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgb(167_139_250/0.22)_1px,transparent_1px)] [background-size:64px_64px]"
        style={{
          opacity: "var(--spot)",
          maskImage: "radial-gradient(220px circle at var(--mx) var(--my), black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(220px circle at var(--mx) var(--my), black, transparent 75%)",
        }}
      />
      {/* single soft wash — not an orb */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_85%_0%,rgb(139_92_246/0.16),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
