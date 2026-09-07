"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, BarChart3, ArrowUpRight, ChevronDown, ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

const tools = ["SQL", "Python", "Tableau", "Power BI", "Excel"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-base-900">
      {/* Opening */}
      <div className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-grid opacity-35" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55vw] w-[55vw] max-h-[760px] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[150px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-base-900 via-base-900/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <div className="absolute left-0 top-0 z-20 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-300 sm:text-[10px]">
            <span className="text-ink-100">BN</span><span className="mx-2 text-gold">/</span>{profile.name}
            <span className="mt-1 block text-[8px] tracking-[0.3em] text-ink-600">DATA ANALYST</span>
          </div>

          <div className="absolute right-0 top-0 z-20 hidden items-center gap-5 font-mono text-[9px] uppercase tracking-[0.3em] text-ink-500 sm:flex">
            <span>DATA</span><ArrowRight size={12} className="text-gold" /><span>INSIGHT</span><ArrowRight size={12} className="text-gold" /><span>IMPACT</span>
          </div>

          <div className="relative flex min-h-[calc(100svh-8rem)] items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute left-1/2 top-[10%] z-10 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.42em] text-ink-400 sm:text-xs"
            >
              Welcome to my <span className="text-gold">portfolio</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.12 }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-[46%] whitespace-nowrap select-none font-display text-[22vw] font-semibold leading-none tracking-[-0.08em] text-transparent [background:linear-gradient(180deg,#d8e8e2_0%,#22c55e_42%,#063b26_100%)] bg-clip-text opacity-20"
            >
              PORTFOLIO
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.18 }}
              className="relative z-10 mt-10 h-[72svh] w-full max-w-[620px] sm:h-[78svh]"
            >
              <Image
                src="/DP image.png"
                alt={`${profile.name} — Data Analyst`}
                fill
                priority
                sizes="(max-width: 640px) 92vw, 620px"
                className="object-contain object-bottom drop-shadow-[0_25px_70px_rgba(34,197,94,0.14)]"
              />
            </motion.div>

            <div className="absolute left-0 bottom-10 z-20 hidden max-w-[190px] sm:block">
              <div className="mb-3 h-px w-10 bg-gold" />
              <p className="font-mono text-[8px] uppercase leading-4 tracking-[0.25em] text-ink-500">From data<br />to a brighter tomorrow</p>
            </div>

            <div className="absolute right-0 bottom-10 z-20 hidden text-right sm:block">
              <p className="font-mono text-[8px] uppercase leading-4 tracking-[0.25em] text-ink-500">Build · Analyze<br />Visualize · Repeat</p>
              <div className="ml-auto mt-3 h-px w-10 bg-gold" />
            </div>

            <a href="#intro" aria-label="Scroll to introduction" className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[8px] uppercase tracking-[0.28em] text-ink-500 transition-colors hover:text-gold">
              <span>Scroll to explore</span><ChevronDown size={14} className="text-gold" />
            </a>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div id="intro" className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden border-t border-base-500/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20" />
        <div className="pointer-events-none absolute left-[15%] top-1/4 h-72 w-72 rounded-full bg-gold/5 blur-[110px]" />
        <div className="pointer-events-none absolute right-[5%] bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto h-[52svh] min-h-[420px] w-full max-w-[470px] sm:h-[68svh] lg:mx-0 lg:h-[76svh]"
          >
            <div className="absolute inset-8 rounded-[2.5rem] border border-gold/15 bg-gold/[0.025]" />
            <div className="absolute inset-x-8 bottom-0 h-2/3 rounded-[2.5rem] bg-gradient-to-t from-gold/10 to-transparent blur-3xl" />
            <Image
              src="/DP image.png"
              alt={`${profile.name} — portrait`}
              fill
              sizes="(max-width: 1024px) 90vw, 470px"
              className="relative z-10 object-contain object-bottom"
            />
            <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2 font-display text-3xl italic leading-[1.05] text-gold/80 sm:text-4xl">
              Same data.<br />Bigger questions.
            </div>
            <div className="absolute bottom-4 left-0 z-20 h-px w-16 bg-gold" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="relative"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.22em] text-gold">
                <span>01 / 06</span><span className="h-px w-16 bg-gold/60 sm:w-28" />
              </div>
              <span className="hidden rounded-full border border-gold/25 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-ink-400 sm:block">Open to opportunities</span>
            </div>

            <h2 className="mt-5 font-display text-[5rem] font-semibold leading-[0.82] tracking-[-0.06em] text-transparent [background:linear-gradient(180deg,#f7f7f5_0%,#22c55e_100%)] bg-clip-text sm:text-[7.5rem] lg:text-[8.5rem]">Intro</h2>

            <div className="mt-8 max-w-3xl rounded-[1.75rem] border border-base-500/80 bg-base-800/65 p-6 shadow-panel backdrop-blur-xl sm:p-8">
              <p className="text-xl leading-8 text-ink-200 sm:text-2xl sm:leading-9">Hey, I&apos;m <span className="font-semibold text-gold">{profile.name}.</span></p>
              <p className="mt-5 text-sm leading-7 text-ink-400 sm:text-base sm:leading-8">I&apos;m a final-year Computer Science Engineering student and aspiring Data Analyst who enjoys turning data into meaningful insights. I work across <span className="font-semibold text-ink-200">SQL, Python, Tableau, Power BI, and Excel</span> to solve practical problems and build clear, decision-ready dashboards.</p>
              <p className="mt-4 text-sm leading-7 text-ink-400 sm:text-base sm:leading-8">This portfolio brings together my analytics projects, technical skills, internship experience, and learning journey as I work toward a career in data analytics.</p>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-base-500/70 pt-6">
                {tools.map((tool) => <span key={tool} className="rounded-full border border-gold/20 bg-gold/[0.04] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-300">{tool}</span>)}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-base-500/80 bg-base-800/45 p-4"><span className="font-display text-2xl text-ink-100">2026</span><span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.14em] text-ink-600">Graduation year</span></div>
              <div className="rounded-2xl border border-base-500/80 bg-base-800/45 p-4"><span className="font-display text-2xl text-ink-100">7+</span><span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.14em] text-ink-600">Portfolio projects</span></div>
              <div className="rounded-2xl border border-gold/20 bg-gold/[0.035] p-4"><span className="font-display text-2xl text-gold">1 goal</span><span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.14em] text-ink-600">Data Analyst role</span></div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <MagneticButton href="#projects" className="btn-primary">View my work <ArrowUpRight size={15} /></MagneticButton>
              <MagneticButton href="/Resume.pdf" download className="btn-secondary"><Download size={15} /> Résumé</MagneticButton>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-base-500/70 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-600">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex min-h-11 min-w-11 items-center justify-center text-ink-400 transition-colors hover:text-gold"><Linkedin size={16} /></a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex min-h-11 min-w-11 items-center justify-center text-ink-400 transition-colors hover:text-gold"><Github size={16} /></a>
              <a href={profile.links.tableau} target="_blank" rel="noreferrer" aria-label="Tableau Public" className="flex min-h-11 min-w-11 items-center justify-center text-ink-400 transition-colors hover:text-gold"><BarChart3 size={16} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="flex min-h-11 min-w-11 items-center justify-center text-ink-400 transition-colors hover:text-gold"><Mail size={16} /></a>
              <span className="mx-2 hidden h-4 w-px bg-base-500 sm:block" />
              <span>{profile.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
