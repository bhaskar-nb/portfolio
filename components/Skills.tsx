"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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

const rows = Array.from({ length: Math.ceil(skills.length / 4) }, (_, rowIndex) =>
  skills.slice(rowIndex * 4, rowIndex * 4 + 4)
);

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const rowsContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.28,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-9">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            Skills &amp; Technologies
          </h2>
        </div>

        <motion.div
          className="mt-8 space-y-4"
          variants={rowsContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18, margin: "-20px" }}
        >
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={rowVariants}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            >
              {row.map(({ skill, category, image }) => (
                <div
                  key={skill}
                  className="group flex min-h-[104px] items-center gap-4 rounded-xl border border-violet-400/30 bg-base-800/55 px-5 py-4 shadow-[0_0_18px_rgba(139,92,246,0.16)] transition-all duration-200 hover:border-violet-300/55 hover:bg-base-700/55 hover:shadow-[0_0_28px_rgba(139,92,246,0.30)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-base-500 bg-base-700/70 p-1.5 transition-colors group-hover:border-violet-400/30">
                    <Image src={image} alt="" width={32} height={32} className="h-8 w-8 object-contain" unoptimized />
                  </span>

                  <div className="min-w-0">
                    <p className="truncate text-[0.95rem] font-medium text-ink-100">
                      {skill}
                    </p>
                    <p className="mt-1 truncate font-mono text-[8px] uppercase tracking-[0.12em] text-ink-600">
                      {category}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
