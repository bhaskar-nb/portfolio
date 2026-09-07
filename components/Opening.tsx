"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Opening() {
  return (
    <section id="opening" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#020504] px-4 sm:px-6 lg:px-8">
      <div className="relative flex h-[100svh] w-full max-w-[1700px] items-center justify-center">
        {/* The reference treatment uses a luminous mint-to-deep-emerald wordmark behind the portrait. */}
        <div className="pointer-events-none absolute inset-x-0 top-[49%] z-0 -translate-y-1/2 select-none font-display font-semibold leading-[0.78] tracking-[-0.095em]" aria-hidden="true">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute right-[50%] mr-[clamp(7rem,14vw,12rem)] whitespace-nowrap bg-[linear-gradient(180deg,#eafff0_0%,#b9f8cc_24%,#36c96a_55%,#064d28_100%)] bg-clip-text text-[clamp(5.5rem,11vw,12rem)] text-transparent drop-shadow-[0_0_14px_rgba(34,197,94,0.22)]"
          >
            PORT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
            className="absolute left-[50%] ml-[clamp(7rem,14vw,12rem)] whitespace-nowrap bg-[linear-gradient(180deg,#eafff0_0%,#b9f8cc_24%,#36c96a_55%,#064d28_100%)] bg-clip-text text-[clamp(5.5rem,11vw,12rem)] text-transparent drop-shadow-[0_0_14px_rgba(34,197,94,0.22)]"
          >
            FOLIO
          </motion.span>
        </div>

        {/* Soft emerald halo gives the portrait the same luminous separation as the reference. */}
        <div className="pointer-events-none absolute left-1/2 top-[48%] z-[1] h-[48svh] w-[42vw] min-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.13] blur-[90px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 h-[72svh] min-h-[500px] w-full max-w-[720px] sm:h-[78svh] lg:h-[82svh]"
        >
          <Image
            src="/DP image.png"
            alt={`${profile.name} — ${profile.role}`}
            fill
            priority
            sizes="(max-width: 640px) 96vw, (max-width: 1280px) 720px, 760px"
            className="object-contain object-bottom drop-shadow-[0_0_26px_rgba(34,197,94,0.16)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="absolute bottom-[10%] left-[4%] z-20 sm:left-[9%] lg:left-[15%]"
        >
          <div className="relative pb-3">
            <span className="font-display text-2xl font-medium tracking-[-0.035em] text-[#f4f7f4] [text-shadow:0_0_18px_rgba(255,255,255,0.12)] sm:text-3xl lg:text-4xl">
              Data <span className="bg-[linear-gradient(180deg,#eafff0_0%,#8ff0aa_35%,#22c55e_72%,#087a3d_100%)] bg-clip-text text-transparent [text-shadow:0_0_22px_rgba(34,197,94,0.22)]">Analyst</span>
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] w-20 bg-gradient-to-r from-[#8ff0aa] via-[#22c55e] to-transparent shadow-[0_0_12px_rgba(34,197,94,0.8)] sm:w-28" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.49 }}
          className="absolute bottom-[10%] right-[4%] z-20 sm:right-[9%] lg:right-[15%]"
        >
          <MagneticButton
            href="#contact"
            className="group min-h-11 gap-2 rounded-full border border-[#39d977]/80 bg-[#07140c]/55 px-5 font-mono text-[10px] uppercase tracking-[0.08em] text-[#dfffe9] shadow-[0_0_0_1px_rgba(34,197,94,0.12),0_0_18px_rgba(34,197,94,0.16),inset_0_0_16px_rgba(34,197,94,0.05)] backdrop-blur-sm transition-all duration-300 hover:border-[#7ff5a2] hover:bg-[#0b2415]/75 hover:text-white hover:shadow-[0_0_0_1px_rgba(34,197,94,0.2),0_0_30px_rgba(34,197,94,0.32),inset_0_0_20px_rgba(34,197,94,0.08)]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#39d977]/50 bg-[#39d977]/10">
              <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            Let&apos;s Connect
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
