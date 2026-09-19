"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-15 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="pointer-events-none absolute left-[-8%] top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="-- certifications"
          title="Certifications"
          description="Credentials supporting my practical work across analytics, SQL, visualization, and business-focused data analysis."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-violet-500/25 bg-gradient-to-br from-[#15131d] via-[#171717] to-[#0e0e0e] p-7 transition-colors duration-300 hover:border-violet-400/50 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-32 bg-cyan-400/[0.035] blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/5 text-violet-300 transition-transform duration-500 group-hover:scale-105">
                    <Award size={20} aria-hidden="true" />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-violet-300">
                      {c.year}
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="mt-8 max-w-xl font-display text-2xl leading-snug text-white sm:text-[1.65rem]">
                  {c.title}
                </h3>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                  {c.issuer}
                </p>

                <div className="mt-7 space-y-3">
                  {c.bullets?.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm leading-6 text-zinc-400">
                      <CheckCircle2 size={14} className="mt-1 shrink-0 text-violet-300" aria-hidden="true" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {c.link && c.link !== "#" && (
                  <div className="mt-8 border-t border-zinc-700/70 pt-6">
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${c.title} credential`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/30 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-300 transition-all hover:border-violet-400/50 hover:bg-violet-400/5 hover:text-violet-300"
                    >
                      View credential <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
