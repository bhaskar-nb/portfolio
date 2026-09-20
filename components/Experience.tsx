"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const experience = {
  company: "EduExpose",
  role: "Data Analyst Intern",
  period: "Feb 2026 – Apr 2026",
  type: "Internship",
};

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 sm:mb-9">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            Experience
          </h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-3xl border border-violet-500/30 bg-[#111111]/90 shadow-[0_0_35px_rgba(139,92,246,0.10)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.14),transparent_30%),radial-gradient(circle_at_12%_85%,rgba(34,211,238,0.07),transparent_28%)]" />

          <div className="relative grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/5 text-violet-300 transition-transform duration-300 group-hover:scale-105">
                  <BriefcaseBusiness size={19} aria-hidden="true" />
                </span>
                <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-violet-300">
                  {experience.type}
                </span>
              </div>

              <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.18em] text-violet-300">
                {experience.period}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {experience.role}
              </h3>
              <p className="mt-2 text-base font-medium text-zinc-300">
                {experience.company}
              </p>
            </div>

            <div className="hidden h-32 w-px bg-gradient-to-b from-transparent via-violet-400/40 to-transparent lg:block" />

            <div className="border-t border-violet-500/20 p-7 sm:p-9 lg:border-t-0 lg:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/5 text-violet-300">
                  <CalendarDays size={17} aria-hidden="true" />
                </span>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                    Duration
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    February 2026 – April 2026
                  </p>
                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    Data Analyst internship experience at {experience.company}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
