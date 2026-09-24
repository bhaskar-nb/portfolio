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
          <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
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
                location: "Tableau · Sales Analytics",
                borderColor: "#22d3ee",
                gradient: "linear-gradient(145deg,#17162f 0%,#20244b 48%,#101522 100%)",
                visual: "sales",
                metric: "$164.42M sales",
              },
              {
                id: projects[1].id,
                title: projects[1].title,
                subtitle: projects[1].stack.join(" · "),
                handle: "Selected analytics project",
                location: "Tableau · Global Analysis",
                borderColor: "#a78bfa",
                gradient: "linear-gradient(145deg,#1b1834 0%,#292653 48%,#11111f 100%)",
                visual: "disaster",
                metric: "15,090 events",
              },
              {
                id: projects[2].id,
                title: projects[2].title,
                subtitle: projects[2].stack.join(" · "),
                handle: "Selected analytics project",
                location: "Tableau · HR Analytics",
                borderColor: "#c4b5fd",
                gradient: "linear-gradient(145deg,#20172f 0%,#32224a 48%,#11111f 100%)",
                visual: "hr",
                metric: "Synthetic dataset",
              },
              {
                id: projects[3].id,
                title: projects[3].title,
                subtitle: projects[3].stack.join(" · "),
                handle: "Selected analytics project",
                location: "Tableau · EV Analytics",
                borderColor: "#22d3ee",
                gradient: "linear-gradient(145deg,#13232b 0%,#1e3650 48%,#101820 100%)",
                visual: "ev",
                metric: "150,413 records",
              },
              {
                id: projects[4].id,
                title: projects[4].title,
                subtitle: projects[4].stack.join(" · "),
                handle: "End-to-end SQL analytics",
                location: "SQL Server · Data Warehouse",
                borderColor: "#c4b5fd",
                gradient: "linear-gradient(145deg,#20172f 0%,#32224a 48%,#11111f 100%)",
                visual: "hr",
                metric: "SQL Server",
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
                  handle: "Operational analytics",
                  location: "Dashboard · Emergency Care",
                  borderColor: "#22d3ee",
                  gradient: "linear-gradient(145deg,#13232b 0%,#1e3650 48%,#101820 100%)",
                  visual: "ev",
                  metric: "Emergency analytics",
                },
                {
                  id: additionalProjects[1].id,
                  title: additionalProjects[1].title,
                  subtitle: additionalProjects[1].stack.join(" · "),
                  handle: "End-to-end workflow",
                  location: "Data Analytics · Internship",
                  borderColor: "#a78bfa",
                  gradient: "linear-gradient(145deg,#1b1834 0%,#292653 48%,#11111f 100%)",
                  visual: "disaster",
                  metric: "Internship project",
                },
                {
                  id: additionalProjects[2].id,
                  title: additionalProjects[2].title,
                  subtitle: additionalProjects[2].stack.join(" · "),
                  handle: "Applied machine learning",
                  location: "Python · Machine Learning",
                  borderColor: "#c4b5fd",
                  gradient: "linear-gradient(145deg,#20172f 0%,#32224a 48%,#11111f 100%)",
                  visual: "hr",
                  metric: "Prediction model",
                },
                {
                  id: additionalProjects[3].id,
                  title: additionalProjects[3].title,
                  subtitle: additionalProjects[3].stack.join(" · "),
                  handle: "Visual analytics",
                  location: "Tableau · Content Analysis",
                  borderColor: "#22d3ee",
                  gradient: "linear-gradient(145deg,#17162f 0%,#20244b 48%,#101522 100%)",
                  visual: "sales",
                  metric: "Content insights",
              },
              {
                id: additionalProjects[4].id,
                title: additionalProjects[4].title,
                subtitle: additionalProjects[4].stack.join(" · "),
                handle: "SQL exploratory analysis",
                location: "SQL Server · Business Analysis",
                borderColor: "#22d3ee",
                gradient: "linear-gradient(145deg,#13232b 0%,#1e3650 48%,#101820 100%)",
                visual: "ev",
                metric: "SQL EDA",
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
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300"
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
              className="w-full max-w-3xl overflow-hidden rounded-2xl border border-violet-500/50 bg-zinc-900 shadow-2xl shadow-violet-500/20"
            >
              <div
                className="relative flex h-48 items-end overflow-hidden border-b border-violet-500/20 p-6 sm:h-56 sm:p-8"
                style={{
                  background:
                    active?.id === "sales-performance-dashboard"
                      ? "linear-gradient(145deg,#17162f 0%,#20244b 48%,#101522 100%)"
                      : active?.id === "global-disaster-analysis"
                        ? "linear-gradient(145deg,#1b1834 0%,#292653 48%,#11111f 100%)"
                        : active?.id === "hr-analytics-dashboard"
                          ? "linear-gradient(145deg,#20172f 0%,#32224a 48%,#11111f 100%)"
                          : active?.id === "ev-adoption-dashboard"
                            ? "linear-gradient(145deg,#13232b 0%,#1e3650 48%,#101820 100%)"
                            : "linear-gradient(145deg,#17162f 0%,#262040 48%,#101018 100%)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(167,139,250,0.28),transparent_42%),radial-gradient(circle_at_20%_85%,rgba(34,211,238,0.16),transparent_38%)]" />
                <div className="relative z-10">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-violet-200/80">
                    {active ? "Selected analytics project" : "Additional project"}
                  </span>
                  <div className="mt-2 flex flex-wrap items-end gap-3">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                      {active?.title ?? activeAdditional?.title}
                    </h2>
                    {active && (
                      <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/70">
                        {active.id === "sales-performance-dashboard" ? "$164.42M sales" : active.id === "global-disaster-analysis" ? "15,090 events" : active.id === "hr-analytics-dashboard" ? "Synthetic data" : "150,413 records"}
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
                <div className="flex max-h-[58vh] flex-col gap-6 overflow-y-auto p-6 sm:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em]">
                      <span className="text-violet-300">{active.stack.join(" · ")}</span>
                      <span className="text-zinc-600">/</span>
                      <span className="text-zinc-500">case study</span>
                    </div>
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-300 sm:text-base">
                      {active.summary}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-zinc-700/80 bg-zinc-800/45 p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                        <Target size={15} className="text-violet-300" aria-hidden="true" /> Question
                      </div>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">{active.challenges}</p>
                    </div>
                    <div className="rounded-xl border border-zinc-700/80 bg-zinc-800/45 p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                        <Workflow size={15} className="text-violet-300" aria-hidden="true" /> Approach
                      </div>
                      <p className="mt-3 text-sm leading-6 text-zinc-400">{active.approach}</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.05] p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                      <BarChart3 size={15} className="text-violet-300" aria-hidden="true" /> Evidence
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-300">{active.evidence}</p>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                      <ListChecks size={16} className="text-violet-300" aria-hidden="true" /> What the analysis covers
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {active.features.map((feature) => (
                        <li key={feature} className="rounded-lg border border-zinc-700/70 bg-zinc-800/35 px-3 py-2.5 text-sm leading-5 text-zinc-400">
                          <span className="mr-2 text-violet-300" aria-hidden="true">▸</span>{feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                      <Lightbulb size={16} className="text-violet-300" aria-hidden="true" /> Takeaway
                    </div>
                    <p className="text-sm leading-6 text-zinc-400">{active.learnings}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 border-t border-zinc-700/80 pt-5">
                    <a href={active.github} target="_blank" rel="noreferrer" className="btn-secondary">
                      <Github size={15} aria-hidden="true" /> GitHub
                    </a>
                    {active.demo && (
                      <a href={active.demo} target="_blank" rel="noreferrer" className="btn-primary">
                        <ExternalLink size={15} aria-hidden="true" /> Live dashboard
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex max-h-[58vh] flex-col gap-6 overflow-y-auto p-6 sm:p-8">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {activeAdditional?.stack.map((stack) => (
                        <span key={stack} className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 font-mono text-[9px] text-zinc-400">
                          {stack}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-sm leading-6 text-zinc-300 sm:text-base">{activeAdditional?.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 border-t border-zinc-700/80 pt-5">
                    {activeAdditional?.github && (
                      <a href={activeAdditional.github} target="_blank" rel="noreferrer" className="btn-secondary">
                        <Github size={15} aria-hidden="true" /> GitHub
                      </a>
                    )}
                    {activeAdditional?.demo && (
                      <a href={activeAdditional.demo} target="_blank" rel="noreferrer" className="btn-primary">
                        <ExternalLink size={15} aria-hidden="true" /> View dashboard
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
