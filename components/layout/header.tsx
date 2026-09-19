"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowIcon } from "@/components/icons/arrow";
import { services } from "@/content/services";
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
  "/insights": (
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const servicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || open || servicesOpen
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

              if (item.href === "/services") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <Link
                      href="/services"
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                        servicesActive || servicesOpen
                          ? "bg-white/10 text-foreground shadow-sm"
                          : "text-muted hover:bg-white/5 hover:text-foreground",
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 12 12"
                        className={cn(
                          "size-3 transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={
                            reduce
                              ? { opacity: 1 }
                              : { opacity: 0, y: 10, scale: 0.97 }
                          }
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={
                            reduce
                              ? { opacity: 0 }
                              : { opacity: 0, y: 8, scale: 0.98 }
                          }
                          transition={{
                            duration: 0.22,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute left-1/2 top-full z-50 w-[min(96vw,880px)] -translate-x-1/2 pt-3"
                          onMouseEnter={openServices}
                          onMouseLeave={scheduleCloseServices}
                        >
                          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-b from-[#0e1830]/98 to-[#080e1c]/98 shadow-[0_28px_80px_rgba(0,0,0,0.65),0_0_0_1px_rgba(59,158,255,0.08)] backdrop-blur-2xl">
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                            <div className="pointer-events-none absolute -left-16 -top-16 size-44 rounded-full bg-accent/20 blur-3xl" />
                            <div className="pointer-events-none absolute -right-12 bottom-0 size-40 rounded-full bg-accent-end/15 blur-3xl" />

                            <div className="relative flex items-center justify-between gap-3 border-b border-white/8 px-5 py-3">
                              <div className="flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
                                <p className="text-[11px] font-semibold tracking-[0.14em] text-accent">
                                  OUR SERVICES
                                </p>
                              </div>
                              <Link
                                href="/services"
                                className="group/all inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-accent"
                                onClick={() => setServicesOpen(false)}
                              >
                                View all services
                                <ArrowIcon className="size-3 transition-transform group-hover/all:translate-x-0.5" />
                              </Link>
                            </div>

                            <div className="relative grid grid-cols-3 gap-2 p-3">
                              {services.map((service, i) => (
                                <motion.div
                                  key={service.id}
                                  initial={
                                    reduce ? false : { opacity: 0, y: 8 }
                                  }
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.25,
                                    delay: 0.04 + i * 0.035,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                >
                                  <Link
                                    href={`/services#${service.slug}`}
                                    className="group relative flex h-full flex-col gap-2.5 overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-3 transition-all duration-250 hover:border-accent/30 hover:bg-accent/10 hover:shadow-[0_12px_32px_rgba(59,158,255,0.12)]"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <div className="absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-gradient-to-b from-accent to-accent-end transition-transform duration-300 group-hover:scale-y-100" />

                                    <span
                                      className="relative flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-gradient-to-br from-accent/20 to-accent-end/10 text-base shadow-[0_6px_16px_rgba(59,158,255,0.15)] transition-transform duration-300 group-hover:scale-110"
                                      aria-hidden
                                    >
                                      <span className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-b from-white/10 to-transparent" />
                                      <span className="relative">
                                        {service.icon}
                                      </span>
                                    </span>

                                    <span className="min-w-0">
                                      <span className="flex items-start justify-between gap-1.5">
                                        <span className="text-[13px] font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
                                          {service.title}
                                        </span>
                                        <ArrowIcon className="mt-0.5 size-3 shrink-0 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-accent" />
                                      </span>
                                      <span className="mt-1 line-clamp-2 block text-[11px] leading-relaxed text-muted">
                                        {service.description}
                                      </span>
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>

                            <div className="relative border-t border-white/8 bg-white/[0.02] px-4 py-2.5">
                              <Link
                                href="/contact"
                                className="group/cta flex w-full items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-accent/15 to-accent-end/10 px-3.5 py-2.5 transition-all hover:from-accent/25 hover:to-accent-end/15"
                                onClick={() => setServicesOpen(false)}
                              >
                                <span>
                                  <span className="block text-sm font-semibold text-foreground">
                                    Not sure where to start?
                                  </span>
                                  <span className="mt-0.5 block text-xs text-muted">
                                    Book a free 45-min strategy call
                                  </span>
                                </span>
                                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-end px-3 py-1.5 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(59,158,255,0.35)]">
                                  Book a call
                                  <ArrowIcon className="size-3 transition-transform group-hover/cta:translate-x-0.5" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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

              <nav
                className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-4 py-5"
                aria-label="Mobile"
              >
                {siteConfig.nav.map((item, i) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                  if (item.href === "/services") {
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
                        <button
                          type="button"
                          className={cn(
                            "flex w-full cursor-pointer items-center gap-3 rounded-xl px-3.5 py-3.5 text-left text-sm font-medium transition-colors",
                            servicesActive || mobileServicesOpen
                              ? "bg-accent/15 text-accent"
                              : "text-muted hover:bg-white/5 hover:text-foreground",
                          )}
                          aria-expanded={mobileServicesOpen}
                          onClick={() => setMobileServicesOpen((v) => !v)}
                        >
                          <span
                            className={cn(
                              "flex size-9 shrink-0 items-center justify-center rounded-lg border",
                              servicesActive || mobileServicesOpen
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
                              {navIcons["/services"]}
                            </svg>
                          </span>
                          <span className="flex-1">{item.label}</span>
                          <svg
                            viewBox="0 0 12 12"
                            className={cn(
                              "size-3.5 transition-transform",
                              mobileServicesOpen && "rotate-180",
                            )}
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M3 4.5L6 7.5L9 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={reduce ? false : { height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                                <Link
                                  href="/services"
                                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-accent"
                                  onClick={() => setOpen(false)}
                                >
                                  All services
                                </Link>
                                {services.map((service) => (
                                  <Link
                                    key={service.id}
                                    href={`/services#${service.slug}`}
                                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
                                    onClick={() => setOpen(false)}
                                  >
                                    <span aria-hidden>{service.icon}</span>
                                    {service.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

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
