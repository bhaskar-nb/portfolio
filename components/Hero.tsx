"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-base-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.045]" />
      <div className="pointer-events-none absolute left-[-8%] top-[-15rem] h-[42rem] w-[58rem] rounded-full bg-cyan-500/[0.15] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-12rem] h-[38rem] w-[52rem] rounded-full bg-cyan-400/[0.12] blur-[130px]" />
      <div className="pointer-events-none absolute right-[10%] top-[16%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.09] blur-[130px]" />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[1450px] items-center gap-16 px-6 pb-20 pt-28 sm:px-10 lg:grid-cols-[1fr_430px] lg:gap-20 lg:px-14 lg:pb-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[700px]"
        >
          <div className="mb-7 inline-flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.055] px-5 py-3.5 backdrop-blur-xl">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-base-700">
              <Image src="/DP image.png" alt="" fill sizes="36px" className="object-cover object-top" />
            </div>
            <span className="text-sm font-medium text-ink-200 sm:text-base">
              “Turning data into clear insights.”
            </span>
          </div>

          <h1 className="max-w-[680px] font-display text-[clamp(3.6rem,6.3vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-ink-100">
            Hi I&apos;m {profile.name}
          </h1>

          <p className="mt-8 max-w-[680px] text-base leading-7 text-ink-300 sm:text-lg sm:leading-8">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/Resume.pdf"
              download
              className="btn-secondary rounded-full px-7 py-3.5"
            >
              Download résumé <Download size={15} />
            </MagneticButton>
            <MagneticButton
              href="#projects"
              className="btn-secondary rounded-full px-7 py-3.5"
            >
              Explore my projects <ArrowUpRight size={15} />
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[430px]"
        >
          <div className="absolute -inset-10 rounded-[55px] bg-violet-500/[0.11] blur-[75px]" />

          <div className="relative rounded-[32px] border border-cyan-300/65 bg-[#171729]/80 p-[1px] shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_65px_rgba(139,92,246,0.2)]">
            <div className="relative aspect-[0.715] overflow-hidden rounded-[31px] bg-[#202039]">
              <Image
                src="/DP image.png"
                alt={`${profile.name} — Data Analyst`}
                fill
                sizes="430px"
                className="object-cover object-top"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-b from-violet-950/55 via-transparent to-black/30" />

              <div className="absolute left-0 right-0 top-0 px-7 pt-7 text-center">
                <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[2.1rem]">
                  {profile.name}
                </h2>
                <p className="mt-0.5 text-sm font-semibold text-violet-200 sm:text-base">
                  {profile.role}
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3.5 backdrop-blur-xl">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
                    <Image src="/DP image.png" alt="" fill sizes="40px" className="object-cover object-top" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">@{profile.githubUsername}</p>
                    <p className="text-xs text-ink-400">Online</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="shrink-0 rounded-xl border border-white/10 bg-white/[0.08] px-4 py-2.5 text-xs font-semibold text-ink-100 transition hover:bg-white/[0.14]"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
