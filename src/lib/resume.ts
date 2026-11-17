import "server-only";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { resume } from "@/data/portfolio";

/** True when the resume PDF exists in /public. Evaluated at build time (the page is static). */
export function isResumeAvailable(): boolean {
  return existsSync(join(process.cwd(), "public", resume.publicFile));
}
