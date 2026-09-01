"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, ArrowUpRight, ExternalLink } from "lucide-react";
import { certifications, achievements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- certifications" title="Credentials that support the work" description="Industry learning and job simulation experience that complement my hands-on analytics projects." />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <motion.article key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -5 }} className="group relative flex min-h-[285px] flex-col overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/60 p-6 transition-all duration-300 hover:border-gold/45 hover:bg-base-700/70">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-gold/5 blur-2xl" />
                <div className="relative flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold"><Award size={20} /></div><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">{String(i + 1).padStart(2, "0")}</span></div>
                <div className="relative mt-8 flex-1"><h3 className="font-display text-xl leading-snug text-ink-100">{c.title}</h3><p className="mt-2 text-sm text-ink-400">{c.issuer}</p><p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-teal">Completed · {c.year}</p><div className="mt-5 space-y-2">{c.bullets.map((bullet) => <p key={bullet} className="text-xs leading-5 text-ink-400"><span className="mr-2 text-gold">✓</span>{bullet}</p>)}</div></div>
                {c.link && c.link !== "#" && <a href={c.link} target="_blank" rel="noopener noreferrer" className="relative mt-6 inline-flex items-center gap-2 self-start rounded-full border border-base-500 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-300 transition-all hover:border-teal/50 hover:text-teal">View credential <ExternalLink size={12} /></a>}
              </motion.article>
            ))}
          </div>

          <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/60 p-7 sm:p-8">
            <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-teal/5 blur-3xl" />
            <div className="relative"><div className="flex items-center justify-between"><div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal"><ShieldCheck size={14} /> selected highlights</div><ArrowUpRight size={16} className="text-ink-600" /></div><div className="mt-10 space-y-0">{achievements.map((a, i) => <motion.div key={a.title} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="relative border-l border-base-500 py-5 pl-5 first:pt-0 last:pb-0"><span className="absolute -left-[4px] top-6 h-2 w-2 rounded-full bg-teal shadow-[0_0_10px_rgba(25,195,177,0.5)] first:top-1.5" /><span className="font-mono text-[9px] uppercase tracking-wider text-ink-600">0{i + 1}</span><h4 className="mt-2 text-sm font-medium text-ink-100">{a.title}</h4><p className="mt-2 text-xs leading-6 text-ink-400">{a.detail}</p></motion.div>)}</div></div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
