"use client";

import { motion } from "framer-motion";
import { Database, Lightbulb, Target } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const highlights = [
  {
    icon: Database,
    title: "Strong with messy data",
    detail: "I use SQL, Python, and Excel to clean, validate, and explore data so the numbers are reliable before I draw conclusions.",
  },
  {
    icon: Lightbulb,
    title: "Focused on what matters",
    detail: "I look beyond the numbers to find trends, patterns, and the business story behind them — not just make charts.",
  },
  {
    icon: Target,
    title: "Built for decision-making",
    detail: "I turn analysis into clear dashboards and practical insights with Tableau and Power BI that are easy to understand and act on.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- about"
          title="I turn data into insights people can act on"
          description={`I'm ${profile.name}, a Data Analyst who enjoys finding the story behind the numbers. I work across SQL, Python, Excel, Tableau, and Power BI — from cleaning and exploring data to building dashboards and presenting insights clearly. My focus is simple: help turn data into better business decisions.`}
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
