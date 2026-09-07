"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Check, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const experience = {
  company: "EduExpose.in",
  role: "Data Analyst Intern",
  period: "Feb 2026 – Apr 2026",
  type: "Internship",
  bullets: [
    "Worked with real-world datasets for diabetes classification and house-price prediction applications using Python and Streamlit.",
    "Cleaned and prepared datasets with Python, handled categorical features, prepared model inputs, and evaluated model performance using standard metrics.",
    "Built end-to-end workflows covering data preparation, exploratory analysis, model training, prediction, and interactive application delivery.",
  ],
};

const tools = ["Python", "Pandas", "Scikit-learn", "Streamlit"];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- professional experience"
          title="Data Analyst Intern"
          description="Professional experience applying data preparation, analysis, predictive workflows, and application delivery to practical datasets."
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-[2rem] border border-base-500/80 bg-base-800/60"
        >
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-base-500/70 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">01 / work experience</span>
                <span className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-gold">{experience.type}</span>
              </div>

              <div className="mt-10 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                <BriefcaseBusiness size={21} aria-hidden="true" />
              </div>

              <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.16em] text-gold">{experience.period}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-ink-100">{experience.role}</h3>
              <p className="mt-2 text-base font-medium text-ink-300">{experience.company}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-base-500 bg-base-700/50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-400">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-10 border-t border-base-500/70 pt-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">Role scope</p>
                <p className="mt-2 text-sm leading-6 text-ink-400">Data preparation · exploratory analysis · predictive workflows · application delivery</p>
              </div>
            </div>

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-end justify-between gap-4 border-b border-base-500/70 pb-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">responsibilities</span>
                  <h4 className="mt-2 font-display text-xl text-ink-100">What I worked on</h4>
                </div>
                <ArrowUpRight size={17} className="shrink-0 text-ink-600" aria-hidden="true" />
              </div>

              <div className="mt-7 space-y-3">
                {experience.bullets.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-4 rounded-2xl border border-base-500/70 bg-base-700/25 p-5 transition-colors duration-300 hover:border-gold/30 hover:bg-base-700/45"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-gold">
                      <Check size={14} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink-600">0{i + 1} / responsibility</span>
                      <p className="mt-1.5 text-sm leading-7 text-ink-300">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t border-base-500/70 pt-7">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">workflow</span>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Prepare the data", "Analyze and evaluate", "Deliver the application"].map((step, i) => (
                    <div key={step} className="rounded-xl border border-base-500/70 bg-base-700/20 p-4">
                      <span className="font-mono text-[9px] text-gold">0{i + 1}</span>
                      <p className="mt-3 text-sm font-medium text-ink-200">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
