"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Lightbulb, ListChecks, Target, ArrowUpRight, BarChart3, Workflow } from "lucide-react";
import { projects, additionalProjects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

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
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="-- selected work" title="Projects that answer real questions" description="I turn messy datasets and business questions into focused analysis, useful KPIs, and interactive dashboards." />

        <div className="mt-12 space-y-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative grid min-h-[360px] w-full overflow-hidden rounded-3xl border border-base-500/80 bg-base-800/70 text-left backdrop-blur-sm transition-all duration-500 hover:border-gold/50 md:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative flex flex-col justify-between overflow-hidden border-b border-base-500/70 p-7 sm:p-9 md:border-b-0 md:border-r">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">0{i + 1} / Featured</span>
                    <ArrowUpRight size={17} className="text-ink-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="mt-12 max-w-xl font-display text-3xl font-medium tracking-tight text-ink-100 sm:text-4xl">{p.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-ink-400 sm:text-base">{p.summary}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {p.stack.map((s) => <span key={s} className="rounded-full border border-base-500 bg-base-700/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ink-300">{s}</span>)}
                </div>
              </div>

              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-base-700 to-base-900 p-8">
                <div className="absolute inset-0 bg-radial-fade opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative w-full max-w-sm rounded-2xl border border-base-400/70 bg-base-800/80 p-4 shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] group-hover:-rotate-1">
                  <div className="flex items-center justify-between border-b border-base-500/70 pb-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink-500">analytics / dashboard</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(255,122,24,0.8)]" aria-hidden="true" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-4">
                    {["Revenue", "Profit", "Growth"].map((label, index) => (
                      <div key={label} className="rounded-lg border border-base-500/70 bg-base-700/60 p-2.5">
                        <span className="block font-mono text-[8px] uppercase text-ink-600">{label}</span>
                        <span className="mt-2 block h-2 rounded-full bg-base-500"><span className="block h-2 rounded-full bg-gold/70" style={{ width: `${55 + index * 15}%` }} /></span>
                      </div>
                    ))}
                  </div>
                  <div className="flex h-24 items-end gap-2 rounded-lg border border-base-500/60 bg-base-900/50 p-3">
                    {[35, 52, 42, 68, 58, 78, 72, 90, 76, 96].map((height, index) => <motion.span key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.04 }} className="flex-1 rounded-t-sm bg-gold/60" />)}
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">click to explore case study</div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="-- more work" title="Breadth beyond dashboards" description="Additional projects showing applied machine learning and end-to-end data work." />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {additionalProjects.map((p, i) => (
              <motion.button key={p.id} type="button" onClick={() => setActiveAdditional(p)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -5 }} className="group rounded-2xl border border-base-500/80 bg-base-800/60 p-6 text-left transition-all duration-300 hover:border-gold/40 hover:bg-base-700/70">
                <div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gold">{p.category}</span><ArrowUpRight size={16} className="text-ink-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" aria-hidden="true" /></div>
                <h3 className="mt-10 font-display text-xl text-ink-100">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-400">{p.summary}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">{p.stack.map((s) => <span key={s} className="rounded-full border border-base-500 px-2 py-1 font-mono text-[9px] text-ink-400">{s}</span>)}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center bg-base-900/85 p-4 backdrop-blur-md" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-labelledby="project-case-study-title"><motion.div initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: 12 }} transition={{ duration: 0.28 }} onClick={(e) => e.stopPropagation()} className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-base-400/80 bg-base-700 shadow-2xl">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-base-500/70 bg-base-700/90 px-6 py-4 backdrop-blur"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">case_study.md</span><button type="button" onClick={() => setActive(null)} aria-label="Close case study" className="rounded-full p-2 text-ink-400 transition-colors hover:bg-base-600 hover:text-ink-100"><X size={18} aria-hidden="true" /></button></div>
          <div className="space-y-7 p-6 sm:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">Selected project</span><span className="text-ink-600">/</span><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">{active.stack.join(" · ")}</span></div>
              <h3 id="project-case-study-title" className="mt-3 font-display text-3xl text-ink-100 sm:text-4xl">{active.title}</h3>
              <p className="mt-5 text-base leading-7 text-ink-300">{active.summary}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-base-500/70 bg-base-800/50 p-4"><div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200"><Target size={15} className="text-gold" aria-hidden="true" /> Question</div><p className="mt-3 text-sm leading-6 text-ink-400">{active.challenges}</p></div>
              <div className="rounded-2xl border border-base-500/70 bg-base-800/50 p-4"><div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200"><Workflow size={15} className="text-gold" aria-hidden="true" /> Approach</div><p className="mt-3 text-sm leading-6 text-ink-400">{active.approach}</p></div>
            </div>

            <div className="rounded-2xl border border-gold/25 bg-gold/[0.04] p-5"><div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-200"><BarChart3 size={15} className="text-gold" aria-hidden="true" /> Evidence</div><p className="mt-3 text-sm leading-6 text-ink-300">{active.evidence}</p></div>

            <div><div className="mb-3 flex items-center gap-2 text-ink-100"><ListChecks size={16} className="text-gold" aria-hidden="true" /> What the analysis covers</div><ul className="grid gap-2 sm:grid-cols-2">{active.features.map((f) => <li key={f} className="rounded-xl border border-base-500/60 bg-base-800/40 px-3 py-2.5 text-sm leading-5 text-ink-400"><span className="mr-2 text-gold" aria-hidden="true">▸</span>{f}</li>)}</ul></div>

            <div><div className="mb-2 flex items-center gap-2 text-ink-100"><Lightbulb size={16} className="text-gold" aria-hidden="true" /> Takeaway</div><p className="text-sm leading-6 text-ink-400">{active.learnings}</p></div>

            <div className="flex flex-wrap gap-3 border-t border-base-500/70 pt-5"><a href={active.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={15} aria-hidden="true" /> GitHub</a><a href={active.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={15} aria-hidden="true" /> Live dashboard</a></div>
          </div>
        </motion.div></motion.div>}

        {activeAdditional && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] flex items-center justify-center bg-base-900/85 p-4 backdrop-blur-md" onClick={() => setActiveAdditional(null)} role="dialog" aria-modal="true" aria-labelledby="additional-project-title"><motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: 10 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-xl overflow-hidden rounded-3xl border border-base-400/80 bg-base-700 shadow-2xl"><div className="flex items-center justify-between border-b border-base-500/70 px-6 py-4"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">project.md</span><button type="button" onClick={() => setActiveAdditional(null)} aria-label="Close project" className="rounded-full p-2 text-ink-400 hover:bg-base-600 hover:text-ink-100"><X size={18} aria-hidden="true" /></button></div><div className="space-y-5 p-6 sm:p-8"><div><span className="font-mono text-[10px] uppercase tracking-wider text-gold">{activeAdditional.category}</span><h3 id="additional-project-title" className="mt-2 font-display text-2xl text-ink-100">{activeAdditional.title}</h3><p className="mt-3 text-sm leading-6 text-ink-400">{activeAdditional.summary}</p></div><div className="flex flex-wrap gap-2">{activeAdditional.stack.map((s) => <span key={s} className="rounded-full border border-base-500 px-2.5 py-1 font-mono text-[11px] text-gold">{s}</span>)}</div><div className="flex flex-wrap gap-3 border-t border-base-500/70 pt-5"><a href={activeAdditional.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={15} aria-hidden="true" /> GitHub</a>{activeAdditional.demo && <a href={activeAdditional.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={15} aria-hidden="true" /> Open app</a>}</div></div></motion.div></motion.div>}
      </AnimatePresence>
    </section>
  );
}
