"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Database, Map, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const evidence = [
  {
    label: "Sales performance",
    project: "Sales Performance Dashboard",
    value: "20.6%",
    detail: "YoY sales growth identified",
    question: "How did sales and profit change over time?",
    signal: "Growth",
    icon: TrendingUp,
    bars: [38, 52, 46, 64, 58, 73, 68, 84],
    href: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/SalesDashboardProject_17823218142750/SalesDashboard",
  },
  {
    label: "Profit performance",
    project: "Sales Performance Dashboard",
    value: "43.7%",
    detail: "Profit growth identified",
    question: "Where does profitability strengthen alongside sales?",
    signal: "Profit",
    icon: BarChart3,
    bars: [30, 42, 39, 56, 51, 66, 61, 82],
    href: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/SalesDashboardProject_17823218142750/SalesDashboard",
  },
  {
    label: "EV dataset",
    project: "EV Adoption Dashboard",
    value: "150,413",
    detail: "EV records analyzed",
    question: "How do registrations vary across the available dataset?",
    signal: "Scale",
    icon: Database,
    bars: [44, 48, 55, 51, 63, 69, 74, 88],
    href: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/EVDashboard_17866424745700/EvDashboard",
  },
  {
    label: "Disaster analysis",
    project: "Global Disaster Analysis",
    value: "15,090",
    detail: "Disaster events analyzed",
    question: "Where do disaster frequency and impact diverge?",
    signal: "Coverage",
    icon: Map,
    bars: [70, 52, 61, 45, 74, 57, 82, 66],
    href: "https://public.tableau.com/app/profile/bhaskar.nakka4980/viz/DisasterAnalysis_17869126013330/Globaldashboard",
  },
];

export default function DashboardProof() {
  return (
    <section aria-labelledby="dashboard-proof-title" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="dashboard-proof-title">
          <SectionHeading
            eyebrow="-- dashboard proof"
            title="Evidence before the explanation."
            description="A compact evidence wall surfaces verified project signals, the questions behind them, and the dashboards where the analysis can be explored."
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {evidence.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={`${item.project}-${item.label}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${item.project} dashboard`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4 border-b border-base-500/60 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.06] text-gold">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-ink-500">{item.label}</span>
                      <span className="mt-1 block text-xs text-ink-600">{item.project}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink-600">0{index + 1} / 04</span>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <div className="font-display text-3xl tracking-tight text-ink-100">{item.value}</div>
                    <p className="mt-1 text-xs leading-5 text-ink-500">{item.detail}</p>
                    <div className="mt-5">
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-gold">Analytical question</span>
                      <p className="mt-2 max-w-md text-sm leading-6 text-ink-300">{item.question}</p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-base-500/60 bg-base-900/60 p-2 sm:w-32" aria-hidden="true">
                    <div className="mb-2 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.14em] text-ink-600">
                      <span>{item.signal}</span>
                      <span>signal</span>
                    </div>
                    <div className="flex h-16 items-end gap-1.5">
                      {item.bars.map((height, barIndex) => (
                        <motion.span
                          key={barIndex}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: index * 0.07 + barIndex * 0.035 }}
                          className="flex-1 rounded-t-sm bg-gold/60"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-base-500/60 pt-3">
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink-600">verified project evidence</span>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-ink-500 transition-colors group-hover:text-gold">
                    Explore dashboard <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
