"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import { services } from "@/content/services";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesList() {
  const reduce = useReducedMotion();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pb-16 md:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute -left-24 top-1/4 size-[380px] rounded-full bg-accent/8 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[320px] rounded-full bg-accent-end/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl space-y-6 px-5 md:space-y-8 md:px-8 lg:px-16">
        {services.map((service, i) => {
          const reverse = i % 2 === 1;

          return (
            <motion.article
              key={service.id}
              id={service.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease, delay: 0.04 }}
              className="scroll-mt-28 group relative overflow-hidden rounded-[1.75rem] border border-card-border bg-card p-6 shadow-[0_16px_48px_rgba(0,0,0,0.28)] sm:p-8 lg:scroll-mt-32 lg:p-10"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100" />

              <div
                className={`relative grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="flex size-12 items-center justify-center rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/20 to-accent-end/10 text-2xl shadow-[0_8px_24px_rgba(59,158,255,0.2)]"
                      aria-hidden
                    >
                      {service.icon}
                    </span>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-accent ring-1 ring-accent/20">
                      0{i + 1}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-[15px]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-gradient-to-r from-accent/15 to-accent-end/10 px-3 py-1 text-xs font-semibold text-accent"
                      >
                        <span className="size-1 rounded-full bg-accent" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group/cta mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    Discuss this service
                    <ArrowIcon className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                  </Link>
                </div>

                <ul className="space-y-2.5 rounded-2xl border border-card-border/80 bg-navy/40 p-4 sm:p-5">
                  <li className="mb-1 text-[11px] font-semibold tracking-[0.14em] text-muted">
                    WHAT YOU GET
                  </li>
                  {service.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-transparent bg-white/[0.03] px-3.5 py-3 text-sm leading-snug text-foreground/85 transition-colors hover:border-accent/20 hover:bg-accent/5"
                    >
                      <span
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-end text-white"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
