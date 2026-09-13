"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let exitTimer = 0;
    let fallbackTimer = 0;
    const start = performance.now();
    const minDuration = reduce ? 200 : 1100;
    let finished = false;

    const hide = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      exitTimer = window.setTimeout(() => setVisible(false), reduce ? 80 : 280);
    };

    const onLoad = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDuration - elapsed);
      fallbackTimer = window.setTimeout(hide, wait);
    };

    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(92, (elapsed / minDuration) * 100));
      if (elapsed < minDuration || document.readyState !== "complete") {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050a15]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-busy="true"
          aria-label="Loading"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,158,255,0.16),transparent_55%)]" />

          <motion.div
            className="relative mb-8"
            initial={reduce ? false : { opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="absolute -inset-6 rounded-full bg-accent/20 blur-2xl"
              animate={
                reduce
                  ? undefined
                  : { opacity: [0.35, 0.7, 0.35], scale: [0.95, 1.05, 0.95] }
              }
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src="/images/Logo.png"
              alt="UTV Advertising"
              width={140}
              height={112}
              priority
              className="relative h-auto w-[120px] object-contain sm:w-[140px]"
            />
          </motion.div>

          <div className="relative h-1 w-44 overflow-hidden rounded-full bg-white/10 sm:w-52">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-end"
              style={{ width: `${progress}%` }}
            />
          </div>

          <motion.p
            className="mt-4 text-[11px] font-semibold tracking-[0.2em] text-muted uppercase"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Loading experience
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
