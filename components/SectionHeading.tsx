"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mb-12 max-w-3xl"
    >
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
        <span className="hidden h-px flex-1 max-w-24 bg-base-500 sm:block" />
      </div>
      <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight tracking-tight text-ink-100 sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-balance text-sm leading-7 text-ink-400 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
