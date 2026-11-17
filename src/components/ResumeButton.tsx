import { Download, Eye } from "lucide-react";
import { resume } from "@/data/portfolio";

type Props = {
  available: boolean;
  variant?: "primary" | "ghost";
  mode?: "download" | "view";
  label?: string;
  className?: string;
};

/**
 * Resume link. When /public/resume.pdf is missing at build time it renders a
 * disabled-looking button instead of a link that would 404.
 */
export default function ResumeButton({
  available,
  variant = "primary",
  mode = "download",
  label = mode === "download" ? "Download Resume" : "View",
  className = "",
}: Props) {
  const Icon = mode === "download" ? Download : Eye;
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} group ${className}`;
  const icon = (
    <Icon
      className={`h-4 w-4 transition-transform duration-300 ${mode === "download" ? "group-hover:translate-y-0.5" : ""}`}
      aria-hidden
    />
  );

  if (!available) {
    return (
      <span className={`${cls} pointer-events-none opacity-50`} aria-disabled="true" title="Resume coming soon">
        {icon}
        {label}
      </span>
    );
  }

  return mode === "download" ? (
    <a href={resume.file} download={resume.downloadName} className={cls}>
      {icon}
      {label}
    </a>
  ) : (
    <a href={resume.file} target="_blank" rel="noopener noreferrer" className={cls}>
      {icon}
      {label}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
