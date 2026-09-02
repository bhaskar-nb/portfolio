# Bhaskar Nakka — Data Analyst Portfolio

A personal portfolio built to showcase how I use **SQL, Python, Tableau, Power BI, and business-focused analysis** to turn data into clear, decision-ready insights.

The site brings together my analytics projects, technical skills, experience, resume, and professional links in one place.

## What You'll Find

- **Data Analytics & BI** — analysis centered on business questions, KPIs, trends, and performance
- **Dashboard Projects** — interactive Tableau and Power BI work designed for practical decision support
- **SQL & Python** — querying, cleaning, transforming, exploring, and analyzing data
- **Business Problem Solving** — moving from raw datasets to findings that are useful to stakeholders
- **Professional Profile** — internship experience, education, resume, and career-focused work

## Featured Projects

- [Sales Performance Dashboard](https://github.com/bhaskar-nb/sales-dashboard) — explores sales, profit, quantity, year-over-year performance, and product profitability; analysis identified 20.6% year-over-year sales growth and 43.7% profit growth.
- [Global Disaster Analysis](https://github.com/bhaskar-nb/disaster-dashboard) — analyzes 15,090 disaster events across disaster types, countries, time, human impact, and economic damage.
- [HR Analytics Dashboard](https://github.com/bhaskar-nb/hr-dashboard) — analyzes workforce, hiring, terminations, compensation, performance, and demographics using explicitly synthetic employee data.
- [EV Adoption Dashboard](https://github.com/bhaskar-nb/ev-dashboard) — explores 150,413 electric vehicle records across model years, states, manufacturers, vehicle types, models, and eligibility categories.

## Tech Stack

- **Analytics:** SQL · Python · Pandas · Tableau · Power BI · Excel
- **Frontend:** Next.js · React · TypeScript
- **Styling & Motion:** Tailwind CSS · Framer Motion
- **Developer Tools:** Git · GitHub · VS Code

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
app/           Next.js routes, metadata, robots, sitemap, and global styles
components/    Portfolio UI components
lib/data.ts    Single source of truth for profile, skills, projects, and links
lib/utils.ts   Shared utility helpers
public/        Static assets such as resume and favicon
```

## Resume

The latest resume is available directly from the portfolio website through the **Download résumé** buttons in the Hero, Navbar, and recruiter contact area.

If you are running the project locally, keep the current resume in `public/` using the filename referenced by the portfolio code.

## Deployment

The portfolio is deployed with Vercel from the `main` branch.

Production metadata and crawl configuration are maintained in:

- `app/layout.tsx` — site title, description, canonical URL, Open Graph/Twitter metadata, and structured data
- `app/robots.ts` — crawler rules and sitemap reference
- `app/sitemap.ts` — sitemap generation

Keep `public/Resume.pdf` available so the résumé download actions continue to work.

## Contact

**Bhaskar Nakka**  
Data Analyst | SQL · Python · Tableau · Power BI

- GitHub: https://github.com/bhaskar-nb
- LinkedIn: https://www.linkedin.com/in/bhaskar-nakka/
- Tableau Public: https://public.tableau.com/app/profile/bhaskar.nakka4980
- Email: bn7740401@gmail.com
