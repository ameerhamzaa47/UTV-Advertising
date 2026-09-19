"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import { growthEnginePerks } from "@/content/growth-engine";

const ease = [0.22, 1, 0.36, 1] as const;

export function GrowthEngine() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-[40%] size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/14 blur-[160px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-[320px] rounded-full bg-accent-end/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-10 size-[280px] rounded-full bg-accent/8 blur-[110px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-end/40 bg-accent-end/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-accent-end shadow-[0_0_24px_rgba(126,200,163,0.18)]">
            <span className="size-1.5 rounded-full bg-accent-end shadow-[0_0_8px_var(--accent-end)]" />
            FREE GROWTH AUDIT — NO COMMITMENT
          </p>

          <h2 className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.85rem]">
            Ready to turn your marketing into a{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              growth engine?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            Book a 45-minute strategy call with our team. We will review your
            current marketing, identify your biggest growth opportunities, and
            give you a clear plan — whether you work with us or not.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-3.5">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(59,158,255,0.4)] transition-all hover:brightness-110 hover:shadow-[0_16px_40px_rgba(59,158,255,0.5)]"
            >
              Book a Strategy Call
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-card-border bg-card/40 px-5 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-accent/10"
            >
              See Our Results
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <ul className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-3">
            {growthEnginePerks.map((perk, i) => (
              <motion.li
                key={perk}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease, delay: 0.2 + i * 0.07 }}
                whileHover={reduce ? undefined : { y: -2 }}
                className="group/perk flex items-center gap-2.5 rounded-full border border-card-border bg-card/50 px-3.5 py-2 text-sm text-muted backdrop-blur-sm transition-colors hover:border-accent-end/30 hover:text-foreground"
              >
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-end to-[#5aab85] text-white shadow-[0_4px_12px_rgba(126,200,163,0.4)] transition-transform duration-200 group-hover/perk:scale-110"
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
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
