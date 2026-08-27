"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";
import { certifications, achievements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- certifications"
          title="Verified experience"
          description="Programs completed alongside coursework and personal projects."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="panel flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Award size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug text-ink-100">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-ink-400">{c.issuer}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-teal">
                  Completed • {c.year}
                </p>

                <div className="mt-5 space-y-2 text-sm text-ink-300">
                  {c.bullets.map((bullet) => (
                    <p key={bullet}>✔ {bullet}</p>
                  ))}
                </div>

                {c.link && c.link !== "#" && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-lg border border-teal px-4 py-2 text-sm font-medium text-teal transition-all duration-300 hover:bg-teal hover:text-black"
                  >
                    View Certificate →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="panel p-6 lg:col-span-2">
            <div className="mono-tag mb-5 flex items-center gap-2 text-teal">
              <ShieldCheck size={14} /> -- achievements
            </div>
            <div className="space-y-5">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <h4 className="text-sm text-ink-100">{a.title}</h4>
                  <p className="mt-1 text-xs text-ink-400">{a.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
