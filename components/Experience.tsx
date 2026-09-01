"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Check, Database, LineChart, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const experience = {
  company: "EduExpose.in",
  role: "Data Scientist Intern",
  period: "Feb 2026 – Apr 2026",
  type: "Internship",
  bullets: [
    "Worked with real-world datasets to prepare data for diabetes classification and house-price prediction applications using Python and Streamlit.",
    "Cleaned and prepared datasets, handled categorical features, prepared model inputs, and evaluated model performance using standard metrics.",
    "Built end-to-end data workflows covering data preparation, analysis, model training, prediction, and interactive application deployment.",
  ],
};

const workflow = [
  { icon: Database, label: "Prepare", detail: "Clean and structure data" },
  { icon: LineChart, label: "Analyze", detail: "Explore patterns and inputs" },
  { icon: Workflow, label: "Deliver", detail: "Build interactive applications" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-teal/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- experience" title="From raw data to working applications" description="A hands-on internship where data preparation, analysis, machine-learning workflows, and deployment came together." />

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-base-500/80 bg-base-800/70"
        >
          <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
            <div className="relative overflow-hidden border-b border-base-500/70 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal/5 blur-3xl" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">01 / experience</span>
                  <ArrowUpRight size={17} className="text-ink-600" />
                </div>

                <div className="mt-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-teal/25 bg-teal/10 text-teal">
                  <BriefcaseBusiness size={24} />
                </div>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">{experience.period}</p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-ink-100">{experience.role}</h3>
                <p className="mt-3 text-base text-ink-400">{experience.company}</p>

                <div className="mt-auto pt-10">
                  <span className="inline-flex rounded-full border border-base-500 bg-base-700/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">{experience.type}</span>
                  <p className="mt-5 max-w-xs text-xs leading-6 text-ink-600">Practical exposure to the complete data workflow — not just model output.</p>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-end justify-between border-b border-base-500/70 pb-5">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal">what I worked on</span>
                  <h4 className="mt-2 font-display text-xl text-ink-100">Data workflows in practice</h4>
                </div>
                <span className="hidden font-mono text-[10px] text-ink-600 sm:block">03 / responsibilities</span>
              </div>

              <div className="mt-7 space-y-3">
                {experience.bullets.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    className="group flex gap-4 rounded-2xl border border-base-500/70 bg-base-700/30 p-5 transition-all duration-300 hover:border-teal/35 hover:bg-base-700/60"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-teal/20 bg-teal/5 text-teal">
                      <Check size={14} />
                    </span>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-600">0{i + 1}</span>
                      <p className="mt-1.5 text-sm leading-7 text-ink-300">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {workflow.map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="rounded-2xl border border-base-500/70 bg-base-700/20 p-4">
                    <Icon size={16} className="text-teal" />
                    <p className="mt-4 text-sm font-medium text-ink-200">{label}</p>
                    <p className="mt-1 text-[11px] leading-5 text-ink-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
