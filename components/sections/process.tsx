"use client";

import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/content/process";

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-[28%] size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[150px]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 size-[320px] rounded-full bg-accent-end/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 top-24 size-[280px] rounded-full bg-accent/8 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            OUR PROCESS
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Simple. Rigorous.
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              Repeatable.
            </span>
          </h2>
        </motion.div>

        <div className="relative mt-14 md:mt-16 lg:mt-20">
          {/* Desktop connector — gradient draw-in */}
          <motion.div
            className="pointer-events-none absolute top-6 right-[12.5%] left-[12.5%] hidden h-px origin-left md:block"
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6 lg:gap-8">
            {processSteps.map((item, i) => (
              <motion.article
                key={item.step}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease, delay: 0.12 + i * 0.1 }}
                whileHover={reduce ? undefined : { y: -6 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Soft glow under circle on hover */}
                <span className="pointer-events-none absolute top-0 size-16 -translate-y-1 rounded-full bg-accent/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex size-12 items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-accent/20 transition-transform duration-300 group-hover:scale-125 group-hover:border-accent/35" />
                  <span className="relative flex size-10 items-center justify-center rounded-full border border-accent/55 bg-gradient-to-br from-card to-navy text-sm font-semibold tabular-nums text-accent shadow-[0_0_24px_rgba(59,158,255,0.2),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_32px_rgba(59,158,255,0.4)]">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-[240px] text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/70 lg:max-w-none">
                  {item.description}
                </p>

                {/* Bottom accent underline on hover */}
                <span className="mt-4 h-px w-10 origin-center scale-x-0 bg-gradient-to-r from-accent to-accent-end transition-transform duration-300 group-hover:scale-x-100" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
