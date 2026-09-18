"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

const contentVariants = {
  hidden: { opacity: 0, x: 90 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.05,
      delay: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.14,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, x: 55 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 520, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.15,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 180,
    damping: 22,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 22,
    mass: 0.6,
  });

  const handleCardMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleCardLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-base-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.03]" />
      <div className="pointer-events-none absolute left-[-8%] top-[-15rem] h-[42rem] w-[58rem] rounded-full bg-cyan-500/[0.13] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-12rem] h-[38rem] w-[52rem] rounded-full bg-cyan-400/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.08] blur-[130px]" />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[1450px] items-center gap-12 px-6 pb-16 pt-24 sm:px-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-16 lg:px-14 lg:pb-20 lg:pt-20">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="show"
          className="max-w-[650px] lg:pl-10"
        >
          <motion.div
            variants={contentItemVariants}
            className="mb-7 inline-flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-2.5 backdrop-blur-xl"
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-white/10 bg-base-700">
              <Image src="/DP image.png" alt="" fill sizes="28px" className="object-cover object-top" />
            </div>
            <span className="text-xs font-medium tracking-wide text-ink-300 sm:text-sm">
              “Turning data into clear insights.”
            </span>
          </motion.div>

          <motion.h1
            variants={contentItemVariants}
            className="max-w-[500px] font-display text-[clamp(3.2rem,5vw,5.1rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-ink-400"
          >
            Hi I&apos;m {profile.name}
          </motion.h1>

          <motion.p
            variants={contentItemVariants}
            className="mt-7 max-w-[610px] text-[0.98rem] leading-7 text-ink-200 sm:text-[1.05rem] sm:leading-7"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={contentItemVariants}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-[410px] lg:mr-4"
          style={{ perspective: 1000 }}
          onMouseMove={handleCardMove}
          onMouseLeave={handleCardLeave}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ rotateX, rotateY }}
            className="relative transform-gpu"
          >
            <div className="absolute -inset-8 rounded-[48px] bg-violet-500/[0.10] blur-[70px]" />

            <div className="relative rounded-[28px] bg-gradient-to-br from-cyan-300 via-violet-500 to-violet-700 p-[1.5px] shadow-[0_28px_80px_rgba(0,0,0,0.50),0_0_45px_rgba(139,92,246,0.16)]">
              <div className="relative aspect-[0.76] overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_50%_22%,rgba(99,102,241,0.30),transparent_46%),linear-gradient(145deg,#17162f_0%,#292653_48%,#11111f_100%)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(167,139,250,0.15),transparent_34%,transparent_66%,rgba(56,189,248,0.08))]" />

                <Image
                  src="/DP image.png"
                  alt={profile.name + " — Data Analyst"}
                  fill
                  sizes="410px"
                  className="object-contain object-bottom scale-[1.05]"
                  priority
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#211c48]/20 via-transparent to-[#07070b]/25" />

                <div className="absolute left-0 right-0 top-0 z-10 px-5 pt-6 text-center">
                  <h2 className="font-display text-[1.75rem] font-semibold leading-none tracking-[-0.04em] text-white sm:text-[1.9rem]">
                    {profile.name}
                  </h2>
                  <p className="mt-1 text-xs font-medium tracking-wide text-white/65 sm:text-sm">
                    {profile.role}
                  </p>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between gap-3 rounded-xl border border-white/[0.10] bg-slate-950/55 px-3.5 py-2.5 backdrop-blur-xl">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/[0.12]">
                      <Image src="/DP image.png" alt="" fill sizes="32px" className="object-cover object-top" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-white">@{profile.githubUsername}</p>
                      <p className="text-[10px] text-white/50">Online</p>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="shrink-0 rounded-lg border border-white/[0.11] bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold text-white transition hover:bg-white/[0.14]"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
