"use client";

import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Database, LineChart, Search, Target } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/data";

const strengths = [
  {
    icon: Database,
    title: "Prepare the data",
    detail: "Clean, validate, transform, and structure datasets with SQL, Python, Pandas, and Excel before drawing conclusions.",
  },
  {
    icon: Search,
    title: "Find the signal",
    detail: "Use exploratory analysis, KPIs, comparisons, and trends to understand what changed and where attention is needed.",
  },
  {
    icon: LineChart,
    title: "Communicate the result",
    detail: "Build focused Tableau and Power BI dashboards that turn analysis into findings stakeholders can understand and use.",
  },
];

const workflow = ["Business question", "Data preparation", "Analysis", "Visualization", "Recommendation"];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-base-500/60 py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-12rem] bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- about / how I work"
          title="I turn messy data into clear answers."
          description="I’m a Data Analyst focused on SQL, Python, Excel, Tableau, and Power BI. My work starts with a business question, moves through disciplined data preparation and analysis, and ends with a clear finding or recommendation."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-gold/[0.08] via-base-800/80 to-base-900/80 p-7 sm:p-9 lg:p-10"
          >
            <div className="absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-gold/[0.07] blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">01 / analyst profile</span>
                <Target size={17} className="text-gold" aria-hidden="true" />
              </div>

              <h3 className="mt-10 max-w-lg font-display text-3xl leading-tight tracking-tight text-ink-100 sm:text-4xl">
                Curious about the problem, disciplined with the data, practical with the answer.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-ink-400 sm:text-base">
                I enjoy working on problems where the numbers need to be cleaned, compared, and explained before they become useful. I’m especially interested in business analytics, performance reporting, and decision-support dashboards.
              </p>

              <div className="mt-auto pt-10">
                <div className="border-t border-base-500/70 pt-5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">My workflow</span>
                  <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                    {workflow.map((step, index) => (
                      <span key={step} className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.11em] text-ink-400">
                        <span className={index === workflow.length - 1 ? "text-gold" : ""}>{step}</span>
                        {index < workflow.length - 1 && <ArrowRight size={11} className="text-ink-600" aria-hidden="true" />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-3xl border border-base-500/80 bg-base-800/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-base-700/70 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.05] text-gold">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold">0{index + 1}</span>
                        <h3 className="font-display text-xl tracking-tight text-ink-100">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-ink-400">{item.detail}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-base-500/70 bg-base-800/45 p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-gold" aria-hidden="true" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-500">What I focus on</span>
                </div>
                <p className="mt-3 text-xs leading-5 text-ink-400">Business questions, data quality, useful metrics, trends, and actionable findings.</p>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-5">
                <div className="flex items-center gap-2">
                  <BriefcaseBusiness size={15} className="text-gold" aria-hidden="true" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold">Target roles</span>
                </div>
                <p className="mt-3 text-xs leading-5 text-ink-400">Data Analyst · BI Analyst · Business Analyst · Reporting Analyst</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 flex flex-col gap-3 rounded-2xl border border-base-500/70 bg-base-800/40 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs leading-5 text-ink-500">I don’t treat a dashboard as the final answer. The useful output is the finding someone can understand and act on.</p>
          <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.16em] text-gold">Question → Evidence → Action</span>
        </motion.div>
      </div>
    </section>
  );
}
