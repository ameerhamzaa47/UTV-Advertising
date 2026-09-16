"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FeatureIcon } from "@/components/icons/feature-icon";
import { growthFeatures } from "@/content/growth";

const ease = [0.22, 1, 0.36, 1] as const;

const partners = [
  { icon: "🇬🇧", label: "UK-Founded" },
  { icon: "🏆", label: "Google Partner" },
  { icon: "✅", label: "Meta Partner" },
] as const;

export function Growth() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-14 md:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-24 top-20 size-[380px] rounded-full bg-accent/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 size-[320px] rounded-full bg-accent-end/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-accent">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              WHY UVT
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.6rem]">
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

            <div className="relative mt-8 overflow-hidden rounded-3xl bg-secondary p-6 shadow-[0_20px_50px_rgba(13,34,68,0.35)] sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 left-10 size-32 rounded-full bg-accent-end/15 blur-3xl" />

              <p className="relative text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                98%
              </p>
              <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-[15px]">
                of our clients renew after the first contract period. Because
                results speak louder than promises.
              </p>

              <div className="relative mt-6 border-t border-white/10 pt-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  {partners.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-navy text-xl shadow-inner sm:size-14 sm:text-2xl"
                      title={item.label}
                      aria-label={item.label}
                    >
                      {item.icon}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs font-medium tracking-wide text-muted sm:text-sm">
                  UK-Founded · Google Partner · Meta Partner
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {growthFeatures.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                whileHover={reduce ? undefined : { y: -3, x: 2 }}
                className="group flex gap-3.5 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-shadow hover:border-accent/25 hover:shadow-[0_14px_32px_rgba(59,158,255,0.12)] sm:gap-4 sm:p-5"
              >
                <div className="transition-transform duration-300 group-hover:scale-105">
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
