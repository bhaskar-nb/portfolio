"use client";

import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Linkedin,
  Trophy,
} from "lucide-react";
import { profile } from "@/lib/data";

const onlineProfiles = [
  {
    name: "LinkedIn",
    description: "Professional network and career updates",
    href: profile.links.linkedin,
    label: "Connect professionally",
    icon: Linkedin,
    accent: "group-hover:text-sky-300",
  },
  {
    name: "GitHub",
    description: "Code repositories and development projects",
    href: profile.links.github,
    label: "Explore repositories",
    icon: Github,
    accent: "group-hover:text-violet-300",
  },
  {
    name: "Tableau Public",
    description: "Interactive dashboards and data visualizations",
    href: profile.links.tableau,
    label: "View dashboards",
    icon: BarChart3,
    accent: "group-hover:text-cyan-300",
  },
  {
    name: "LeetCode",
    description: "SQL challenges and coding practice",
    href: "https://leetcode.com/u/bhaskar_nakka/",
    label: "View coding profile",
    icon: Code2,
    accent: "group-hover:text-amber-300",
  },
  {
    name: "HackerRank",
    description: "Technical skills and coding challenges",
    href: "https://www.hackerrank.com/profile/bn7740401",
    label: "View skills profile",
    icon: Trophy,
    accent: "group-hover:text-emerald-300",
  },
  {
    name: "StrataScratch",
    description: "Real-world SQL and data interview practice",
    href: "https://platform.stratascratch.com/user/Bhaskarnb",
    label: "Explore SQL practice",
    icon: Database,
    accent: "group-hover:text-cyan-300",
  },
  {
    name: "Medium",
    description: "Articles, ideas, and technical writing",
    href: "https://medium.com/@bhaskar-nakka",
    label: "Read my articles",
    icon: BookOpen,
    accent: "group-hover:text-zinc-100",
  },
  {
    name: "DataLemur",
    description: "SQL interview questions and data analytics practice",
    href: "https://datalemur.com/profile",
    label: "Practice SQL",
    icon: BrainCircuit,
    accent: "group-hover:text-fuchsia-300",
  },
];

export default function OnlineProfiles() {
  return (
    <section id="online-profiles" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 sm:mb-9">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            Online Profiles
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {onlineProfiles.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-zinc-900/80 hover:shadow-[0_0_26px_rgba(139,92,246,0.12)] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/[0.07] via-transparent to-cyan-400/[0.04] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition-colors duration-300 ${item.accent}`}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
                </div>
                <div className="relative mt-6">
                  <h3 className="font-display text-lg font-medium text-white">{item.name}</h3>
                  <p className="mt-1 text-sm leading-5 text-zinc-400">{item.description}</p>
                  <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.13em] text-violet-300/80">{item.label}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
