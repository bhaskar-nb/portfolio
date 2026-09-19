"use client";

import { Github, Linkedin, BarChart3 } from "lucide-react";
import { profile } from "@/lib/data";

const items = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
];

const socials = [
  { icon: Github, label: "GitHub", href: profile.links.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.links.linkedin },
  { icon: BarChart3, label: "Tableau", href: profile.links.tableau },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 pb-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <h2 className="order-1 font-display text-2xl font-bold tracking-tight text-white md:order-none">
          Portfolio
        </h2>

        <div className="order-2 flex items-center gap-3 md:order-none">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:text-violet-300"
              >
                <Icon size={22} aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <nav
          aria-label="Footer navigation"
          className="order-3 flex items-center gap-3 rounded-2xl border border-zinc-700/70 bg-zinc-900/70 px-4 py-2 backdrop-blur-md md:order-none"
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-xl px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400 transition-all hover:bg-zinc-800 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
