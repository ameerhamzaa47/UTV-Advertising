"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";
import { faqs } from "@/content/faqs";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Faqs() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden border-t border-black/5 bg-[#FAF9F6] py-16 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-12 size-[400px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[340px] rounded-full bg-accent-end/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              FAQ
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
              Common{" "}
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                questions
              </span>
              <br />
              answered
            </h2>

            <p className="mt-4 max-w-md text-base leading-relaxed text-[#4B5563] sm:text-[17px]">
              If you do not see your question answered below, reach out
              directly — we are straightforward people who give straight
              answers.
            </p>

            <Link
              href="/contact"
              className="group/cta mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,158,255,0.35)] transition-all hover:brightness-110 hover:shadow-[0_14px_32px_rgba(59,158,255,0.45)] sm:w-auto"
            >
              Book a Strategy Call
              <ArrowIcon className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
            </Link>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, ease, delay: i * 0.05 }}
                  whileHover={reduce || isOpen ? undefined : { y: -2 }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-accent/30 bg-white shadow-[0_16px_40px_rgba(59,158,255,0.12)]"
                      : "border-black/5 bg-white/65 shadow-[0_6px_20px_rgba(15,23,42,0.04)] hover:border-accent/20 hover:bg-white hover:shadow-[0_12px_28px_rgba(59,158,255,0.1)]",
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-accent to-accent-end transition-transform duration-300 origin-top",
                      isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100",
                    )}
                  />

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-[1.125rem]"
                  >
                    <span
                      className={cn(
                        "text-[15px] font-bold tracking-tight transition-colors duration-200 sm:text-base",
                        isOpen ? "text-accent" : "text-black group-hover:text-accent",
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "relative flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "rotate-45 bg-gradient-to-br from-accent to-accent-end text-white shadow-[0_6px_16px_rgba(59,158,255,0.4)]"
                          : "bg-accent/15 text-accent group-hover:bg-accent/25",
                      )}
                      aria-hidden
                    >
                      <svg viewBox="0 0 16 16" className="size-3.5" fill="none">
                        <path
                          d="M8 3v10M3 8h10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-accent/10 px-4 pb-4 pt-0 text-sm leading-relaxed text-[#4B5563] sm:px-5 sm:pb-5">
                          <span className="block pt-3.5">{faq.answer}</span>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
