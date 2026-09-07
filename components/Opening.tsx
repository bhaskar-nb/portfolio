import Link from "next/link";

const tools = ["SQL", "PYTHON", "TABLEAU", "POWER BI", "EXCEL"];

export default function Opening() {
  return (
    <section
      id="opening"
      aria-label="Portfolio introduction"
      className="relative flex h-[100dvh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-base-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-15" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="absolute left-6 top-6 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-600 sm:left-8 sm:top-8">
        00 / portfolio
      </div>
      <div className="absolute right-6 top-6 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-600 sm:right-8 sm:top-8">
        data / analytics
      </div>

      <div className="relative z-10 w-full max-w-5xl px-5 text-center sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold sm:text-xs">
          Data Analyst Portfolio
        </p>

        <h1
          className="mt-6 text-[clamp(4rem,8vw,9rem)] font-black uppercase leading-[0.86] tracking-[-0.09em]"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            background:
              "linear-gradient(180deg, #effff3 0%, #b9f7c5 22%, #63d975 50%, #18843b 76%, #063b1a 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "1px rgba(125,255,153,0.24)",
            filter:
              "drop-shadow(0 0 24px rgba(34,197,94,0.28)) drop-shadow(0 18px 34px rgba(0,0,0,0.5))",
          }}
        >
          BHASKAR NAKKA
        </h1>

        <div className="mx-auto mt-7 h-px max-w-2xl bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <p className="mx-auto mt-7 max-w-3xl text-[clamp(1.35rem,2.6vw,2.25rem)] font-medium leading-[1.25] tracking-tight text-ink-100">
          I turn business questions into clear, data-backed insights.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink-400 sm:text-base">
          I use SQL, Python, Excel, Tableau, and Power BI to clean data, uncover trends, build decision-focused dashboards, and communicate what the numbers mean.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-base-500/80 bg-base-800/60 px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-400"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="#projects"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-base-900 transition-transform hover:-translate-y-0.5"
          >
            Explore projects
          </Link>
          <a
            href="/Resume.pdf"
            download
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-base-500 bg-base-800/50 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-200 transition-colors hover:border-gold/60 hover:text-gold"
          >
            Download résumé
          </a>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-center sm:bottom-9">
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-ink-600">scroll to explore</span>
        <span className="h-8 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
