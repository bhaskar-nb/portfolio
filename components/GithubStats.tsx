"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function GithubStats() {
  const user = profile.githubUsername;

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading
      eyebrow="-- github"
      title="GitHub Highlights"
      description="A showcase of my coding journey, analytics projects, and technical expertise built with Python, SQL, Tableau, and modern development tools."
      />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="panel p-6"
  >
    <div className="mono-tag mb-4">github_profile.json</div>

    <h3 className="text-2xl font-bold mb-2">
      {profile.name}
    </h3>

    <p className="text-zinc-400 mb-6">
      Data Analyst • Python Developer • SQL Developer
    </p>

    <div className="space-y-3 text-sm text-zinc-300">
      <div> Analytics Projects</div>
      <div> Tableau Dashboards</div>
      <div> Python Automation</div>
      <div> SQL Data Analysis</div>
    </div>

    <a
      href={profile.links.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex mt-6 rounded-xl bg-emerald-500 px-5 py-2 font-medium text-black hover:scale-105 transition"
    >
      View GitHub →
    </a>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="panel p-6"
  >
    <div className="mono-tag mb-4">tech_stack.json</div>

    <h3 className="text-2xl font-bold mb-5">
      Core Technologies
    </h3>

    <div className="flex flex-wrap gap-3">
      {[
        "Python",
        "SQL",
        "Tableau",
        "Power BI",
        "Excel",
        "Pandas",
        "NumPy",
        "MySQL",
        "Git",
        "GitHub"
      ].map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm"
        >
          {skill}
        </span>
      ))}
    </div>

    <p className="mt-6 text-zinc-400 text-sm">
      Passionate about transforming raw data into actionable business insights through analytics and visualization.
    </p>
  </motion.div>

</div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="panel overflow-hidden p-5 lg:col-span-2"
          >
            <div className="mono-tag mb-4">contribution_graph.svg</div>
            <Image
              src={`https://ghchart.rshah.org/00C2A8/${user}`}
              alt="GitHub contribution graph"
              width={1000}
              height={140}
              unoptimized
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
