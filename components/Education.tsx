"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays, ArrowUpRight } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-[-8%] top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="-- education"
          title="Education"
          description="My Computer Science and Engineering foundation supporting a career focused on data analytics and business intelligence."
        />

        <div className="mt-14">
          {education.map((e, index) => (
            <motion.article
              key={e.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[2rem] border border-violet-500/30 bg-gradient-to-br from-[#15131d] via-[#171717] to-[#0d0d0d] p-7 shadow-[0_0_35px_rgba(139,92,246,0.06)] sm:p-9 lg:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(139,92,246,0.14),transparent_34%),radial-gradient(circle_at_12%_90%,rgba(34,211,238,0.07),transparent_30%)]" />

              <div className="relative grid gap-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-400/5 text-violet-300 transition-transform duration-500 group-hover:scale-105">
                  <GraduationCap size={27} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">
                    academic background
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-white sm:text-3xl">
                    {e.school}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-300 sm:text-base">
                    {e.degree}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-500">
                    <span className="flex items-center gap-2">
                      <MapPin size={13} className="text-violet-300" aria-hidden="true" />
                      {e.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <CalendarDays size={13} className="text-violet-300" aria-hidden="true" />
                      {e.period}
                    </span>
                  </div>
                </div>

                <div className="border-t border-zinc-700/70 pt-6 lg:w-48 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                    degree
                  </span>
                  <span className="mt-2 block font-display text-2xl text-violet-300">
                    B.Tech
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-zinc-500">
                    Computer Science & Engineering
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="mt-5 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
