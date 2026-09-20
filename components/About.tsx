"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";

const metrics = [
  { value: "8+", label: "Analytics Projects" },
  { value: "3", label: "Target Roles" },
  { value: "2026", label: "Graduation" },
];

export default function About() {
  return (
    <section id="about" className="relative mt-16 overflow-hidden py-10 sm:mt-20 sm:py-12">
      <div className="pointer-events-none absolute left-[5%] top-20 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute right-[4%] bottom-0 h-80 w-80 rounded-full bg-violet-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[1300px] rounded-[2rem] border-[5px] border-violet-500/40 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-5 shadow-[0_0_30px_rgba(168,85,247,0.22)] sm:p-6 lg:p-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col items-center justify-between gap-10 px-2 sm:px-4 lg:flex-row lg:items-stretch lg:px-5"
        >
          <div className="basis-full lg:basis-7/12 lg:border-r lg:border-violet-500/30 lg:pr-10">
            <div className="text-left">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                About Me
              </h2>

              <div className="mt-6 text-base leading-relaxed text-ink-300 sm:text-lg">
                <BlurText
                  text={profile.summary}
                  delay={55}
                  animateBy="words"
                  direction="top"
                />
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 text-ink-400 sm:text-base">
                <BlurText
                  text="I enjoy working with data from preparation and exploration through to dashboards and reporting. I use SQL and Python to clean and analyze datasets, then use Excel, Tableau, and Power BI to communicate the patterns that matter."
                  delay={35}
                  animateBy="words"
                  direction="top"
                />
                <BlurText
                  text="My focus is on connecting technical analysis with practical business questions — understanding what changed, finding the evidence behind the numbers, and communicating insights clearly."
                  delay={35}
                  animateBy="words"
                  direction="top"
                />
              </div>

              <div className="mt-10 grid grid-cols-3 gap-5 text-center sm:text-left">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 + index * 0.12 }}
                  >
                    <h3 className="font-display text-3xl font-semibold leading-none text-white sm:text-4xl">
                      {metric.value}
                    </h3>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-ink-500 sm:text-xs">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7">
                <ShinyText
                  text="Turning data into clear, practical decisions."
                  speed={3}
                  className="text-sm text-violet-300 sm:text-base"
                />
              </div>
            </div>
          </div>

          <div className="basis-full lg:basis-5/12">
            <motion.div
              initial={{ y: -18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full min-h-[390px] items-center justify-center overflow-hidden"
            >
              <div className="relative mt-16 w-[175px]">
                <div className="absolute left-1/2 top-[-108px] h-[112px] w-[3px] -translate-x-1/2 bg-gradient-to-b from-black via-black to-[#171717]" />
                <div className="absolute left-1/2 top-[-11px] h-5 w-5 -translate-x-1/2 rounded-full border border-white/15 bg-[#090909] shadow-[0_0_12px_rgba(0,0,0,0.8)]" />

                <div className="relative overflow-hidden rounded-[18px] border-2 border-violet-300/80 bg-[#0b0b1d] p-1.5 shadow-[0_0_24px_rgba(139,92,246,0.30),0_16px_40px_rgba(0,0,0,0.45)]">
                  <div className="relative aspect-[0.78] overflow-hidden rounded-[13px] bg-[radial-gradient(circle_at_50%_18%,rgba(99,102,241,0.28),transparent_48%),#070713]">
                    <Image
                      src="/about-profile.png"
                      alt={profile.name}
                      fill
                      sizes="175px"
                      className="object-contain object-bottom"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-md bg-violet-600/75 px-2 py-0.5 text-center text-[9px] font-semibold text-white shadow-[0_0_12px_rgba(139,92,246,0.35)]">
                      Data Analyst
                    </div>
                    <p className="absolute bottom-[-1px] left-0 right-0 translate-y-full pt-2 text-center text-[8px] font-medium leading-3 text-white/80">
                      Turning Data into Better Decisions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
