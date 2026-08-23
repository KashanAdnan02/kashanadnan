# Kashan Adnan — Portfolio

Personal portfolio and client-facing site for Kashan Adnan, full-stack developer
(Next.js / MERN) and founder of Aaghaaz Tech.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and
**GSAP** (ScrollTrigger).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build (also typechecks)
npm run start   # serve the production build
npm run lint    # eslint
```

## Where the content lives

Everything you'd normally want to change — projects, stats, services, contact
details, affiliations — is in a single file:

```
src/lib/content.ts
```

| What you want to change | Edit |
| --- | --- |
| Fiverr rating / order count | `stats`, `fiverrProof` |
| Projects and case studies | `projects` (set `featured: true` to pin to the top; add `study` to generate a `/work/[slug]` page) |
| Project screenshots | drop a file in `public/work/`, then set `image: "/work/name.png"` on the project |
| Services offered | `services` |
| Institute / training credits | `affiliations`, `certifications` |
| Email, WhatsApp, socials | `site` |

Two values are marked `TODO(kashan)` in that file — the public email address and
the Fiverr profile URL. Confirm both before sharing the site.

Real Fiverr review quotes can be pasted into `fiverrProof.reviews`; the
testimonial grid renders automatically once the array has entries and stays
hidden while it is empty.

## Structure

```
src/
  app/
    layout.tsx              root layout, fonts, metadata, JSON-LD
    page.tsx                home page section composition
    work/[slug]/page.tsx    generated case study pages
    opengraph-image.tsx     social share image
    sitemap.ts, robots.ts
  components/
    sections/               Hero, ProofBar, Work, Affiliations, FiverrProof,
                            Services, About, Contact
    Reveal.tsx              GSAP scroll reveal wrapper
    SiteHeader / SiteFooter / ThemeToggle / ProjectCard / Stars
  lib/
    content.ts              all site copy and data
    gsap.ts                 GSAP + ScrollTrigger registration
```

## Animation

GSAP runs only on the client through `useGSAP()` with a scoped ref. Every reveal
is wrapped in `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`, so
visitors who ask for reduced motion get the full content with no animation.

CSS hides `[data-reveal]` elements only after an inline script adds
`.motion-ready` to `<html>`, so content stays visible if JavaScript fails.

## Theme

Light and dark are driven by CSS variables in `src/app/globals.css` and a `.dark`
class on `<html>`. The stored preference is applied by an inline script before
paint to avoid a flash, and can be toggled from the header.

## Deploying

The site is a static-friendly Next.js app and deploys as-is to Vercel:

```bash
npx vercel
```

If you stay on Netlify, install `@netlify/plugin-nextjs` so the App Router runs
correctly. After deploying, update `site.url` in `src/lib/content.ts` so
metadata, sitemap and Open Graph URLs point at the live domain.
