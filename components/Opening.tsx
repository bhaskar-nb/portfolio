"use client";

import { motion } from "framer-motion";

export default function Opening() {
  return (
    <section
      id="opening"
      aria-label="Portfolio"
      className="relative flex h-[100dvh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-base-900"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[96vw] whitespace-nowrap text-center text-[clamp(3.4rem,10.2vw,11.5rem)] font-black uppercase leading-none tracking-[-0.095em]"
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
        PORTFOLIO
      </motion.h1>
    </section>
  );
}
