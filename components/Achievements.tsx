"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, FolderKanban, ArrowUpRight } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const icons = [FolderKanban, BarChart3, Database];

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-15 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="-- proof points"
          title="Achievements"
          description="A few measurable signals from the analytics work presented across this portfolio."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = icons[index] ?? BarChart3;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[300px] overflow-hidden rounded-[1.5rem] border border-violet-500/25 bg-gradient-to-br from-[#15131d] via-[#171717] to-[#0e0e0e] p-7 transition-colors duration-300 hover:border-violet-400/50 sm:p-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-32 bg-cyan-400/[0.04] blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/5 text-violet-300 transition-transform duration-500 group-hover:scale-105">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      size={17}
                      className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-auto pt-12">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-violet-300">
                      0{index + 1} / metric
                    </span>
                    <h3 className="mt-3 font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-400">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
