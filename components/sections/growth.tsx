"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FeatureIcon } from "@/components/icons/feature-icon";
import { growthFeatures, partners } from "@/content/growth";

const ease = [0.22, 1, 0.36, 1] as const;

export function Growth() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-14 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-24 top-16 size-[420px] rounded-full bg-accent/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[360px] rounded-full bg-accent-end/12 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_20px_rgba(59,158,255,0.12)]">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              WHY UVT
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-4xl lg:text-[2.6rem]">
              A growth partner, not another{" "}
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                marketing supplier
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-[17px]">
              Most agencies measure success by activity. We measure it by the
              commercial outcomes your business cares about — revenue, margin,
              and market share.
            </p>

            <motion.div
              className="group/stat relative mt-8 overflow-hidden rounded-3xl border border-white/5 bg-secondary p-6 shadow-[0_24px_60px_rgba(13,34,68,0.4)] sm:p-8"
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.25 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <div className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-accent/25 blur-3xl transition-opacity group-hover/stat:opacity-100" />
              <div className="pointer-events-none absolute -bottom-10 left-8 size-36 rounded-full bg-accent-end/20 blur-3xl" />

              <p className="relative bg-gradient-to-br from-white to-foreground/80 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
                98%
              </p>
              <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-[15px]">
                of our clients renew after the first contract period. Because
                results speak louder than promises.
              </p>

              <div className="relative mt-6 border-t border-white/10 pt-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  {partners.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={reduce ? false : { opacity: 0, y: 10, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        ease,
                        delay: 0.2 + i * 0.07,
                      }}
                      whileHover={reduce ? undefined : { y: -3, scale: 1.06 }}
                      className="group/badge relative"
                    >
                      <span className="pointer-events-none absolute -inset-1 rounded-xl bg-accent/25 opacity-0 blur-md transition-opacity duration-300 group-hover/badge:opacity-100" />
                      <span
                        className="relative inline-flex size-9 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-white/12 to-navy text-base shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_6px_14px_rgba(0,0,0,0.28)] transition-colors group-hover/badge:border-accent/45 sm:size-10 sm:text-lg"
                        title={item.label}
                        aria-label={item.label}
                      >
                        {item.icon}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-3 text-xs font-medium tracking-wide text-muted sm:text-sm">
                  UK-Founded · Google Partner · Meta Partner
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {growthFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={reduce ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                whileHover={reduce ? undefined : { y: -4, x: 3 }}
                className="group relative flex gap-3.5 overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-[0_6px_20px_rgba(15,23,42,0.05)] transition-shadow hover:border-accent/30 hover:shadow-[0_16px_36px_rgba(59,158,255,0.14)] sm:gap-4 sm:p-5"
              >
                <div className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent to-accent-end transition-transform duration-300 group-hover:scale-y-100" />

                <div className="transition-transform duration-300 group-hover:scale-110">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold tracking-tight text-black transition-colors group-hover:text-accent sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
