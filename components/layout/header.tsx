"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowIcon } from "@/components/icons/arrow";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navIcons: Record<string, ReactNode> = {
  "/about": (
    <path
      d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  ),
  "/services": (
    <path
      d="M4 7h16M4 12h10M4 17h7"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  ),
  "/work": (
    <path
      d="M4 8h16v11H4V8zm3-4h10l1 4H6l1-4z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  ),
  "/#insights": (
    <path
      d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "/contact": (
    <path
      d="M4 6h16v12H4V6zm0 0l8 7 8-7"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || open
            ? "border-white/10 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-16">
          <Link
            href="/"
            className="relative block h-9 w-[120px] shrink-0 sm:h-10 sm:w-[180px]"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/Logo.png"
              alt="UTV Advertising"
              fill
              priority
              className="object-contain object-left"
              sizes="140px"
            />
          </Link>

          <nav
            className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.04] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md lg:flex"
            aria-label="Primary"
          >
            {siteConfig.nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-white/10 text-foreground shadow-sm"
                      : "text-muted hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="btn-gradient hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm shadow-[0_8px_24px_rgba(59,158,255,0.25)] sm:inline-flex"
            >
              Book A Call
              <span className="flex size-5 items-center justify-center rounded-full bg-white/30">
                <ArrowIcon className="size-3" />
              </span>
            </Link>

            <button
              type="button"
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-full border text-foreground transition lg:hidden",
                open
                  ? "border-accent/40 bg-accent/10"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10",
              )}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              id="mobile-nav"
              className="fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-sm flex-col border-l border-white/10 bg-[#070d1a]/95 shadow-[-20px_0_60px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden"
              initial={reduce ? { x: 0 } : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? { x: 0, opacity: 0 } : { x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-sm font-semibold tracking-wide text-foreground">
                  Menu
                </p>
                <button
                  type="button"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1.5 px-4 py-5" aria-label="Mobile">
                {siteConfig.nav.map((item, i) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                  return (
                    <motion.div
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.05,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-3.5 py-3.5 text-sm font-medium transition-colors",
                          active
                            ? "bg-accent/15 text-accent"
                            : "text-muted hover:bg-white/5 hover:text-foreground",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        <span
                          className={cn(
                            "flex size-9 shrink-0 items-center justify-center rounded-lg border",
                            active
                              ? "border-accent/30 bg-accent/10 text-accent"
                              : "border-white/10 bg-white/5 text-muted",
                          )}
                        >
                          <svg
                            className="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                          >
                            {navIcons[item.href] ?? (
                              <circle
                                cx="12"
                                cy="12"
                                r="3.5"
                                stroke="currentColor"
                                strokeWidth="1.75"
                              />
                            )}
                          </svg>
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="border-t border-white/10 p-4">
                <Link
                  href="/contact"
                  className="btn-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm"
                  onClick={() => setOpen(false)}
                >
                  Book A Call
                  <ArrowIcon className="size-3.5" />
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
