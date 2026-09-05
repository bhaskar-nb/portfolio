"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Check, Database, LineChart, Workflow, Layers3, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const experience = {
  company: "EduExpose.in",
  role: "Data Scientist Intern",
  period: "Feb 2026 – Apr 2026",
  type: "Internship",
  bullets: [
    "Worked with real-world datasets for diabetes classification and house-price prediction applications using Python and Streamlit.",
    "Cleaned and prepared datasets, handled categorical features, prepared model inputs, and evaluated model performance using standard metrics.",
    "Built end-to-end workflows covering data preparation, analysis, model training, prediction, and interactive application delivery.",
  ],
};

const workflow = [
  { icon: Database, step: "01", label: "Prepare", detail: "Clean, validate, structure", signal: "Data readiness" },
  { icon: LineChart, step: "02", label: "Analyze", detail: "Explore patterns and inputs", signal: "Analytical reasoning" },
  { icon: Workflow, step: "03", label: "Deliver", detail: "Build interactive apps", signal: "Practical output" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- experience"
          title="From data preparation to delivery"
          description="A hands-on internship where datasets became analysis workflows and interactive applications."
        />

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-base-500/80 bg-base-800/70"
        >
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="relative overflow-hidden border-b border-base-500/70 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/5 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">01 / experience</span>
                  <span className="flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {experience.type}
                  </span>
                </div>

                <div className="mt-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold">
                  <BriefcaseBusiness size={24} aria-hidden="true" />
                </div>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">{experience.period}</p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-ink-100">{experience.role}</h3>
                <p className="mt-3 text-base text-ink-400">{experience.company}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Pandas",
                    "Scikit-learn",
                    "Streamlit",
                  ].map((tech) => (
                    <span key={tech} className="rounded-full border border-base-500 bg-base-700/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 pt-10 text-xs text-ink-600">
                  <span className="flex items-center gap-2"><Layers3 size={14} className="text-gold" aria-hidden="true" /> Dataset → application</span>
                  <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] sm:inline">2026</span>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex flex-col gap-3 border-b border-base-500/70 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">what I worked on</span>
                  <h4 className="mt-2 font-display text-xl text-ink-100">A practical analytics workflow</h4>
                </div>
                <span className="font-mono text-[10px] text-ink-600">03 / responsibilities</span>
              </div>

              <div className="mt-7 space-y-3">
                {experience.bullets.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    className="group flex gap-4 rounded-2xl border border-base-500/70 bg-base-700/30 p-5 transition-all duration-300 hover:border-gold/35 hover:bg-base-700/60"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-gold">
                      <Check size={14} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-600">0{i + 1}</span>
                      <p className="mt-1.5 text-sm leading-7 text-ink-300">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t border-base-500/70 pt-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">workflow</span>
                    <p className="mt-2 text-sm text-ink-400">The working pattern behind the internship</p>
                  </div>
                  <ArrowUpRight size={16} className="text-ink-600" aria-hidden="true" />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {workflow.map(({ icon: Icon, step, label, detail, signal }) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="group rounded-2xl border border-base-500/70 bg-base-700/20 p-4 transition-colors duration-300 hover:border-gold/30 hover:bg-base-700/50"
                    >
                      <div className="flex items-center justify-between">
                        <Icon size={16} className="text-gold" aria-hidden="true" />
                        <span className="font-mono text-[9px] text-ink-600">{step}</span>
                      </div>
                      <p className="mt-4 text-sm font-medium text-ink-200">{label}</p>
                      <p className="mt-1 text-[11px] leading-5 text-ink-600">{detail}</p>
                      <p className="mt-3 border-t border-base-500/60 pt-3 font-mono text-[8px] uppercase tracking-[0.12em] text-gold/70">{signal}</p>
                    </motion.div>
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
