import { FileText } from "lucide-react";
import { sections } from "@/data/portfolio";
import Reveal from "./Reveal";
import ResumeButton from "./ResumeButton";
import Accent from "./Accent";

export default function Resume({ resumeAvailable }: { resumeAvailable: boolean }) {
  const copy = sections.resume;
  return (
    <section id="resume" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-[linear-gradient(120deg,rgb(139_92_246/0.14),rgb(12_17_41/0.9)_45%,rgb(124_199_212/0.06))] p-8 sm:p-12 lg:p-14">
            <div className="grid-bg absolute inset-0 opacity-50 [mask-image:linear-gradient(to_left,black,transparent_70%)]" aria-hidden />
            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="label mb-5 flex items-center gap-2">
                  <span className="text-accent">06</span>
                  <span aria-hidden>/</span>
                  {copy.eyebrow}
                </p>
                <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-balance text-ivory sm:text-6xl">
                  <Accent text={copy.title} />
                </h2>
                <p className="mt-5 max-w-lg text-pretty text-lg text-navy-200">
                  {resumeAvailable ? copy.description : copy.unavailable}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
                <ResumeButton available={resumeAvailable} />
                <ResumeButton available={resumeAvailable} variant="ghost" mode="view" label="View PDF" />
                <p className="mt-1 inline-flex items-center gap-2 font-mono text-[11px] text-navy-300 lg:justify-center">
                  <FileText className="h-3.5 w-3.5" aria-hidden /> PDF · 1 page
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
