"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, BarChart3 } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";
import TypingText from "@/components/TypingText";
import CountUp from "@/components/CountUp";

const bars = [42, 68, 35, 82, 54, 90, 61, 74, 48, 88];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: intro */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-500 bg-base-700/60 px-3 py-1.5 font-mono text-xs text-ink-400"
          >
            <span className="dot-live" />
            Available for data analyst roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-4xl font-medium leading-[1.08] text-ink-100 sm:text-5xl lg:text-6xl"
          >
            {profile.name.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 h-8 text-lg text-teal sm:text-xl"
          >
            <TypingText words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-5 max-w-xl text-balance text-ink-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="/resume.pdf" download className="btn-primary">
              <Download size={15} /> Download résumé
            </MagneticButton>
            <MagneticButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary"
            >
              <Mail size={15} /> Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-400 transition-colors hover:text-ink-100"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-400 transition-colors hover:text-ink-100"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={profile.links.tableau}
              target="_blank"
              rel="noreferrer"
              aria-label="Tableau Public"
              className="text-ink-400 transition-colors hover:text-ink-100"
            >
              <BarChart3 size={19} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-base-500/70 pt-6"
          >
            <div>
              <div className="font-mono text-2xl text-ink-100">
                <CountUp value={3} suffix="+" />
              </div>
              <div className="mono-tag mt-1">Dashboards shipped</div>
            </div>
            <div>
              <div className="font-mono text-2xl text-ink-100">
                <CountUp value={5} />
              </div>
              <div className="mono-tag mt-1">Core tools</div>
            </div>
            <div>
              <div className="font-mono text-2xl text-ink-100">
                <CountUp value={2026} />
              </div>
              <div className="mono-tag mt-1">Graduating</div>
            </div>
          </motion.div>
        </div>

        {/* Right: signature animated dashboard widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="panel relative animate-float overflow-hidden"
        >
          <div className="panel-header">
            <span className="mono-tag flex items-center gap-2">
              <span className="dot-live" /> live_dashboard.sql
            </span>
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
            </div>
          </div>

          <div className="relative space-y-5 p-5">
            <div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Revenue", value: 128, suffix: "K" },
                { label: "Attrition", value: 6, suffix: "%" },
                { label: "Funding", value: 42, suffix: "M" },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-base-500/70 bg-base-600/40 p-3">
                  <div className="mono-tag">{kpi.label}</div>
                  <div className="mt-1 font-mono text-lg text-ink-100">
                    <CountUp value={kpi.value} suffix={kpi.suffix} />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-base-500/70 bg-base-600/40 p-4">
              <div className="mono-tag mb-3">Query performance — 12mo</div>
              <div className="flex h-28 items-end gap-1.5">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.05, ease: "easeOut" }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-teal/40 to-gold/70"
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-base-500/70 bg-base-600/40 px-4 py-3 font-mono text-xs text-ink-400">
              <span>SELECT * FROM insights</span>
              <span className="text-teal">200 OK</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-400 sm:flex"
        aria-label="Scroll to About"
      >
        <span className="mono-tag">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
