"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/icons/arrow";

const ease = [0.22, 1, 0.36, 1] as const;

const why = [
  {
    title: "Lower Prices, Same Quality",
    text: "We keep our prices low because we work smart, not because we cut corners. You get the same quality of work that bigger agencies charge three times more for.",
  },
  {
    title: "One Team, All Services",
    text: "No need to hire five different freelancers. We handle your website, your ads, your design, and your SEO — all under one roof. One point of contact. Zero confusion.",
  },
  {
    title: "We Are Local",
    text: "We are based in Stoke-on-Trent. We know Staffordshire. We know the local market. We can meet you face-to-face if needed — something big London agencies can never offer.",
  },
  {
    title: "Real Experts, Not Beginners",
    text: "Our team has specialists in Google Ads, Meta Ads, Microsoft Ads, SEO, web development, and graphic design. You are not paying for trainees to learn on your money.",
  },
];

const services = [
  {
    title: "Web Development",
    text: "Fast, mobile-friendly websites that look great and bring in customers. Built to convert visitors into buyers.",
  },
  {
    title: "App Development",
    text: "Custom mobile apps for your business. Simple, useful, and built for your customers.",
  },
  {
    title: "Graphic Design",
    text: "Logos, social media posts, flyers, banners — clean designs that make your brand look professional.",
  },
  {
    title: "SEO",
    text: "Get found on Google when people search for your service in your area. We help you rank higher, organically.",
  },
  {
    title: "Google Ads",
    text: "Show your business at the top of Google when customers are ready to buy. We manage your budget carefully so every pound works hard.",
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    text: "Reach the right people on social media. We create and manage ads that bring real leads, not just likes.",
  },
  {
    title: "Microsoft Ads",
    text: "Reach customers on Bing and Microsoft platforms. Often cheaper clicks, less competition, great results.",
  },
];

const audiences = [
  "Tradespeople (plumbers, electricians, joiners, builders)",
  "Local shops and cafes",
  "Online stores",
  "Professional services (accountants, solicitors, consultants)",
  "Startups and new businesses",
  "Established companies wanting to grow online",
];

const promise = [
  "Lower prices than most agencies in the UK",
  "No compromise on quality — ever",
  "No hidden fees — you know exactly what you pay for",
  "Clear communication — we explain everything in simple language",
  "Real results — we focus on what actually grows your business",
];

const experts = [
  "Web Development",
  "App Development",
  "Graphic Design",
  "SEO (Search Engine Optimization)",
  "Google Ads",
  "Meta Ads (Facebook & Instagram)",
  "Microsoft Ads",
];

export function HomeBody() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative border-y border-white/5 bg-secondary py-5">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 text-center text-sm font-medium tracking-wide text-foreground/85 md:px-8">
          <span>Based in Stoke-on-Trent</span>
          <span className="hidden size-1 rounded-full bg-accent sm:inline-block" />
          <span>Serving All of Staffordshire</span>
          <span className="hidden size-1 rounded-full bg-accent-end sm:inline-block" />
          <span>No Hidden Fees</span>
        </p>
      </section>

      <section className="relative overflow-hidden bg-[#FAF9F6] py-16 md:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 size-[380px] rounded-full bg-accent/12 blur-[120px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-[300px] rounded-full bg-accent-end/12 blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 md:px-8 lg:grid-cols-2 lg:px-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              WHO WE ARE
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-black sm:text-4xl">
              Your Local Digital Team in{" "}
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                Stoke-on-Trent
              </span>
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#4B5563]">
              <p>
                We are a digital marketing agency based in Stoke-on-Trent,
                helping businesses across Staffordshire grow online. Whether you
                run a shop in Hanley, a trades business in Longton, or a growing
                company in Stafford, we are here to help you get more customers.
              </p>
              <p>
                We built this agency on one simple belief: you should not have
                to pay big agency prices to get big agency results.
              </p>
            </div>
          </motion.div>
          <div>
            <p className="text-sm font-semibold text-black">
              Our team includes experts in:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {experts.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-black/5 bg-white px-3.5 py-3 text-sm font-medium text-black/80 shadow-[0_6px_18px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_12px_28px_rgba(59,158,255,0.12)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">
              Everything you need to grow your business online — in one place,
              at one fair price.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Why Businesses in{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              Staffordshire
            </span>{" "}
            Choose Us
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {why.map((item, i) => (
              <motion.article
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                whileHover={reduce ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-[0_12px_36px_rgba(0,0,0,0.22)] transition-shadow hover:border-accent/30 hover:shadow-[0_18px_44px_rgba(59,158,255,0.14)]"
              >
                <div className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent to-accent-end transition-transform duration-300 group-hover:scale-y-100" />
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              What We Do
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View All Services
              <ArrowIcon className="size-3.5" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <motion.article
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease, delay: i * 0.04 }}
                whileHover={reduce ? undefined : { y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-shadow hover:border-accent/25 hover:shadow-[0_16px_36px_rgba(59,158,255,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-end transition-transform duration-300 group-hover:scale-x-100" />
                <p className="text-[11px] font-semibold tracking-[0.12em] text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-2 text-lg font-bold text-black transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Trusted by Businesses Across Staffordshire
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            We work with small and medium businesses across Stoke-on-Trent and
            Staffordshire, including:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-accent/30 hover:bg-accent/5"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            If you run a business in Staffordshire, we can help you grow it.
          </p>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Our Simple Promise to You
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
            We know you work hard for your money. So here is our promise:
          </p>
          <ul className="mt-6 space-y-2.5">
            {promise.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white px-4 py-3 text-sm text-black/80 shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-end text-white">
                  <svg viewBox="0 0 12 12" className="size-3" fill="none" aria-hidden>
                    <path d="M2.5 6.2l2.4 2.4 4.6-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-[#4B5563]">
            We would rather earn a loyal client for years than make a quick
            profit once.
          </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Areas We Cover
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted">
            We are based in Stoke-on-Trent and serve clients across
            Staffordshire, including:
          </p>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {[
              "Stoke-on-Trent",
              "Hanley",
              "Longton",
              "Tunstall",
              "Burslem",
              "Fenton",
              "Newcastle-under-Lyme",
              "Stafford",
              "Leek",
              "Stone",
              "Cheadle",
              "Uttoxeter",
              "And surrounding areas",
            ].map((area) => (
              <li
                key={area}
                className="rounded-full border border-card-border bg-card/60 px-3.5 py-1.5 text-sm text-foreground/90"
              >
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/stoke-on-trent"
              className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent"
            >
              Digital Marketing in Stoke-on-Trent
            </Link>
            <Link
              href="/staffordshire"
              className="rounded-full border border-card-border px-4 py-2 text-sm font-semibold text-foreground hover:border-accent/30 hover:text-accent"
            >
              Digital Marketing in Staffordshire
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background pb-20">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[480px] -translate-x-1/2 rounded-full bg-accent/12 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
              Grow
            </span>{" "}
            Your Business Online?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Get a free, no-obligation quote today. Tell us what you need, and
            we will show you exactly how we can help — at a price that works
            for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(59,158,255,0.35)] transition-all hover:brightness-110 sm:w-auto"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-card-border bg-card/40 px-5 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-accent/10 sm:w-auto"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
