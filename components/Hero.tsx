"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section id="intro" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-base-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-15" />
      <div className="pointer-events-none absolute right-[-8%] top-1/4 h-[32rem] w-[32rem] rounded-full bg-gold/5 blur-[130px]" />

      <div className="relative mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-10 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
            Hello, I&apos;m
          </p>

          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-ink-100 sm:text-6xl lg:text-[clamp(4rem,6vw,6.5rem)]">
            {profile.name}
          </h1>

          <p className="mt-5 font-mono text-sm uppercase tracking-[0.24em] text-gold sm:text-base">
            Data Analyst
          </p>

          <p className="mt-7 max-w-xl text-base leading-7 text-ink-400 sm:text-lg sm:leading-8">
            I use SQL, Python, Excel, Tableau, and Power BI to analyze data,
            uncover trends, and build dashboards that support better business
            decisions.
          </p>

          <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">
            SQL · Python · Excel · Tableau · Power BI
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects" className="btn-primary">
              View my work <ArrowUpRight size={15} />
            </MagneticButton>
            <MagneticButton href="/Resume.pdf" download className="btn-secondary">
              <Download size={15} /> Download résumé
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto h-[68svh] w-full max-w-[500px] sm:h-[74svh] lg:h-[82svh] lg:max-h-[700px] lg:min-h-[560px]"
        >
          <div className="absolute inset-x-4 bottom-0 top-0 rounded-[3rem] border border-gold/15 bg-gold/[0.025]" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/10 blur-[100px]" />
          <Image
            src="/DP image.png"
            alt={`${profile.name} — Data Analyst`}
            fill
            sizes="(max-width: 1024px) 90vw, 500px"
            className="relative z-10 object-contain object-bottom"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
