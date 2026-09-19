"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav } from "@/lib/data";
import { cn } from "@/lib/utils";

const primaryOrder = ["home", "about", "projects", "contact"];
const primaryNav = primaryOrder.map((id) => nav.find((item) => item.id === id)).filter(Boolean) as typeof nav;

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = primaryNav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="font-display text-xl font-semibold tracking-[-0.03em] text-white transition-opacity hover:opacity-70"
          aria-label="Go to home"
        >
          Portfolio
        </button>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-1.5 backdrop-blur-md sm:flex"
        >
          {primaryNav.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300",
                active === item.id
                  ? "bg-zinc-800 text-white shadow-sm"
                  : "text-white/45 hover:bg-zinc-800/60 hover:text-white/85"
              )}
            >
              {item.label === "Projects" ? "Project" : item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-md transition-all hover:border-zinc-500 hover:text-white sm:hidden"
          aria-label="Go to contact"
        >
          Contact
        </button>
      </div>
    </motion.header>
  );
}
