"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/4 top-24 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- education" title="The foundation behind the analysis" description="A Computer Science and Engineering foundation supporting my transition into practical data analytics, visualization, and BI." />
        <div className="mt-12">{education.map((e) => <motion.article key={e.school} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.55 }} className="group relative overflow-hidden rounded-3xl border border-base-500/80 bg-base-800/60 p-7 sm:p-9"><div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/5 blur-3xl" /><div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center"><div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold"><GraduationCap size={23} /></div><div><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">academic foundation</span><h3 className="mt-3 font-display text-2xl leading-tight text-ink-100 sm:text-3xl">{e.school}</h3><p className="mt-2 text-sm text-ink-300 sm:text-base">{e.degree}</p><p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500"><MapPin size={13} className="text-gold" />{e.location}</p><div className="mt-5 flex items-center gap-2 text-xs text-ink-500"><CheckCircle2 size={14} className="text-gold" />Graduating in 2026</div></div><div className="flex items-center justify-between gap-6 border-t border-base-500/70 pt-5 lg:block lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><div><span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">period</span><span className="mt-2 block font-display text-xl text-gold">{e.period}</span></div><ArrowUpRight size={16} className="mt-4 text-ink-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold lg:mt-7" aria-hidden="true" /></div></div></motion.article>)}</div>
      </div>
    </section>
  );
}
