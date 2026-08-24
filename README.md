# Bhaskar Nakka — Data Analyst Portfolio

A personal portfolio built with **Next.js, TypeScript, Tailwind CSS, and Framer Motion** to showcase data analytics projects, technical skills, and career work.

The portfolio focuses on **SQL, Python, Tableau, Power BI, and business-focused data analysis**.

## What the portfolio showcases

- Data analytics and business intelligence projects
- Interactive Tableau dashboards
- SQL and Python analytics skills
- Education and professional development
- Deloitte Data Analytics Job Simulation
- Resume and contact information

## Featured projects

- [Sales Performance Dashboard](https://github.com/bhaskar-nb/sales-dashboard) — sales, profit, quantity, and profitability analysis in Tableau.
- [HR Analytics Dashboard](https://github.com/bhaskar-nb/hr-dashboard) — workforce, hiring, termination, compensation, and demographic analysis.
- [EV Adoption Dashboard](https://github.com/bhaskar-nb/ev-dashboard) — electric vehicle registration and geographic analysis.

## Tech stack

- **Framework:** Next.js 14 · React · TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Analytics:** SQL · Python · Pandas · Tableau · Power BI · Excel
- **Developer tools:** Git · GitHub · VS Code

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```text
app/           Next.js routes, metadata, robots, sitemap, and global styles
components/    Portfolio UI components
lib/data.ts    Single source of truth for profile, skills, projects, and links
lib/utils.ts   Shared utility helpers
public/        Static assets such as resume and favicon
```

## Before deployment

Update the real production domain in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` once the final Vercel URL is known.

The portfolio expects `public/resume.pdf` to contain the current resume. The social preview uses `/og-image.png`; add that image before relying on Open Graph previews.

## Contact

**Bhaskar Nakka**

Data Analyst | SQL · Python · Tableau · Power BI

- GitHub: https://github.com/bhaskar-nb
- LinkedIn: https://www.linkedin.com/in/bhaskar-nakka-43a701259/
- Tableau Public: https://public.tableau.com/app/profile/bhaskar.nakka4980
- Email: bn7740401@gmail.com
