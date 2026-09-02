"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, BarChart3, ArrowUpRight, Database, BriefcaseBusiness } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid opacity-50" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[360px] w-[360px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.86fr] lg:gap-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-400"
          >
            <span className="dot-live" />
            Data Analyst · Open to opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="max-w-3xl"
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{profile.name}</div>
            <h1 className="mt-5 text-balance font-display text-[3.5rem] font-semibold leading-[0.94] tracking-[-0.055em] text-ink-100 sm:text-[5rem] lg:text-[6.35rem]">
              Insights today,
              <br />
              <span className="text-gold">impact tomorrow.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-ink-400 sm:text-lg">
              I turn raw and messy data into clear analysis, useful dashboards, and decision-ready insights using SQL, Python, Excel, Tableau, and Power BI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#projects" className="btn-primary">View projects <ArrowUpRight size={15} /></MagneticButton>
            <MagneticButton href="/Resume.pdf" download className="btn-secondary"><Download size={15} /> Download résumé</MagneticButton>
            <a href="#contact" className="inline-flex min-h-11 items-center px-2 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 transition-colors hover:text-gold">Let&apos;s connect</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34 }}
            className="mt-7 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.13em] text-ink-500"
          >
            <span><strong className="font-medium text-ink-200">15,090</strong> disaster events</span><span>/</span><span><strong className="font-medium text-ink-200">150,413</strong> EV records</span><span>/</span><span><strong className="font-medium text-gold">+20.6%</strong> sales YoY</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42 }}
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-600"
          >
            <span className="text-ink-300">SQL</span><span>/</span><span>Python</span><span>/</span><span>Excel</span><span>/</span><span>Tableau</span><span>/</span><span>Power BI</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center gap-4 border-t border-base-500/80 pt-5"
          >
            <div className="flex items-center gap-1">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink-400 transition-colors hover:text-gold"><Linkedin size={17} /></a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink-400 transition-colors hover:text-gold"><Github size={17} /></a>
              <a href={profile.links.tableau} target="_blank" rel="noreferrer" aria-label="Tableau Public" className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink-400 transition-colors hover:text-gold"><BarChart3 size={17} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink-400 transition-colors hover:text-gold"><Mail size={17} /></a>
            </div>
            <span className="hidden h-4 w-px bg-base-500 sm:block" />
            <span className="font-mono text-[10px] text-ink-600">{profile.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[500px] lg:mr-0"
        >
          <div className="absolute -inset-10 rounded-full bg-gold/10 blur-[90px]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-base-400/70 bg-base-700/70 p-3 shadow-panel backdrop-blur-xl sm:p-4">
            <div className="flex items-center justify-between border-b border-base-500/70 px-2 pb-3">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-500">
                <BriefcaseBusiness size={13} className="text-gold" />
                data analyst / profile
              </div>
              <span className="font-mono text-[9px] text-gold">AVAILABLE</span>
            </div>

            <div className="relative mt-3 overflow-hidden rounded-[1.35rem] border border-base-500 bg-base-900">
              <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-base-900 via-base-900/20 to-transparent" />
              <div className="absolute left-4 top-4 z-30 flex items-center gap-2 rounded-full border border-base-400/80 bg-base-800/70 px-3 py-1.5 font-mono text-[9px] text-ink-300 backdrop-blur-md">
                <Database size={12} className="text-gold" />
                DATA → INSIGHT
              </div>
              <Image
                src="/DP image.png"
                alt={`${profile.name} — Data Analyst`}
                width={700}
                height={760}
                priority
                className="relative z-10 mx-auto h-auto w-full object-contain"
                sizes="(max-width: 1024px) 92vw, 500px"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="rounded-xl border border-base-500 bg-base-800/80 p-3">
                <div className="font-mono text-[9px] uppercase tracking-wider text-ink-600">Projects</div>
                <div className="mt-1 text-xl font-semibold text-ink-100">7+</div>
              </div>
              <div className="rounded-xl border border-base-500 bg-base-800/80 p-3">
                <div className="font-mono text-[9px] uppercase tracking-wider text-ink-600">EV records</div>
                <div className="mt-1 text-xl font-semibold text-ink-100">150K+</div>
              </div>
              <div className="rounded-xl border border-base-500 bg-base-800/80 p-3">
                <div className="font-mono text-[9px] uppercase tracking-wider text-ink-600">Sales YoY</div>
                <div className="mt-1 text-xl font-semibold text-gold">+20.6%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
