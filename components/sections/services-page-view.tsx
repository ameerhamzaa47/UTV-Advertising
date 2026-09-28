"use client";

import Link from "next/link";
import { useEffect } from "react";
import { services } from "@/content/services";

const reasons = [
  ["All services in one place", "No juggling multiple freelancers"],
  ["Affordable prices", "Big agency quality without the big agency price"],
  ["Local team", "Based in Stoke-on-Trent, serving all of Staffordshire"],
  ["Real experts", "Specialists in Google Ads, Meta Ads, Microsoft Ads, SEO, web development, and design"],
  ["No hidden fees", "Clear pricing, clear communication"],
  ["Real results", "We focus on what grows your business"],
] as const;

export function ServicesPageView() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    document.getElementById(hash)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute -left-24 top-20 size-[380px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-28 md:px-8 md:pt-32 lg:px-16">
          <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            SERVICES
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Our Digital Marketing{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-[17px]">
            Everything your business needs to grow online — websites, apps,
            design, SEO, and paid ads. All under one roof. All at fair prices.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3 text-sm font-semibold text-white"
          >
            Get a Free Quote
          </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            One Agency. All Your Digital Needs.
          </h2>
          <p className="mt-6 rounded-2xl border border-black/5 border-l-[3px] border-l-accent bg-white px-5 py-4 text-lg font-semibold leading-snug text-black shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
            Most businesses waste time and money juggling different freelancers for their website, their ads, and their design. We make it simple.
          </p>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#4B5563]">
            <p>
              We are a full-service digital marketing agency based in
              Stoke-on-Trent, serving businesses across Staffordshire. Whether
              you need a new website, a mobile app, a logo, or a full ad
              campaign — we handle it all.
            </p>
            <p className="font-semibold text-black">Here is what we do.</p>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-5 md:px-8">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.slug}
              className="group relative scroll-mt-28 overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-[0_14px_40px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_48px_rgba(59,158,255,0.14)] sm:p-8"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <p className="text-2xl" aria-hidden>
                {service.icon}
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-foreground">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {service.description}
              </p>
              <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-accent">
                WHAT YOU GET
              </p>
              <ul className="mt-3 space-y-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">
                <span className="font-semibold text-foreground">Perfect for: </span>
                {service.perfectFor}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Why Businesses Choose Us
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, text]) => (
              <li
                key={title}
                className="group rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_14px_32px_rgba(59,158,255,0.12)]"
              >
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-end text-white">
                  <svg viewBox="0 0 12 12" className="size-3.5" fill="none" aria-hidden>
                    <path d="M2.5 6.2l2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="mt-3 text-sm font-bold text-black transition-colors group-hover:text-accent">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-muted">
            Tell us what you need. We will give you a free, no-obligation quote
            and show you exactly how we can help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">
              Get Your Free Quote
            </Link>
            <Link href="/contact" className="rounded-xl border border-card-border px-5 py-3 text-sm font-semibold text-foreground">
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
