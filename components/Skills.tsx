"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, Database, GitBranch } from "lucide-react";
import { skillGroups } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const getSkills = (id: string) => skillGroups.find((group) => group.id === id)?.skills ?? [];

const sections = [
  {
    id: "sql",
    title: "SQL",
    caption: "Query · join · analyze",
    icon: Database,
    skills: ["SQL", "MySQL"],
    featured: true,
  },
  {
    id: "bi",
    title: "BI & Reporting",
    caption: "Visualize · compare · communicate",
    icon: BarChart3,
    skills: ["Tableau", "Power BI", "Microsoft Excel", "Dashboard Development"],
    featured: true,
  },
  {
    id: "python",
    title: "Python & Data Analysis",
    caption: "Clean · transform · explore",
    icon: Code2,
    skills: ["Python", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis"],
    featured: true,
  },
  {
    id: "workflow",
    title: "Tools & Workflow",
    caption: "Version · build · deliver",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Streamlit"],
    featured: false,
  },
];

function SkillPill({ skill, priority = false }: { skill: string; priority?: boolean }) {
  return (
    <span className={`inline-flex min-h-10 items-center rounded-xl border px-3.5 py-2 text-sm transition-colors duration-200 hover:border-gold/45 hover:bg-base-700/75 ${priority ? "border-gold/25 bg-gold/[0.06] font-medium text-ink-100" : "border-base-500/80 bg-base-700/45 text-ink-200"}`}>
      {skill}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-15 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- skills"
          title="A data analyst stack, shown in priority order"
          description="The core tools are placed first because they are the skills most relevant to the roles I am targeting. Supporting tools stay visible without competing with the main analytics stack."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {sections.slice(0, 3).map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-gold/20 bg-base-800/70 p-6 sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink-100">{section.title}</h3>
                    <p className="mt-1 text-xs text-ink-600">{section.caption}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {section.skills.map((skill, skillIndex) => <SkillPill key={skill} skill={skill} priority={skillIndex < 2} />)}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {sections.slice(3).map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-base-500/80 bg-base-800/55 p-5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-base-500 bg-base-700/60 text-gold">
                    <Icon size={15} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ink-100">{section.title}</h3>
                    <p className="mt-1 text-[11px] text-ink-600">{section.caption}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.skills.map((skill) => <SkillPill key={skill} skill={skill} />)}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-base-500/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-ink-500">
            Skills are backed by the projects and internship above — the section shows the tools, while the rest of the portfolio shows how they were used.
          </p>
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-gold">tools → evidence</span>
        </div>
      </div>
    </section>
  );
}
