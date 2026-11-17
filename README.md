# Sanjida Akter Shorna — Portfolio

A responsive personal portfolio built with **Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4**.

Sections: Home · About Me · Technical Skills · Professional Experience · Featured Projects · Resume · Contact

---

## 1. Quick start

Requires **Node.js 18.18+** (Node 20 or 22 recommended).

```bash
cd portfolio
npm install
npm run dev          # http://localhost:3000
```

| Script              | What it does                         |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Dev server with hot reload           |
| `npm run build`     | Production build                     |
| `npm start`         | Serve the production build           |
| `npm run lint`      | ESLint                               |
| `npm run typecheck` | TypeScript check                     |

---

## 2. Content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** It mirrors the
finalized résumé (Version A), so when one changes, update the other.

- **Resume:** `public/resume.pdf`. To update it, replace that file and redeploy. The buttons enable
  automatically when the file exists at build time; without it they show as disabled ("available on request").
- **Site URL:** detected automatically on Vercel. For a custom domain, set `NEXT_PUBLIC_SITE_URL`
  (for example `https://yourdomain.com`) in Vercel → Project → Settings → Environment Variables.
- **Confidentiality:** Technuf projects are described at a high level only and marked
  "Proprietary · Technuf LLC": no code, client names, client data, screenshots or internal URLs.
  Keep it that way when editing.

### Adding a project

Append an object to `projects` in `src/data/portfolio.ts`:

```ts
{
  title: "My Project",
  category: "Web App",
  icon: "code",                 // any key from IconName
  org: "Personal",              // or "Technuf LLC"
  summary: "What it does.",
  highlights: ["Key contribution"], // optional, shown on featured cards
  tech: ["Next.js", "PostgreSQL"],  // only technologies used in this project
  featured: false,              // true = large card in "Featured projects"
  liveUrl: "https://...",       // optional: button hidden if omitted
  codeUrl: "https://github.com/...", // optional
}
```

### Customizing the look

- **Colors, fonts and animations:** the `@theme` block in [`src/app/globals.css`](src/app/globals.css)
  (`navy-*` scale, `accent` violet, `cyan` and `ivory` secondary tokens).
- **Reusable styles:** `.card`, `.chip`, `.btn-primary` and `.btn-ghost` in the same file.
- **Fonts:** Space Grotesk (display), Instrument Serif italic (editorial accents; wrap words in `*asterisks*`
  in `sections` titles or `site.statement`), DM Sans (body) and JetBrains Mono (labels), loaded with `next/font`
  in [`src/app/layout.tsx`](src/app/layout.tsx).
- **Favicon:** [`src/app/icon.svg`](src/app/icon.svg).

---

## 3. Project structure

```
src/
  app/
    layout.tsx        # fonts, SEO metadata, skip link
    page.tsx          # section order
    globals.css       # Tailwind v4 theme + component styles
    icon.svg, robots.ts, sitemap.ts
  components/
    Navbar.tsx        # sticky nav, active-section highlight, mobile menu
    Hero.tsx  About.tsx  Skills.tsx  Experience.tsx
    Projects.tsx  Resume.tsx  Contact.tsx  Footer.tsx
    Education.tsx     # education section
    HeroVisual.tsx    # decorative stack card in the hero
    ResumeButton.tsx  # enabled/disabled resume link
    Reveal.tsx        # scroll-reveal animation (IntersectionObserver)
    SectionHeading.tsx  Accent.tsx  ProjectMotif.tsx  HeroSpotlight.tsx  BrandIcons.tsx
  lib/
    resume.ts         # checks whether public/resume.pdf exists at build time
  data/
    portfolio.ts      # ← ALL editable content
public/
  resume.pdf          # ← add your resume here
```

**Accessibility and performance:** semantic landmarks, a skip-to-content link, visible focus rings,
ARIA labels on icon buttons, and `prefers-reduced-motion` support (turns off all animations).
Content stays visible without JavaScript, since scroll animations only hide elements once JS is running.
Every page is statically prerendered with no runtime data fetching.

**Contact form:** it needs no backend. Submitting opens the visitor's email client with the message
pre-filled. To use a form service instead (Formspree, Resend, etc.), replace `handleSubmit` in
`src/components/Contact.tsx`.

---

## 4. Deployment

### Option A: Vercel (recommended, free tier)

1. Push the project to a GitHub repository:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/sanzidaaktershorna2001-ctrl/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo. Vercel detects Next.js
   automatically, so you can keep the defaults.
3. Click **Deploy**. To use a custom domain, add it under Project → Settings → Domains.
4. Every later `git push` to `main` redeploys automatically. For a custom domain, also set
   `NEXT_PUBLIC_SITE_URL` (see Content above).

### Option B: GitHub Pages (free)

The repo includes [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds a
static export and publishes it on every push to `main`. The sub-path (`/portfolio`) and site URL are
detected automatically, so nothing needs editing.

1. Push the project to a GitHub repository (see Option A, step 1).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Open the **Actions** tab. The "Deploy to GitHub Pages" run publishes the site to
   `https://<username>.github.io/<repo>/` (re-run it once if the first push happened before step 2).

Name the repo `<username>.github.io` instead to serve the site from the domain root.

**Test the Pages build locally:**

```bash
STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH=/portfolio npm run build   # static site in ./dist
```

### Option B2: Netlify, Cloudflare Pages, S3

Build command `STATIC_EXPORT=1 npm run build`, publish directory `dist`.

### Option C: Docker + Nginx (self-hosted)

```bash
docker build -t portfolio .
docker run -d -p 8080:80 --name portfolio portfolio   # http://localhost:8080
```

The [`Dockerfile`](Dockerfile) builds the static export and serves it with Nginx
([`nginx.conf`](nginx.conf)), with gzip and long-term caching for hashed assets.
For HTTPS, put it behind a reverse proxy or load balancer that terminates TLS.

### Option D: Node server

```bash
npm run build && npm start   # set PORT=xxxx to change from 3000
```
