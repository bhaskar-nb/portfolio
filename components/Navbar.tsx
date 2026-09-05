"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download, MessageCircle } from "lucide-react";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";

const primaryOrder = ["home", "about", "projects", "experience", "skills", "contact"];
const primaryNav = primaryOrder.map((id) => nav.find((item) => item.id === id)).filter(Boolean) as typeof nav;
const resumeUrl = "/Resume.pdf?download=1";
const SCROLL_THRESHOLD = 8;

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      // Keep the navbar visible at the top and while the mobile menu is open.
      if (currentScrollY <= 12 || open) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Ignore tiny scroll jitter so the navbar does not flicker.
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;

      if (delta > 0) {
        // Scrolling down: get the navigation out of the way.
        setHidden(true);
      } else {
        // Scrolling up: bring the navigation back immediately.
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  useEffect(() => {
    const sections = nav.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.15, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
      animate={{ y: hidden ? "-130%" : "0%", opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
        <div className="pointer-events-auto mx-auto flex min-h-[62px] items-center justify-between rounded-2xl border border-base-500/70 bg-base-900/75 px-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-4">
          <button type="button" onClick={() => scrollTo("home")} className="group flex min-h-11 items-center gap-3 rounded-xl px-2 transition-colors hover:bg-base-700/50" aria-label="Go to home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 font-display text-sm font-semibold tracking-[-0.06em] text-ink-100 transition-transform duration-300 group-hover:-translate-y-0.5">
              B<span className="text-gold">N</span>
            </span>
            <span className="hidden text-left sm:block">
              <span className="block font-display text-[13px] font-semibold leading-none text-ink-100">Bhaskar Nakka</span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.18em] text-ink-600">Data Analyst</span>
            </span>
          </button>

          <nav aria-label="Primary navigation" className="hidden items-center lg:flex">
            {primaryNav.map((item) => (
              <button type="button" key={item.id} onClick={() => scrollTo(item.id)} className={cn("group relative flex min-h-11 items-center px-3.5 font-mono text-[9px] uppercase tracking-[0.13em] transition-colors duration-200", active === item.id ? "text-ink-100" : "text-ink-500 hover:text-ink-200")}>
                <span>{item.label}</span>
                <span className={cn("absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold opacity-0 transition-all duration-200", active === item.id ? "opacity-100" : "group-hover:opacity-50")} />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a href={resumeUrl} download className="hidden min-h-11 items-center gap-1.5 rounded-xl px-3 font-mono text-[9px] uppercase tracking-[0.13em] text-ink-400 transition-colors hover:bg-base-700/60 hover:text-ink-100 md:flex">
              <Download size={12} aria-hidden="true" /> Résumé
            </a>
            <a href="#contact" className="group hidden min-h-11 items-center gap-1.5 rounded-xl bg-gold px-3.5 font-mono text-[9px] font-medium uppercase tracking-[0.13em] text-base-900 shadow-[0_0_22px_rgba(34,197,94,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(34,197,94,0.24)] sm:flex">
              <MessageCircle size={12} aria-hidden="true" />
              Let&apos;s talk
              <ArrowUpRight size={11} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <button type="button" className="flex h-11 w-11 items-center justify-center rounded-xl border border-transparent text-ink-200 transition-colors hover:border-base-500 hover:bg-base-700/60 hover:text-gold lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="pointer-events-auto mt-2 lg:hidden">
              <div className="overflow-hidden rounded-2xl border border-base-500/70 bg-base-900/90 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-1">
                  {primaryNav.map((item) => (
                    <button type="button" key={item.id} onClick={() => scrollTo(item.id)} className={cn("flex min-h-12 items-center justify-between rounded-xl px-4 font-mono text-[10px] uppercase tracking-[0.13em] transition-colors", active === item.id ? "bg-gold text-base-900" : "text-ink-400 hover:bg-base-700/70 hover:text-ink-100")}>
                      {item.label}
                      {active === item.id && <span className="h-1.5 w-1.5 rounded-full bg-base-900" />}
                    </button>
                  ))}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-1 border-t border-base-500/60 pt-2">
                  <a href={resumeUrl} download onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center gap-2 rounded-xl font-mono text-[10px] uppercase tracking-[0.13em] text-ink-300 transition-colors hover:bg-base-700/70 hover:text-ink-100"><Download size={13} aria-hidden="true" /> Résumé</a>
                  <a href="#contact" onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-base-900"><MessageCircle size={13} aria-hidden="true" /> Let&apos;s talk</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
