import { BarChart3, Database, FolderKanban } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const icons = [FolderKanban, BarChart3, Database];

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-15 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- proof points"
          title="Evidence, not inflated claims"
          description="A few measurable signals from the work shown in this portfolio. Each point is tied to a project or documented experience."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = icons[index] ?? BarChart3;
            return (
              <article key={item.title} className="rounded-2xl border border-base-500/80 bg-base-800/55 p-6 sm:p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                  <Icon size={17} aria-hidden="true" />
                </div>
                <p className="mt-7 font-display text-3xl tracking-tight text-ink-100">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-ink-400">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
