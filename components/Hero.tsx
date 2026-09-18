"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-base-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.14]" />
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-violet-500/[0.10] blur-[120px]" />
      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[1400px] items-center gap-14 px-5 py-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(167,139,250,0.9)]" />
            Open to data analyst opportunities
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300">Hello, I&apos;m</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(3.7rem,8vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-ink-100">{profile.name}</h1>
          <p className="mt-5 font-mono text-sm uppercase tracking-[0.22em] text-violet-300 sm:text-base">Data Analyst · SQL · Python · BI</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ink-400 sm:text-lg">I clean, analyze, and visualize data to turn business questions into clear findings and decision-focused dashboards.</p>
          <div className="mt-8 flex flex-wrap gap-2">{["SQL","Python","Excel","Tableau","Power BI"].map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400">{skill}</span>)}</div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects" className="btn-primary">View projects <ArrowUpRight size={15} /></MagneticButton>
            <MagneticButton href="/Resume.pdf" download className="btn-secondary"><Download size={15} /> Download résumé</MagneticButton>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: 0.1 }} className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-10 rounded-[44px] bg-violet-500/[0.09] blur-[70px]" />
          <div className="relative rounded-[34px] border border-violet-400/20 bg-white/[0.035] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.35),0_0_70px_rgba(124,58,237,0.10)] backdrop-blur-xl sm:p-3">
            <div className="absolute right-6 top-6 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-violet-200">Data / analytics</div>
            <div className="relative aspect-[4/5] max-h-[650px] overflow-hidden rounded-[27px] border border-white/[0.09] bg-base-800">
              <Image src="/DP image.png" alt={`${profile.name} — Data Analyst`} fill sizes="(max-width: 1024px) 90vw, 520px" className="object-cover object-top" priority />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-5 pt-24">
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-violet-200">Data → Insight → Action</div>
                <div className="mt-2 text-xl font-semibold text-white">Dashboards built for decisions.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
