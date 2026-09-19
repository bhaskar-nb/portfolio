"use client";

import { useEffect, useRef, useCallback } from "react";

const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const round = (value: number) => Number(value.toFixed(3));

export default function ProfileCard({
  avatarUrl,
  name,
  title,
  handle,
  status = "Online",
  contactText = "Contact Me",
}: {
  avatarUrl: string;
  name: string;
  title: string;
  handle: string;
  status?: string;
  contactText?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);

  const updateTransform = useCallback((offsetX: number, offsetY: number) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const width = card.clientWidth;
    const height = card.clientHeight;
    const percentX = clamp((100 / width) * offsetX);
    const percentY = clamp((100 / height) * offsetY);
    const centerX = percentX - 50;
    const centerY = percentY - 50;

    wrap.style.setProperty("--pointer-x", percentX + "%");
    wrap.style.setProperty("--pointer-y", percentY + "%");
    wrap.style.setProperty("--pointer-from-center", String(clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)));
    wrap.style.setProperty("--pointer-from-top", String(percentY / 100));
    wrap.style.setProperty("--pointer-from-left", String(percentX / 100));
    wrap.style.setProperty("--rotate-x", round(-(centerX / 5)) + "deg");
    wrap.style.setProperty("--rotate-y", round(centerY / 4) + "deg");
  }, []);

  const animateToCenter = useCallback((startX: number, startY: number, duration = 700) => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const start = performance.now();
    const targetX = wrap.clientWidth / 2;
    const targetY = wrap.clientHeight / 2;
    const ease = (x: number) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

    const loop = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = ease(progress);
      updateTransform(startX + (targetX - startX) * eased, startY + (targetY - startY) * eased);
      if (progress < 1) rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
  }, [updateTransform]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const enter = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      wrapRef.current?.classList.add("pc-active");
    };
    const move = (event: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      updateTransform(event.clientX - rect.left, event.clientY - rect.top);
    };
    const leave = (event: PointerEvent) => {
      animateToCenter(event.offsetX, event.offsetY);
      wrapRef.current?.classList.remove("pc-active");
    };

    card.addEventListener("pointerenter", enter);
    card.addEventListener("pointermove", move);
    card.addEventListener("pointerleave", leave);

    const initialX = card.clientWidth - 70;
    animateToCenter(initialX, 60, 1500);

    return () => {
      card.removeEventListener("pointerenter", enter);
      card.removeEventListener("pointermove", move);
      card.removeEventListener("pointerleave", leave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animateToCenter, updateTransform]);

  return (
    <div ref={wrapRef} className="pc-card-wrapper">
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img className="pc-avatar" src={avatarUrl} alt={name} />
            <div className="pc-user-info">
              <div className="pc-user-details">
                <div className="pc-mini-avatar"><img src={avatarUrl} alt="" /></div>
                <div className="pc-user-text">
                  <div className="pc-handle">@{handle}</div>
                  <div className="pc-status">{status}</div>
                </div>
              </div>
              <a href="#contact" className="pc-contact-btn">{contactText}</a>
            </div>
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
