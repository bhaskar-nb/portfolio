"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, Database, GitBranch } from "lucide-react";

const sections = [
  {
    id: "sql",
    title: "SQL",
    icon: Database,
    skills: ["SQL", "MySQL"],
  },
  {
    id: "bi",
    title: "BI & Reporting",
    icon: BarChart3,
    skills: ["Tableau", "Power BI", "Microsoft Excel", "Dashboard Development"],
  },
  {
    id: "python",
    title: "Python & Data Analysis",
    icon: Code2,
    skills: ["Python", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"],
  },
  {
    id: "workflow",
    title: "Tools & Workflow",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Streamlit"],
  },
];

const skills = sections.flatMap((section) =>
  section.skills.map((skill) => ({
    skill,
    category: section.title,
    icon: section.icon,
  }))
);

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-xs text-ink-500 sm:text-sm">
            My Professional Skills
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ skill, category, icon: Icon }, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.025, 0.2) }}
              className="group flex min-h-[68px] items-center gap-3 rounded-xl border border-base-500/80 bg-base-800/55 px-3 py-2.5 transition-all duration-200 hover:border-violet-400/35 hover:bg-base-700/55"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-base-500 bg-base-700/70 text-violet-300 transition-colors group-hover:border-violet-400/30">
                <Icon size={16} aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink-100">
                  {skill}
                </p>
                <p className="mt-0.5 truncate font-mono text-[8px] uppercase tracking-[0.12em] text-ink-600">
                  {category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
