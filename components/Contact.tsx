"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, BarChart3, Send, Check } from "lucide-react";
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
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="-- contact"
          title="Have a Data Analyst opportunity?"
          description="I'm currently open to Data Analyst and BI opportunities. If you have a role, project, or collaboration in mind, I'd be glad to hear from you."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="panel flex items-center gap-4 p-4 transition-colors hover:border-teal/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal"><item.icon size={17} /></div>
                <div><div className="mono-tag">{item.label}</div><div className="text-sm text-ink-200">{item.value}</div></div>
              </motion.a>
            ))}

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: 0.3 }} className="panel flex items-center gap-3 p-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-base-500 text-ink-400 transition-colors hover:border-gold/60 hover:text-gold"><s.icon size={16} /></a>
              ))}
            </motion.div>
          </div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.1 }} className="panel space-y-4 p-6 lg:col-span-3">
            <div>
              <h3 className="font-display text-lg text-ink-100">Start a conversation</h3>
              <p className="mt-1 text-sm text-ink-400">Tell me what you're hiring for or what you'd like to build.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div><label className="mono-tag mb-2 block" htmlFor="name">Name</label><input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-base-500 bg-base-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-teal" placeholder="Your name" /></div>
              <div><label className="mono-tag mb-2 block" htmlFor="email">Email</label><input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-base-500 bg-base-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-teal" placeholder="you@company.com" /></div>
            </div>
            <div><label className="mono-tag mb-2 block" htmlFor="message">Message</label><textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-lg border border-base-500 bg-base-800/60 px-3.5 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-teal" placeholder="Tell me about the role or project..." /></div>
            <MagneticButton type="submit" className="btn-primary w-full justify-center sm:w-auto">{sent ? <Check size={15} /> : <Send size={15} />}{sent ? "Opening your mail app…" : "Contact me"}</MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
