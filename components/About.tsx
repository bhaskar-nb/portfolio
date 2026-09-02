"use client";

import { motion } from "framer-motion";
import { Database, Lightbulb, Target, ArrowDownRight, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const highlights = [
  { icon: Database, number: "01", title: "Clean before I conclude", detail: "I use SQL, Python, and Excel to clean, validate, and explore data before turning it into conclusions." },
  { icon: Lightbulb, number: "02", title: "Find the useful signal", detail: "I focus on trends, patterns, KPIs, and the business story behind the numbers—not charts for the sake of charts." },
  { icon: Target, number: "03", title: "Make insights actionable", detail: "I build focused Tableau and Power BI dashboards that help people understand what changed and what deserves attention." },
];

const workflow = ["Question", "Prepare", "Analyze", "Visualize", "Communicate"];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-base-500/60 py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- about / approach" title="I care about what the data means, not just how it looks." description={`I'm ${profile.name}, a Data Analyst focused on turning raw datasets into clear, decision-ready insights. My workflow moves from data preparation and exploration to visualization and communication across SQL, Python, Excel, Tableau, and Power BI.`} />

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-base-500/80 bg-base-800/70 p-7 sm:p-9">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-gold/5 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">01 / philosophy</span>
                <p className="mt-10 max-w-md font-display text-3xl leading-tight tracking-tight text-ink-100 sm:text-4xl">Raw data is only useful when it leads to a better question, a clearer answer, or a smarter decision.</p>
              </div>
              <div className="mt-12 border-t border-base-500/70 pt-5">
                <div className="flex flex-wrap gap-x-2 gap-y-2 font-mono text-[9px] uppercase tracking-[0.13em] text-ink-500">
                  {workflow.map((step, i) => <span key={step} className="flex items-center gap-2"><span className={i === workflow.length - 1 ? "text-gold" : ""}>{step}</span>{i < workflow.length - 1 && <span className="text-base-400">→</span>}</span>)}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 rounded-3xl border border-base-500/80 bg-base-800/55 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-base-700/70 sm:p-7">
                <span className="font-mono text-[10px] text-gold">{h.number}</span>
                <div><div className="flex items-center gap-3"><h3 className="font-display text-xl text-ink-100">{h.title}</h3><h.icon size={17} className="text-gold opacity-70 transition-transform group-hover:scale-110" aria-hidden="true" /></div><p className="mt-2 max-w-xl text-sm leading-6 text-ink-400">{h.detail}</p></div>
                <ArrowDownRight size={16} className="text-ink-600 transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-gold" aria-hidden="true" />
              </motion.div>
            ))}
            <div className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/[0.04] px-5 py-4 text-xs text-ink-400"><CheckCircle2 size={16} className="shrink-0 text-gold" aria-hidden="true" /><span>Built around evidence, clarity, and decisions—not inflated claims.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
