"use client";

import { Github, Linkedin, BarChart3, ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const socials = [
  { icon: Github, label: "GitHub", href: profile.links.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.links.linkedin },
  { icon: BarChart3, label: "Tableau", href: profile.links.tableau },
];

const footerNav = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-base-500/70 pt-14 pb-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-base-500/70 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">-- next question</span>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-ink-100 sm:text-4xl">Have a data problem worth exploring?</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink-400">I&apos;m open to Data Analyst and BI opportunities, practical projects, and thoughtful collaborations.</p>
          </div>
          <a href="#contact" className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gold transition-all hover:border-gold hover:bg-gold/15">Get in touch <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        </div>
        <div className="flex flex-col gap-7 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-mono text-xs text-ink-400">© {new Date().getFullYear()} {profile.name}</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-600">Data · Analytics · Visualization</p></div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-500">{footerNav.map((item) => <a key={item.label} href={item.href} className="min-h-11 inline-flex items-center transition-colors hover:text-gold">{item.label}</a>)}</nav>
          <div className="flex items-center gap-2"><div className="flex items-center gap-2">{socials.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-base-500 text-ink-400 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"><s.icon size={15} /></a>)}</div><a href="#home" aria-label="Back to top" className="ml-2 flex h-11 w-11 items-center justify-center rounded-full border border-base-500 text-ink-400 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"><ArrowUp size={15} /></a></div>
        </div>
      </div>
    </footer>
  );
}
