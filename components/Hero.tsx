"use client";

import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, BarChart3 } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

const bars = [42, 68, 35, 82, 54, 90, 61, 74, 48, 88];
const [firstName, ...remainingName] = profile.name.split(" ");
const lastName = remainingName.join(" ");

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 select-none font-serif leading-[0.76] tracking-[-0.04em]"
            aria-label={profile.name}
          >
            <div className="font-[var(--font-bodoni-moda)] text-[3.5rem] font-bold text-ink-100 sm:text-[5rem] lg:text-[6.2rem]">
              {firstName}
            </div>
            {lastName && (
              <div className="name-outline mt-2 font-[var(--font-bodoni-moda)] text-[3.1rem] font-normal sm:text-[4.5rem] lg:text-[5.7rem]">
                {lastName}
              </div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-500 bg-base-700/60 px-3 py-1.5 font-mono text-xs text-ink-400"><span className="dot-live" /> DATA ANALYST</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-balance text-3xl font-medium leading-[1.08] text-ink-100 sm:text-4xl lg:text-5xl">Turning data into<br />clear decisions.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-5 max-w-xl text-balance text-ink-400">I’m a Data Analyst focused on SQL, Python, Excel, Tableau, and Power BI. I analyze data, build interactive dashboards, and turn business questions into clear, decision-ready insights.</motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 flex flex-wrap items-center gap-3"><MagneticButton href="/Resume.pdf" download className="btn-primary"><Download size={15} /> Download résumé</MagneticButton><MagneticButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn-secondary">View my work</MagneticButton></motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-ink-400"><span>SQL</span><span>·</span><span>Python</span><span>·</span><span>Excel</span><span>·</span><span>Tableau</span><span>·</span><span>Power BI</span></motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="mt-5 flex items-center gap-4"><a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-400 transition-colors hover:text-ink-100"><Github size={19} /></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-400 transition-colors hover:text-ink-100"><Linkedin size={19} /></a><a href={profile.links.tableau} target="_blank" rel="noreferrer" aria-label="Tableau Public" className="text-ink-400 transition-colors hover:text-ink-100"><BarChart3 size={19} /></a><a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-400 transition-colors hover:text-ink-100"><Mail size={19} /></a></motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="panel relative animate-float overflow-hidden"><div className="panel-header"><span className="mono-tag flex items-center gap-2"><span className="dot-live" /> analytics_workbench.sql</span><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose/70" /><span className="h-2.5 w-2.5 rounded-full bg-gold/70" /><span className="h-2.5 w-2.5 rounded-full bg-teal/70" /></div></div><div className="relative space-y-5 p-5"><div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-teal/50 to-transparent" /><div className="rounded-xl border border-base-500/70 bg-base-600/40 p-4 font-mono text-xs"><div className="text-ink-400">-- typical workflow</div><div className="mt-3 text-teal">01</div><div className="text-ink-200">clean → validate → explore</div><div className="mt-2 text-teal">02</div><div className="text-ink-200">query → compare → explain</div><div className="mt-2 text-teal">03</div><div className="text-ink-200">visualize → communicate</div></div><div className="rounded-xl border border-base-500/70 bg-base-600/40 p-4"><div className="mono-tag mb-3">analysis trend</div><div className="flex h-28 items-end gap-1.5">{bars.map((h, i) => <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.8, delay: 0.7 + i * 0.05, ease: "easeOut" }} className="flex-1 rounded-t-sm bg-gradient-to-t from-teal/40 to-gold/70" />)}</div></div><div className="flex items-center justify-between rounded-xl border border-base-500/70 bg-base-600/40 px-4 py-3 font-mono text-xs text-ink-400"><span>SELECT insights FROM analysis</span><span className="text-teal">READY</span></div></div></motion.div>
      </div>
    </section>
  );
}
