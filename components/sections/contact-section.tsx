"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import {
  contactDetails,
  contactPerks,
  contactSubjects,
} from "@/content/contact";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 4.5h12v7H2v-7zm0 0l6 4.5 6-4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 14s5-4.2 5-7.5A5 5 0 003 6.5C3 9.8 8 14 8 14z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const fieldClass =
  "w-full rounded-xl border border-card-border bg-navy/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent/50 focus:bg-navy/60";

export function ContactSection() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      subject ? `Subject: ${subject}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:uvtadvertising@gmail.com?subject=${encodeURIComponent(
      subject || "Strategy call enquiry",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
    form.reset();
  }

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -left-24 top-24 size-[420px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[380px] rounded-full bg-accent-end/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32 lg:px-16 lg:pb-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              CONTACT
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.1rem]">
              Let&apos;s talk about your{" "}
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                next growth move
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-[17px]">
              Book a 45-minute strategy call. We will review where you are,
              identify the biggest opportunities, and give you a clear plan —
              whether you work with us or not.
            </p>

            <div className="mt-8 space-y-3">
              {contactDetails.map((item) => {
                const Icon = item.icon === "mail" ? MailIcon : PinIcon;
                const inner = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-wide text-muted">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-foreground">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 rounded-2xl border border-card-border bg-card/50 p-3.5 transition-colors hover:border-accent/30 hover:bg-accent/5"
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-card-border bg-card/50 p-3.5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <ul className="mt-8 space-y-2.5">
              {contactPerks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2.5 text-sm text-muted"
                >
                  <span
                    className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-end to-[#5aab85] text-white"
                    aria-hidden
                  >
                    <svg viewBox="0 0 12 12" className="size-3" fill="none">
                      <path
                        d="M2.5 6.2l2.4 2.4 4.6-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.08 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-card-border bg-card p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-accent/15 blur-3xl" />

            <h2 className="relative text-xl font-bold tracking-tight text-foreground">
              Send a message
            </h2>
            <p className="relative mt-2 text-sm text-muted">
              Tell us a bit about your goals. We typically reply within one
              business day.
            </p>

            {submitted && (
              <p
                className="relative mt-4 rounded-xl border border-accent-end/25 bg-accent-end/10 px-4 py-3 text-sm text-accent-end"
                role="status"
              >
                Opening your email client… If nothing opens, email us directly
                at uvtadvertising@gmail.com.
              </p>
            )}

            <form onSubmit={onSubmit} className="relative mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted">
                    Name *
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted">
                    Email *
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted">
                  Company
                </span>
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company name"
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted">
                  Subject
                </span>
                <select
                  name="subject"
                  defaultValue={contactSubjects[0]}
                  className={cn(fieldClass, "cursor-pointer appearance-none")}
                >
                  {contactSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted">
                  Message *
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you looking to achieve?"
                  className={cn(fieldClass, "resize-y min-h-[120px]")}
                />
              </label>

              <button
                type="submit"
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(59,158,255,0.4)] transition-all hover:brightness-110 sm:w-auto"
              >
                Book a Strategy Call
                <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
