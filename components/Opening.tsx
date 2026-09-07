"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { profile } from "@/lib/data";

export default function Opening() {
  return (
    <section id="opening" className="relative flex min-h-[100svh] items-center overflow-hidden bg-base-900 px-5 pb-12 pt-28 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-35" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-base-900 via-base-900/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-[1500px] flex-col justify-between">
        <div className="flex items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-200">
              <span className="text-gold">BN</span><span className="text-ink-600">/</span>{profile.name}
            </div>
            <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.28em] text-ink-600">{profile.role}</span>
          </div>
          <div className="hidden items-center gap-4 font-mono text-[9px] uppercase tracking-[0.3em] text-ink-500 sm:flex">
            <span>Data</span><span className="text-gold">→</span><span>Insight</span><span className="text-gold">→</span><span>Impact</span>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-8 sm:py-4">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
            <div className="font-mono text-[9px] uppercase tracking-[0.34em] text-ink-500 sm:text-[11px]">Welcome to my</div>
            <div className="mt-1 select-none font-display text-[18vw] font-semibold leading-[0.72] tracking-[-0.09em] text-transparent sm:text-[16vw] lg:text-[14.5rem] [background:linear-gradient(180deg,#f7f7f5_0%,#8a9a91_48%,#123b2a_100%)] bg-clip-text">
              PORTFOLIO
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative z-10 h-[58vh] max-h-[650px] w-[min(72vw,560px)] sm:h-[64vh] sm:w-[min(52vw,580px)]">
            <div className="absolute inset-x-[12%] bottom-[4%] h-3/4 rounded-full bg-gold/[0.10] blur-[80px]" />
            <Image src="/DP image.png" alt={`${profile.name} — ${profile.role}`} fill priority sizes="(max-width: 640px) 72vw, 580px" className="object-contain object-bottom drop-shadow-[0_20px_70px_rgba(0,0,0,0.65)]" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="absolute bottom-10 right-0 hidden max-w-[190px] text-right lg:block">
            <div className="font-display text-2xl italic leading-tight text-gold">Build.<br />Analyze.<br />Visualize.<br />Repeat.</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 items-end gap-6 sm:grid-cols-3">
          <div className="font-mono text-[8px] uppercase tracking-[0.24em] text-ink-600 sm:text-[9px]">
            <span className="mb-2 block h-px w-10 bg-gold" />From data<br />to a brighter tomorrow
          </div>
          <a href="#about" className="group mx-auto hidden items-center gap-3 font-mono text-[8px] uppercase tracking-[0.26em] text-ink-500 transition-colors hover:text-ink-200 sm:flex">
            <span>Scroll to explore</span><span className="flex h-8 w-5 items-center justify-center rounded-full border border-ink-600 transition-colors group-hover:border-gold"><ChevronDown size={11} className="text-gold" /></span>
          </a>
          <div className="text-right font-mono text-[8px] uppercase tracking-[0.24em] text-ink-600 sm:text-[9px]">
            <span className="mb-2 ml-auto block h-px w-10 bg-gold" />Let&apos;s turn data<br />into opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
