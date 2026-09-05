"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { certifications, achievements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- credentials" title="Credentials that support the work" description="A focused record of analytics learning and professional simulations that reinforces the practical work shown across the portfolio." />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.aside initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55 }} className="relative overflow-hidden rounded-3xl border border-gold/25 bg-base-800/70 p-7 sm:p-9">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gold"><ShieldCheck size={14} aria-hidden="true" /> evidence alongside credentials</div>
              <h3 className="mt-7 max-w-sm font-display text-3xl leading-tight text-ink-100">Proof matters more than a certificate count.</h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-ink-400">These project outcomes show where the learning translates into actual analytical work.</p>
              <div className="mt-9 space-y-0">
                {achievements.map((a, i) => (
                  <motion.div key={a.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.07 }} className="relative border-l border-base-500 py-5 pl-5 first:pt-0 last:pb-0">
                    <span className="absolute -left-[4px] top-6 h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_rgba(34,197,94,0.45)] first:top-1.5" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-ink-600">0{i + 1}</span>
                    <h4 className="mt-2 text-sm font-medium text-ink-100">{a.title}</h4>
                    <p className="mt-2 text-xs leading-6 text-ink-400">{a.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>

          <div>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">credentials.log</span>
                <p className="mt-2 text-sm text-ink-500">Selected learning and professional simulations.</p>
              </div>
              <span className="shrink-0 font-mono text-[10px] text-ink-600">{String(certifications.length).padStart(2, "0")} credentials</span>
            </div>

            <div className="space-y-3">
              {certifications.map((c, i) => (
                <motion.article key={c.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.06 }} className="group rounded-2xl border border-base-500/80 bg-base-800/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-base-700/70 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold"><Award size={19} aria-hidden="true" /></div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                        <h3 className="max-w-xl font-display text-lg leading-snug text-ink-100">{c.title}</h3>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-gold">{c.year}</span>
                      </div>
                      <p className="mt-1.5 text-sm text-ink-500">{c.issuer}</p>
                      {c.bullets?.[0] && <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-ink-400"><CheckCircle2 size={13} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />{c.bullets[0]}</p>}
                    </div>
                    {c.link && c.link !== "#" && <a href={c.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${c.title} credential`} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-base-500 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-300 transition-all hover:border-gold/50 hover:text-gold">View credential <ExternalLink size={12} /></a>}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-xs text-ink-600"><ArrowUpRight size={14} className="text-gold" aria-hidden="true" /><span>Credentials reinforce the portfolio; project evidence remains the primary proof.</span></div>
      </div>
    </section>
  );
}
