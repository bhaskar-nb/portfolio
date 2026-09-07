"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Opening() {
  return (
    <section id="opening" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-base-900 px-4 sm:px-6 lg:px-8">
      <div className="relative flex h-[100svh] w-full max-w-[1600px] items-center justify-center">
        {/* The only background element: the oversized PORTFOLIO wordmark behind the portrait. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[47%] z-0 w-[112vw] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-display text-[18vw] font-semibold leading-none tracking-[-0.09em] text-ink-100 sm:text-[17vw] lg:text-[15rem]"
        >
          <span>PORT</span><span className="text-gold">FOLIO</span>
        </motion.div>

        {/* Your existing portfolio DP image — no generated replacement. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 h-[76svh] w-[min(94vw,760px)] sm:h-[82svh] sm:w-[min(76vw,800px)] lg:h-[88svh] lg:w-[min(58vw,860px)]"
        >
          <Image
            src="/DP image.png"
            alt={`${profile.name} — ${profile.role}`}
            fill
            priority
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 76vw, 860px"
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Role sits beneath the POR side of the title. */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="absolute bottom-[10%] left-[6%] z-20 sm:left-[10%] lg:left-[14%]"
        >
          <span className="font-display text-2xl font-medium tracking-[-0.035em] text-ink-100 sm:text-3xl lg:text-4xl">
            Data <span className="text-gold">Analyst</span>
          </span>
        </motion.div>

        {/* Connect action sits beneath the LIO side of the title. */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="absolute bottom-[10%] right-[6%] z-20 sm:right-[10%] lg:right-[14%]"
        >
          <MagneticButton
            href="#contact"
            className="btn-secondary min-h-11 gap-2 rounded-full border-gold/50 bg-base-900/70 px-5 backdrop-blur-sm hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            Let&apos;s Connect <ArrowUpRight size={15} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
