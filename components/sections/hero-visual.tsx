"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:max-w-[480px] lg:justify-self-end">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-y-12 -left-[32%] -right-8 z-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          src="/images/hero/rightBG.png"
          alt=""
          fill
          sizes="560px"
          className="object-contain object-right mix-blend-screen"
          priority
        />
      </motion.div>

      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-accent/15 blur-3xl" />

      <motion.div
        className="relative z-10 grid grid-cols-[328fr_271fr] gap-2.5"
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
      >
        <motion.div
          variants={rise}
          className="relative"
          whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.25 } }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero/1.png"
              alt="Analytics dashboard on laptop"
              width={328}
              height={403}
              priority
              className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
            />
          </motion.div>

          <motion.div
            className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/40 sm:right-3 sm:top-3 sm:size-12"
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.55 }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 sm:size-6"
              aria-hidden
              animate={reduce ? undefined : { y: [0, -2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M4 16l6-6 4 4 6-7"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 7h4v4"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        <motion.div
          variants={rise}
          whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.25 } }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <Image
              src="/images/hero/2.png"
              alt="230+ trusted companies"
              width={271}
              height={403}
              priority
              className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={rise}
          className="col-span-2"
          whileHover={reduce ? undefined : { y: -3, transition: { duration: 0.25 } }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          >
            <Image
              src="/images/hero/3.png"
              alt="Drive more traffic and product sales"
              width={614}
              height={285}
              priority
              className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -left-3 top-[18%] z-20 hidden rounded-full border border-white/10 bg-navy/80 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md sm:block"
        initial={reduce ? false : { opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.45 }}
      >
        <span className="text-accent-end">+127%</span> avg ROI
      </motion.div>

      <motion.div
        className="absolute -right-2 bottom-[38%] z-20 flex items-center gap-2 rounded-full border border-white/10 bg-navy/80 px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md"
        initial={reduce ? false : { opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.85, duration: 0.45 }}
      >
        <span className="relative flex size-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-accent-end/70" />
          <span className="relative size-2 rounded-full bg-accent-end" />
        </span>
        Live campaigns
      </motion.div>
    </div>
  );
}
