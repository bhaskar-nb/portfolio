"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-base-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.06]" />
      <div className="pointer-events-none absolute left-[-10%] top-[-12rem] h-[38rem] w-[52rem] rounded-full bg-cyan-500/[0.14] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[-10rem] h-[34rem] w-[46rem] rounded-full bg-cyan-400/[0.10] blur-[120px]" />
      <div className="pointer-events-none absolute right-[12%] top-[18%] h-[32rem] w-[32rem] rounded-full bg-violet-500/[0.09] blur-[120px]" />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[1500px] items-center gap-14 px-6 pb-20 pt-28 sm:px-10 lg:grid-cols-[1fr_0.82fr] lg:gap-24 lg:px-16 lg:pb-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.055] px-5 py-3 shadow-[0_15px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10 bg-base-700">
              <Image
                src="/DP image.png"
                alt=""
                fill
                sizes="32px"
                className="object-cover object-top"
              />
            </div>
            <span className="text-sm font-medium text-ink-200">
              “Turning data into clear insights.”
            </span>
          </div>

          <h1 className="max-w-3xl font-display text-[clamp(3.8rem,7.2vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-ink-100">
            Hi, I&apos;m {profile.name}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-ink-300 sm:text-lg lg:text-xl">
            A Computer Science graduate focused on data analytics, using SQL,
            Python, Excel, Tableau, and Power BI to turn data into useful
            insights and decision-focused dashboards.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
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
          className="relative mx-auto w-full max-w-[500px]"
        >
          <div className="absolute -inset-8 rounded-[48px] bg-violet-500/[0.10] blur-[70px]" />

          <div className="relative overflow-hidden rounded-[34px] border border-cyan-300/50 bg-[#171729]/80 p-[1px] shadow-[0_30px_100px_rgba(0,0,0,0.45),0_0_55px_rgba(139,92,246,0.18)]">
            <div className="relative aspect-[0.78] overflow-hidden rounded-[33px] bg-[#202039]">
              <Image
                src="/DP image.png"
                alt={`${profile.name} — Data Analyst`}
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-top"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-b from-violet-950/45 via-transparent to-black/35" />

              <div className="absolute left-0 right-0 top-0 p-8 text-center">
                <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {profile.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-violet-200 sm:text-base">
                  Data Analyst
                </p>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10">
                    <Image
                      src="/DP image.png"
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Bhaskar Nakka</p>
                    <p className="text-xs text-ink-400">Open to opportunities</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="rounded-xl border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-semibold text-ink-100 transition hover:bg-white/[0.14]"
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
