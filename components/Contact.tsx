"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, BarChart3, Send, Check, ArrowUpRight, Download, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import MagneticButton from "@/components/MagneticButton";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

const socials = [
  { icon: Github, label: "GitHub", href: profile.links.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.links.linkedin },
  { icon: BarChart3, label: "Tableau", href: profile.links.tableau },
];

const conversationTypes = ["Hiring conversation", "Project collaboration", "Data / BI question"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Data Analyst opportunity — ${form.name || "portfolio visitor"}`);
    const body = encodeURIComponent(`Hi Bhaskar,\n\n${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-15 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="-- contact / open channel"
          title="Let&apos;s turn a question into something useful."
          description="Hiring for a Data Analyst or BI role? Have a project to explore? Send the context, and I&apos;ll know where to start."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="relative flex-1 overflow-hidden rounded-3xl border border-base-500/80 bg-base-800/60 p-7 sm:p-8"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/5 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">01 / direct contact</span>
                  <h3 className="mt-8 max-w-sm font-display text-3xl leading-tight text-ink-100 sm:text-4xl">Start with the context. I&apos;ll take it from there.</h3>
                  <p className="mt-5 max-w-md text-sm leading-7 text-ink-400">For hiring conversations, collaborations, or questions about the work, email is the fastest route.</p>

                  <div className="mt-7 space-y-2">
                    {conversationTypes.map((type, i) => (
                      <div key={type} className="flex items-center gap-3 text-xs text-ink-400">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5 font-mono text-[9px] text-gold">0{i + 1}</span>
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 space-y-2.5">
                  {contactItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.07 }}
                      className="group flex min-h-14 items-center gap-3 rounded-xl border border-base-500/70 bg-base-700/30 p-3.5 transition-all hover:border-gold/40 hover:bg-base-700/60"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-base-500 bg-base-800 text-gold"><item.icon size={15} /></span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-ink-600">{item.label}</span>
                        <span className="mt-1 block truncate text-sm text-ink-200">{item.value}</span>
                      </span>
                      {item.href && <ArrowUpRight size={14} className="text-ink-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="rounded-2xl border border-gold/20 bg-gold/[0.03] p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gold">for recruiters</span>
                  <p className="mt-1 text-xs leading-5 text-ink-400">Want the quick overview first? Start with the résumé.</p>
                </div>
                <a href="/Resume.pdf" download className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-200 transition-all hover:border-gold/70 hover:text-gold">
                  <FileText size={14} /> Résumé <Download size={13} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="rounded-2xl border border-base-500/80 bg-base-800/60 p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-600">find me online</span>
                <div className="flex gap-2">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-base-500 text-ink-400 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold">
                      <s.icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            aria-label="Contact form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl border border-base-500/80 bg-base-800/70 p-7 sm:p-9"
          >
            <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-gold/5 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-base-500/70 pb-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">02 / message</span>
                  <h3 className="mt-2 font-display text-2xl text-ink-100">What are you solving?</h3>
                </div>
                <span className="hidden rounded-full border border-base-500 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-ink-500 sm:block">mailto</span>
              </div>

              <div className="mt-7 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink-500" htmlFor="name">Name</label>
                    <input id="name" name="name" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="min-h-12 w-full rounded-xl border border-base-500 bg-base-900/40 px-4 py-3 text-sm text-ink-100 outline-none transition-all placeholder:text-ink-600 focus:border-gold focus:bg-base-800" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink-500" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="min-h-12 w-full rounded-xl border border-base-500 bg-base-900/40 px-4 py-3 text-sm text-ink-100 outline-none transition-all placeholder:text-ink-600 focus:border-gold focus:bg-base-800" placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink-500" htmlFor="message">Message</label>
                  <textarea id="message" name="message" autoComplete="off" required rows={7} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-xl border border-base-500 bg-base-900/40 px-4 py-3 text-sm leading-6 text-ink-100 outline-none transition-all placeholder:text-ink-600 focus:border-gold focus:bg-base-800" placeholder="Role, project, question, or problem..." />
                </div>

                <div className="flex flex-col gap-4 border-t border-base-500/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-5 text-ink-600" aria-live="polite">Submitting opens your email app with the message prepared; nothing is sent through this site.</p>
                  <MagneticButton type="submit" className="btn-primary min-h-11 justify-center">{sent ? <Check size={15} /> : <Send size={15} />}{sent ? "Email draft opened" : "Start conversation"}</MagneticButton>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
