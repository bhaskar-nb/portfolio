"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Database, Sparkles } from "lucide-react";

const proof = [
  { value: "20.6%", label: "sales growth identified", meta: "year over year", icon: BarChart3 },
  { value: "43.7%", label: "profit growth identified", meta: "portfolio evidence", icon: Sparkles },
  { value: "150,413", label: "EV records analyzed", meta: "dataset scope", icon: Database },
];

export default function RecruiterProof() {
  return (
    <section aria-labelledby="recruiter-proof-title" className="relative overflow-hidden border-y border-base-500/70 bg-base-800/50 py-12">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md"><p className="section-eyebrow">-- recruiter snapshot</p><h2 id="recruiter-proof-title" className="mt-3 font-display text-2xl tracking-tight text-ink-100 sm:text-3xl">Proof before the pitch.</h2><p className="mt-3 text-sm leading-6 text-ink-400">Three verified signals from the projects below, designed for a fast first scan.</p></div>
          <div className="grid flex-1 gap-3 sm:grid-cols-3 lg:max-w-2xl">{proof.map((item, index) => { const Icon = item.icon; return <motion.div key={item.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="group rounded-2xl border border-base-500/80 bg-base-700/60 p-4 transition-all hover:-translate-y-1 hover:border-gold/40"><div className="flex items-center justify-between"><Icon size={16} className="text-gold" aria-hidden="true" /><span className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink-600">0{index + 1}</span></div><div className="mt-4 font-display text-2xl text-ink-100">{item.value}</div><p className="mt-1 text-xs leading-5 text-ink-300">{item.label}</p><span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.13em] text-ink-600">{item.meta}</span></motion.div>; })}</div>
          <a href="#projects" className="inline-flex min-h-11 shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gold transition-colors hover:text-ink-100">Explore evidence <ArrowRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
