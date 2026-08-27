"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, BarChart3 } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

const [firstName, ...remainingName] = profile.name.split(" ");
const lastName = remainingName.join(" ");

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 select-none whitespace-nowrap font-serif leading-[0.76] tracking-[-0.04em]" aria-label={profile.name}>
            <span className="font-[var(--font-bodoni-moda)] text-[3rem] font-bold text-ink-100 sm:text-[4.25rem] lg:text-[5.2rem]">{firstName} </span><span className="name-outline font-[var(--font-bodoni-moda)] text-[2.7rem] font-normal sm:text-[3.8rem] lg:text-[4.8rem]">{lastName}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-500 bg-base-700/60 px-3 py-1.5 font-mono text-xs text-ink-400"><span className="dot-live" /> DATA ANALYST</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-balance text-[1.8rem] font-medium leading-[1.08] text-ink-100 sm:text-[2.15rem] lg:text-[2.5rem]">Turning data into<br />clear decisions.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-5 max-w-xl text-balance text-ink-400">I’m a Data Analyst focused on SQL, Python, Excel, Tableau, and Power BI. I analyze data, build interactive dashboards, and turn business questions into clear, decision-ready insights.</motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 flex flex-wrap items-center gap-3"><MagneticButton href="/Resume.pdf" download className="btn-primary"><Download size={15} /> Download résumé</MagneticButton><MagneticButton onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="btn-secondary">View my work</MagneticButton></motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-ink-400"><span>SQL</span><span>·</span><span>Python</span><span>·</span><span>Excel</span><span>·</span><span>Tableau</span><span>·</span><span>Power BI</span></motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="mt-5 flex items-center gap-4"><a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-400 transition-colors hover:text-ink-100"><Github size={19} /></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-400 transition-colors hover:text-ink-100"><Linkedin size={19} /></a><a href={profile.links.tableau} target="_blank" rel="noreferrer" aria-label="Tableau Public" className="text-ink-400 transition-colors hover:text-ink-100"><BarChart3 size={19} /></a><a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-400 transition-colors hover:text-ink-100"><Mail size={19} /></a></motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="relative mx-auto flex w-full max-w-[430px] items-end justify-center self-end overflow-hidden">
          <div className="pointer-events-none absolute inset-x-8 bottom-8 h-3/4 rounded-full bg-teal/10 blur-3xl" />
          <div className="relative w-full">
            <Image
              src="/DP image.png"
              alt={`${profile.name} - Data Analyst`}
              width={600}
              height={640}
              priority
              className="relative z-10 mx-auto h-auto w-full object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.45)]"
              sizes="(max-width: 1024px) 80vw, 430px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
