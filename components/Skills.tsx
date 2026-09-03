"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Database, BarChart3, Code2, GitBranch, Table2, Sparkles } from "lucide-react";
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
  { id: "analytics-core", title: "ANALYTICS CORE", caption: "Query · clean · explore", icon: Code2, skills: getSkills("analysis").filter((s) => ["SQL", "Python", "Data Cleaning", "Exploratory Data Analysis"].includes(s)), span: "lg:col-span-4" },
  { id: "visualization", title: "BI & VISUALIZATION", caption: "Explain · compare · communicate", icon: BarChart3, skills: getSkills("visualization").filter((s) => ["Tableau", "Power BI", "Microsoft Excel", "Dashboard Development"].includes(s)), span: "lg:col-span-2" },
  { id: "libraries", title: "PYTHON LIBRARIES", caption: "Transform · calculate · plot", icon: Table2, skills: getSkills("analysis").filter((s) => ["Pandas", "NumPy"].includes(s)).concat(getSkills("visualization").filter((s) => s === "Matplotlib")), span: "lg:col-span-2" },
  { id: "database", title: "DATABASE", caption: "Structure · query · manage", icon: Database, skills: getSkills("database"), span: "lg:col-span-2" },
  { id: "tools", title: "TOOLS", caption: "Build · version · deliver", icon: GitBranch, skills: getSkills("workflow").filter((s) => ["Git", "GitHub", "VS Code", "Streamlit"].includes(s)), span: "lg:col-span-2" },
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
        <SectionHeading eyebrow="-- skills" title="A stack built for the full analysis loop" description="The tools I use to move from a business question and raw tables to analysis, visualization, and communication." />
        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {sections.map((section, index) => { const Icon = section.icon; return <motion.div key={section.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.5, delay: (index % 3) * 0.07 }} whileHover={{ y: -4 }} className={`group relative overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/60 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-base-700/70 ${section.span}`}><div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:opacity-100" /><div className="relative flex items-start justify-between gap-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-base-500 bg-base-700/60 text-gold"><Icon size={16} aria-hidden="true" /></span><div><span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">{section.title}</span><span className="mt-1 block text-[11px] text-ink-600">{section.caption}</span></div></div><ArrowUpRight size={15} className="text-ink-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" aria-hidden="true" /></div><div className="relative mt-7 flex flex-wrap gap-2.5">{section.skills.map((skill, skillIndex) => <motion.div key={skill} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: skillIndex * 0.035 }} className="inline-flex items-center gap-2 rounded-xl border border-base-500/70 bg-base-700/40 px-3.5 py-2.5 text-sm text-ink-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-base-600/50 hover:text-ink-100"><BrandIcon skill={skill} /><span>{skill}</span></motion.div>)}</div></motion.div>; })}
        </div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 overflow-hidden rounded-2xl border border-gold/20 bg-gold/[0.03] p-5 sm:p-6"><div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">how the stack works together</span><p className="mt-2 max-w-md text-sm leading-6 text-ink-400">Tools are selected for the job: query the data, make it trustworthy, find the signal, then communicate it clearly.</p></div><div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-ink-500">{["question", "raw data", "SQL", "clean", "analyze", "visualize", "insight"].map((step, i) => <span key={step} className="flex items-center gap-2"><span className={i === 0 || i === 6 ? "text-gold" : ""}>{step}</span>{i < 6 && <span className="text-base-400">→</span>}</span>)}</div></div></motion.div>
        <div className="mt-5 flex items-center gap-3 text-xs text-ink-600"><Sparkles size={14} className="text-gold" aria-hidden="true" /><span>Portfolio evidence is prioritized over long tool lists.</span></div>
      </div>
    </section>
  );
}
