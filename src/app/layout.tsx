import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/data/portfolio";
import "./globals.css";

// Type system: Space Grotesk (display) · Instrument Serif italic (editorial accents)
// · DM Sans (body) · JetBrains Mono (technical labels)
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display-face", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body-face", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-face", weight: ["400", "500"], display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif-face",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Cleans the address bar: drops utm_* and common ad click IDs, keeps every other
 * query parameter and the #hash, and preserves history state. No reload.
 */
const stripTrackingParams = `(function () {
  try {
    var url = new URL(window.location.href);
    var params = url.searchParams;
    var tracking = /^(utm_[a-z0-9_]+|gclid|gbraid|wbraid|fbclid|msclkid|mc_cid|mc_eid)$/i;
    var remove = [];
    params.forEach(function (_, key) { if (tracking.test(key)) remove.push(key); });
    if (!remove.length) return;
    remove.forEach(function (key) { params.delete(key); });
    var query = params.toString();
    window.history.replaceState(window.history.state, "", url.pathname + (query ? "?" + query : "") + url.hash);
  } catch (e) {}
})();`;

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", title, description: site.description, url: site.url, siteName: site.name },
  twitter: { card: "summary", title, description: site.description },
};

export const viewport: Viewport = { themeColor: "#070a1c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal animations only when JS runs; without JS all content stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* Removes tracking parameters (utm_*, gclid, fbclid…) from the address bar before the page renders. */}
        <script dangerouslySetInnerHTML={{ __html: stripTrackingParams }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-navy-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
