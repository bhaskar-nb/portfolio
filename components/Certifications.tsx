"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="-- certifications"
          title="Certifications"
          description="Credentials supporting my practical work across analytics, SQL, visualization, and business-focused data analysis."
        />

        <div className="mt-12 space-y-4">
          {certifications.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-[#111111]/90 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/45 hover:shadow-[0_0_28px_rgba(139,92,246,0.10)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(139,92,246,0.10),transparent_28%),radial-gradient(circle_at_5%_50%,rgba(34,211,238,0.04),transparent_25%)]" />

              <div className="relative grid gap-6 p-6 sm:p-7 lg:grid-cols-[72px_1fr_auto] lg:items-center lg:gap-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/5 text-violet-300 transition-transform duration-300 group-hover:scale-105">
                  <Award size={22} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-violet-300">
                      0{i + 1} / certification
                    </span>
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                      {c.year}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-xl leading-snug text-white sm:text-2xl">
                    {c.title}
                  </h3>

                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                    {c.issuer}
                  </p>

                  {c.bullets?.length ? (
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
                      {c.bullets.join(" · ")}
                    </p>
                  ) : null}
                </div>

                {c.link && c.link !== "#" ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${c.title} credential`}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/30 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-300 transition-all hover:border-violet-400/50 hover:bg-violet-400/5 hover:text-violet-300 lg:min-w-[150px]"
                  >
                    View credential <ExternalLink size={12} aria-hidden="true" />
                  </a>
                ) : (
                  <ArrowUpRight
                    size={18}
                    className="hidden text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
