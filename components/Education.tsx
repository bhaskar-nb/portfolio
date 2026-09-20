"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
          Education
        </h2>

        <div className="relative mt-12">
          <div className="absolute bottom-3 left-[17px] top-3 hidden w-px bg-gradient-to-b from-violet-400/50 via-violet-400/20 to-transparent sm:block" />

          <div className="space-y-8">
            {education.map((e, index) => (
              <motion.article
                key={e.school}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative pl-0 sm:pl-12"
              >
                <div className="absolute left-2 top-2 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-violet-400/60 bg-[#101010] shadow-[0_0_14px_rgba(139,92,246,0.25)] sm:flex">
                  <GraduationCap size={8} className="text-violet-300" aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-4 border-b border-zinc-800/80 pb-7 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg leading-snug text-white sm:text-xl">
                      {e.school}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-300">
                      {e.degree}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-500">
                      <span className="flex items-center gap-2">
                        <MapPin size={12} className="text-violet-300" aria-hidden="true" />
                        {e.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <CalendarDays size={12} className="text-violet-300" aria-hidden="true" />
                        {e.period}
                      </span>
                    </div>
                  </div>

                  <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.14em] text-zinc-600">
                    Academic Background
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
