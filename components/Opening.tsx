"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Opening() {
  return (
    <section id="opening" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-base-900 px-4 pt-20 sm:px-6 lg:px-8">
      <div className="relative flex h-[calc(100svh-5rem)] min-h-[620px] w-full max-w-[1500px] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[150%] -translate-x-1/2 -translate-y-[40%] select-none text-center font-display text-[25vw] font-semibold leading-[0.78] tracking-[-0.095em] text-transparent [background:linear-gradient(180deg,#f7f7f5_0%,#cbd5d0_42%,#22c55e_100%)] bg-clip-text sm:text-[21vw] lg:text-[19rem]"
        >
          PORTFOLIO
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 h-[78svh] min-h-[520px] w-full max-w-[760px] sm:h-[82svh] lg:h-[86svh]"
        >
          <Image
            src="/DP image.png"
            alt={`${profile.name} — ${profile.role}`}
            fill
            priority
            sizes="(max-width: 640px) 96vw, (max-width: 1280px) 760px, 800px"
            className="object-contain object-bottom"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="absolute bottom-[12%] left-[3%] z-20 sm:left-[7%] lg:left-[12%]"
        >
          <span className="font-display text-2xl font-medium tracking-[-0.03em] text-ink-100 sm:text-3xl lg:text-4xl">
            Data <span className="text-gold">Analyst</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="absolute bottom-[12%] right-[3%] z-20 sm:right-[7%] lg:right-[12%]"
        >
          <MagneticButton
            href="#contact"
            className="btn-secondary min-h-11 gap-2 rounded-full border-gold/40 bg-transparent px-5 backdrop-blur-sm hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            Let&apos;s Connect <ArrowUpRight size={15} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
