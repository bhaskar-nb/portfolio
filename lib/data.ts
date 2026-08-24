// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH — visible portfolio content lives here.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Bhaskar Nakka",
  role: "Data Analyst",
  roles: ["Data Analyst", "BI Analyst", "Python Developer", "SQL Developer"],
  location: "Visakhapatnam, India",
  phone: "+91 9652020300",
  email: "bn7740401@gmail.com",
  summary:
    "Data Analyst with hands-on experience in SQL, Python, Excel, and Tableau. I clean and analyze data, build interactive dashboards, and turn business questions into clear, decision-ready insights.",
  links: {
    linkedin: "https://www.linkedin.com/in/bhaskar-nakka-43a701259/",
    github: "https://github.com/bhaskar-nb",
    tableau: "https://public.tableau.com/app/profile/bhaskar.nakka4980",
  },
  githubUsername: "bhaskar-nb",
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
      "Interactive Tableau dashboard analyzing sales, profit, quantity, year-over-year performance, and product profitability.",
    features: [
      "Year-over-year sales, profit, and quantity KPIs",
      "Product and sub-category profitability analysis",
      "Interactive filters for exploring performance trends",
    ],
    challenges:
      "Consolidating multiple related sales datasets into a single dashboard without making the analysis difficult to navigate.",
    learnings:
      "Improved KPI design, dashboard hierarchy, comparative analysis, and business storytelling.",
    github: "https://github.com/bhaskar-nb/sales-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/SalesDashboardProject_17823218142750/SalesDashboard",
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    stack: ["Tableau", "Python", "Pandas", "NumPy", "Faker"],
    summary:
      "HR analytics dashboard exploring workforce composition, hiring, terminations, demographics, compensation, and performance using synthetic employee data.",
    features: [
      "Workforce, hiring, and termination KPIs",
      "Department, demographic, salary, and performance analysis",
      "Synthetic dataset generated and prepared with Python",
    ],
    challenges:
      "Creating realistic synthetic HR records and turning them into a clear dashboard for non-technical HR users.",
    learnings:
      "Strengthened synthetic data generation, preparation, KPI design, and dashboard communication skills.",
    github: "https://github.com/bhaskar-nb/hr-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/HRDashboard_17824941977350/HRSummary_1",
  },
  {
    id: "ev-adoption-dashboard",
    title: "EV Adoption Dashboard",
    stack: ["Tableau"],
    summary:
      "Interactive analysis of electric vehicle registrations across model years, states, manufacturers, vehicle types, models, and eligibility categories.",
    features: [
      "Manufacturer and vehicle-type comparisons",
      "State-level geographic analysis",
      "Model-year and CAFV eligibility exploration",
    ],
    challenges:
      "Making geographic concentration and registration patterns easy to compare without overstating the dataset as a complete U.S. EV market view.",
    learnings:
      "Improved geographic analysis, dataset-scope communication, and interactive dashboard design.",
    github: "https://github.com/bhaskar-nb/ev-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/EVDashboard_17866424745700/EvDashboard",
  },
];

export const certifications = [
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage Virtual Experience",
    year: "2026",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6PZAQE3YBSwmxWqNH_1782883293231_completion_certificate.pdf",
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
    title: "Focused on data analytics",
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
    detail: "Completing B.Tech and targeting Data Analyst / BI roles.",
  },
];

export const achievements = [
  {
    title: "Portfolio of business-focused analytics dashboards",
    detail: "Built projects across sales, HR, EV adoption, disaster impact, and other domains.",
  },
  {
    title: "Deloitte Job Simulation completed",
    detail: "Completed a real-world-style data analytics workflow through Forage.",
  },
  {
    title: "Multi-tool analytics stack",
    detail: "SQL, Python, Excel, Tableau, Power BI, Git, and GitHub across analytics projects.",
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
