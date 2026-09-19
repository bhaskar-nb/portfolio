"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    id: "sql",
    title: "SQL",
    skills: [
      { name: "SQL", image: "https://img.icons8.com/color/96/sql.png" },
      { name: "MySQL", image: "https://img.icons8.com/color/96/mysql-logo.png" },
    ],
  },
  {
    id: "bi",
    title: "BI & Reporting",
    skills: [
      { name: "Tableau", image: "https://img.icons8.com/color/96/tableau-software.png" },
      { name: "Power BI", image: "https://img.icons8.com/color/96/power-bi.png" },
      { name: "Microsoft Excel", image: "https://img.icons8.com/color/96/microsoft-excel-2019.png" },
      { name: "Dashboard Development", image: "https://img.icons8.com/color/96/dashboard-layout.png" },
    ],
  },
  {
    id: "python",
    title: "Python & Data Analysis",
    skills: [
      { name: "Python", image: "https://img.icons8.com/color/96/python--v1.png" },
      { name: "Pandas", image: "https://img.icons8.com/color/96/pandas.png" },
      { name: "NumPy", image: "https://img.icons8.com/color/96/numpy.png" },
      { name: "Data Cleaning", image: "https://img.icons8.com/color/96/broom.png" },
      { name: "Exploratory Data Analysis", image: "https://img.icons8.com/color/96/combo-chart--v1.png" },
    ],
  },
  {
    id: "workflow",
    title: "Tools & Workflow",
    skills: [
      { name: "Git", image: "https://img.icons8.com/color/96/git.png" },
      { name: "GitHub", image: "https://img.icons8.com/ios-glyphs/96/github.png" },
      { name: "VS Code", image: "https://img.icons8.com/color/96/visual-studio-code-2019.png" },
      { name: "Streamlit", image: "https://img.icons8.com/color/96/streamlit.png" },
    ],
  },
];

const skills = sections.flatMap((section) =>
  section.skills.map((item) => ({
    skill: item.name,
    category: section.title,
    image: item.image,
  }))
);

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-9">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-1.5 text-xs text-ink-500 sm:text-sm">
            My Professional Skills
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map(({ skill, category, image }, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.65,
                delay: Math.min(index * 0.035, 0.28),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex min-h-[88px] items-center gap-3.5 rounded-xl border border-base-500/80 bg-base-800/55 px-4 py-3 transition-all duration-200 hover:border-violet-400/35 hover:bg-base-700/55"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-base-500 bg-base-700/70 p-1.5 transition-colors group-hover:border-violet-400/30">
                <Image src={image} alt="" width={30} height={30} className="h-7.5 w-7.5 object-contain" unoptimized />
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
