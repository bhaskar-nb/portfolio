"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Opening() {
  return (
    <section id="opening" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-base-900 px-4 sm:px-6 lg:px-8">
      <div className="relative flex h-[100svh] w-full max-w-[1700px] items-center justify-center">
        {/* Split wordmark keeps PORT on the left and FOLIO on the right of the portrait. */}
        <div className="pointer-events-none absolute inset-x-0 top-[49%] z-0 -translate-y-1/2 select-none font-display font-semibold leading-none tracking-[-0.09em]" aria-hidden="true">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute right-[50%] mr-[clamp(7rem,14vw,12rem)] whitespace-nowrap text-[clamp(5.5rem,11vw,12rem)] text-ink-100"
          >
            PORT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
            className="absolute left-[50%] ml-[clamp(7rem,14vw,12rem)] whitespace-nowrap text-[clamp(5.5rem,11vw,12rem)] text-gold"
          >
            FOLIO
          </motion.span>
        </div>

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
            className="object-contain object-bottom"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="absolute bottom-[10%] left-[4%] z-20 sm:left-[9%] lg:left-[15%]"
        >
          <span className="font-display text-2xl font-medium tracking-[-0.03em] text-ink-100 sm:text-3xl lg:text-4xl">
            Data <span className="text-gold">Analyst</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.49 }}
          className="absolute bottom-[10%] right-[4%] z-20 sm:right-[9%] lg:right-[15%]"
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
