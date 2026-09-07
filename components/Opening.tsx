"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Opening() {
  return (
    <section id="opening" className="relative flex h-[100dvh] min-h-[560px] w-full items-end justify-center overflow-hidden bg-base-900">
      <div className="relative h-full w-full max-w-[1920px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[38%] z-0 w-max -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center text-[clamp(4.2rem,14vw,17rem)] font-black uppercase leading-[0.78] tracking-[-0.095em] sm:left-[calc(50%+14vw)] lg:left-[calc(50%+20vw)]"
          style={{
            fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif',
            background: "linear-gradient(180deg, #effff3 0%, #b9f7c5 22%, #63d975 50%, #18843b 76%, #063b1a 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px rgba(125,255,153,0.24)",
            filter: "drop-shadow(0 0 20px rgba(34,197,94,0.34)) drop-shadow(0 16px 30px rgba(0,0,0,0.5))",
          }}
        >
          PORTFOLIO
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 bottom-0 z-10 h-[88dvh] w-[min(46vw,760px)] min-w-[330px] -translate-x-1/2 lg:left-[calc(50%-20vw)] sm:h-[91dvh] lg:h-[94dvh]"
        >
          <div className="absolute inset-x-[18%] bottom-[8%] h-[62%] rounded-full bg-gold/15 blur-[80px]" />
          <Image
            src="/DP image.png"
            alt={`${profile.name} — ${profile.role}`}
            fill
            priority
            sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 760px"
            className="object-contain object-bottom"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="absolute bottom-[8%] left-[8%] z-20 sm:left-[11%] lg:left-[13%] xl:left-[15%]"
        >
          <div className="font-display text-2xl font-medium tracking-[-0.035em] text-ink-100 sm:text-3xl lg:text-4xl">
            Data <span className="text-gold">Analyst</span>
          </div>
          <div className="mt-2 h-[2px] w-24 bg-gradient-to-r from-gold via-gold/70 to-transparent shadow-[0_0_14px_rgba(34,197,94,0.55)] sm:w-32" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.47 }}
          className="absolute bottom-[8%] right-[8%] z-20 sm:right-[11%] lg:right-[13%] xl:right-[15%]"
        >
          <MagneticButton
            href="#contact"
            className="group min-h-12 gap-3 rounded-full border border-gold bg-gold/[0.025] px-5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-100 shadow-[0_0_20px_rgba(34,197,94,0.22),inset_0_0_18px_rgba(34,197,94,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold/10 hover:shadow-[0_0_34px_rgba(34,197,94,0.42),inset_0_0_22px_rgba(34,197,94,0.12)]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/60 bg-gold/10 text-gold transition-transform duration-300 group-hover:rotate-[-8deg]">
              <Send size={12} />
            </span>
            Let&apos;s Connect
            <ArrowUpRight size={14} className="text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
