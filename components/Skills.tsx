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
  { id: "analytics-core", title: "ANALYTICS CORE", caption: "Query · clean · explore", icon: Code2, skills: getSkills("analysis").filter((s) => ["SQL", "Python", "Data Cleaning", "Exploratory Data Analysis"].includes(s)), span: "lg:col-span-4", priority: true },
  { id: "visualization", title: "BI & VISUALIZATION", caption: "Explain · compare · communicate", icon: BarChart3, skills: getSkills("visualization").filter((s) => ["Tableau", "Power BI", "Microsoft Excel", "Dashboard Development"].includes(s)), span: "lg:col-span-2", priority: true },
  { id: "libraries", title: "PYTHON LIBRARIES", caption: "Transform · calculate · plot", icon: Table2, skills: getSkills("analysis").filter((s) => ["Pandas", "NumPy"].includes(s)).concat(getSkills("visualization").filter((s) => s === "Matplotlib")), span: "lg:col-span-2", priority: false },
  { id: "database", title: "DATABASE", caption: "Structure · query · manage", icon: Database, skills: getSkills("database"), span: "lg:col-span-2", priority: false },
  { id: "tools", title: "TOOLS", caption: "Build · version · deliver", icon: GitBranch, skills: getSkills("workflow").filter((s) => ["Git", "GitHub", "VS Code", "Streamlit"].includes(s)), span: "lg:col-span-2", priority: false },
];

function BrandIcon({ skill }: { skill: string }) {
  const icon = logoMap[skill];
  if (!icon) {
    if (skill === "Tableau") return <span className="font-bold text-[11px] text-gold">T</span>;
    if (skill === "Power BI") return <span className="font-bold text-[11px] text-gold">P</span>;
    if (skill === "Microsoft Excel") return <span className="font-bold text-[11px] text-gold">X</span>;
    return null;
  }
  // Devicon assets are intentionally loaded as lightweight decorative remote SVGs.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={icon} alt="" aria-hidden="true" className={`h-5 w-5 shrink-0 object-contain ${skill === "GitHub" ? "brightness-0 invert" : ""}`} loading="lazy" />;
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- skills" title="The stack behind the analysis" description="A focused toolkit for querying data, preparing it, finding the signal, and turning analysis into clear business-facing visuals." />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className={`group relative overflow-hidden rounded-2xl border ${section.priority ? "border-gold/25 bg-base-800/75" : "border-base-500/70 bg-base-800/50"} p-6 transition-all duration-300 hover:border-gold/45 hover:bg-base-700/70 ${section.span}`}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-base-500 bg-base-700/60 text-gold">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">{section.title}</span>
                      <span className="mt-1 block text-[11px] text-ink-600">{section.caption}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] tracking-widest text-ink-600">0{index + 1}</span>
                </div>

                <div className="relative mt-7 flex flex-wrap gap-2.5">
                  {section.skills.map((skill) => (
                    <div key={skill} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-base-500/70 bg-base-700/40 px-3.5 py-2.5 text-sm text-ink-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-base-600/50 hover:text-ink-100">
                      <BrandIcon skill={skill} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mt-5 overflow-hidden rounded-2xl border border-gold/20 bg-gold/[0.03] p-5 sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">analysis workflow</span>
              <p className="mt-2 max-w-md text-sm leading-6 text-ink-400">The stack follows the work, not the other way around: start with the question and finish with an actionable insight.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[9px] uppercase tracking-wider text-ink-500">
              {["question", "raw data", "SQL", "clean", "analyze", "visualize", "insight"].map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className={i === 0 || i === 6 ? "text-gold" : ""}>{step}</span>
                  {i < 6 && <span className="text-base-400">→</span>}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-5 flex items-center gap-3 text-xs text-ink-600">
          <Sparkles size={14} className="text-gold" aria-hidden="true" />
          <span>Core analytics and BI tools are surfaced first; supporting tools stay secondary.</span>
        </div>
      </div>
    </section>
  );
}
