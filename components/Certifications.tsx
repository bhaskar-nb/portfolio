"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-15 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="pointer-events-none absolute right-[-8%] top-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- certifications"
          title="Learning that supports the work"
          description="Relevant credentials in data analytics, SQL, visualization, and practical business analysis."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-base-700/70 sm:p-7"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                    <Award size={19} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold">{c.year}</span>
                </div>

                <h3 className="mt-6 font-display text-xl leading-snug text-ink-100">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{c.issuer}</p>

                <div className="mt-6 flex-1 space-y-2">
                  {c.bullets?.slice(0, 2).map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2.5 text-sm leading-6 text-ink-400">
                      <CheckCircle2 size={14} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {c.link && c.link !== "#" && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${c.title} credential`}
                    className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-base-500 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-300 transition-all hover:border-gold/50 hover:text-gold"
                  >
                    View credential <ExternalLink size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
