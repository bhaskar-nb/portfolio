"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, BarChart3, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

const tools = ["SQL", "Python", "Tableau", "Power BI", "Excel"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-base-900">
      {/* Opening — intentionally minimal: portrait, PORTFOLIO, role, connection CTA */}
      <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-0 pt-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-base-900" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[48vw] w-[48vw] max-h-[720px] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[150px]" />

        <div className="relative mx-auto flex h-[calc(100svh-6rem)] min-h-[620px] w-full max-w-[1500px] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[150%] -translate-x-1/2 -translate-y-[42%] select-none text-center font-display text-[24vw] font-semibold leading-[0.78] tracking-[-0.09em] text-transparent [background:linear-gradient(180deg,#f7f7f5_0%,#8ce0ae_35%,#15803d_72%,#063b26_100%)] bg-clip-text opacity-75 sm:text-[21vw] lg:text-[19rem]"
          >
            PORTFOLIO
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
            className="relative z-10 h-[78svh] min-h-[520px] w-full max-w-[760px] sm:h-[82svh] lg:h-[86svh]"
          >
            <Image
              src="/DP image.png"
              alt={`${profile.name} — Data Analyst`}
              fill
              priority
              sizes="(max-width: 640px) 96vw, (max-width: 1280px) 760px, 800px"
              className="object-contain object-bottom drop-shadow-[0_30px_80px_rgba(34,197,94,0.16)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-[13%] left-[2%] z-20 sm:left-[5%] lg:left-[7%]"
          >
            <div className="font-display text-2xl font-medium tracking-[-0.03em] text-ink-100 sm:text-3xl lg:text-4xl">
              Data <span className="text-gold">Analyst</span>
            </div>
            <div className="mt-2 h-1 w-20 bg-gold sm:w-28" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="absolute bottom-[13%] right-[2%] z-20 sm:right-[5%] lg:right-[7%]"
          >
            <MagneticButton href="#contact" className="btn-secondary min-h-11 gap-2 rounded-full border-gold/40 bg-base-800/55 px-5 backdrop-blur-md hover:border-gold hover:bg-gold/10 hover:text-gold">
              Let&apos;s Connect <ArrowUpRight size={15} />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <div id="intro" className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden border-t border-base-500/60 px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20" />
        <div className="pointer-events-none absolute left-[15%] top-1/4 h-72 w-72 rounded-full bg-gold/5 blur-[110px]" />
        <div className="pointer-events-none absolute right-[5%] bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="relative mx-auto h-[52svh] min-h-[420px] w-full max-w-[470px] sm:h-[68svh] lg:mx-0 lg:h-[76svh]">
            <div className="absolute inset-8 rounded-[2.5rem] border border-gold/15 bg-gold/[0.025]" />
            <div className="absolute inset-x-8 bottom-0 h-2/3 rounded-[2.5rem] bg-gradient-to-t from-gold/10 to-transparent blur-3xl" />
            <Image src="/DP image.png" alt={`${profile.name} — portrait`} fill sizes="(max-width: 1024px) 90vw, 470px" className="relative z-10 object-contain object-bottom" />
            <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2 font-display text-3xl italic leading-[1.05] text-gold/80 sm:text-4xl">Same data.<br />Bigger questions.</div>
            <div className="absolute bottom-4 left-0 z-20 h-px w-16 bg-gold" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.08 }} className="relative">
            <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.22em] text-gold"><span>01 / 06</span><span className="h-px w-16 bg-gold/60 sm:w-28" /></div><span className="hidden rounded-full border border-gold/25 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-ink-400 sm:block">Open to opportunities</span></div>
            <h2 className="mt-5 font-display text-[5rem] font-semibold leading-[0.82] tracking-[-0.06em] text-transparent [background:linear-gradient(180deg,#f7f7f5_0%,#22c55e_100%)] bg-clip-text sm:text-[7.5rem] lg:text-[8.5rem]">Intro</h2>
            <div className="mt-8 max-w-3xl rounded-[1.75rem] border border-base-500/80 bg-base-800/65 p-6 shadow-panel backdrop-blur-xl sm:p-8">
              <p className="text-xl leading-8 text-ink-200 sm:text-2xl sm:leading-9">Hey, I&apos;m <span className="font-semibold text-gold">{profile.name}.</span></p>
              <p className="mt-5 text-sm leading-7 text-ink-400 sm:text-base sm:leading-8">I&apos;m a final-year Computer Science Engineering student and aspiring Data Analyst who enjoys turning data into meaningful insights. I work across <span className="font-semibold text-ink-200">SQL, Python, Tableau, Power BI, and Excel</span> to solve practical problems and build clear, decision-ready dashboards.</p>
              <p className="mt-4 text-sm leading-7 text-ink-400 sm:text-base sm:leading-8">This portfolio brings together my analytics projects, technical skills, internship experience, and learning journey as I work toward a career in data analytics.</p>
              <div className="mt-7 flex flex-wrap gap-2 border-t border-base-500/70 pt-6">{tools.map((tool) => <span key={tool} className="rounded-full border border-gold/20 bg-gold/[0.04] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-300">{tool}</span>)}</div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-base-500/80 bg-base-800/45 p-4"><span className="font-display text-2xl text-ink-100">2026</span><span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.14em] text-ink-600">Graduation year</span></div><div className="rounded-2xl border border-base-500/80 bg-base-800/45 p-4"><span className="font-display text-2xl text-ink-100">7+</span><span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.14em] text-ink-600">Portfolio projects</span></div><div className="rounded-2xl border border-gold/20 bg-gold/[0.035] p-4"><span className="font-display text-2xl text-gold">1 goal</span><span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.14em] text-ink-600">Data Analyst role</span></div></div>
            <div className="mt-7 flex flex-wrap items-center gap-3"><MagneticButton href="#projects" className="btn-primary">View my work <ArrowUpRight size={15} /></MagneticButton><MagneticButton href="/Resume.pdf" download className="btn-secondary"><Download size={15} /> Résumé</MagneticButton></div>
            <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-base-500/70 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-600"><a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex min-h-11 min-w-11 items-center justify-center text-ink-400 transition-colors hover:text-gold"><Linkedin size={16} /></a><a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex min-h-11 min-w-11 items-center justify-center text-ink-400 transition-colors hover:text-gold"><Github size={16} /></a><a href={profile.links.tableau} target="_blank" rel="noreferrer" aria-label="Tableau Public" className="flex min-h-11 min-w-11 items-center justify-center text-ink-400 transition-colors hover:text-gold"><BarChart3 size={16} /></a><a href={`mailto:${profile.email}`} aria-label="Email" className="flex min-h-11 min-w-11 items-center justify-center text-ink-400 transition-colors hover:text-gold"><Mail size={16} /></a><span className="mx-2 hidden h-4 w-px bg-base-500 sm:block" /><span>{profile.location}</span></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
