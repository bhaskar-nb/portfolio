"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";

const primaryOrder = ["home", "about", "projects", "experience", "skills", "contact"];
const primaryNav = primaryOrder.map((id) => nav.find((item) => item.id === id)).filter(Boolean) as typeof nav;
const resumeUrl = "/Resume.pdf?download=1";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.15, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className={cn("mx-auto max-w-7xl px-4 transition-all duration-500 sm:px-6 lg:px-8", scrolled ? "pt-3" : "pt-5")}>
        <div className={cn("pointer-events-auto relative flex items-center justify-between overflow-hidden rounded-full border px-3 py-2", "border-base-500/80 bg-base-800/80 backdrop-blur-xl", "shadow-[0_12px_50px_-20px_rgba(0,0,0,0.7)] transition-all duration-500", scrolled ? "mx-auto max-w-5xl" : "max-w-7xl")}>
          <button onClick={() => scrollTo("home")} className="group flex min-h-11 items-center gap-3 rounded-full px-3 py-2" aria-label="Go to home">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-mono text-xs font-semibold text-gold transition-transform duration-300 group-hover:rotate-6">BN</span>
            <span className="hidden text-left sm:block"><span className="block font-display text-sm font-semibold leading-none text-ink-100">Bhaskar</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">Data Analyst</span></span>
          </button>

          <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex">
            {primaryNav.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={cn("relative min-h-11 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors", active === item.id ? "text-base-900" : "text-ink-400 hover:text-ink-100")}>
                {active === item.id && <motion.span layoutId="nav-active-pill" className="absolute inset-0 rounded-full bg-gold" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={resumeUrl} download className="group hidden min-h-11 items-center gap-1.5 rounded-full border border-base-400 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-200 transition-all hover:border-gold/60 hover:text-gold sm:flex"><Download size={12} /> Résumé <ArrowUpRight size={11} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-base-500 text-ink-200 transition-colors hover:border-gold/60 hover:text-gold lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={16} /> : <Menu size={16} />}</button>
          </div>
        </div>

        <AnimatePresence>
          {open && <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.2 }} className="pointer-events-auto mx-1 mt-2 overflow-hidden rounded-2xl border border-base-500/80 bg-base-800/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
            {primaryNav.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className={cn("flex min-h-11 w-full items-center justify-between rounded-xl px-4 py-3.5 text-left font-mono text-xs uppercase tracking-[0.14em] transition-colors", active === item.id ? "bg-gold/10 text-gold" : "text-ink-400 hover:bg-base-700 hover:text-ink-100")}>{item.label}{active === item.id && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}</button>)}
            <a href={resumeUrl} download onClick={() => setOpen(false)} className="mt-1 flex min-h-11 items-center justify-center gap-2 rounded-xl border border-base-500 px-4 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-gold"><Download size={14} /> Download résumé</a>
          </motion.div>}
        </AnimatePresence>
      </div>
    </header>
  );
}
