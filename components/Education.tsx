"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, ArrowUpRight } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-1/4 top-24 h-64 w-64 rounded-full bg-teal/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- education" title="The academic foundation" description="A Computer Science and Engineering foundation supporting my work across data, analytics, and technology." />

        <div className="relative mt-14">
          <div className="absolute left-6 top-7 bottom-7 hidden w-px bg-base-500 sm:block" />
          <div className="space-y-6">
            {education.map((e, i) => (
              <motion.article key={e.school} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative sm:pl-16">
                <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-full border border-teal/30 bg-base-800 text-teal shadow-[0_0_0_7px_rgba(25,195,177,0.04)] sm:flex"><GraduationCap size={20} /></div>
                <div className="group relative overflow-hidden rounded-3xl border border-base-500/80 bg-base-800/60 p-7 transition-all duration-300 hover:border-teal/40 hover:bg-base-700/70 sm:p-9">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-teal/5 blur-2xl" />
                  <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <div className="flex items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">0{i + 1} / academic</span><span className="h-px w-10 bg-base-500" /></div>
                      <h3 className="mt-6 max-w-2xl font-display text-2xl leading-tight text-ink-100 sm:text-3xl">{e.school}</h3>
                      <p className="mt-3 text-base text-ink-300">{e.degree}</p>
                      <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500"><MapPin size={13} className="text-teal" />{e.location}</p>
                    </div>
                    <div className="flex items-center justify-between gap-6 border-t border-base-500/70 pt-5 lg:block lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0"><div><span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">period</span><span className="mt-2 block font-display text-xl text-gold">{e.period}</span></div><ArrowUpRight size={17} className="text-ink-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal lg:mt-8" /></div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
