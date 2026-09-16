"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import { caseStudies } from "@/content/case-studies";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Outcomes() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-12 lg:py-16">
      <div className="pointer-events-none absolute -left-24 top-1/3 size-[380px] rounded-full bg-accent/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[320px] rounded-full bg-accent-end/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            className="max-w-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-card-border bg-secondary/80 px-3.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-muted">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              PROVEN RESULTS
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Outcomes that{" "}
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                speak
              </span>{" "}
              for themselves
            </h2>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: 0.1 }}
          >
            <Link
              href="/work"
              className="group inline-flex shrink-0 items-center gap-2 self-center sm:self-auto rounded-xl w-full md:w-auto border border-card-border bg-card/60 px-4 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-accent/10 justify-center"
            >
              Start Your Case Study
              <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {caseStudies.map((study, i) => {
            const isGreen = study.tone === "accent-end";

            return (
              <motion.article
                key={study.id}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease, delay: i * 0.08 }}
                whileHover={reduce ? undefined : { y: -5 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-shadow hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(59,158,255,0.12)] sm:p-7"
              >
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100",
                    isGreen
                      ? "from-accent-end to-accent"
                      : "from-accent to-accent-end",
                  )}
                />

                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.10em] ring-1",
                      isGreen
                        ? "bg-accent-end/15 text-accent-end ring-accent-end/20"
                        : "bg-accent/15 text-accent ring-accent/20",
                    )}
                  >
                    {study.category}
                  </span>
             
                  <span className="text-sm text-muted">{study.client}</span>
                </div>

                <div className="mt-6 rounded-xl border border-card-border/80 bg-navy/40 p-3.5">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-muted">
                    01 CHALLENGE
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {study.challenge}
                  </p>
                </div>

                <div className="mt-3 rounded-xl border border-card-border/80 bg-navy/40 p-3.5">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-muted">
                    02 SOLUTION
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {study.solution}
                  </p>
                </div>

                <div
                  className={cn(
                    "mt-3 rounded-xl border p-3.5",
                    isGreen
                      ? "border-accent-end/20 bg-accent-end/5"
                      : "border-accent/20 bg-accent/5",
                  )}
                >
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-muted">
                    03 RESULTS
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {study.results.map((result) => (
                      <li
                        key={result}
                        className={cn(
                          "flex items-center gap-2.5 text-sm font-semibold",
                          isGreen ? "text-accent-end" : "text-accent",
                        )}
                      >
                        <span
                          className={cn(
                            "size-1.5 shrink-0 rounded-full shadow-[0_0_8px_currentColor]",
                            isGreen ? "bg-accent-end" : "bg-accent",
                          )}
                          aria-hidden
                        />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
