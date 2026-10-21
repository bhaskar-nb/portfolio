"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  ExternalLink,
  Github,
  ListChecks,
  Lightbulb,
  Target,
  Workflow,
  X,
} from "lucide-react";
import { projects, additionalProjects } from "@/lib/data";
import ChromaGrid from "@/components/ChromaGrid";
import "@/components/ChromaGrid.css";

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
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 sm:mb-9">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="mt-8">
          <ChromaGrid
            items={[
              {
                id: projects[0].id,
                title: projects[0].title,
                subtitle: projects[0].stack.join(" · "),
                handle: "Flagship analytics case study",
                location: "SQL Server · Data Warehouse",
                borderColor: "#22d3ee",
                gradient: "linear-gradient(145deg,#17162f 0%,#20244b 48%,#101522 100%)",
                visual: "sales",
                metric: "Bronze → Silver → Gold",
              },
              {
                id: projects[1].id,
                title: projects[1].title,
                subtitle: projects[1].stack.join(" · "),
                handle: "Selected analytics project",
                location: "Python · Startup Funding",
                borderColor: "#a78bfa",
                gradient: "linear-gradient(145deg,#1b1834 0%,#292653 48%,#11111f 100%)",
                visual: "disaster",
                metric: "49,438 records",
              },
              {
                id: projects[2].id,
                title: projects[2].title,
                subtitle: projects[2].stack.join(" · "),
                handle: "Selected analytics project",
                location: "Tableau · Sales Analytics",
                borderColor: "#c4b5fd",
                gradient: "linear-gradient(145deg,#20172f 0%,#32224a 48%,#11111f 100%)",
                visual: "hr",
                metric: "$164.42M sales",
              },
              {
                id: projects[3].id,
                title: projects[3].title,
                subtitle: projects[3].stack.join(" · "),
                handle: "Selected analytics project",
                location: "Power BI · Sales Performance",
                borderColor: "#22d3ee",
                gradient: "linear-gradient(145deg,#13232b 0%,#1e3650 48%,#101820 100%)",
                visual: "ev",
                metric: "$645.22K revenue",
              },
              {
                id: projects[4].id,
                title: projects[4].title,
                subtitle: projects[4].stack.join(" · "),
                handle: "End-to-end SQL analytics",
                location: "Power BI · Cricket Analytics",
                borderColor: "#c4b5fd",
                gradient: "linear-gradient(145deg,#20172f 0%,#32224a 48%,#11111f 100%)",
                visual: "hr",
                metric: "2003–2023 World Cups",
              },
            ]}
            onItemClick={(item) => {
              const selected = projects.find((project) => project.id === item.id);
              if (selected) setActive(selected);
            }}
          />
        </div>

        <div className="mt-24">
          <div className="mb-8 sm:mb-9">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              Additional Projects
            </h2>
          </div>

          <div className="mt-8">
            <ChromaGrid
              items={[
                {
                  id: additionalProjects[0].id,
                  title: additionalProjects[0].title,
                  subtitle: additionalProjects[0].stack.join(" · "),
                  handle: "SQL exploratory analysis",
                  location: "SQL Server · Business Analysis",
                  borderColor: "#22d3ee",
                  gradient: "linear-gradient(145deg,#13232b 0%,#1e3650 48%,#101820 100%)",
                  visual: "ev",
                  metric: "SQL EDA",
                },
                {
                  id: additionalProjects[1].id,
                  title: additionalProjects[1].title,
                  subtitle: additionalProjects[1].stack.join(" · "),
                  handle: "Emergency room analysis",
                  location: "Excel · Healthcare Analytics",
                  borderColor: "#a78bfa",
                  gradient: "linear-gradient(145deg,#1b1834 0%,#292653 48%,#11111f 100%)",
                  visual: "disaster",
                  metric: "Emergency analytics",
                },
                {
                  id: additionalProjects[2].id,
                  title: additionalProjects[2].title,
                  subtitle: additionalProjects[2].stack.join(" · "),
                  handle: "Workforce analytics",
                  location: "Tableau · HR Analytics",
                  borderColor: "#c4b5fd",
                  gradient: "linear-gradient(145deg,#20172f 0%,#32224a 48%,#11111f 100%)",
                  visual: "hr",
                  metric: "Synthetic dataset",
                },
                {
                  id: additionalProjects[3].id,
                  title: additionalProjects[3].title,
                  subtitle: additionalProjects[3].stack.join(" · "),
                  handle: "Visual analytics",
                  location: "Tableau · EV Analytics",
                  borderColor: "#22d3ee",
                  gradient: "linear-gradient(145deg,#17162f 0%,#20244b 48%,#101522 100%)",
                  visual: "sales",
                  metric: "150,413 records",
              },
              {
                id: additionalProjects[4].id,
                title: additionalProjects[4].title,
                subtitle: additionalProjects[4].stack.join(" · "),
                handle: "Global disaster analysis",
                location: "Tableau · Disaster Analytics",
                borderColor: "#22d3ee",
                gradient: "linear-gradient(145deg,#13232b 0%,#1e3650 48%,#101820 100%)",
                visual: "ev",
                metric: "15,090 events",
              },
              ]}
              onItemClick={(item) => {
                const selected = additionalProjects.find((project) => project.id === item.id);
                if (selected) setActiveAdditional(selected);
              }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {(active || activeAdditional) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md transition-opacity duration-300 sm:p-6"
            onClick={() => { setActive(null); setActiveAdditional(null); }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#090a12]/95 shadow-[0_30px_120px_-30px_rgba(139,92,246,0.45)] backdrop-blur-2xl"
            >
              <div
                className="relative flex min-h-56 items-end overflow-hidden border-b border-white/10 p-6 sm:min-h-64 sm:p-10"
                style={{
                  background:
                    active?.id === "sql-data-warehouse-project"
                      ? "linear-gradient(145deg,#17162f 0%,#20244b 48%,#101522 100%)"
                      : active?.id === "global-startup-analytics"
                        ? "linear-gradient(145deg,#1b1834 0%,#292653 48%,#11111f 100%)"
                        : active?.id === "sales-performance-dashboard"
                          ? "linear-gradient(145deg,#20172f 0%,#32224a 48%,#11111f 100%)"
                          : active?.id === "executive-sales-performance-dashboard"
                            ? "linear-gradient(145deg,#13232b 0%,#1e3650 48%,#101820 100%)"
                            : "linear-gradient(145deg,#17162f 0%,#262040 48%,#101018 100%)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(167,139,250,0.34),transparent_38%),radial-gradient(ellipse_at_15%_90%,rgba(34,211,238,0.2),transparent_42%)]" />\n                <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="relative z-10 max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-100/90">
                    {active ? "Case study / Featured project" : "Case study / Additional project"}
                  </span>
                  <div className="mt-4 flex flex-wrap items-end gap-3 sm:gap-4">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                      {active?.title ?? activeAdditional?.title}
                    </h2>
                    {active && (
                      <span className="rounded-full border border-cyan-200/20 bg-cyan-300/[0.09] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-100">
                        {active.id === "sql-data-warehouse-project" ? "Bronze → Silver → Gold" : active.id === "global-startup-analytics" ? "49,438 records" : active.id === "sales-performance-dashboard" ? "$164.42M sales" : active.id === "executive-sales-performance-dashboard" ? "$645.22K revenue" : "2003–2023 World Cups"}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => { setActive(null); setActiveAdditional(null); }}
                  aria-label="Close project details"
                  className="absolute right-4 top-4 z-20 rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white sm:right-5 sm:top-5"
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              {active ? (
                <div className="max-h-[62vh] overflow-y-auto p-5 sm:p-9">
                  <section className="grid gap-7 border-b border-white/10 pb-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(230px,0.65fr)] lg:gap-10">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200/75">Project brief / 01</div>
                      <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-200 sm:text-lg sm:leading-9">
                        {active.summary}
                      </p>
                    </div>
                    <aside className="self-start border-l border-violet-300/30 pl-5 sm:pl-6">
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-200/75">Built with</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {active.stack.map((stack) => (
                          <span key={stack} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">
                            {stack}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-200/75">Dataset</div>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{active.dataset}</p>
                    </aside>
                  </section>

                  <section className="grid gap-7 border-b border-white/10 py-8 lg:grid-cols-2 lg:gap-10">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-cyan-200/70">02</span>
                        <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">The question</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">{active.challenges}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-violet-200/70">03</span>
                        <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">The approach</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">{active.approach}</p>
                    </div>
                  </section>

                  <section className="relative overflow-hidden border-b border-white/10 py-8 sm:py-10">
                    <div className="pointer-events-none absolute -right-10 top-6 h-36 w-36 rounded-full bg-cyan-400/[0.08] blur-3xl" />
                    <div className="relative grid gap-4 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-7">
                      <div>
                        <span className="font-mono text-xs text-cyan-200/70">04 / EVIDENCE</span>
                        <BarChart3 size={22} className="mt-4 text-cyan-200" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl tracking-tight text-white sm:text-3xl">What the data shows</h3>
                        <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-200 sm:text-base sm:leading-8">{active.evidence}</p>
                      </div>
                    </div>
                  </section>

                  {active.features && active.features.length > 0 && (
                    <section className="border-b border-white/10 py-8">
                      <div className="mb-5 flex items-center gap-3">
                        <span className="font-mono text-xs text-violet-200/70">05</span>
                        <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">Inside the analysis</h3>
                      </div>
                      <ul className="grid gap-x-8 sm:grid-cols-2">
                        {active.features.map((feature, index) => (
                          <li key={feature} className="flex gap-4 border-t border-white/[0.09] py-4 text-sm leading-6 text-zinc-300">
                            <span className="shrink-0 font-mono text-[10px] text-violet-200/70">{String(index + 1).padStart(2, "0")}</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  <section className="grid gap-7 py-8 lg:grid-cols-2 lg:gap-10">
                    <div>
                      <div className="flex items-center gap-3">
                        <Lightbulb size={17} className="text-violet-200" aria-hidden="true" />
                        <h3 className="font-display text-xl tracking-tight text-white">What I learned</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">{active.learnings}</p>
                    </div>
                    <div className="border-l border-cyan-200/25 pl-5 sm:pl-6">
                      <div className="flex items-center gap-3">
                        <Target size={17} className="text-cyan-200" aria-hidden="true" />
                        <h3 className="font-display text-xl tracking-tight text-white">Why it matters</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-zinc-300">{active.recommendation}</p>
                    </div>
                  </section>

                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                    <a href={active.github} target="_blank" rel="noreferrer" className="btn-secondary">
                      <Github size={15} aria-hidden="true" /> View source
                    </a>
                    {active.demo && (
                      <a href={active.demo} target="_blank" rel="noreferrer" className="btn-primary">
                        <ExternalLink size={15} aria-hidden="true" /> Explore live project
                      </a>
                    )}
                    <span className="ml-auto hidden font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-600 sm:block">End of case study</span>
                  </div>
                </div>
              ) : (
                <div className="max-h-[62vh] overflow-y-auto p-5 sm:p-9">
                  <section className="grid gap-7 border-b border-white/10 pb-8 sm:grid-cols-[minmax(0,1fr)_220px] sm:gap-10">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200/75">Project brief / Supporting work</div>
                      <p className="mt-4 text-base leading-8 text-zinc-200">{activeAdditional?.summary}</p>
                    </div>
                    <aside className="border-l border-violet-300/30 pl-5">
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-200/75">Technology</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeAdditional?.stack.map((stack) => (
                          <span key={stack} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">{stack}</span>
                        ))}
                      </div>
                      {activeAdditional?.category && (
                        <>
                          <div className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-200/75">Category</div>
                          <p className="mt-2 text-sm leading-6 text-zinc-400">{activeAdditional.category}</p>
                        </>
                      )}
                    </aside>
                  </section>
                  <div className="flex flex-wrap items-center gap-3 pt-6">
                    {activeAdditional?.github && (
                      <a href={activeAdditional.github} target="_blank" rel="noreferrer" className="btn-secondary">
                        <Github size={15} aria-hidden="true" /> View source
                      </a>
                    )}
                    {activeAdditional?.demo && (
                      <a href={activeAdditional.demo} target="_blank" rel="noreferrer" className="btn-primary">
                        <ExternalLink size={15} aria-hidden="true" /> Explore live project
                      </a>
                    )}
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
