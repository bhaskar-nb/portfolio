"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-base-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.03]" />
      <div className="pointer-events-none absolute left-[-8%] top-[-15rem] h-[42rem] w-[58rem] rounded-full bg-cyan-500/[0.13] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-12rem] h-[38rem] w-[52rem] rounded-full bg-cyan-400/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.08] blur-[130px]" />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[1450px] items-center gap-12 px-6 pb-16 pt-24 sm:px-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-16 lg:px-14 lg:pb-20 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-[650px] lg:pl-10"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-2.5 backdrop-blur-xl">
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-white/10 bg-base-700">
              <Image src="/DP image.png" alt="" fill sizes="28px" className="object-cover object-top" />
            </div>
            <span className="text-xs font-medium tracking-wide text-ink-300 sm:text-sm">
              “Turning data into clear insights.”
            </span>
          </div>

          <h1 className="max-w-[610px] font-display text-[clamp(3rem,4.8vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-ink-200">
            Hi I&apos;m {profile.name}
          </h1>

          <p className="mt-6 max-w-[560px] text-[0.95rem] leading-7 text-ink-400 sm:text-base sm:leading-7">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="/Resume.pdf"
              download
              className="btn-secondary rounded-full px-5 py-2.5 text-xs sm:text-sm"
            >
              Download résumé <Download size={13} />
            </MagneticButton>
            <MagneticButton
              href="#projects"
              className="btn-secondary rounded-full px-5 py-2.5 text-xs sm:text-sm"
            >
              Explore my projects <ArrowUpRight size={13} />
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="relative mx-auto w-full max-w-[430px] lg:mr-2"
        >
          <div className="absolute -inset-10 rounded-[55px] bg-violet-500/[0.10] blur-[75px]" />

          <div className="relative rounded-[32px] bg-gradient-to-br from-cyan-300 via-violet-500 to-violet-700 p-[1.5px] shadow-[0_30px_90px_rgba(0,0,0,0.48),0_0_55px_rgba(139,92,246,0.18)]">
            <div className="relative aspect-[0.73] overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_50%_25%,rgba(99,102,241,0.32),transparent_48%),linear-gradient(145deg,#17162f_0%,#292653_48%,#11111f_100%)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(167,139,250,0.18),transparent_32%,transparent_68%,rgba(56,189,248,0.10))]" />

              <Image
                src="/DP image.png"
                alt={profile.name + " — Data Analyst"}
                fill
                sizes="430px"
                className="object-contain object-bottom scale-[1.08]"
                priority
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#211c48]/25 via-transparent to-[#07070b]/20" />

              <div className="absolute left-0 right-0 top-0 z-10 px-5 pt-7 text-center">
                <h2 className="font-display text-[1.9rem] font-semibold leading-none tracking-[-0.045em] text-white sm:text-[2rem]">
                  {profile.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-white/70">
                  {profile.role}
                </p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-3 rounded-2xl border border-white/[0.11] bg-slate-900/50 px-4 py-3 backdrop-blur-xl">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/[0.12]">
                    <Image src="/DP image.png" alt="" fill sizes="36px" className="object-cover object-top" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">@{profile.githubUsername}</p>
                    <p className="text-xs text-white/55">Online</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 rounded-xl border border-white/[0.12] bg-white/[0.09] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-white/[0.15]"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
