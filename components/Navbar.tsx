"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";
import { nav } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const primaryNav = nav.filter((item) => ["home", "about", "experience", "skills", "projects", "contact"].includes(item.id));
const resumeUrl = "/Resume.pdf?download=1";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "py-2" : "py-4")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={cn("panel flex items-center justify-between px-4 py-2.5 transition-colors", scrolled ? "bg-base-700/80" : "bg-base-700/40")}>
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 font-mono text-sm text-ink-100" aria-label="Go to home"><Terminal size={16} className="text-teal" /><span className="hidden sm:inline">bhaskar@analytics</span><span className="sm:hidden">BG</span><span className="text-gold">:~$</span></button>
          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">{primaryNav.map((item) => (<button key={item.id} onClick={() => scrollTo(item.id)} className={cn("relative rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors", active === item.id ? "text-base-900" : "text-ink-400 hover:text-ink-100")}>{active === item.id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-teal" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}<span className="relative z-10">{item.label}</span></button>))}</nav>
          <div className="flex items-center gap-2"><a href={resumeUrl} download className="hidden items-center gap-1.5 rounded-full border border-base-400 px-3.5 py-1.5 font-mono text-xs text-ink-200 transition-colors hover:border-gold/60 hover:text-gold sm:flex"><Download size={13} /> Resume</a><ThemeToggle /><button className="flex h-9 w-9 items-center justify-center rounded-full border border-base-500 text-ink-200 lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={16} /> : <Menu size={16} />}</button></div>
        </div>
        <AnimatePresence>{open && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="panel mt-2 overflow-hidden bg-base-700/95 lg:hidden"><div className="flex flex-col p-2">{primaryNav.map((item) => (<button key={item.id} onClick={() => scrollTo(item.id)} className={cn("rounded-lg px-4 py-3 text-left font-mono text-sm uppercase tracking-wide", active === item.id ? "bg-teal/10 text-teal" : "text-ink-400 hover:bg-base-600/60 hover:text-ink-100")}>{item.label}</button>))}<a href={resumeUrl} download onClick={() => setOpen(false)} className="mt-1 flex items-center gap-2 rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-wide text-gold hover:bg-base-600/60"><Download size={15} /> Download Resume</a></div></motion.div>)}</AnimatePresence>
      </div>
    </header>
  );
}
