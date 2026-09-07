"use client";

import { motion } from "framer-motion";

export default function Opening() {
  return (
    <section
      id="opening"
      aria-label="Portfolio"
      className="relative flex h-[100dvh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-base-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/[0.055] blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="pointer-events-none absolute left-6 top-6 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-600 sm:left-8 sm:top-8">
        00 / portfolio
      </div>
      <div className="pointer-events-none absolute right-6 top-6 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-600 sm:right-8 sm:top-8">
        data / analytics
      </div>

      <div className="relative z-10 flex w-full max-w-[96vw] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex items-center gap-3 text-[8px] font-mono uppercase tracking-[0.24em] text-ink-500 sm:mb-7 sm:text-[9px]"
        >
          <span className="h-px w-8 bg-gold/60 sm:w-12" />
          Bhaskar Nakka
          <span className="h-px w-8 bg-gold/60 sm:w-12" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full whitespace-nowrap text-[clamp(3.4rem,6vw,11.5rem)] font-black uppercase leading-none tracking-[-0.095em]"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            background:
              "linear-gradient(180deg, #effff3 0%, #b9f7c5 22%, #63d975 50%, #18843b 76%, #063b1a 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px rgba(125,255,153,0.24)",
            filter:
              "drop-shadow(0 0 20px rgba(34,197,94,0.34)) drop-shadow(0 16px 30px rgba(0,0,0,0.5))",
          }}
        >
          BHASKAR NAKKA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex items-center gap-5 sm:mt-8 sm:gap-8"
        >
          <span className="h-px w-10 bg-gold/80 sm:w-16" aria-hidden="true" />
          <span
            className="whitespace-nowrap text-[clamp(1.4rem,2.6vw,2.5rem)] font-bold uppercase leading-none tracking-[0.12em] text-ink-100"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            PORTFOLIO
          </span>
          <span className="h-px w-10 bg-gold/80 sm:w-16" aria-hidden="true" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-gold sm:mt-6 sm:text-base"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          DATA ANALYST
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-center sm:bottom-9"
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-ink-600">scroll to explore</span>
        <span className="h-8 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </motion.div>
    </section>
  );
}
