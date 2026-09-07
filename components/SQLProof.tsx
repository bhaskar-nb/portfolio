import { ArrowUpRight, Braces, Database, ListChecks } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const businessQuestions = [
  "How many orders were placed and what was the total revenue?",
  "What is the average order value and which products generate the most revenue?",
  "Which payment methods and referral sources are used most often?",
  "Which orders have the highest transaction value?",
  "How does revenue change month by month?",
];

const techniques = [
  "COUNT / SUM / AVG",
  "GROUP BY",
  "ORDER BY",
  "LIMIT",
  "ROUND",
  "Date aggregation",
];

const query = `SELECT Product,
       SUM(TotalPrice) AS Revenue
FROM orders
GROUP BY Product
ORDER BY Revenue DESC;`;

export default function SQLProof() {
  return (
    <section id="sql" className="relative overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="-- sql proof"
          title="SQL used to answer business questions"
          description="A practical SQL analysis from my DecodeLabs Data Analytics Internship — moving from an orders dataset to measurable business answers rather than only listing SQL syntax."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[1.75rem] border border-gold/25 bg-base-800/55 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.05] text-gold">
                <Database size={18} aria-hidden="true" />
              </span>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-gold">Practical analysis</span>
                <h3 className="mt-1 font-display text-2xl text-ink-100">12 business queries</h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-ink-400">
              Used SQL with SQLite to analyze order volume, revenue, products, payment methods, referrals, order status, high-value orders, coupon usage, and monthly trends.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {techniques.map((item) => (
                <span key={item} className="rounded-full border border-base-500 bg-base-900/45 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-ink-300">
                  {item}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/bhaskar-nb/DecodeLabs-Internship/tree/main/Project_3_SQL"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-7 inline-flex"
            >
              View SQL work <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-base-500/80 bg-base-800/45 p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-gold">
              <ListChecks size={14} aria-hidden="true" /> Business questions answered
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {businessQuestions.map((question, index) => (
                <div key={question} className="rounded-xl border border-base-500/60 bg-base-900/30 px-4 py-3 text-sm leading-6 text-ink-300">
                  <span className="mr-2 font-mono text-[9px] text-gold">0{index + 1}</span>{question}
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-base-500/70 bg-[#0a0a0a]">
              <div className="flex items-center gap-2 border-b border-base-500/70 px-4 py-3 font-mono text-[8px] uppercase tracking-[0.15em] text-ink-600">
                <Braces size={13} aria-hidden="true" /> Example query
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-6 text-ink-300"><code>{query}</code></pre>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-gold/15 bg-gold/[0.025] px-5 py-4 text-sm leading-6 text-ink-400">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-gold">Signal to recruiters</span>
          <span className="ml-3">I use SQL as an analysis tool: define the question, query the data, compare results, and turn the output into a business insight.</span>
        </div>
      </div>
    </section>
  );
}
