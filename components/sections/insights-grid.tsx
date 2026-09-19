"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import { insights } from "@/content/insights";

const ease = [0.22, 1, 0.36, 1] as const;

export function InsightsGrid() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background pb-16 md:pb-20 lg:pb-24">
      <div className="pointer-events-none absolute -left-20 top-1/3 size-[360px] rounded-full bg-accent/8 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-10 size-[300px] rounded-full bg-accent-end/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {insights.map((post, i) => (
            <motion.article
              key={post.id}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease, delay: i * 0.06 }}
              whileHover={reduce ? undefined : { y: -5 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-shadow hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(59,158,255,0.12)] sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-end transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold tracking-[0.10em] text-accent ring-1 ring-accent/20">
                  {post.category}
                </span>
                <span className="text-xs text-muted">{post.date}</span>
                <span className="text-xs text-muted">· {post.readTime}</span>
              </div>

              <h2 className="mt-4 text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>

              <Link
                href={`/insights#${post.slug}`}
                className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                Read insight
                <ArrowIcon className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
