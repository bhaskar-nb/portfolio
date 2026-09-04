"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download, MessageCircle } from "lucide-react";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";

const primaryOrder = ["home", "about", "projects", "experience", "skills", "contact"];
const primaryNav = primaryOrder.map((id) => nav.find((item) => item.id === id)).filter(Boolean) as typeof nav;
const resumeUrl = "/Resume.pdf?download=1";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = Math.max(0, lastScrollY.current);

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY.current;

          if (currentScrollY <= 12) {
            setHidden(false);
          } else if (Math.abs(delta) >= 6) {
            setHidden(delta > 0);
            lastScrollY.current = currentScrollY;
          }

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
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
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
      animate={{ y: hidden ? "-110%" : "0%", opacity: hidden ? 0 : 1 }}
      transition={{
        duration: 0.52,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
        <div className="pointer-events-auto flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="group flex min-h-11 items-center gap-3 px-1 py-2"
            aria-label="Go to home"
          >
            <span className="font-display text-xl font-semibold tracking-[-0.06em] text-ink-100 transition-transform duration-300 group-hover:-translate-y-0.5">
              B<span className="text-gold">N</span>
            </span>
            <span className="hidden text-left sm:block">
              <span className="block font-display text-sm font-semibold leading-none text-ink-100">Bhaskar</span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">Data Analyst</span>
            </span>
          </button>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative min-h-11 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-300",
                  active === item.id ? "text-base-900" : "text-ink-400 hover:text-ink-100"
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-0 rounded-full bg-gold shadow-[0_0_24px_rgba(34,197,94,0.24)]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden min-h-11 items-center gap-1.5 rounded-full bg-gold px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-base-900 shadow-[0_0_24px_rgba(34,197,94,0.18)] transition-transform hover:scale-[1.03] sm:flex"
            >
              <MessageCircle size={12} />
              Let&apos;s talk
              <ArrowUpRight size={11} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={resumeUrl}
              download
              className="group hidden min-h-11 items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-300 transition-colors hover:text-gold md:flex"
            >
              <Download size={12} />
              Résumé
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink-200 transition-colors hover:text-gold lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto mt-4 lg:hidden"
            >
              <div className="flex flex-col items-end gap-1">
                {primaryNav.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "flex min-h-11 items-center gap-3 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                      active === item.id ? "bg-gold text-base-900 shadow-[0_0_22px_rgba(34,197,94,0.2)]" : "text-ink-300 hover:text-gold"
                    )}
                  >
                    {item.label}
                    {active === item.id && <span className="h-1.5 w-1.5 rounded-full bg-base-900" />}
                  </button>
                ))}
                <div className="mt-2 flex items-center gap-2">
                  <a href="#contact" onClick={() => setOpen(false)} className="flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-base-900">
                    <MessageCircle size={14} />
                    Let&apos;s talk
                  </a>
                  <a href={resumeUrl} download onClick={() => setOpen(false)} className="flex min-h-11 items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-200 hover:text-gold">
                    <Download size={14} />
                    Résumé
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
