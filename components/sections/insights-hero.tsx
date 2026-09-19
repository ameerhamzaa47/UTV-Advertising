"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function InsightsHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -left-24 top-24 size-[420px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[380px] rounded-full bg-accent-end/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-28 md:px-8 md:pb-14 md:pt-32 lg:px-16">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            INSIGHTS
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Thinking that drives{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              growth
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
            Practical perspectives on SEO, paid media, and performance strategy —
            written for teams who care about commercial outcomes, not jargon.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,158,255,0.35)] transition-all hover:brightness-110"
          >
            Talk to our team
            <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
