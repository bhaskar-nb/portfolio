"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- skills"
          title="Tools I use to do the work"
          description="A practical analytics stack built around querying, cleaning, analysis, visualization, and version control."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (gi % 3) * 0.08 }} className="panel p-5 transition-colors hover:border-teal/50">
              <div className="mono-tag mb-5 text-wire">{group.query}</div>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between rounded-lg border border-base-500/60 bg-base-600/30 px-3 py-2">
                    <span className="text-sm text-ink-200">{skill.name}</span>
                    <span className="mono-tag text-teal">skill</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
