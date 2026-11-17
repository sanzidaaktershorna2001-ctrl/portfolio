import type { ProjectKind } from "@/data/portfolio";

/**
 * Small line-art glyph per project category. Purposeful, not decorative:
 * the same glyph appears in the legend so categories read at a glance.
 *   fullstack → stacked layers   ai → connected nodes
 *   voice     → waveform         tool → grid of cells
 */
export default function ProjectMotif({ kind, className = "" }: { kind: ProjectKind; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.25, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      {kind === "fullstack" && (
        <g {...common}>
          <path d="M24 8 40 16 24 24 8 16Z" />
          <path d="M8 24l16 8 16-8" opacity="0.7" />
          <path d="M8 32l16 8 16-8" opacity="0.45" />
        </g>
      )}
      {kind === "ai" && (
        <g {...common}>
          <path d="M12 14 24 24 36 12M24 24 14 36M24 24 36 34" opacity="0.6" />
          <circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="14" r="2.5" />
          <circle cx="36" cy="12" r="2.5" />
          <circle cx="14" cy="36" r="2.5" />
          <circle cx="36" cy="34" r="2.5" />
        </g>
      )}
      {kind === "voice" && (
        <g {...common} strokeWidth={2}>
          {[8, 14, 20, 26, 32, 38].map((x, i) => {
            const h = [6, 14, 22, 16, 10, 4][i];
            return <path key={x} d={`M${x + 1} ${24 - h / 2}v${h}`} opacity={0.5 + h / 44} />;
          })}
        </g>
      )}
      {kind === "tool" && (
        <g {...common}>
          <rect x="9" y="9" width="12" height="12" rx="1.5" />
          <rect x="27" y="9" width="12" height="12" rx="1.5" opacity="0.6" />
          <rect x="9" y="27" width="12" height="12" rx="1.5" opacity="0.6" />
          <path d="M30 33h6M33 30v6" />
        </g>
      )}
    </svg>
  );
}
