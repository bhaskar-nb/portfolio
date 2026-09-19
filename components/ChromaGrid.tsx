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

export default function ChromaGrid({ items, onItemClick, radius = 260 }: ChromaGridProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    target.current = { x: rect.width / 2, y: rect.height / 2 };
    current.current = { ...target.current };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      el.style.setProperty("--x", `${current.current.x}px`);
      el.style.setProperty("--y", `${current.current.y}px`);
      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    target.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    if (fadeRef.current) fadeRef.current.style.opacity = "0";
  };

  const handleLeave = () => {
    if (fadeRef.current) fadeRef.current.style.opacity = "1";
  };

  const handleCardMove = (event: React.PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      className="chroma-grid"
      style={{ "--r": `${radius}px` } as React.CSSProperties}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          className="chroma-card"
          onPointerMove={handleCardMove}
          onClick={() => onItemClick(item)}
          style={
            {
              "--card-border": item.borderColor,
              "--card-gradient": item.gradient,
            } as React.CSSProperties
          }
        >
          <div className="chroma-visual">
            <div className="chroma-visual-grid" />
            <div className={`chroma-visual-art chroma-visual-${item.visual}`}>
              {item.visual === "sales" && (
                <>
                  <div className="mini-bars"><i /><i /><i /><i /><i /></div>
                  <span className="mini-line" />
                </>
              )}
              {item.visual === "disaster" && (
                <>
                  <div className="mini-globe"><span /></div>
                  <div className="mini-points"><i /><i /><i /><i /></div>
                </>
              )}
              {item.visual === "hr" && (
                <>
                  <div className="mini-donut" />
                  <div className="mini-bars"><i /><i /><i /><i /></div>
                </>
              )}
              {item.visual === "ev" && (
                <>
                  <div className="mini-route"><span /><span /><span /></div>
                  <div className="mini-bars"><i /><i /><i /></div>
                </>
              )}
            </div>
            <span className="chroma-index">0{index + 1}</span>
            <span className="chroma-metric">{item.metric}</span>
          </div>

          <div className="chroma-info">
            <div>
              <h3>{item.title}</h3>
              {item.handle && <span className="chroma-handle">{item.handle}</span>}
              <p>{item.subtitle}</p>
              {item.location && <span className="chroma-location">{item.location}</span>}
            </div>
            <span className="chroma-arrow">↗</span>
          </div>
        </button>
      ))}

      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
}
