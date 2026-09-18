"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { sectors } from "@/content/sectors";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Sectors() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(sectors[0].id);
  const active = sectors.find((s) => s.id === activeId) ?? sectors[0];

  return (
    <section className="relative overflow-hidden bg-[#F3F4F6] py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-16 size-[380px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 size-[320px] rounded-full bg-accent-end/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            INDUSTRIES WE SERVE
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
            Built for your{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              sector
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
            Every market has different buyer behaviour, regulatory constraints,
            and competitive dynamics. We bring sector-specific playbooks to
            every engagement.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5 md:mt-12"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease, delay: 0.08 }}
          role="tablist"
          aria-label="Industries"
        >
          {sectors.map((sector) => {
            const isActive = sector.id === activeId;

            return (
              <button
                key={sector.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(sector.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "border-accent bg-accent/5 text-accent shadow-[0_4px_16px_rgba(59,158,255,0.18)]"
                    : "border-black/10 bg-white text-black/75 hover:border-accent/30 hover:text-accent",
                )}
              >
                <span className="text-base" aria-hidden>
                  {sector.icon}
                </span>
                {sector.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 rounded-[1.75rem] border border-black/5 bg-[#ECEEF2] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8 md:mt-10 md:p-10 lg:rounded-[2rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease, delay: 0.12 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease }}
              className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:items-center"
            >
              <div>
                <span className="text-4xl sm:text-5xl" aria-hidden>
                  {active.icon}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
                  {active.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(59,158,255,0.35)] transition-all hover:brightness-110 hover:shadow-[0_12px_28px_rgba(59,158,255,0.45)]"
                >
                  Discuss Your Sector
                </Link>
              </div>

              <ul className="space-y-3.5">
                {active.points.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium leading-snug text-black/80 sm:text-[15px]"
                  >
                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
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
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
