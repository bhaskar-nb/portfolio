"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BarChart3, ExternalLink, Github, Lightbulb, ListChecks, Target, Workflow, X } from "lucide-react";
import { additionalProjects, projects } from "@/lib/data";

type Project = (typeof projects)[number];

type ProjectLike = Project | (typeof additionalProjects)[number];

const allProjects = [...projects, ...additionalProjects];

export default function CaseStudyOverlay() {
  const [active, setActive] = useState<ProjectLike | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest("#projects button.group");
      if (!card) return;

      const title = card.querySelector("h3")?.textContent?.trim();
      if (!title) return;
      const project = allProjects.find((item) => item.title === title);
      if (!project) return;

      event.preventDefault();
      event.stopPropagation();
      setActive(project);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base-900/90 p-4 backdrop-blur-xl"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-overlay-title"
        >
          <motion.article
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-base-400/80 bg-base-800 shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
          >
            <header className="sticky top-0 z-10 flex items-center justify-between border-b border-base-500/70 bg-base-800/90 px-5 py-4 backdrop-blur-xl sm:px-7">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">case_study / recruiter view</span>
                <span className="mt-1 block font-mono text-[8px] uppercase tracking-wider text-ink-600">Question → Method → Evidence → Recommendation</span>
              </div>
              <button type="button" onClick={() => setActive(null)} aria-label="Close case study" className="flex h-10 w-10 items-center justify-center rounded-full border border-base-500 text-ink-400 transition-colors hover:border-gold/40 hover:bg-base-700 hover:text-ink-100">
                <X size={17} aria-hidden="true" />
              </button>
            </header>

            <div className="space-y-7 p-5 sm:p-8">
              <section>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-gold/25 bg-gold/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-gold">
                    {projects.some((item) => item.id === active.id) ? "Featured project" : "Supporting project"}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-600">{active.stack.join(" · ")}</span>
                </div>
                <h2 id="case-study-overlay-title" className="mt-4 max-w-3xl font-display text-3xl tracking-tight text-ink-100 sm:text-5xl">{active.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-300 sm:text-base">{active.summary}</p>
              </section>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-base-500/70 bg-base-900/35 p-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-gold"><Target size={14} aria-hidden="true" /> Business question</div>
                  <p className="mt-3 text-sm leading-6 text-ink-300">{active.challenges}</p>
                </div>
                <div className="rounded-2xl border border-base-500/70 bg-base-900/35 p-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-gold"><Workflow size={14} aria-hidden="true" /> Method</div>
                  <p className="mt-3 text-sm leading-6 text-ink-300">{active.approach}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-gold/[0.045] p-5 sm:p-6">
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-gold"><BarChart3 size={14} aria-hidden="true" /> Key evidence</div>
                <p className="mt-3 text-sm leading-6 text-ink-200 sm:text-base">{active.evidence}</p>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-300"><ListChecks size={14} className="text-gold" aria-hidden="true" /> Analysis coverage</div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {active.features.map((feature) => (
                    <li key={feature} className="rounded-xl border border-base-500/60 bg-base-900/25 px-4 py-3 text-sm leading-5 text-ink-400"><span className="mr-2 text-gold">▸</span>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-stretch">
                <div className="rounded-2xl border border-base-500/70 bg-base-900/35 p-5">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-gold"><Lightbulb size={14} aria-hidden="true" /> Insight / takeaway</div>
                  <p className="mt-3 text-sm leading-6 text-ink-300">{active.learnings}</p>
                </div>
                <div className="rounded-2xl border border-base-500/70 bg-base-900/35 p-5 sm:min-w-[220px]">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink-600">Decision lens</span>
                  <p className="mt-3 text-sm leading-6 text-ink-300">What should a stakeholder understand or act on after seeing the analysis?</p>
                </div>
              </div>

              <footer className="flex flex-wrap gap-3 border-t border-base-500/70 pt-5">
                <a href={active.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={15} aria-hidden="true" /> View code <ArrowUpRight size={13} aria-hidden="true" /></a>
                {active.demo && <a href={active.demo} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={15} aria-hidden="true" /> Live dashboard <ArrowUpRight size={13} aria-hidden="true" /></a>}
              </footer>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
