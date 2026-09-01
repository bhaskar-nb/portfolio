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
      className="mb-12 max-w-2xl"
    >
      <div className="section-eyebrow">
        <span className="h-px w-6 bg-gold" />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance text-3xl font-medium text-ink-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-balance text-ink-400">{description}</p>
      )}
    </motion.div>
  );
}
