"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, BarChart3, Lightbulb, Puzzle, ListChecks, Target } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- featured projects"
          title="Analysis built around real questions"
          description="A selection of projects where I worked from a business or analytical question to a clear, interactive result."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="panel group relative flex min-h-[310px] flex-col overflow-hidden p-0 text-left transition-colors hover:border-teal/50"
            >
              <div className="relative flex h-32 items-center justify-center overflow-hidden border-b border-base-500/70 bg-gradient-to-br from-base-600 to-base-700">
                <BarChart3
                  size={52}
                  className="text-ink-400/40 transition-transform duration-500 group-hover:scale-110 group-hover:text-teal/60"
                />
                <div className="absolute inset-0 bg-radial-fade opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute right-3 top-3 rounded-full border border-base-500 bg-base-800/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-teal">
                  {p.stack[0]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl text-ink-100">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-400">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-base-500/70 px-2 py-1 font-mono text-[10px] text-ink-300">
                      {s}
                    </span>
                  ))}
                </div>

                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 font-mono text-xs text-gold">
                  Open case study →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-base-900/80 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="panel max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-base-700"
            >
              <div className="panel-header sticky top-0 z-10 bg-base-700/95 backdrop-blur">
                <span className="mono-tag">case_study.md</span>
                <button onClick={() => setActive(null)} aria-label="Close" className="text-ink-400 hover:text-ink-100">
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-6 p-6">
                <div>
                  <h3 className="text-2xl text-ink-100">{active.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.stack.map((s) => (
                      <span key={s} className="rounded-full border border-base-500 px-2.5 py-1 font-mono text-[11px] text-teal">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-ink-300">{active.summary}</p>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 text-ink-100">
                    <Target size={16} className="text-teal" /> Analytical focus
                  </div>
                  <p className="text-sm leading-6 text-ink-400">{active.challenges}</p>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 text-ink-100">
                    <ListChecks size={16} className="text-teal" /> What the analysis covers
                  </div>
                  <ul className="space-y-1.5 text-sm text-ink-400">
                    {active.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-gold">▸</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2 text-ink-100">
                    <Lightbulb size={16} className="text-gold" /> What I learned
                  </div>
                  <p className="text-sm leading-6 text-ink-400">{active.learnings}</p>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-base-500/70 pt-5">
                  <a href={active.github} target="_blank" rel="noreferrer" className="btn-secondary">
                    <Github size={15} /> GitHub
                  </a>
                  <a href={active.demo} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={15} /> Live dashboard
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
