"use client";

import { useEffect, useRef } from "react";

type ChromaItem = {
  id: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor: string;
  gradient: string;
  visual: "sales" | "disaster" | "hr" | "ev";
  metric: string;
};

type ChromaGridProps = {
  items: ChromaItem[];
  onItemClick: (item: ChromaItem) => void;
  radius?: number;
};

export default function ChromaGrid({ items, onItemClick }: ChromaGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
      el.style.setProperty("--pointer-x", `${pointerX}px`);
      el.style.setProperty("--pointer-y", `${pointerY}px`);
    };
    el.addEventListener("pointermove", onMove);
    const animate = () => {
      el.style.setProperty("--drift", `${Math.sin(Date.now() / 1800) * 5}px`);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      el.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="project-universe" aria-label="Interactive project universe">
      <div className="universe-orbit universe-orbit-one" />
      <div className="universe-orbit universe-orbit-two" />
      <div className="universe-core" aria-hidden="true">
        <span className="universe-core-kicker">EXPLORE THE</span>
        <span className="universe-core-title">PROJECT<br />UNIVERSE</span>
        <span className="universe-core-caption">Ideas · Data · Decisions</span>
        <span className="universe-core-pulse" />
      </div>

      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          className="universe-node"
          onClick={() => onItemClick(item)}
          style={{
            "--node-color": item.borderColor,
            "--node-gradient": item.gradient,
            "--node-index": index,
          } as React.CSSProperties}
          aria-label={`Open case study: ${item.title}`}
        >
          <span className="universe-node-orbit" aria-hidden="true" />
          <span className="universe-sphere" aria-hidden="true">
            <span className="universe-sphere-grid" />
            <span className={`universe-art universe-art-${item.visual}`}>
              {item.visual === "sales" && (
                <>
                  <span className="universe-bars"><i /><i /><i /><i /><i /></span>
                  <span className="universe-trend" />
                </>
              )}
              {item.visual === "disaster" && (
                <>
                  <span className="universe-globe"><i /></span>
                  <span className="universe-stars"><i /><i /><i /><i /></span>
                </>
              )}
              {item.visual === "hr" && (
                <>
                  <span className="universe-donut" />
                  <span className="universe-bars universe-bars-small"><i /><i /><i /><i /></span>
                </>
              )}
              {item.visual === "ev" && (
                <>
                  <span className="universe-route"><i /><i /><i /></span>
                  <span className="universe-bars universe-bars-small"><i /><i /><i /></span>
                </>
              )}
            </span>
            <span className="universe-node-number">0{index + 1}</span>
          </span>
          <span className="universe-node-copy">
            <span className="universe-node-title">{item.title}</span>
            <span className="universe-node-metric">{item.metric}</span>
            <span className="universe-node-stack">{item.location ?? item.subtitle}</span>
          </span>
          <span className="universe-node-hint">EXPLORE ↗</span>
        </button>
      ))}
    </div>
  );
}
