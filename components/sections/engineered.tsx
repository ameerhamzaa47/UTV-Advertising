"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineeredFeatures, engineeredStats } from "@/content/engineered";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Engineered() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#D8D8D8] py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-10 size-[420px] rounded-full bg-accent/12 blur-[130px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[360px] rounded-full bg-accent-end/12 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 size-[240px] -translate-y-1/2 rounded-full bg-white/40 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              WHO WE ARE
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
              Built in the UK.
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                Engineered to scale.
              </span>
            </h2>

            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-[#4B5563] sm:text-[17px]">
              <p>
                UVT is a UK-founded performance agency with a dual-shore model —
                strategic leadership and client ownership in the UK, paired with
                a specialist delivery engine in Pakistan.
              </p>
              <p>
                You get senior accountability where decisions matter most, and
                execution capacity that scales without the cost structure of a
                traditional full-service agency.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 sm:gap-8 lg:mt-12 lg:gap-10">
              {engineeredStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: 0.15 + i * 0.07 }}
                  whileHover={reduce ? undefined : { y: -3 }}
                  className="group/stat relative min-w-[88px]"
                >
                  <p className="bg-gradient-to-br from-black to-black/70 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent transition-all duration-300 group-hover/stat:from-accent group-hover/stat:to-accent-end sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[#6B7280]">{stat.label}</p>
                  <span className="mt-2 block h-0.5 w-8 origin-left scale-x-0 rounded-full bg-gradient-to-r from-accent to-accent-end transition-transform duration-300 group-hover/stat:scale-x-100" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-3.5">
            {engineeredFeatures.map((feature, i) => {
              const isDark = feature.tone === "dark";

              return (
                <motion.article
                  key={feature.id}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, ease, delay: i * 0.08 }}
                  whileHover={reduce ? undefined : { y: -4, x: 2 }}
                  className={cn(
                    "group relative flex gap-3.5 overflow-hidden rounded-2xl p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-shadow duration-300 sm:gap-4 sm:p-5",
                    isDark
                      ? "border border-white/5 bg-secondary text-foreground hover:shadow-[0_18px_40px_rgba(13,34,68,0.45)]"
                      : "border border-black/5 bg-white/70 backdrop-blur-sm hover:border-accent/25 hover:shadow-[0_16px_36px_rgba(59,158,255,0.12)]",
                  )}
                >
                  {!isDark && (
                    <div className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent to-accent-end transition-transform duration-300 group-hover:scale-y-100" />
                  )}

                  {isDark && (
                    <>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                      <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent/20 blur-3xl opacity-70 transition-opacity group-hover:opacity-100" />
                      <div className="pointer-events-none absolute -bottom-8 left-8 size-28 rounded-full bg-accent-end/15 blur-3xl" />
                    </>
                  )}

                  {isDark ? (
                    <span
                      className="relative flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-navy text-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-110"
                      aria-hidden
                    >
                      {feature.badge}
                    </span>
                  ) : (
                    <span
                      className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-navy text-xs font-bold tracking-wide text-white shadow-[0_6px_16px_rgba(13,34,68,0.35)] transition-transform duration-300 group-hover:scale-110"
                      aria-hidden
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/15 to-transparent" />
                      <span className="relative">{feature.badge}</span>
                    </span>
                  )}

                  <div className="relative">
                    <h3
                      className={cn(
                        "text-[15px] font-bold tracking-tight transition-colors duration-300 sm:text-base",
                        isDark
                          ? "text-foreground group-hover:text-accent"
                          : "text-black group-hover:text-accent",
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 text-sm leading-relaxed",
                        isDark ? "text-muted" : "text-[#4B5563]",
                      )}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
