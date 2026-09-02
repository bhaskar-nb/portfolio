"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const signals = [
  {
    label: "Sales performance",
    value: "20.6%",
    detail: "YoY sales growth identified",
    icon: TrendingUp,
    bars: [38, 52, 46, 64, 58, 73, 68, 84],
  },
  {
    label: "Profit performance",
    value: "43.7%",
    detail: "Profit growth identified",
    icon: BarChart3,
    bars: [30, 42, 39, 56, 51, 66, 61, 82],
  },
  {
    label: "EV dataset",
    value: "150,413",
    detail: "EV records analyzed",
    icon: Database,
    bars: [44, 48, 55, 51, 63, 69, 74, 88],
  },
];

export default function DashboardProof() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- dashboard proof"
          title="The numbers are part of the interface."
          description="Project previews surface verified evidence before a recruiter has to open a case study."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.article
                key={signal.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/70 p-5 transition-colors duration-300 hover:border-gold/40"
              >
                <div className="flex items-center justify-between border-b border-base-500/60 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.06] text-gold">
                      <Icon size={15} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-500">{signal.label}</span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <div className="font-display text-3xl tracking-tight text-ink-100">{signal.value}</div>
                    <p className="mt-1 max-w-[180px] text-xs leading-5 text-ink-500">{signal.detail}</p>
                  </div>
                  <div className="flex h-16 w-28 items-end gap-1.5 rounded-lg border border-base-500/60 bg-base-900/60 p-2">
                    {signal.bars.map((height, barIndex) => (
                      <motion.span
                        key={barIndex}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.08 + barIndex * 0.035 }}
                        className="flex-1 rounded-t-sm bg-gold/60"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-base-500/60 pt-3">
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink-600">verified project evidence</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-gold">01 / 03</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
