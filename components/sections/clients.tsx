"use client";

import { motion, useReducedMotion } from "framer-motion";
import { clientStories } from "@/content/client-stories";

const ease = [0.22, 1, 0.36, 1] as const;

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="size-4 text-[#F5C542]"
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.52L10 14.27l-4.94 2.46.94-5.52-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Clients() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-[22%] size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
            CLIENT STORIES
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What our clients{" "}
            <span className="text-accent">actually say</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {clientStories.map((story, i) => (
            <motion.article
              key={story.id}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-card-border bg-card p-6 sm:p-7"
            >
              <Stars count={story.rating ?? 5} />

              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-card-border pt-5">
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-end text-xs font-bold tracking-wide text-white"
                    aria-hidden
                  >
                    {story.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold tracking-tight text-foreground">
                      {story.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted sm:text-[13px]">
                      {story.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
