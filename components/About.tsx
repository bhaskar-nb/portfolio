"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";

const metrics = [
  { value: "8+", label: "Analytics Projects" },
  { value: "3", label: "Target Roles" },
  { value: "2026", label: "Graduation" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-base-500/60 py-24 sm:py-28">
      <div className="pointer-events-none absolute left-[8%] top-16 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute right-[4%] bottom-0 h-80 w-80 rounded-full bg-violet-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-violet-500/60 bg-[#101010] shadow-[0_0_0_1px_rgba(139,92,246,0.08),0_0_45px_rgba(139,92,246,0.12)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(139,92,246,0.06),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,0.04),transparent_30%)]" />

          <div className="relative grid min-h-[500px] lg:grid-cols-[minmax(0,1fr)_1px_340px]">
            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
              <div className="max-w-2xl">
                <h2 className="font-display text-[2rem] font-semibold leading-none tracking-[-0.045em] text-white sm:text-[2.25rem]">
                  About Me
                </h2>

                <div className="mt-5 max-w-[680px] space-y-4 text-sm leading-[1.8] text-ink-300 sm:text-base sm:leading-[1.85]">
                  <p>{profile.summary}</p>

                  <p>
                    I enjoy working with data from the first step of preparation to the final dashboard. I use SQL and Python to clean, explore, and analyze datasets, then use Excel, Tableau, and Power BI to present the important patterns in a way that is easy to understand.
                  </p>

                  <p>
                    My focus is on connecting technical analysis with practical business questions — understanding what changed, finding the reasons behind the numbers, and communicating the evidence clearly so the analysis can support better decisions.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-4">
                <div className="grid grid-cols-3 gap-6">
                  {metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-3xl">
                        {metric.value}
                      </p>
                      <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-ink-500 sm:text-[9px]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-xs font-medium tracking-[-0.01em] text-ink-500 sm:text-sm">
                  Turning data into clear, practical decisions.
                </p>
              </div>
            </div>

            <div className="hidden h-[70%] self-center bg-violet-400/20 lg:block" />

            <div className="relative flex items-center justify-center px-8 pb-12 pt-20 sm:px-10 lg:pb-10">
              <motion.div
                initial={{ y: -12 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-10 w-[220px]"
              >
                <div className="absolute left-1/2 top-[-105px] h-[108px] w-[3px] -translate-x-1/2 bg-gradient-to-b from-black via-black to-[#171717]" />
                <div className="absolute left-1/2 top-[-9px] h-5 w-5 -translate-x-1/2 rounded-full border border-white/15 bg-[#090909] shadow-[0_0_12px_rgba(0,0,0,0.8)]" />

                <div className="relative overflow-hidden rounded-[18px] border-2 border-violet-300/80 bg-[#0b0b1d] p-1.5 shadow-[0_0_24px_rgba(139,92,246,0.30),0_16px_40px_rgba(0,0,0,0.45)]">
                  <div className="relative aspect-[0.78] overflow-hidden rounded-[13px] bg-[radial-gradient(circle_at_50%_18%,rgba(99,102,241,0.28),transparent_48%),#070713]">
                    <Image
                      src="/about-profile.png"
                      alt={profile.name}
                      fill
                      sizes="220px"
                      className="object-contain object-bottom"
                    />

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-md bg-violet-600/90 px-2 py-1 text-center text-[10px] font-semibold text-white shadow-[0_0_12px_rgba(139,92,246,0.35)]">
                      Data Analyst
                    </div>
                    <p className="absolute bottom-[-1px] left-0 right-0 translate-y-full pt-2 text-center text-[8px] font-medium leading-3 text-white/80">
                      Turning Data into Better Decisions
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
