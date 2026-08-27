"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const logoMap: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  NumPy: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  Matplotlib: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Streamlit: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
};

const getSkills = (id: string) =>
  skillGroups.find((group) => group.id === id)?.skills ?? [];

const sections = [
  { id: "visualization", title: "VISUALIZATION", skills: getSkills("visualization"), span: "lg:col-span-4" },
  { id: "languages", title: "LANGUAGES", skills: getSkills("analysis").filter((skill) => ["Python", "SQL"].includes(skill)), span: "lg:col-span-2" },
  { id: "libraries", title: "LIBRARIES", skills: getSkills("analysis").filter((skill) => ["Pandas", "NumPy"].includes(skill)).concat(getSkills("visualization").filter((skill) => skill === "Matplotlib")), span: "lg:col-span-2" },
  { id: "database", title: "DATABASE", skills: getSkills("database"), span: "lg:col-span-2" },
  { id: "tools", title: "TOOLS", skills: getSkills("workflow").filter((skill) => ["Git", "GitHub", "VS Code"].includes(skill)), span: "lg:col-span-2" },
  {
    id: "concepts",
    title: "CORE CONCEPTS",
    skills: [
      ...getSkills("analysis").filter(
        (skill) => skill === "Data Cleaning" || skill === "Exploratory Data Analysis"
      ),
      ...getSkills("visualization").filter((skill) => skill === "Dashboard Development"),
    ],
    span: "lg:col-span-6",
  },
];

function BrandIcon({ skill }: { skill: string }) {
  if (skill === "Tableau") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path fill="#E97627" d="M11 2h2v4h4v2h-4v4h-2V8H7V6h4V2Zm-7 7h2v3h3v2H6v3H4v-3H1v-2h3V9Zm14 0h2v3h3v2h-3v3h-2v-3h-3v-2h3V9Zm-7 7h2v3h3v2h-3v3h-2v-3H8v-2h3v-3Z" />
      </svg>
    );
  }

  if (skill === "Power BI") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <path fill="#F2C811" d="M4 18h3V9H4v9Zm5 0h3V6H9v12Zm5 0h3V3h-3v15Zm5 0h2V11h-2v7Z" />
      </svg>
    );
  }

  if (skill === "Microsoft Excel") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <rect x="3" y="2" width="18" height="20" rx="2.5" fill="#217346" />
        <path fill="#fff" d="m7 7 3 4-3 6h2.4l1.8-3.8L13 17h2.5l-3.2-6L15 7h-2.4l-1.4 3-1.5-3H7Z" />
      </svg>
    );
  }

  const icon = logoMap[skill];
  if (!icon) return null;

  return (
    <img
      src={icon}
      alt=""
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 object-contain ${skill === "GitHub" ? "brightness-0 invert" : ""}`}
      loading="lazy"
    />
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- skills"
          title="Tools I use to do the work"
          description="A practical analytics stack built around querying, cleaning, analysis, visualization, and version control."
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              className={`panel ${section.span} p-6 transition-colors hover:border-teal/40`}
            >
              <div className="mono-tag mb-5 text-teal">{section.title}</div>

              <div className="flex flex-wrap gap-2.5">
                {section.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-base-500/70 bg-base-700/40 px-3.5 py-2 text-sm text-ink-200 transition-colors hover:border-teal/50 hover:text-ink-100"
                  >
                    <BrandIcon skill={skill} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
