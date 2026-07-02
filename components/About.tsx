"use client";

import { motion } from "framer-motion";
import { Database, Sparkles, Target } from "lucide-react";
import { profile, timeline } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const highlights = [
  {
    icon: Database,
    title: "Data-first mindset",
    detail: "Comfortable moving from raw, messy data to a cleaned, query-ready dataset before any chart gets built.",
  },
  {
    icon: Sparkles,
    title: "Dashboards people use",
    detail: "Focused on dashboards that answer a real business question, not just ones that look good in a screenshot.",
  },
  {
    icon: Target,
    title: "Career objective",
    detail: "Looking to grow as a data analyst where SQL, Python, and visualization work together to drive decisions.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- about"
          title="Turning raw tables into decisions"
          description={`Based in ${profile.location}. ${profile.summary}`}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="panel group p-5 transition-colors hover:border-teal/50"
              >
                <h.icon size={20} className="text-teal" />
                <h3 className="mt-4 font-display text-base text-ink-100">{h.title}</h3>
                <p className="mt-2 text-sm text-ink-400">{h.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="panel col-span-1 p-6 lg:col-span-5">
            <div className="mono-tag mb-6">-- career_timeline</div>
            <div className="relative space-y-8 pl-6">
              <div className="absolute bottom-0 left-[3px] top-1 w-px bg-base-500" />
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[26px] top-1.5 h-2 w-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(242,183,5,0.15)]" />
                  <div className="mono-tag text-gold">{t.year}</div>
                  <h4 className="mt-1 text-ink-100">{t.title}</h4>
                  <p className="mt-1 text-sm text-ink-400">{t.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
