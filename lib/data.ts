// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH — visible portfolio content lives here.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Bhaskar Nakka",
  role: "Data Analyst",
  roles: ["Data Analyst", "BI Analyst", "Business Analyst"],
  location: "Visakhapatnam, India",
  phone: "+91 9652020300",
  email: "bn7740401@gmail.com",
  summary: "Data Analyst focused on SQL, Python, Excel, Tableau, and Power BI. I clean and analyze data, build decision-focused dashboards, and turn business questions into clear, evidence-backed insights.",
  links: { linkedin: "https://www.linkedin.com/in/bhaskar-nakka/", github: "https://github.com/bhaskar-nb", tableau: "https://public.tableau.com/app/profile/bhaskar.nakka4980" },
  githubUsername: "bhaskar-nb",
};

export const skillGroups = [
  { id: "analysis", label: "Analytics", query: "SELECT skill FROM analytics", skills: ["SQL", "Python", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"] },
  { id: "visualization", label: "BI & Visualization", query: "SELECT tool FROM visualization", skills: ["Tableau", "Power BI", "Microsoft Excel", "Matplotlib", "Dashboard Development"] },
  { id: "database", label: "Database", query: "SELECT tool FROM database", skills: ["MySQL"] },
  { id: "workflow", label: "Workflow & Tools", query: "SELECT tool FROM workflow_tools", skills: ["Git", "GitHub", "VS Code", "Streamlit"] },
];

export const projects = [
  {
    id: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    stack: ["Tableau"],
    summary: "An interactive sales analytics dashboard built to evaluate revenue growth, profitability, sales volume, product performance, and year-over-year trends.",
    features: [
      "Year-over-year sales, profit, and quantity KPI analysis",
      "Category and sub-category performance analysis",
      "Revenue versus profitability comparison",
      "Product-level performance exploration",
      "Interactive filtering for deeper comparisons",
    ],
    challenges: "How did sales and profitability change over time, which categories and products drove performance, and where did strong revenue fail to translate into equally strong profit?",
    approach: "Connected four related CSV datasets in Tableau, structured the analysis around sales, profit, and quantity KPIs, compared year-over-year performance, then drilled from category and sub-category level down to product-level profitability.",
    evidence: "In 2023, total sales reached $164.42M (+20.6% YoY), total profit reached $27.89M (+43.7%), and total quantity reached 12K (+26.8%). The sub-category view shows Chairs as the largest sales contributor, while Phones and Appliances show stronger profit contribution. Tables generate high sales but are loss-making, illustrating why revenue alone is not enough to judge performance.",
    learnings: "Strengthened KPI design, year-over-year comparison, profitability analysis, dashboard hierarchy, interactive filtering, and the ability to distinguish sales volume from profitable growth.",
    recommendation: "Evaluate revenue growth together with profit performance. Prioritize investigation of high-sales but loss-making areas such as Tables, and compare product and sub-category profitability before making portfolio decisions.",
    dataset: "4 related CSV datasets — Orders, Customers, Products, and Location",
    methodology: ["Source data", "Tableau data modeling", "KPI analysis", "YoY comparison", "Category & product analysis", "Dashboard & recommendations"],
    metrics: [
      { value: "$164.42M", label: "2023 sales" },
      { value: "+20.6%", label: "sales YoY" },
      { value: "$27.89M", label: "2023 profit" },
      { value: "+43.7%", label: "profit YoY" },
      { value: "12K", label: "2023 quantity" },
      { value: "+26.8%", label: "quantity YoY" },
    ],
    businessQuestions: [
      "How did sales, profit, and quantity change year over year?",
      "Which sub-categories contribute most to sales and profit?",
      "Where is high revenue not translating into equally strong profitability?",
      "Which periods show stronger or weaker performance?",
      "Which parts of the product portfolio deserve further investigation?",
    ],
    github: "https://github.com/bhaskar-nb/sales-dashboard",
    demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/SalesDashboardProject_17823218142750/SalesDashboard"
  },
  {
    id: "global-disaster-analysis",
    title: "Global Disaster Analysis",
    stack: ["Tableau"],
    summary: "15,090 disaster events analyzed across disaster types, countries, time, human impact, and economic damage to compare where frequency and severity diverge.", features: ["Disaster frequency and severity analysis", "Human impact and economic damage exploration", "Country, disaster-type, and time-based comparisons"], challenges: "How can disaster patterns be compared across frequency, human impact, geography, and economic damage without reducing the story to event counts alone?", approach: "Organized the analysis around frequency, severity, human impact, geography, and economic damage so the dashboard supports comparison rather than a single event-count view.", evidence: "15,090 disaster events analyzed across the available dataset.", learnings: "Strengthened KPI selection, geographic analysis, impact-focused storytelling, and dashboard hierarchy.", recommendation: "Compare event frequency with human and economic impact before prioritizing regions or disaster types; high frequency does not automatically mean highest severity.", github: "https://github.com/bhaskar-nb/disaster-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/DisasterAnalysis_17869126013330/Globaldashboard"
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    stack: ["Tableau", "Python", "Pandas", "NumPy", "Faker"],
    summary: "Workforce analysis covering hiring, terminations, demographics, departments, compensation, performance, and geography using explicitly synthetic employee data.", features: ["Workforce, hiring, and termination KPIs", "Department, demographic, salary, and performance analysis", "Synthetic employee dataset generated and prepared with Python"], challenges: "How can workforce composition, hiring, attrition, and compensation patterns be presented clearly to HR stakeholders?", approach: "Generated and prepared a synthetic employee dataset with Python, then organized workforce, hiring, termination, compensation, performance, and demographic views into a stakeholder-oriented dashboard.", evidence: "Synthetic employee data was used for the analysis; conclusions are illustrative and demonstrate the analytical workflow rather than represent a real workforce.", learnings: "Strengthened synthetic data generation, preparation, KPI design, and dashboard communication.", recommendation: "Use department-level workforce and attrition views to identify areas that warrant deeper HR investigation rather than treating overall workforce metrics as sufficient.", github: "https://github.com/bhaskar-nb/hr-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/HRDashboard_17824941977350/HRSummary_1"
  },
  {
    id: "ev-adoption-dashboard",
    title: "EV Adoption Dashboard",
    stack: ["Tableau"],
    summary: "Analysis of 150,413 electric vehicle records across model years, states, manufacturers, vehicle types, models, and eligibility categories.", features: ["Manufacturer and vehicle-type comparisons", "State-level geographic analysis", "Model-year and CAFV eligibility exploration"], challenges: "How do EV registrations vary by geography, manufacturer, vehicle type, and model year within the available dataset?", approach: "Segmented registrations by geography, manufacturer, vehicle type, model year, model, and CAFV eligibility to make the dataset easier to compare across multiple dimensions.", evidence: "150,413 EV records analyzed across the available dataset.", learnings: "Improved geographic analysis, dataset-scope communication, and interactive dashboard design.", recommendation: "Use geographic and manufacturer-level comparisons to identify where EV adoption is concentrated and which segments may need deeper market analysis.", github: "https://github.com/bhaskar-nb/ev-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/EVDashboard_17866424745700/EvDashboard"
  },
];

export const additionalProjects = [
  { id: "hospital-emergency-dashboard", title: "Hospital Emergency Room Analysis", category: "Excel · Healthcare Analytics", stack: ["Excel", "Pivot Tables", "Dashboard"], summary: "Operational healthcare analysis across 9,216 patient records, covering patient volume, admissions, waiting time, satisfaction, demographics, referrals, and daily trends.", github: "https://github.com/bhaskar-nb/hospital-emergency-dashboard", demo: "" },
  { id: "decodelabs-internship", title: "DecodeLabs Data Analytics Internship", category: "End-to-End Analytics", stack: ["Python", "SQL", "Tableau"], summary: "End-to-end analytics workflow covering data cleaning, exploratory analysis, SQL business analysis, and Tableau reporting across a shared dataset.", github: "https://github.com/bhaskar-nb/DecodeLabs-Internship", demo: "" },
  { id: "house-price-prediction", title: "House Price Prediction", category: "Applied Machine Learning", stack: ["Python", "Scikit-learn", "Streamlit"], summary: "End-to-end house price prediction application with preprocessing, Random Forest regression, feature handling, batch prediction, and an interactive Streamlit interface.", github: "https://github.com/bhaskar-nb/house-price-prediction", demo: "" },
  { id: "amazon-prime-content-intelligence", title: "Amazon Prime Content Intelligence", category: "Data Visualization", stack: ["Tableau"], summary: "Catalog analysis exploring movies versus TV shows, genres, ratings, release trends, countries, and content composition.", github: "https://github.com/bhaskar-nb/amazon-prime-dashboard", demo: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/AmazonprimeAnalysis_17871481548780/AMAZONCONTENTINTELLIGENCEDASHBOARD" },
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
  { title: "8 analytics projects", detail: "Eight projects across Tableau, Excel, Python, SQL, Streamlit, and applied machine learning." },
  { title: "20.6% sales growth identified", detail: "Sales Performance Dashboard analysis found 20.6% year-over-year sales growth and 43.7% profit growth." },
  { title: "150,413 EV records analyzed", detail: "Built an EV analysis dashboard covering model year, state, manufacturer, vehicle type, model, and CAFV eligibility." },
];
export const nav = [
  { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "projects", label: "Projects" }, { id: "experience", label: "Experience" }, { id: "skills", label: "Skills" }, { id: "certifications", label: "Certifications" }, { id: "education", label: "Education" }, { id: "contact", label: "Contact" },
];
