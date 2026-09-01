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
  summary: "Data Analyst with hands-on experience in SQL, Python, Excel, and Tableau. I clean and analyze data, build interactive dashboards, and turn business questions into clear, decision-ready insights.",
  links: { linkedin: "https://www.linkedin.com/in/bhaskar-nakka/", github: "https://github.com/bhaskar-nb", tableau: "https://public.tableau.com/app/profile/bhaskar.nakka4980" },
  githubUsername: "bhaskar-nb",
};

export const skillGroups = [
  { id: "analysis", label: "Analytics", query: "SELECT skill FROM analytics", skills: ["SQL", "Python", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"] },
  { id: "visualization", label: "Visualization", query: "SELECT tool FROM visualization", skills: ["Tableau", "Power BI", "Microsoft Excel", "Matplotlib", "Dashboard Development"] },
  { id: "database", label: "Database", query: "SELECT tool FROM database", skills: ["MySQL"] },
  { id: "workflow", label: "Workflow & Tools", query: "SELECT tool FROM workflow_tools", skills: ["Git", "GitHub", "VS Code", "Streamlit"] },
];

export const projects = [
  { id: "global-disaster-analysis", title: "Global Disaster Analysis", stack: ["Tableau"], summary: "15,090 disaster events analyzed across disaster types, countries, time, human impact, and economic damage to understand where frequency and severity diverge.", features: ["Disaster frequency and severity analysis", "Human impact and economic damage exploration", "Country, disaster-type, and time-based comparisons"], challenges: "How can disaster patterns be compared across frequency, human impact, geography, and economic damage without reducing the story to event counts alone?", learnings: "Strengthened KPI selection, geographic analysis, impact-focused storytelling, and dashboard hierarchy.", github: "https://github.com/bhaskar-nb/disaster-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/DisasterAnalysis_17869126013330/Globaldashboard" },
  { id: "sales-performance-dashboard", title: "Sales Performance Dashboard", stack: ["Tableau"], summary: "Interactive sales analysis focused on revenue, profit, quantity, year-over-year performance, and product profitability.", features: ["Year-over-year sales, profit, and quantity KPIs", "Product and sub-category profitability analysis", "Interactive filters for exploring performance trends"], challenges: "How can sales performance be compared across time and products while keeping the dashboard useful for business decision-making?", learnings: "Strengthened KPI design, comparative analysis, dashboard hierarchy, and business storytelling.", github: "https://github.com/bhaskar-nb/sales-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/SalesDashboardProject_17823218142750/SalesDashboard" },
  { id: "hr-analytics-dashboard", title: "HR Analytics Dashboard", stack: ["Tableau", "Python", "Pandas", "NumPy", "Faker"], summary: "Workforce analysis covering hiring, terminations, demographics, departments, compensation, performance, and geography using synthetic employee data.", features: ["Workforce, hiring, and termination KPIs", "Department, demographic, salary, and performance analysis", "Synthetic employee dataset generated and prepared with Python"], challenges: "How can workforce composition, hiring, attrition, and compensation patterns be presented clearly to HR stakeholders?", learnings: "Strengthened synthetic data generation, preparation, KPI design, and dashboard communication.", github: "https://github.com/bhaskar-nb/hr-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/HRDashboard_17824941977350/HRSummary_1" },
  { id: "ev-adoption-dashboard", title: "EV Adoption Dashboard", stack: ["Tableau"], summary: "Analysis of electric vehicle registrations across model years, states, manufacturers, vehicle types, models, and eligibility categories.", features: ["Manufacturer and vehicle-type comparisons", "State-level geographic analysis", "Model-year and CAFV eligibility exploration"], challenges: "How do EV registrations vary by geography, manufacturer, vehicle type, and model year within the available dataset?", learnings: "Improved geographic analysis, dataset-scope communication, and interactive dashboard design.", github: "https://github.com/bhaskar-nb/ev-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/EVDashboard_17866424745700/EvDashboard" },
];

export const additionalProjects = [
  { id: "amazon-prime-content-intelligence", title: "Amazon Prime Content Intelligence", category: "Data Visualization", stack: ["Tableau"], summary: "Catalog analysis exploring movies versus TV shows, genres, ratings, release trends, countries, and content composition.", github: "https://github.com/bhaskar-nb/amazon-prime-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/AmazonprimeAnalysis_17871481548780/AMAZONCONTENTINTELLIGENCEDASHBOARD" },
  { id: "house-price-prediction", title: "House Price Prediction", category: "Applied Machine Learning", stack: ["Python", "Scikit-learn", "Streamlit"], summary: "End-to-end house price prediction application with preprocessing, Random Forest regression, feature handling, and an interactive Streamlit interface.", github: "https://github.com/bhaskar-nb/house-price-prediction", demo: "" },
  { id: "diabetes-prediction", title: "Diabetes Prediction", category: "Applied Machine Learning", stack: ["Python", "Scikit-learn", "Streamlit"], summary: "Classification application covering data preprocessing, feature scaling, model prediction, and an interactive Streamlit interface.", github: "https://github.com/bhaskar-nb/diabetes-prediction", demo: "" },
];

export const certifications = [
  { title: "Deloitte Australia Data Analytics Job Simulation", issuer: "Forage Virtual Experience", year: "2026", link: "/Deloitte Data Analytics Job Simulation Certificate.pdf", bullets: ["Analyzed factory telemetry data in Tableau", "Built an interactive machine-downtime dashboard", "Classified gender pay equality data in Excel", "Applied data analysis to support business conclusions"] },
  { title: "Tata Data Visualisation: Empowering Business with Effective Insights", issuer: "Forage Virtual Experience", year: "2026", link: "/Tata Data Analytics Job Simualation Certificate.pdf", bullets: ["Framed business questions from a leadership perspective", "Selected appropriate visuals for analytical scenarios", "Created effective data visualizations", "Communicated insights and analysis clearly"] },
  { title: "Data Analytics Essentials", issuer: "Cisco Networking Academy", year: "2026", link: "/Data_Analytics_Essentials_certificate.pdf", bullets: ["Built foundations in data analytics and interpretation", "Worked with Excel for organizing and analyzing data", "Used SQL to query relational data", "Applied Tableau for data visualization and presentation"] },
  { title: "Introduction to SQL", issuer: "Simplilearn", year: "2026", link: "/SQL certificate Simplilearn.pdf", bullets: ["Learned SQL fundamentals and relational databases", "Worked with MySQL tables, relationships, and views", "Covered ER modeling and database normalization", "Practiced querying and working with structured data"] },
];

export const education = [{ school: "Parul Institute of Engineering and Technology", degree: "B.Tech in Computer Science and Engineering", location: "Vadodara, Gujarat", period: "2022 – 2026" }];
export const timeline = [
  { year: "2022", title: "Started B.Tech in Computer Science", detail: "Enrolled at Parul Institute of Engineering and Technology, Vadodara." },
  { year: "2025", title: "Focused on data analytics", detail: "Built hands-on skills in SQL, Python, Excel, and Tableau through projects." },
  { year: "2026", title: "Deloitte Data Analytics Job Simulation", detail: "Completed the Forage virtual experience program with Deloitte Australia." },
  { year: "2026", title: "Graduating & job-seeking", detail: "Completing B.Tech and targeting Data Analyst / BI roles." },
];
export const achievements = [
  { title: "20.6% sales growth identified", detail: "Sales Performance Dashboard analysis found 20.6% year-over-year sales growth and 43.7% profit growth." },
  { title: "150,413 EV records analyzed", detail: "Built an EV analysis dashboard covering model year, state, manufacturer, vehicle type, model, and CAFV eligibility." },
  { title: "15,090 disaster events analyzed", detail: "Built a Global Disaster Analysis dashboard covering disaster type, country, time, human impact, and economic damage." },
];
export const nav = [
  { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "experience", label: "Experience" }, { id: "skills", label: "Skills" }, { id: "projects", label: "Projects" }, { id: "certifications", label: "Certifications" }, { id: "education", label: "Education" }, { id: "contact", label: "Contact" },
];
