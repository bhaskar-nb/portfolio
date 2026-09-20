"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
          Certificates
        </h2>

        <div className="relative mt-12">
          <div className="absolute bottom-3 left-[17px] top-3 hidden w-px bg-gradient-to-b from-violet-400/50 via-violet-400/20 to-transparent sm:block" />

          <div className="space-y-8">
            {certifications.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative pl-0 sm:pl-12"
              >
                <div className="absolute left-2 top-2 hidden h-4 w-4 rounded-full border-2 border-violet-400/60 bg-[#101010] shadow-[0_0_14px_rgba(139,92,246,0.25)] sm:block" />

                <div className="flex flex-col gap-3 border-b border-zinc-800/80 pb-7 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-violet-300">
                        <Award size={13} aria-hidden="true" />
                        Certificate
                      </span>
                      <span className="h-1 w-1 rounded-full bg-zinc-700" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                        {c.year}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-xl leading-snug text-white sm:text-2xl">
                      {c.title}
                    </h3>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                      {c.issuer}
                    </p>
                  </div>

                  {c.link && c.link !== "#" ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${c.title} credential`}
                      className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-300 transition-all hover:border-violet-400/50 hover:text-violet-300"
                    >
                      View credential <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  ) : (
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
