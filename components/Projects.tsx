"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Database,
  ExternalLink,
  FileSpreadsheet,
  Github,
  ListChecks,
  Lightbulb,
  Target,
  Workflow,
  X,
} from "lucide-react";
import { projects, additionalProjects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const additionalMeta: Record<string, { signal: string; icon: typeof Database }> = {
  "hospital-emergency-dashboard": { signal: "Operational analytics", icon: FileSpreadsheet },
  "decodelabs-internship": { signal: "End-to-end workflow", icon: Workflow },
  "house-price-prediction": { signal: "Applied machine learning", icon: BrainCircuit },
  "amazon-prime-content-intelligence": { signal: "Visual analytics", icon: BarChart3 },
};

const featuredEvidence: Record<string, { scale: string; label: string; focus: string }> = {
  "global-disaster-analysis": {
    scale: "15,090",
    label: "disaster events",
    focus: "Frequency, severity, geography, human impact, and economic damage",
  },
  "hr-analytics-dashboard": {
    scale: "Synthetic",
    label: "employee dataset",
    focus: "Workforce composition, hiring, attrition, compensation, and performance",
  },
  "ev-adoption-dashboard": {
    scale: "150,413",
    label: "EV records",
    focus: "Geography, manufacturers, vehicle types, models, and eligibility",
  },
};

export default function Projects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const [activeAdditional, setActiveAdditional] = useState<(typeof additionalProjects)[number] | null>(null);

  useEffect(() => {
    const isModalOpen = Boolean(active || activeAdditional);
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
        setActiveAdditional(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, activeAdditional]);

  return (
    <section id="projects" className="relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="-- selected work"
          title="Projects built around the question"
          description="A recruiter-focused view of my analytics work: what I investigated, the scale of the data, and the result delivered through a dashboard or application."
        />

        <div className="mt-14 space-y-5">
          {projects.map((p, i) => {
            const flagship = i === 0;
            const evidence = featuredEvidence[p.id];

            if (flagship) {
              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="group overflow-hidden rounded-[2rem] border border-gold/30 bg-base-800/55 shadow-[0_0_70px_rgba(34,197,94,0.06)]"
                >
                  <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
                    <div className="p-7 sm:p-10 lg:p-12">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-gold/25 bg-gold/8 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-gold">
                          01 / flagship case study
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">
                          Business analytics
                        </span>
                      </div>

                      <div className="mt-8 max-w-3xl">
                        <h3 className="font-display text-4xl font-medium tracking-[-0.03em] text-ink-100 sm:text-5xl">
                          {p.title}
                        </h3>
                        <p className="mt-5 max-w-2xl text-base leading-8 text-ink-400">
                          {p.summary}
                        </p>
                      </div>

                      <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
                        <div className="rounded-2xl border border-base-500/70 bg-base-900/45 p-5">
                          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-gold">
                            <Target size={13} aria-hidden="true" /> Business question
                          </div>
                          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-300">{p.challenges}</p>
                        </div>
                        <div className="rounded-2xl border border-gold/20 bg-gold/[0.04] p-5 sm:min-w-[190px]">
                          <span className="block font-display text-3xl text-gold">20.6%</span>
                          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.14em] text-ink-500">sales YoY</span>
                          <span className="mt-4 block font-display text-3xl text-gold">43.7%</span>
                          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.14em] text-ink-500">profit growth</span>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-base-500/70 bg-base-900/35 p-5">
                          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-600">Approach</span>
                          <p className="mt-2 text-sm leading-6 text-ink-300">{p.approach}</p>
                        </div>
                        <div className="rounded-2xl border border-base-500/70 bg-base-900/35 p-5">
                          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-600">Recommendation</span>
                          <p className="mt-2 text-sm leading-6 text-ink-300">{p.recommendation}</p>
                        </div>
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-2">
                        {p.stack.map((s) => (
                          <span key={s} className="rounded-full border border-base-500 bg-base-700/55 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-300">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
                          View dashboard <ExternalLink size={15} />
                        </a>
                        <a href={p.github} target="_blank" rel="noreferrer" className="btn-secondary inline-flex">
                          <Github size={15} /> GitHub
                        </a>
                        <button type="button" onClick={() => setActive(p)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-base-500 px-4 font-mono text-[10px] uppercase tracking-[0.13em] text-ink-300 transition-colors hover:border-gold/40 hover:text-ink-100">
                          Full case study <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="relative overflow-hidden border-t border-base-500/70 bg-base-900/45 p-7 lg:border-l lg:border-t-0 lg:p-10">
                      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-gold/5 blur-3xl" />
                      <div className="relative flex h-full flex-col justify-between">
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">Key evidence</span>
                          <p className="mt-3 text-2xl font-medium leading-tight text-ink-100">Growth was visible in both revenue and profit.</p>
                          <p className="mt-4 text-sm leading-6 text-ink-400">{p.evidence}</p>
                        </div>
                        <div className="mt-10 border-t border-base-500/70 pt-6">
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">Analytical flow</span>
                          <div className="mt-4 space-y-3">
                            {["Business question", "KPI comparison", "Product-level drivers", "Recommendation"].map((step, index) => (
                              <div key={step} className="flex items-center gap-3">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/20 bg-gold/[0.04] font-mono text-[9px] text-gold">0{index + 1}</span>
                                <span className="text-sm text-ink-300">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }

            return (
              <motion.button
                key={p.id}
                type="button"
                onClick={() => setActive(p)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: (i - 1) * 0.05 }}
                whileHover={{ y: -4 }}
                className="group grid w-full overflow-hidden rounded-[1.75rem] border border-base-500/80 bg-base-800/45 text-left transition-colors duration-300 hover:border-gold/35 lg:grid-cols-[auto_1fr_auto]"
              >
                <div className="flex items-start gap-4 p-6 sm:p-7 lg:w-64">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold">0{i + 1}</span>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-600">Selected project</span>
                    <span className="mt-2 block font-mono text-xs text-ink-500">{p.stack.join(" · ")}</span>
                  </div>
                </div>

                <div className="border-t border-base-500/70 p-6 sm:p-7 lg:border-l lg:border-t-0">
                  <h3 className="font-display text-2xl tracking-tight text-ink-100 sm:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-400">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[evidence?.scale, evidence?.label].filter(Boolean).map((item) => (
                      <span key={item} className="rounded-full border border-base-500 bg-base-900/45 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-400">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-base-500/70 px-6 py-5 sm:px-7 lg:w-60 lg:flex-col lg:items-end lg:justify-between lg:border-l lg:border-t-0">
                  <div className="max-w-[190px] text-right text-xs leading-5 text-ink-500 lg:mt-1">
                    {evidence?.focus}
                  </div>
                  <ArrowUpRight size={18} className="text-ink-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" aria-hidden="true" />
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="-- supporting work"
            title="More projects, different signals"
            description="A compact set of supporting projects showing operational reporting, end-to-end analytics, machine learning, and visual storytelling."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {additionalProjects.map((p, i) => {
              const meta = additionalMeta[p.id];
              const Icon = meta?.icon ?? Database;

              return (
                <motion.button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveAdditional(p)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/45 p-6 text-left transition-colors duration-300 hover:border-gold/35 sm:p-7"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gold/[0.035] blur-2xl" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-500 bg-base-700/60 text-gold">
                          <Icon size={17} aria-hidden="true" />
                        </span>
                        <div>
                          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold">0{i + 1} / {p.category}</span>
                          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.13em] text-ink-600">{meta?.signal}</span>
                        </div>
                      </div>
                      <ArrowUpRight size={17} className="mt-1 text-ink-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 font-display text-2xl tracking-tight text-ink-100">{p.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-400">{p.summary}</p>
                    <div className="mt-6 border-t border-base-500/70 pt-5">
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span key={s} className="rounded-full border border-base-500 bg-base-900/35 px-2.5 py-1 font-mono text-[9px] text-ink-400">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {(active || activeAdditional) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-base-900/85 p-4 backdrop-blur-md"
            onClick={() => { setActive(null); setActiveAdditional(null); }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-base-400/80 bg-base-700 shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-base-500/70 bg-base-700/90 px-6 py-4 backdrop-blur">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">case_study.md</span>
                <button type="button" onClick={() => { setActive(null); setActiveAdditional(null); }} aria-label="Close project details" className="rounded-full p-2 text-ink-400 transition-colors hover:bg-base-600 hover:text-ink-100">
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              {active ? (
                <div className="space-y-7 p-6 sm:p-9">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em]">
                      <span className="text-gold">{active.id === "sales-performance-dashboard" ? "Flagship case study" : "Selected project"}</span>
                      <span className="text-ink-600">/</span>
                      <span className="text-ink-500">{active.stack.join(" · ")}</span>
                    </div>
                    <h3 className="mt-3 font-display text-3xl text-ink-100 sm:text-4xl">{active.title}</h3>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-ink-300">{active.summary}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-base-500/70 bg-base-800/45 p-5">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200"><Target size={15} className="text-gold" aria-hidden="true" /> Question</div>
                      <p className="mt-3 text-sm leading-6 text-ink-400">{active.challenges}</p>
                    </div>
                    <div className="rounded-2xl border border-base-500/70 bg-base-800/45 p-5">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200"><Workflow size={15} className="text-gold" aria-hidden="true" /> Approach</div>
                      <p className="mt-3 text-sm leading-6 text-ink-400">{active.approach}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gold/25 bg-gold/[0.04] p-5">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200"><BarChart3 size={15} className="text-gold" aria-hidden="true" /> Evidence</div>
                    <p className="mt-3 text-sm leading-6 text-ink-300">{active.evidence}</p>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-ink-100"><ListChecks size={16} className="text-gold" aria-hidden="true" /> What the analysis covers</div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {active.features.map((feature) => (
                        <li key={feature} className="rounded-xl border border-base-500/60 bg-base-800/40 px-3 py-2.5 text-sm leading-5 text-ink-400">
                          <span className="mr-2 text-gold" aria-hidden="true">▸</span>{feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2 text-ink-100"><Lightbulb size={16} className="text-gold" aria-hidden="true" /> Takeaway</div>
                    <p className="text-sm leading-6 text-ink-400">{active.learnings}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 border-t border-base-500/70 pt-5">
                    <a href={active.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={15} aria-hidden="true" /> GitHub</a>
                    {active.demo && <a href={active.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={15} aria-hidden="true" /> Live dashboard</a>}
                  </div>
                </div>
              ) : (
                <div className="space-y-7 p-6 sm:p-9">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-gold">Supporting project</span>
                    <h3 className="mt-3 font-display text-3xl text-ink-100 sm:text-4xl">{activeAdditional?.title}</h3>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-ink-300">{activeAdditional?.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 border-y border-base-500/70 py-5">
                    {activeAdditional?.stack.map((s) => (
                      <span key={s} className="rounded-full border border-base-500 bg-base-800/45 px-3 py-1.5 font-mono text-[9px] text-ink-400">{s}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {activeAdditional?.github && <a href={activeAdditional.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={15} /> GitHub</a>}
                    {activeAdditional?.demo && <a href={activeAdditional.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={15} /> View dashboard</a>}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
