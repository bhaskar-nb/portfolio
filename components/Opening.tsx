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
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display text-[clamp(7rem,17vw,18rem)] font-semibold leading-none tracking-[-0.09em]"
          aria-hidden="true"
        >
          <span className="text-ink-100">PORT</span><span className="text-gold">FOLIO</span>
        </motion.div>

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
