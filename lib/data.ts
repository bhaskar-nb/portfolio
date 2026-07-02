// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH — every visible fact on the site is derived from
// here, and every fact here comes from the resume. Update this file only.
// Links marked TODO were not present on the resume — replace with real URLs.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Nakka Bhaskar Gangadhar",
  role: "Data Analyst",
  roles: ["Data Analyst", "Python Developer", "Dashboard Engineer", "SQL Developer"],
  location: "Visakhapatnam, India",
  phone: "+91 9652020300",
  email: "bn7740401@email.com",
  summary:
    "Computer Science Engineering graduate with hands-on experience in SQL, Python, Excel, and Tableau through academic and internship projects. Skilled in data cleaning, exploratory data analysis, and building interactive dashboards to generate business insights.",
  links: {
    linkedin: "https://www.linkedin.com/in/bhaskar-nakka-43a701259/", // TODO: add real LinkedIn handle
    github: "https://github.com/", 
    tableau: "https://public.tableau.com/app/profile/", // TODO: add real Tableau profile
  },
  githubUsername: "bhaskar-nb", //
};

export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    query: "SELECT * FROM languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    id: "libraries",
    label: "Libraries",
    query: "SELECT * FROM libraries",
    skills: [
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 75 },
      { name: "Matplotlib", level: 78 },
    ],
  },
  {
    id: "visualization",
    label: "Visualization",
    query: "SELECT * FROM visualization",
    skills: [
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 78 },
      { name: "Microsoft Excel", level: 85 },
    ],
  },
  {
    id: "database",
    label: "Database",
    query: "SELECT * FROM database",
    skills: [{ name: "MySQL", level: 80 }],
  },
  {
    id: "tools",
    label: "Tools",
    query: "SELECT * FROM tools",
    skills: [
      { name: "Git", level: 82 },
      { name: "GitHub", level: 82 },
      { name: "VS Code", level: 88 },
    ],
  },
  {
    id: "core",
    label: "Core Concepts",
    query: "SELECT * FROM core_concepts",
    skills: [
      { name: "Data Cleaning", level: 85 },
      { name: "Exploratory Data Analysis", level: 85 },
      { name: "Dashboard Development", level: 88 },
    ],
  },
];

export const projects = [
  {
    id: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    stack: ["Tableau"],
    summary:
      "Interactive Tableau dashboard analyzing sales performance across products, categories, regions, and time using key business KPIs.",
    features: [
      "Dynamic visualizations for sales trends and profitability",
      "Interactive filters by product, category, and region",
      "KPI cards surfacing high-performing products at a glance",
    ],
    challenges:
      "Consolidating multi-dimensional sales data into a single view that stays readable without overwhelming the viewer with filters.",
    learnings:
      "Sharpened skills in KPI design, dashboard information hierarchy, and translating raw sales data into decisions.",
    github: "https://github.com/bhaskar-nb/sales-dashboard-tableau.git", // TODO: add real repo link
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/SalesDashboardProject_17823218142750/SalesDashboard", // TODO: add real Tableau Public link
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    stack: ["Tableau"],
    summary:
      "HR analytics dashboard monitoring employee demographics, attrition, departmental performance, and workforce distribution.",
    features: [
      "Attrition and headcount tracking by department",
      "Interactive charts for workforce demographics",
      "Filterable views built for HR reporting workflows",
    ],
    challenges:
      "Presenting sensitive workforce metrics clearly while keeping the dashboard useful for both leadership and HR operations.",
    learnings:
      "Learned to design analytics for a non-technical audience, prioritizing clarity over chart complexity.",
    github: "https://github.com/bhaskar-nb/HR-Dashboard.git", // TODO: add real repo link
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/HRDashboard_17824941977350/HRSummary_1", // TODO: add real Tableau Public link
  },
  {
    id: "startup-funding-analysis",
    title: "Startup Funding Analysis Dashboard",
    stack: ["Tableau"],
    summary:
      "Dashboard analyzing startup funding across industries, cities, investors, and investment types using historical funding data.",
    features: [
      "Trend analysis across industries and funding rounds",
      "City and investor-level breakdowns of capital flow",
      "Interactive visualizations highlighting leading startup ecosystems",
    ],
    challenges:
      "Cleaning inconsistent historical funding records before they could be meaningfully visualized.",
    learnings:
      "Reinforced the value of rigorous data cleaning before any dashboard work begins.",
    github: "https://github.com/bhaskar-nb/startup-funding-dashboard.git", // TODO: add real repo link
    demo: "#", // TODO: add real Tableau Public link
  },
];

export const certifications = [
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage Virtual Experience",
    year: "2026",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6PZAQE3YBSwmxWqNH_1782883293231_completion_certificate.pdf"
  },
];

export const education = [
  {
    school: "Parul Institute of Engineering and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Vadodara, Gujarat",
    period: "2022 – 2026",
  },
];

export const timeline = [
  {
    year: "2022",
    title: "Started B.Tech in Computer Science",
    detail: "Enrolled at Parul Institute of Engineering and Technology, Vadodara.",
  },
  {
    year: "2025",
    title: "Deep-dived into data analytics",
    detail: "Built hands-on skills in SQL, Python, Excel, and Tableau through projects.",
  },
  {
    year: "2026",
    title: "Deloitte Data Analytics Job Simulation",
    detail: "Completed the Forage virtual experience program with Deloitte Australia.",
  },
  {
    year: "2026",
    title: "Graduating & job-seeking",
    detail: "Completing B.Tech, building a dashboard-driven project portfolio.",
  },
];

export const achievements = [
  {
    title: "3 end-to-end Tableau dashboards shipped",
    detail: "Sales, HR, and startup-funding analytics projects, each covering cleaning through visualization.",
  },
  {
    title: "Deloitte Job Simulation completed",
    detail: "Forage virtual experience program covering real-world data analytics workflows.",
  },
  {
    title: "Multi-tool analytics stack",
    detail: "Comfortable moving between SQL, Python, Excel, Tableau, and Power BI on the same problem.",
  },
];

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
