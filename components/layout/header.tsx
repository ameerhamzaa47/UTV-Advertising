"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowIcon } from "@/components/icons/arrow";
import { serviceAreas } from "@/content/agency";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navIcons: Record<string, ReactNode> = {
  "/": (
    <path d="M4 11l8-7 8 7v9H4v-9z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
  ),
  "/about": (
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  ),
  "/services": (
    <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  ),
  "/portfolio": (
    <path d="M4 8h16v11H4V8zm3-4h10l1 4H6l1-4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
  ),
  "/faq": (
    <path d="M12 17h.01M9.5 9a2.5 2.5 0 115 0c0 2-2.5 2-2.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  ),
  "/contact": (
    <path d="M4 6h16v12H4V6zm0 0l8 7 8-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const areasActive = serviceAreas.some((area) => isActive(pathname, area.href));

  function showAreas() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAreasOpen(true);
  }

  function hideAreas() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setAreasOpen(false), 140);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setAreasOpen(false);
    setMobileAreasOpen(false);
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
          scrolled || open || areasOpen
            ? "border-white/10 bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-16">
          <Link href="/" className="relative block h-9 w-[120px] shrink-0 sm:h-10 sm:w-[180px]" onClick={() => setOpen(false)}>
            <Image src="/images/Logo.png" alt="UVT Advertising" fill priority className="object-contain object-left" sizes="140px" />
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.04] p-1.5 lg:flex" aria-label="Primary">
            {siteConfig.nav.map((item) => {
              if (item.href === "/contact") {
                return (
                  <div key="areas-and-contact" className="flex items-center gap-1">
                    <div className="relative" onMouseEnter={showAreas} onMouseLeave={hideAreas}>
                      <button
                        type="button"
                        className={cn(
                          "inline-flex cursor-pointer items-center gap-1 rounded-full px-4 py-2 text-sm font-medium",
                          areasActive || areasOpen ? "bg-white/10 text-foreground" : "text-muted hover:bg-white/5 hover:text-foreground",
                        )}
                        aria-expanded={areasOpen}
                      >
                        Service Areas
                        <svg viewBox="0 0 12 12" className={cn("size-3 transition-transform", areasOpen && "rotate-180")} fill="none" aria-hidden>
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {areasOpen && (
                          <motion.div
                            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
                            onMouseEnter={showAreas}
                            onMouseLeave={hideAreas}
                          >
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1424]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                              {serviceAreas.map((area) => (
                                <Link
                                  key={area.href}
                                  href={area.href}
                                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                                  onClick={() => setAreasOpen(false)}
                                >
                                  {area.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium",
                        isActive(pathname, item.href) ? "bg-white/10 text-foreground" : "text-muted hover:bg-white/5 hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium",
                    isActive(pathname, item.href) ? "bg-white/10 text-foreground" : "text-muted hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link href="/contact" className="btn-gradient hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm sm:inline-flex">
              Get a Free Quote
              <ArrowIcon className="size-3" />
            </Link>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button type="button" aria-label="Close menu" className="fixed inset-0 z-[60] bg-black/55 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-sm flex-col border-l border-white/10 bg-[#070d1a]/95 lg:hidden"
              initial={reduce ? { x: 0 } : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-sm font-semibold text-foreground">Menu</p>
                <button type="button" className="text-sm text-muted" onClick={() => setOpen(false)}>Close</button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
                {siteConfig.nav.map((item) => (
                  <div key={item.href}>
                    {item.href === "/contact" && (
                      <div className="mb-1">
                        <button type="button" className="flex w-full items-center justify-between rounded-xl px-3.5 py-3.5 text-sm font-medium text-muted" onClick={() => setMobileAreasOpen((v) => !v)}>
                          Service Areas
                          <span>{mobileAreasOpen ? "−" : "+"}</span>
                        </button>
                        {mobileAreasOpen &&
                          serviceAreas.map((area) => (
                            <Link key={area.href} href={area.href} className="block rounded-xl px-6 py-2.5 text-sm text-foreground" onClick={() => setOpen(false)}>
                              {area.label}
                            </Link>
                          ))}
                      </div>
                    )}
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3.5 py-3.5 text-sm font-medium",
                        isActive(pathname, item.href) ? "bg-accent/15 text-accent" : "text-muted",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      <span className="flex size-9 items-center justify-center rounded-lg border border-white/10">
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                          {navIcons[item.href]}
                        </svg>
                      </span>
                      {item.label}
                    </Link>
                  </div>
                ))}
              </nav>
              <div className="border-t border-white/10 p-4">
                <Link href="/contact" className="btn-gradient inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm" onClick={() => setOpen(false)}>
                  Get a Free Quote
                </Link>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
