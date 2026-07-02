# Nakka Bhaskar Gangadhar — Portfolio

A premium, animated data-analyst portfolio built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion. The design language is a "live dashboard" — the same
visual world as Tableau/Power BI/SQL, since that's the candidate's actual craft.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — fill these in

Everything on the site is pulled from **`lib/data.ts`**. The resume didn't include actual
URLs for LinkedIn, GitHub, or Tableau Public (just the word "LinkedIn" / "GitHub" as link
text), so those are placeholders marked `// TODO`. Update:

- `profile.links.linkedin`
- `profile.links.github`
- `profile.links.tableau`
- `profile.githubUsername` — powers the live GitHub stats/contribution graph in the
  "GitHub" section (uses the public `github-readme-stats` and `ghchart` APIs, no key needed)
- Each project's `github` and `demo` URLs in the `projects` array

Also:

- `public/resume.pdf` currently contains the résumé you uploaded — replace it if you
  update your résumé, filename must stay `resume.pdf` (linked from the navbar/hero).
- `public/og-image.png` is referenced in `app/layout.tsx` metadata for social share
  previews but isn't included — drop a 1200×630 image there (or remove the reference).
- `app/layout.tsx` / `app/robots.ts` / `app/sitemap.ts` reference a placeholder domain
  `https://bhaskar-portfolio.vercel.app` — swap in your real deployed URL.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo at vercel.com/new — zero config needed.

## Structure

```
app/                Routes, layout, global styles, SEO files (robots, sitemap, manifest)
components/          All UI sections (Hero, About, Skills, Projects, Contact, ...)
lib/data.ts          Single source of truth for all resume content
lib/utils.ts          cn() className helper
public/              Static assets (resume.pdf, favicon)
```

## Notes on content

- The resume didn't list separate work experience, so there's no fabricated "Experience"
  timeline — real highlights (projects, the Deloitte simulation, education) are woven into
  the About timeline, Certifications, and Achievements sections instead.
- Skill proficiency percentages are stylistic estimates for the progress bars, not scores
  from a test — adjust freely in `lib/data.ts`.
- Contact form uses `mailto:` (no backend/API keys required) so it works immediately on
  `npm run dev` and on Vercel with zero configuration. Swap in a form provider (Formspree,
  Resend, etc.) later if you want submissions to land somewhere other than the visitor's
  email client.

## Design system

- Palette: near-black graphite background, teal + gold + wire-blue accents (KPI/data-viz
  colors), styled as a "control room" dashboard.
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (data labels, stats, code).
- Structural device: every section is built from the same "panel/widget" card used in the
  Hero's live dashboard, so the whole site reads as one connected instrument panel.
