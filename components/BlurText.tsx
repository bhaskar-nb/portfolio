"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
};

export default function BlurText({
  text = "",
  delay = 150,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
}: BlurTextProps) {
  const elements = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [text, animateBy]
  );
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const from = direction === "top"
    ? { filter: "blur(10px)", opacity: 0, y: -50 }
    : { filter: "blur(10px)", opacity: 0, y: 50 };

  return (
    <p ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap" }}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={from}
          animate={
            inView
              ? {
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  opacity: [0, 0.5, 1],
                  y: [direction === "top" ? -50 : 50, direction === "top" ? 5 : -5, 0],
                }
              : from
          }
          transition={{
            duration: 0.7,
            delay: (index * delay) / 1000,
            times: [0, 0.5, 1],
            ease: "easeOut",
          }}
        >
          {segment}
          {animateBy === "words" && index < elements.length - 1 ? "\u00A0" : null}
        </motion.span>
      ))}
    </p>
  );
}
