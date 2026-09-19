"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutValues } from "@/content/about";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutValues() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-12 size-[380px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[320px] rounded-full bg-accent-end/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            HOW WE WORK
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-4xl lg:text-[2.6rem]">
            Principles that keep growth{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              honest
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            Most agencies sell activity. We build systems that move commercial
            numbers — with the same standards on every account, in every sector.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-5">
          {aboutValues.map((value, i) => (
            <motion.article
              key={value.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease, delay: i * 0.06 }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-shadow hover:border-accent/25 hover:shadow-[0_16px_36px_rgba(59,158,255,0.12)] sm:p-6"
            >
              <div className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent to-accent-end transition-transform duration-300 group-hover:scale-y-100" />

              <span
                className="flex size-11 items-center justify-center rounded-xl border border-accent/15 bg-gradient-to-br from-accent/15 to-accent-end/10 text-xl transition-transform duration-300 group-hover:scale-105"
                aria-hidden
              >
                {value.icon}
              </span>
              <h3 className="mt-4 text-[17px] font-bold tracking-tight text-black transition-colors group-hover:text-accent">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
