"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, BarChart3, Send, Check } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact — ${form.name || "visitor"}`);
    const body = encodeURIComponent(`Hi Bhaskar,\n\n${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  const contactItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: profile.links.github },
    { icon: Linkedin, label: "LinkedIn", href: profile.links.linkedin },
    { icon: BarChart3, label: "Tableau", href: profile.links.tableau },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Contact &amp; Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-10 mt-2 text-center text-base leading-7 text-white/50"
        >
          Get in touch with me about opportunities, projects, or collaboration
        </motion.p>

        <div className="flex flex-col gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 rounded-md bg-zinc-800 p-6"
          >
            <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 shadow-lg">
              <h3 className="mb-6 text-center text-2xl font-bold text-white">
                💬 Let&apos;s Connect
              </h3>

              <div className="space-y-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-violet-300">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-zinc-500">{item.label}</span>
                        <span className="mt-1 block truncate text-sm text-white">{item.value}</span>
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-800 p-3 transition-colors hover:border-violet-400/50">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-800 p-3">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-zinc-700 pt-5">
                <p className="mb-3 text-center text-xs text-zinc-500">Find me online</p>
                <div className="flex justify-center gap-2">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition hover:border-violet-400/60 hover:text-violet-300"
                      >
                        <Icon size={15} aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-md bg-zinc-800 p-7 sm:p-10"
              autoComplete="off"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-semibold text-white">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="Name"
                    placeholder="Input Name..."
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-md border border-zinc-500 bg-zinc-900 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:border-violet-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-semibold text-white">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="Email"
                    placeholder="Input Email..."
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-md border border-zinc-500 bg-zinc-900 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:border-violet-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-semibold text-white">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    placeholder="Message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="resize-none rounded-md border border-zinc-500 bg-zinc-900 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:border-violet-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-violet-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-violet-500"
                >
                  {sent ? <Check size={17} /> : <Send size={17} />}
                  {sent ? "Email draft opened" : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
