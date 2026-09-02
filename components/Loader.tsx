"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setLoading(false);
      return;
    }

    const start = Date.now();
    const id = setInterval(() => {
      const pct = Math.min(100, Math.round(((Date.now() - start) / 900) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(id);
        setTimeout(() => setLoading(false), 200);
      }
    }, 30);

    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-base-800"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-ink-400">
            Booting dashboard
          </div>
          <div className="h-px w-56 overflow-hidden bg-base-500" aria-hidden="true">
            <motion.div
              className="h-full bg-gold"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="font-mono text-2xl text-ink-200" aria-hidden="true">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
