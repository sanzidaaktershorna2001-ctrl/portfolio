"use client";

import { useState, type FormEvent } from "react";
import { Send, Check, Copy, ArrowUpRight } from "lucide-react";
import { links, sections } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-navy-950/60 px-4 py-3 text-ivory placeholder:text-navy-400 transition-colors duration-200 focus:border-accent/60 focus:bg-navy-950 focus:outline-none";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // No backend required: composes an email in the visitor's mail client.
  // To use a form service (Formspree, Resend, etc.) instead, replace this handler.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  const socials = [
    { label: "GitHub", href: links.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
  ];

  const [user, domain] = links.email.split("@");

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading index={7} {...sections.contact} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-6">
            <p className="label mb-3">Email</p>
            <div className="flex items-start gap-3">
              <a
                href={`mailto:${links.email}`}
                className="link-underline min-w-0 font-display text-xl font-medium tracking-tight text-ivory [overflow-wrap:anywhere] hover:text-accent-soft sm:text-[1.6rem]"
              >
                {user}@<wbr />
                {domain}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 text-navy-200 transition-colors hover:border-accent/50 hover:text-ivory sm:mt-1.5"
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <ul className="mt-10 border-t border-white/[0.08]">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-white/[0.08] py-5 transition-colors hover:text-ivory"
                  >
                    <span className="flex items-center gap-3 font-display text-lg text-navy-100 transition-colors group-hover:text-ivory">
                      <Icon className="h-5 w-5 text-accent" />
                      {label}
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-navy-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="min-w-0 lg:col-span-6">
            <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8">
              <p className="label">Send a message</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm text-navy-200">Name</span>
                  <input name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm text-navy-200">Email</span>
                  <input name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@example.com" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm text-navy-200">Message</span>
                <textarea name="message" required rows={5} className={`${inputClass} resize-y`} placeholder="How can I help?" />
              </label>
              <button type="submit" className="btn btn-primary group w-full sm:w-auto">
                Send message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <p className="font-mono text-[11px] text-navy-300">Opens your email app with the message pre-filled.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
