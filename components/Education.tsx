"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- education"
          title="Education"
          description="A Computer Science and Engineering foundation supporting my work in data analytics and business intelligence."
        />

        <div className="mt-12">
          {education.map((e, index) => (
            <motion.article
              key={e.school}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-base-500/80 bg-base-800/55 p-6 transition-all duration-300 hover:border-gold/35 hover:bg-base-700/55 sm:p-8"
            >
              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/20 bg-gold/[0.06] text-gold">
                  <GraduationCap size={23} aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">academic background</span>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-ink-100 sm:text-3xl">{e.school}</h3>
                  <p className="mt-2 text-sm text-ink-300 sm:text-base">{e.degree}</p>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-mono uppercase tracking-[0.14em] text-ink-500">
                    <span className="flex items-center gap-2"><MapPin size={13} className="text-gold" aria-hidden="true" />{e.location}</span>
                    <span className="flex items-center gap-2"><CalendarDays size={13} className="text-gold" aria-hidden="true" />{e.period}</span>
                  </div>
                </div>

                <div className="border-t border-base-500/70 pt-5 lg:w-48 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">degree</span>
                  <span className="mt-2 block font-display text-xl text-gold">B.Tech</span>
                  <span className="mt-1 block text-xs text-ink-500">Computer Science & Engineering</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
