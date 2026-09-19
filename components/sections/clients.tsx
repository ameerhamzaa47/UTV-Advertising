"use client";

import { motion, useReducedMotion } from "framer-motion";
import { clientStories } from "@/content/client-stories";

const ease = [0.22, 1, 0.36, 1] as const;

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="size-4 text-[#F5C542] drop-shadow-[0_0_6px_rgba(245,197,66,0.45)]"
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
      <div className="pointer-events-none absolute left-1/2 top-[20%] size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[150px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 size-[340px] rounded-full bg-accent-end/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 top-28 size-[280px] rounded-full bg-accent/8 blur-[110px]" />

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
            CLIENT STORIES
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What our clients{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              actually say
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {clientStories.map((story, i) => (
            <motion.article
              key={story.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease, delay: i * 0.08 }}
              whileHover={reduce ? undefined : { y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition-shadow duration-300 hover:border-accent/30 hover:shadow-[0_22px_55px_rgba(59,158,255,0.14)] sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-end transition-transform duration-300 group-hover:scale-x-100" />
              <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <span
                className="pointer-events-none absolute top-4 right-5 text-5xl font-serif leading-none text-accent/15 transition-colors duration-300 group-hover:text-accent/25"
                aria-hidden
              >
                &ldquo;
              </span>

              <Stars count={story.rating ?? 5} />

              <p className="relative mt-5 flex-1 text-[15px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/80">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="relative mt-6 border-t border-card-border pt-5 transition-colors duration-300 group-hover:border-accent/20">
                <div className="flex items-center gap-3">
                  <span
                    className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent via-[#5eb8ff] to-accent-end text-xs font-bold tracking-wide text-white shadow-[0_0_0_2px_rgba(59,158,255,0.25),0_8px_20px_rgba(59,158,255,0.35)] ring-2 ring-white/15 transition-transform duration-300 group-hover:scale-105"
                    aria-hidden
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 to-transparent" />
                    <span className="relative">{story.initials}</span>
                  </span>
                  <div>
                    <p className="text-sm font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
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
