"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="-- education" title="Academic foundation" />

        <div className="space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="panel flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wire/10 text-wire">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink-100">{e.school}</h3>
                  <p className="mt-1 text-sm text-ink-400">{e.degree}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-400">
                    <MapPin size={12} /> {e.location}
                  </p>
                </div>
              </div>
              <span className="mono-tag whitespace-nowrap rounded-full border border-base-500 px-3 py-1.5 text-gold">
                {e.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
