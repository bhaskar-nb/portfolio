"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finishLoading = () => {
      setLoading(false);
      window.setTimeout(() => {
        window.dispatchEvent(new Event("portfolio-loader-complete"));
      }, 50);
    };

    if (reduceMotion) {
      finishLoading();
      return;
    }

    const start = performance.now();
    const duration = 3000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        window.setTimeout(finishLoading, 350);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          role="status"
          aria-live="polite"
          aria-label={`Loading portfolio: ${progress}%`}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[58%] bg-[radial-gradient(ellipse_65%_70%_at_20%_0%,rgba(91,145,133,0.46),transparent_68%),radial-gradient(ellipse_70%_75%_at_80%_0%,rgba(48,132,153,0.48),transparent_68%)] blur-2xl" />
          <div className="pointer-events-none absolute left-1/2 top-[8%] h-[38%] w-[58%] -translate-x-1/2 rounded-full bg-teal-500/[0.08] blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative font-display text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl"
          >
            {progress}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
