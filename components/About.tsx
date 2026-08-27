"use client";

import { motion } from "framer-motion";
import { Database, Lightbulb, Target } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const highlights = [
  {
    icon: Database,
    title: "I start with the data",
    detail: "I clean, validate, and explore data before building visuals so the analysis is based on something I can trust.",
  },
  {
    icon: Lightbulb,
    title: "I focus on the question",
    detail: "I look for the trend, comparison, or problem that actually matters instead of producing charts for the sake of charts.",
  },
  {
    icon: Target,
    title: "I build for decisions",
    detail: "I use SQL, Python, Excel, Tableau, and Power BI to turn analysis into clear dashboards and practical insights.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- about"
          title="I turn business questions into useful analysis"
          description={`I'm ${profile.name}, a Data Analyst focused on SQL, Python, Excel, Tableau, and Power BI. I work with data from the cleaning and exploration stage through analysis and visualization, with the goal of finding patterns that can support better decisions.`}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="panel p-5 transition-colors hover:border-teal/50"
            >
              <h.icon size={20} className="text-teal" />
              <h3 className="mt-4 font-display text-base text-ink-100">{h.title}</h3>
              <p className="mt-2 text-sm text-ink-400">{h.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
