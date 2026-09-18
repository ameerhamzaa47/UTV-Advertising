"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import { sectors } from "@/content/sectors";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Sectors() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(sectors[0].id);
  const active = sectors.find((s) => s.id === activeId) ?? sectors[0];

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-12 size-[420px] rounded-full bg-accent/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[360px] rounded-full bg-accent-end/12 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 size-[280px] -translate-x-1/2 rounded-full bg-accent/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            INDUSTRIES WE SERVE
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
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
          className="mt-10 grid w-full grid-cols-2 gap-3 md:mt-12 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-2.5"
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
              <motion.button
                key={sector.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(sector.id)}
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className={cn(
                  "relative flex h-full min-h-11 w-full items-center justify-start gap-1.5 rounded-full border px-3 py-2.5 text-left text-[12px] font-semibold leading-tight transition-colors duration-200 sm:gap-2 sm:px-3.5 sm:text-[13px] lg:h-auto lg:w-auto lg:min-h-0 lg:justify-center lg:px-3.5 lg:py-2 lg:text-sm",
                  isActive
                    ? "border-accent/50 bg-white text-accent shadow-[0_6px_20px_rgba(59,158,255,0.2)]"
                    : "border-black/8 bg-white/80 text-black/70 hover:border-accent/30 hover:text-accent",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId={reduce ? undefined : "sector-tab-glow"}
                    className="pointer-events-none absolute inset-0 rounded-full bg-accent/8"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative shrink-0 text-base" aria-hidden>
                  {sector.icon}
                </span>
                <span className="relative text-balance">{sector.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="group/panel relative mt-8 overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.08)] sm:p-8 md:mt-10 md:p-10 lg:rounded-[2rem]"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease, delay: 0.12 }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 size-44 rounded-full bg-accent-end/10 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease }}
              className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14"
            >
              <div>
                <div className="relative inline-flex">
                  <span className="pointer-events-none absolute -inset-3 rounded-2xl bg-accent/20 opacity-60 blur-xl" />
                  <span className="relative flex size-14 items-center justify-center rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/15 to-accent-end/10 text-3xl shadow-[0_8px_24px_rgba(59,158,255,0.15)] sm:size-16 sm:text-4xl">
                    {active.icon}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
                  {active.description}
                </p>

                <Link
                  href="/contact"
                  className="group/cta mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,158,255,0.35)] transition-all hover:brightness-110 hover:shadow-[0_14px_32px_rgba(59,158,255,0.45)] sm:w-auto"
                >
                  Discuss Your Sector
                  <ArrowIcon className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                </Link>
              </div>

              <ul className="space-y-2.5">
                {active.points.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduce ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease, delay: 0.05 + i * 0.05 }}
                    className="group/point flex items-start gap-3 rounded-xl border border-transparent bg-[#FAF9F6]/80 px-3.5 py-3 transition-all duration-200 hover:border-accent/20 hover:bg-accent/5 hover:shadow-[0_6px_18px_rgba(59,158,255,0.1)]"
                  >
                    <span
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-end text-white shadow-[0_4px_10px_rgba(59,158,255,0.35)] transition-transform duration-200 group-hover/point:scale-110"
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
                    <span className="text-sm font-medium leading-snug text-black/80 sm:text-[15px]">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
