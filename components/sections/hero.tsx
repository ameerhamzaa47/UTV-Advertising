import Link from "next/link";
import { ArrowIcon } from "@/components/icons/arrow";
import { HeroVisual } from "@/components/sections/hero-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 hero-topo opacity-90" />
      <div className="pointer-events-none absolute -left-24 top-24 size-[420px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[380px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28 lg:grid-cols-2 lg:gap-8 lg:px-16 lg:pb-20 lg:pt-22">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            STOKE-ON-TRENT · STAFFORDSHIRE
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.1rem]">
            Affordable Digital Marketing for{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              Stoke-on-Trent & Staffordshire
            </span>{" "}
            Businesses
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-[17px]">
            Websites, apps, design, SEO, and ads — all under one roof. Big
            agency quality. Small business prices.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="btn-gradient inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm sm:w-auto sm:text-[15px]"
            >
              Get a Free Quote
              <span className="flex size-6 items-center justify-center rounded-full bg-white/25">
                <ArrowIcon className="size-3.5" />
              </span>
            </Link>

            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-white/50 hover:bg-white/5 sm:w-auto sm:text-[15px]"
            >
              See Our Services
            </Link>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
