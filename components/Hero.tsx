"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, BarChart3, ArrowDownRight, Database, Activity } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

const [firstName, ...remainingName] = profile.name.split(" ");
const lastName = remainingName.join(" ");

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-teal/5 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400"
          >
            <span className="dot-live" />
            Available for Data Analyst roles
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="select-none font-display leading-[0.82] tracking-[-0.055em]"
            aria-label={profile.name}
          >
            <span className="font-[var(--font-bodoni-moda)] text-[4rem] font-bold text-ink-100 sm:text-[5.8rem] lg:text-[7rem]">{firstName}</span>
            <br />
            <span className="name-outline font-[var(--font-bodoni-moda)] text-[3.55rem] font-normal sm:text-[5.15rem] lg:text-[6.3rem]">{lastName}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 max-w-2xl"
          >
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-teal">Data Analyst / Business Intelligence</div>
            <h1 className="text-balance text-[2.45rem] font-medium leading-[1.02] tracking-[-0.035em] text-ink-100 sm:text-[3.25rem] lg:text-[3.7rem]">
              Turning messy data into <span className="text-teal">clear decisions.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink-400 sm:text-lg">
              I analyze data with SQL, Python, Excel, Tableau, and Power BI — then turn the results into dashboards and insights that are easy to act on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="/Resume.pdf" download className="btn-primary"><Download size={15} /> Download résumé</MagneticButton>
            <MagneticButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn-secondary">Explore selected work <ArrowDownRight size={15} /></MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-ink-400"
          >
            <span>SQL</span><span className="text-base-400">/</span><span>Python</span><span className="text-base-400">/</span><span>Excel</span><span className="text-base-400">/</span><span>Tableau</span><span className="text-base-400">/</span><span>Power BI</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-7 flex items-center gap-4 border-t border-base-500/70 pt-5"
          >
            <div className="flex items-center gap-3">
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-400 transition-colors hover:text-ink-100"><Github size={18} /></a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-400 transition-colors hover:text-ink-100"><Linkedin size={18} /></a>
              <a href={profile.links.tableau} target="_blank" rel="noreferrer" aria-label="Tableau Public" className="text-ink-400 transition-colors hover:text-ink-100"><BarChart3 size={18} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-400 transition-colors hover:text-ink-100"><Mail size={18} /></a>
            </div>
            <div className="hidden h-4 w-px bg-base-500 sm:block" />
            <span className="font-mono text-[11px] text-ink-600">Visakhapatnam, India</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[560px] lg:mr-0"
        >
          <div className="absolute -inset-10 rounded-full bg-teal/5 blur-3xl" />

          <div className="panel relative overflow-hidden bg-base-700/35 p-3 sm:p-4">
            <div className="panel-header px-2 py-2">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                <Activity size={13} className="text-teal" />
                analytics.profile
              </div>
              <span className="font-mono text-[10px] text-ink-600">LIVE / 2026</span>
            </div>

            <div className="relative mt-3 overflow-hidden rounded-xl border border-base-500 bg-base-800">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-900/80 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-base-400 bg-base-800/75 px-3 py-1.5 font-mono text-[10px] text-ink-300 backdrop-blur-md">
                <Database size={12} className="text-teal" />
                DATA → INSIGHT
              </div>
              <Image
                src="/DP image.png"
                alt={`${profile.name} - Data Analyst`}
                width={700}
                height={760}
                priority
                className="relative z-10 mx-auto h-auto w-full object-contain"
                sizes="(max-width: 1024px) 90vw, 560px"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3">
              <div className="rounded-xl border border-base-500 bg-base-800/70 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-ink-600">Projects</div>
                <div className="mt-1 text-xl font-medium text-ink-100">4+</div>
              </div>
              <div className="rounded-xl border border-base-500 bg-base-800/70 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-ink-600">EV records</div>
                <div className="mt-1 text-xl font-medium text-ink-100">150K+</div>
              </div>
              <div className="rounded-xl border border-base-500 bg-base-800/70 p-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-ink-600">Sales YoY</div>
                <div className="mt-1 text-xl font-medium text-teal">+20.6%</div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="panel absolute -bottom-7 -left-4 hidden w-44 bg-base-700/90 p-4 backdrop-blur-md sm:block"
          >
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-600">Latest finding</div>
            <div className="mt-2 text-sm leading-5 text-ink-200">Profit growth outpaced sales growth.</div>
            <div className="mt-2 font-mono text-[10px] text-teal">+43.7% profit YoY</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
