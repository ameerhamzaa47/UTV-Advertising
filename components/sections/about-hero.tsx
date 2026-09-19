"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import { aboutMilestones } from "@/content/about";
import { engineeredStats } from "@/content/engineered";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -left-24 top-24 size-[420px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[380px] rounded-full bg-accent-end/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-28 md:px-8 md:pb-16 md:pt-32 lg:px-16 lg:pb-20">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            ABOUT UVT
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            A growth partner built for{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              commercial outcomes
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
            UVT is a UK-founded performance marketing agency. We combine senior
            UK leadership with a specialist delivery engine — so you get
            accountability where decisions matter, and capacity that scales
            without traditional agency bloat.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,158,255,0.35)] transition-all hover:brightness-110"
            >
              Book a Strategy Call
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-xl border border-card-border bg-card/40 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-accent/10"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {engineeredStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: 0.1 + i * 0.07 }}
              className="rounded-2xl border border-card-border bg-card/60 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            >
              <p className="bg-gradient-to-br from-accent to-accent-end bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {aboutMilestones.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-muted"
            >
              <span className="font-semibold text-accent">{item.value}</span>
              <span className="text-card-border">·</span>
              {item.detail}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
