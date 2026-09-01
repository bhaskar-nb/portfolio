"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, CheckCircle2 } from "lucide-react";
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

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-teal/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- experience" title="Hands-on experience with real data" description="An internship focused on practical data preparation, analysis, machine learning workflows, and interactive applications." />

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-base-500/80 bg-base-800/60"
        >
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="relative border-b border-base-500/70 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-teal/5 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">01 / experience</span>
                  <ArrowUpRight size={17} className="text-ink-600" />
                </div>
                <div className="mt-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-teal/25 bg-teal/10 text-teal">
                  <Briefcase size={24} />
                </div>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">{experience.period}</p>
                <h3 className="mt-3 font-display text-3xl leading-tight text-ink-100">{experience.role}</h3>
                <p className="mt-3 text-base text-ink-400">{experience.company}</p>
                <span className="mt-6 inline-flex rounded-full border border-base-500 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">{experience.type}</span>
              </div>
            </div>

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="mb-7 flex items-center justify-between border-b border-base-500/70 pb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-600">responsibilities.log</span>
                <span className="font-mono text-[10px] text-teal">3 / 3</span>
              </div>
              <div className="space-y-4">
                {experience.bullets.map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }} className="group flex gap-4 rounded-2xl border border-base-500/70 bg-base-700/30 p-5 transition-all duration-300 hover:border-teal/35 hover:bg-base-700/60">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal transition-transform group-hover:scale-110" />
                    <div><span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-600">0{i + 1}</span><p className="mt-2 text-sm leading-7 text-ink-300">{item}</p></div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {['Python', 'Streamlit', 'ML workflows'].map((item) => <div key={item} className="rounded-xl border border-base-500/70 bg-base-700/30 px-3 py-3 text-center font-mono text-[9px] uppercase tracking-wider text-ink-400">{item}</div>)}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
