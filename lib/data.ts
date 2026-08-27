// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH — visible portfolio content lives here.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Bhaskar Nakka",
  role: "Data Analyst",
  roles: ["Data Analyst"],
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
    id: "analysis",
    label: "Analytics",
    query: "SELECT skill FROM analytics",
    skills: ["SQL", "Python", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"],
  },
  {
    id: "visualization",
    label: "Visualization",
    query: "SELECT tool FROM visualization",
    skills: ["Tableau", "Power BI", "Microsoft Excel", "Matplotlib", "Dashboard Development"],
  },
  {
    id: "database",
    label: "Database",
    query: "SELECT tool FROM database",
    skills: ["MySQL"],
  },
  {
    id: "workflow",
    label: "Workflow & Tools",
    query: "SELECT tool FROM workflow_tools",
    skills: ["Git", "GitHub", "VS Code", "Streamlit"],
  },
];

export const projects = [
  {
    id: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    stack: ["Tableau"],
    summary: "Interactive sales analysis focused on revenue, profit, quantity, year-over-year performance, and product profitability.",
    features: ["Year-over-year sales, profit, and quantity KPIs", "Product and sub-category profitability analysis", "Interactive filters for exploring performance trends"],
    challenges: "How can sales performance be compared across time and products while keeping the dashboard useful for business decision-making?",
    learnings: "Strengthened KPI design, comparative analysis, dashboard hierarchy, and business storytelling.",
    github: "https://github.com/bhaskar-nb/sales-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/SalesDashboardProject_17823218142750/SalesDashboard",
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    stack: ["Tableau", "Python", "Pandas", "NumPy", "Faker"],
    summary: "Workforce analysis covering hiring, terminations, demographics, departments, compensation, performance, and geography using synthetic employee data.",
    features: ["Workforce, hiring, and termination KPIs", "Department, demographic, salary, and performance analysis", "Synthetic employee dataset generated and prepared with Python"],
    challenges: "How can workforce composition, hiring, attrition, and compensation patterns be presented clearly to HR stakeholders?",
    learnings: "Strengthened synthetic data generation, preparation, KPI design, and dashboard communication.",
    github: "https://github.com/bhaskar-nb/hr-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/HRDashboard_17824941977350/HRSummary_1",
  },
  {
    id: "ev-adoption-dashboard",
    title: "EV Adoption Dashboard",
    stack: ["Tableau"],
    summary: "Analysis of electric vehicle registrations across model years, states, manufacturers, vehicle types, models, and eligibility categories.",
    features: ["Manufacturer and vehicle-type comparisons", "State-level geographic analysis", "Model-year and CAFV eligibility exploration"],
    challenges: "How do EV registrations vary by geography, manufacturer, vehicle type, and model year within the available dataset?",
    learnings: "Improved geographic analysis, dataset-scope communication, and interactive dashboard design.",
    github: "https://github.com/bhaskar-nb/ev-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/EVDashboard_17866424745700/EvDashboard",
  },
  {
    id: "amazon-prime-content-intelligence",
    title: "Amazon Prime Content Intelligence Dashboard",
    stack: ["Tableau"],
    summary: "Catalog analysis exploring movies versus TV shows, genres, ratings, release trends, countries, and content composition.",
    features: ["Movies versus TV shows comparison", "Genre, rating, country, and release-year analysis", "Interactive views for exploring catalog composition"],
    challenges: "How can a large streaming catalog be broken into useful patterns across content type, genre, ratings, geography, and release trends?",
    learnings: "Strengthened categorical analysis, trend analysis, geographic breakdowns, and dashboard storytelling.",
    github: "https://github.com/bhaskar-nb/amazon-prime-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980",
  },
];

export const additionalProjects = [
  {
    id: "global-disaster-analysis",
    title: "Global Disaster Analysis",
    category: "Data Visualization",
    stack: ["Tableau"],
    summary: "Analysis of disaster events, deaths, affected populations, economic damage, disaster types, countries, and time trends.",
    github: "https://github.com/bhaskar-nb/disaster-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    category: "Applied Machine Learning",
    stack: ["Python", "Scikit-learn", "Streamlit"],
    summary: "End-to-end house price prediction application with preprocessing, Random Forest regression, feature handling, and an interactive Streamlit interface.",
    github: "https://github.com/bhaskar-nb/house-price-prediction",
    demo: "",
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction",
    category: "Applied Machine Learning",
    stack: ["Python", "Scikit-learn", "Streamlit"],
    summary: "Classification application covering data preprocessing, feature scaling, model prediction, and an interactive Streamlit interface.",
    github: "https://github.com/bhaskar-nb/diabetes-prediction",
    demo: "",
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
  { school: "Parul Institute of Engineering and Technology", degree: "B.Tech in Computer Science and Engineering", location: "Vadodara, Gujarat", period: "2022 – 2026" },
];

export const timeline = [
  { year: "2022", title: "Started B.Tech in Computer Science", detail: "Enrolled at Parul Institute of Engineering and Technology, Vadodara." },
  { year: "2025", title: "Focused on data analytics", detail: "Built hands-on skills in SQL, Python, Excel, and Tableau through projects." },
  { year: "2026", title: "Deloitte Data Analytics Job Simulation", detail: "Completed the Forage virtual experience program with Deloitte Australia." },
  { year: "2026", title: "Graduating & job-seeking", detail: "Completing B.Tech and targeting Data Analyst / BI roles." },
];

export const achievements = [
  { title: "Portfolio of business-focused analytics dashboards", detail: "Built projects across sales, HR, EV adoption, disaster impact, and other domains." },
  { title: "Deloitte Job Simulation completed", detail: "Completed a real-world-style data analytics workflow through Forage." },
  { title: "Multi-tool analytics stack", detail: "SQL, Python, Excel, Tableau, Power BI, Git, and GitHub across analytics projects." },
];

export const nav = [
  { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "experience", label: "Experience" }, { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" }, { id: "certifications", label: "Certifications" }, { id: "education", label: "Education" }, { id: "contact", label: "Contact" },
];
