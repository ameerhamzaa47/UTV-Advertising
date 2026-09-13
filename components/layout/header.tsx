"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/icons/arrow";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
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
        <div className="flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-16">
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

        {open ? (
          <div
            id="mobile-nav"
            className="border-t border-white/10 px-5 py-4 lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile">
              {siteConfig.nav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3.5 py-3 text-sm font-medium transition-colors",
                      active
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-white/5 hover:text-foreground",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="btn-gradient mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm sm:hidden"
                onClick={() => setOpen(false)}
              >
                Book A Call
                <ArrowIcon className="size-3.5" />
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
