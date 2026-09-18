"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-base-500/60 py-24 sm:py-28">
      <div className="pointer-events-none absolute left-[8%] top-16 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute right-[4%] bottom-0 h-80 w-80 rounded-full bg-violet-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- about"
          title=""
          description=""
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-violet-500/60 bg-[#101010] shadow-[0_0_0_1px_rgba(139,92,246,0.08),0_0_45px_rgba(139,92,246,0.12)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(139,92,246,0.06),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,0.04),transparent_30%)]" />

          <div className="relative grid min-h-[420px] lg:grid-cols-[minmax(0,1fr)_1px_260px]">
            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
              <div className="max-w-2xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">01 / about me</p>

                <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink-100 sm:text-4xl">
                  About Me
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-ink-400 sm:text-[0.95rem] sm:leading-7">
                  {profile.summary}
                </p>
              </div>

              <div className="mt-10 h-px w-full bg-white/[0.06]" />
            </div>

            <div className="hidden bg-white/[0.07] lg:block" />

            <div className="relative flex items-center justify-center p-8 sm:p-10">
              <div className="absolute top-0 h-24 w-px bg-white/[0.10]" />

              <div className="relative w-[150px] rounded-2xl border border-violet-400/50 bg-[#161616] p-1.5 shadow-[0_0_28px_rgba(139,92,246,0.18)]">
                <div className="relative aspect-[0.78] overflow-hidden rounded-xl bg-[#0b0b0b]">
                  <Image
                    src="/DP image.png"
                    alt={profile.name}
                    fill
                    sizes="150px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
