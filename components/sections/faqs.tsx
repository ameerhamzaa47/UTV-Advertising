"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/content/faqs";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Faqs() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#D4D4D4] py-16 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="inline-flex items-center rounded-full bg-accent/15 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
              FAQ
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
              Common{" "}
              <span className="text-accent">questions</span>
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
              className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,158,255,0.35)] transition-all hover:brightness-110 sm:w-auto"
            >
              Book a Strategy Call
            </Link>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease, delay: i * 0.05 }}
                  className={cn(
                    "overflow-hidden rounded-2xl border border-black/5 bg-[#E4E4E4] transition-colors",
                    isOpen && "border-accent/20 bg-[#EAEAEA]",
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-[1.125rem]"
                  >
                    <span className="text-[15px] font-bold tracking-tight text-black sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-transform duration-300",
                        isOpen && "rotate-45 bg-accent text-white",
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
                        initial={
                          reduce ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-black/5 px-4 pb-4 pt-0 text-sm leading-relaxed text-[#4B5563] sm:px-5 sm:pb-5">
                          <span className="block pt-3">{faq.answer}</span>
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
