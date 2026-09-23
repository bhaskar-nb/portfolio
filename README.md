# Bhaskar Nakka — Data Analyst Portfolio

Source code for my personal **Data Analyst portfolio website**, built with Next.js and designed to present analytics projects, SQL work, technical skills, experience, certifications, and contact information in one place.

Live portfolio: **https://bhaskar-nb-portfolio.vercel.app/**

## What This Portfolio Showcases

- **Data Analytics** — SQL, Python, Excel, Tableau, and Power BI
- **Business Intelligence** — KPI reporting, dashboard development, and data visualization
- **SQL Evidence** — practical business-question analysis and dedicated SQL project work
- **Analytics Projects** — sales, HR, disaster, EV, healthcare, and other data-analysis projects
- **Professional Profile** — experience, education, certifications, resume, GitHub, LinkedIn, and Tableau Public

The portfolio is positioned around a **Junior Data Analyst** profile and emphasizes practical project evidence rather than generic skill lists.

## Featured Work

The site currently highlights projects such as:

- [SQL Data Warehouse Project](https://github.com/bhaskar-nb/sql-data-warehouse-project) — SQL Server data warehouse using Bronze, Silver, and Gold layers, ETL, data-quality checks, and dimensional modeling.
- [SQL Exploratory Data Analysis Project](https://github.com/bhaskar-nb/sql-exploratory-data-analysis-project) — business-focused sales, customer, product, segmentation, ranking, time-series, and reusable reporting analysis.
- [DecodeLabs Data Analytics Internship](https://github.com/bhaskar-nb/DecodeLabs-Internship) — end-to-end data cleaning, EDA, SQL analysis, and Tableau reporting.
- [Sales Performance Dashboard](https://github.com/bhaskar-nb/sales-dashboard) — sales, profit, quantity, product performance, and year-over-year analysis.
- [HR Analytics Dashboard](https://github.com/bhaskar-nb/hr-dashboard) — workforce analysis using explicitly synthetic employee data.

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Analytics & Portfolio Content

- SQL
- Python
- Pandas
- NumPy
- Microsoft Excel
- Tableau
- Power BI

### Development

- Git
- GitHub
- VS Code
- Vercel

## Project Structure

```text
portfolio/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── SQLProof.tsx
│   ├── RecruiterProof.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── ...
│
├── lib/
│   ├── data.ts
│   └── utils.ts
│
├── public/
│   ├── Resume.pdf
│   ├── certificates
│   └── static assets
│
├── .github/workflows/
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

`lib/data.ts` acts as the main content source for profile details, skills, projects, certifications, education, and navigation data.

## Run Locally

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

## Resume & Certificates

The portfolio stores resume and certificate assets in `public/` so they can be served directly by the Next.js application.

Important assets currently include:

- `public/Resume.pdf`
- Deloitte Data Analytics Job Simulation certificate
- Tata Data Visualisation job simulation certificate
- Data Analytics Essentials certificate
- SQL certificate

Keep filenames synchronized with the paths referenced by the portfolio components before deploying.

## SEO & Deployment

The application includes:

- Page metadata and canonical URL
- Open Graph metadata
- Twitter metadata
- Structured profile information
- `robots.txt` generation
- Sitemap generation

Relevant files:

- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`

The portfolio is deployed on **Vercel** from the `main` branch.

## Data & Content Architecture

Most visible portfolio content is centralized in:

```text
lib/data.ts
```

This includes:

- Profile information
- Skills
- Projects
- Certifications
- Education
- Timeline
- Achievements
- Navigation

This keeps the presentation components separate from the portfolio content and makes future content updates easier.

## Current Portfolio Positioning

The portfolio is designed around:

```text
Business Question
      ↓
Data Cleaning / Preparation
      ↓
SQL / Python Analysis
      ↓
KPI & Insight Development
      ↓
Dashboard / Reporting
      ↓
Clear Business Communication
```

The primary career target is **Junior Data Analyst / Data Analyst**, with emphasis on SQL, Python, Excel, Tableau, Power BI, and practical analytics projects.

## Contact

**Bhaskar Nakka**

Data Analyst

- GitHub: https://github.com/bhaskar-nb
- LinkedIn: https://www.linkedin.com/in/bhaskar-nakka/
- Tableau Public: https://public.tableau.com/app/profile/bhaskar.nakka4980
- Email: bn7740401@gmail.com

## Notes

This repository contains the source code for the portfolio website. For the analytics work itself, the individual GitHub project repositories linked above provide the underlying SQL, Python, Excel, and dashboard evidence.