"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/content/services";

const ease = [0.22, 1, 0.36, 1] as const;

export function PerformanceServices() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-16 md:py-20 lg:py-16">
      <div className="pointer-events-none absolute -right-24 top-10 size-[420px] rounded-full bg-accent/10 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-[320px] rounded-full bg-accent-end/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <motion.div
          className="max-w-3xl"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            WHAT WE DO
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
            Performance services built around your{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              growth goals
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
            Every engagement starts with commercial outcomes. Our services are
            always scoped to what will move the needle for your specific
            business, sector, and stage.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-11 lg:grid-cols-3 lg:gap-5">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease, delay: i * 0.06 }}
              whileHover={reduce ? undefined : { y: -5 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-shadow hover:border-accent/30 hover:shadow-[0_18px_40px_rgba(59,158,255,0.12)] sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-end transition-transform duration-300 group-hover:scale-x-100" />

              <span
                className="flex size-11 items-center justify-center rounded-xl border border-accent/15 bg-gradient-to-br from-accent/15 to-accent-end/10 text-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
                aria-hidden
              >
                {service.icon}
              </span>

              <h3 className="mt-4 text-[17px] font-bold tracking-tight text-black transition-colors group-hover:text-accent">
                {service.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>

              <div className="mt-4 flex flex-col items-start gap-2">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-gradient-to-r from-accent/15 to-accent-end/10 px-3 py-1 text-xs font-semibold text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-200 group-hover:border-accent/40 group-hover:shadow-[0_4px_12px_rgba(59,158,255,0.15)]"
                    >
                      <span className="size-1 rounded-full bg-accent" />
                      {tag}
                    </span>
                  ))}
                </div>
                {service.tags[2] ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-gradient-to-r from-accent/15 to-accent-end/10 px-3 py-1 text-xs font-semibold text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-200 group-hover:border-accent/40 group-hover:shadow-[0_4px_12px_rgba(59,158,255,0.15)]">
                    <span className="size-1 rounded-full bg-accent-end" />
                    {service.tags[2]}
                  </span>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
