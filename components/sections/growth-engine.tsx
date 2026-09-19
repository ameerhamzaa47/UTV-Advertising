"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import { growthEnginePerks } from "@/content/growth-engine";

const ease = [0.22, 1, 0.36, 1] as const;

export function GrowthEngine() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center rounded-full border border-accent-end/35 bg-accent-end/5 px-3.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-accent-end">
            FREE GROWTH AUDIT — NO COMMITMENT
          </p>

          <h2 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Ready to turn your marketing into a{" "}
            <span className="text-accent">growth engine?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            Book a 45-minute strategy call with our team. We will review your
            current marketing, identify your biggest growth opportunities, and
            give you a clear plan — whether you work with us or not.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-3.5">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,158,255,0.35)] transition-all hover:brightness-110"
            >
              Book a Strategy Call
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-card-border bg-transparent px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-accent/10"
            >
              See Our Results
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <ul className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {growthEnginePerks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-end/20 text-accent-end"
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
      </div>
    </section>
  );
}
