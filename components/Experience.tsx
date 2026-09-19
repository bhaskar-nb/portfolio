"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const experience = {
  company: "EduExpose",
  role: "Data Analyst Intern",
  period: "Feb 2026 – Apr 2026",
  type: "Internship",
};

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="-- professional experience"
          title="Experience"
          description="A concise record of my professional internship experience in data analytics."
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mt-12 overflow-hidden rounded-[2rem] border border-violet-500/30 bg-gradient-to-br from-[#111111] via-[#15131d] to-[#0d0d0d] shadow-[0_0_35px_rgba(139,92,246,0.08)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_15%_85%,rgba(34,211,238,0.08),transparent_28%)]" />

          <div className="relative grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-violet-500/20 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
                  01 / experience
                </span>
                <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-violet-300">
                  {experience.type}
                </span>
              </div>

              <div className="mt-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/5 text-violet-300 transition-transform duration-500 group-hover:scale-105">
                <BriefcaseBusiness size={23} aria-hidden="true" />
              </div>

              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.16em] text-violet-300">
                {experience.period}
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
                {experience.role}
              </h3>
              <p className="mt-3 text-base font-medium text-zinc-300">
                {experience.company}
              </p>
            </div>

            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-end justify-between gap-4 border-b border-zinc-700/70 pb-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">
                    internship
                  </span>
                  <h4 className="mt-2 font-display text-xl text-white">
                    Professional experience
                  </h4>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-7 rounded-2xl border border-zinc-700/70 bg-zinc-800/25 p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/5 text-violet-300">
                    <CalendarDays size={16} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500">
                      Duration
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">
                      February 2026 – April 2026
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-zinc-700/70 pt-6">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">
                  role
                </span>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                  Data Analyst internship experience at {experience.company}, completed as part of my transition into professional data analytics.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
