"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, BarChart3, Code2, GitBranch, Table2 } from "lucide-react";
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

const getSkills = (id: string) => skillGroups.find((group) => group.id === id)?.skills ?? [];

const sections = [
  { id: "analytics-core", title: "ANALYTICS CORE", icon: Code2, skills: getSkills("analysis").filter((s) => ["SQL", "Python", "Data Cleaning", "Exploratory Data Analysis"].includes(s)), span: "lg:col-span-4" },
  { id: "visualization", title: "BI & VISUALIZATION", icon: BarChart3, skills: getSkills("visualization").filter((s) => ["Tableau", "Power BI", "Microsoft Excel", "Dashboard Development"].includes(s)), span: "lg:col-span-2" },
  { id: "libraries", title: "PYTHON LIBRARIES", icon: Table2, skills: getSkills("analysis").filter((s) => ["Pandas", "NumPy"].includes(s)).concat(getSkills("visualization").filter((s) => s === "Matplotlib")), span: "lg:col-span-2" },
  { id: "database", title: "DATABASE", icon: Database, skills: getSkills("database"), span: "lg:col-span-2" },
  { id: "tools", title: "TOOLS", icon: GitBranch, skills: getSkills("workflow").filter((s) => ["Git", "GitHub", "VS Code", "Streamlit"].includes(s)), span: "lg:col-span-2" },
];

function BrandIcon({ skill }: { skill: string }) {
  const icon = logoMap[skill];
  if (!icon) {
    if (skill === "Tableau") return <span className="font-bold text-[11px] text-gold">T</span>;
    if (skill === "Power BI") return <span className="font-bold text-[11px] text-gold">P</span>;
    if (skill === "Microsoft Excel") return <span className="font-bold text-[11px] text-gold">X</span>;
    return null;
  }
  return <img src={icon} alt="" aria-hidden="true" className={`h-5 w-5 shrink-0 object-contain ${skill === "GitHub" ? "brightness-0 invert" : ""}`} loading="lazy" />;
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- skills" title="The tools behind the decisions" description="A practical stack for taking data from raw tables to analysis, dashboards, and decision-ready insights." />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div key={section.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.5, delay: (index % 3) * 0.07 }} whileHover={{ y: -4 }} className={`group relative overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/60 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-base-700/70 ${section.span}`}>
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-base-500 bg-base-700/60 text-gold"><Icon size={16} /></span><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">{section.title}</span></div>
                  <ArrowUpRight size={15} className="text-ink-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>
                <div className="relative mt-7 flex flex-wrap gap-2.5">
                  {section.skills.map((skill, skillIndex) => (
                    <motion.div key={skill} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: skillIndex * 0.035 }} className="inline-flex items-center gap-2 rounded-xl border border-base-500/70 bg-base-700/40 px-3.5 py-2.5 text-sm text-ink-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-base-600/50 hover:text-ink-100">
                      <BrandIcon skill={skill} /><span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 overflow-hidden rounded-2xl border border-base-500/70 bg-base-800/40 p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">workflow</span><p className="mt-2 max-w-md text-sm leading-6 text-ink-400">The stack is only useful when each step produces something the next step can trust.</p></div>
            <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-ink-500">
              {["raw data", "SQL", "clean", "analyze", "visualize", "insight"].map((step, i) => <span key={step} className="flex items-center gap-2"><span className={i === 5 ? "text-ink-200" : ""}>{step}</span>{i < 5 && <span className="text-gold">→</span>}</span>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
