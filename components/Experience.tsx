"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- experience"
          title="Hands-on analytics experience"
          description="The professional experience behind the projects."
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="panel p-6 md:p-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-base-500 bg-base-600/50 text-teal">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="mono-tag text-gold">Feb 2026 – Apr 2026</p>
                <h3 className="mt-1 font-display text-xl text-ink-100">Data Analyst Intern</h3>
                <p className="mt-1 text-sm text-ink-400">EduExpose</p>
              </div>
            </div>
            <span className="rounded-full border border-base-500 px-3 py-1 font-mono text-xs text-ink-400">Internship</span>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {[
              "Worked with data analysis and reporting tasks using SQL, Python, Excel, and visualization tools.",
              "Cleaned and explored datasets to identify trends and prepare information for analysis.",
              "Applied analytical thinking to turn raw data into clear, usable insights.",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-base-500/70 bg-base-600/30 p-4 text-sm text-ink-300">
                <span className="mr-2 text-teal">▸</span>{item}
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
