import { Github, Linkedin, BarChart3 } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-base-500/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-ink-400">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-400 hover:text-ink-100">
            <Github size={16} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-400 hover:text-ink-100">
            <Linkedin size={16} />
          </a>
          <a href={profile.links.tableau} target="_blank" rel="noreferrer" aria-label="Tableau" className="text-ink-400 hover:text-ink-100">
            <BarChart3 size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
