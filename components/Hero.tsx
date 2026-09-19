"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";
import ProfileCard from "@/components/ProfileCard";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import "@/components/ProfileCard.css";

const contentItemVariants = {
  hidden: { opacity: 0, x: 70 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const contentControls = useAnimation();
  useEffect(() => {
    const startHeroAnimation = () => {
      void contentControls.start("show");
    };

    window.addEventListener("portfolio-loader-complete", startHeroAnimation);
    return () => window.removeEventListener("portfolio-loader-complete", startHeroAnimation);
  }, [cardControls, contentControls]);

  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-base-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.03]" />
      <div className="pointer-events-none absolute left-[-8%] top-[-15rem] h-[42rem] w-[58rem] rounded-full bg-cyan-500/[0.13] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-12rem] h-[38rem] w-[52rem] rounded-full bg-cyan-400/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute right-[10%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.08] blur-[130px]" />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[1450px] items-center gap-12 px-6 pb-16 pt-24 sm:px-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-16 lg:px-14 lg:pb-20 lg:pt-20">
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.16, delayChildren: 0.05 } } }}
          initial="hidden"
          animate={contentControls}
          className="max-w-[650px] lg:pl-10"
        >
          <motion.div
            variants={contentItemVariants}
            className="mb-7 inline-flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-2.5 backdrop-blur-xl"
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-full border border-white/10 bg-base-700">
              <Image src="/DP image.png" alt="" fill sizes="28px" className="object-cover object-top" unoptimized />
            </div>
            <span className="text-xs font-medium tracking-wide text-ink-300 sm:text-sm">
              “Turning data into clear insights.”
            </span>
          </motion.div>

          <motion.h1
            variants={contentItemVariants}
            className="max-w-[560px] font-display text-[clamp(3.2rem,5vw,5.1rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-ink-400"
          >
            <ShinyText text={`Hi I'm ${profile.name}`} speed={3} />
          </motion.h1>

          <motion.div variants={contentItemVariants} className="mt-7 max-w-[610px] text-[0.98rem] leading-7 text-ink-200 sm:text-[1.05rem] sm:leading-7">
            <BlurText
              text={profile.summary}
              delay={75}
              animateBy="words"
              direction="top"
            />
          </motion.div>

          <motion.div variants={contentItemVariants} className="mt-7 flex flex-wrap items-center gap-3">
            <MagneticButton href="/Resume.pdf" download className="btn-secondary rounded-full px-5 py-2.5 text-xs sm:text-sm">
              <ShinyText text="Download résumé" speed={3} />
              <Download size={13} />
            </MagneticButton>
            <MagneticButton href="#projects" className="btn-secondary rounded-full px-5 py-2.5 text-xs sm:text-sm">
              <ShinyText text="Explore my projects" speed={3} />
              <ArrowUpRight size={13} />
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[410px] lg:mr-4">
          <ProfileCard
            avatarUrl="/DP image.png"
            name={profile.name}
            title={profile.role}
            handle={profile.githubUsername}
            status="Online"
            contactText="Contact Me"
          />
        </div>
      </div>
    </section>
  );
}
