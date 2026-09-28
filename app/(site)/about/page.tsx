import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | UVT Advertising",
  description:
    "A local digital marketing agency in Stoke-on-Trent, helping Staffordshire businesses grow online at fair prices.",
};

const beliefs = [
  {
    title: "Quality Should Not Be Expensive",
    text: "You should not have to pay silly money to get a professional website or a well-managed ad campaign. We keep our prices low because we believe every business deserves good digital marketing.",
  },
  {
    title: "One Team Is Better Than Five",
    text: "Hiring separate freelancers for your website, your logo, your SEO, and your ads is a headache. We bring everything under one roof so you have one point of contact and zero confusion.",
  },
  {
    title: "Local Matters",
    text: "We are based in Stoke-on-Trent. We know Staffordshire. We understand the local market. We can meet you face-to-face. That is something no London agency can offer.",
  },
  {
    title: "Honesty Always Wins",
    text: "No hidden fees. No confusing jargon. No false promises. We tell you what we can do, what it costs, and what results to expect. That is how we build long-term relationships.",
  },
];

const team = [
  ["Web Developers", "building fast, beautiful websites that convert"],
  ["App Developers", "creating custom mobile apps for your business"],
  ["Graphic Designers", "designing logos, branding, and visuals that stand out"],
  ["SEO Experts", "helping you rank higher on Google"],
  ["Google Ads Specialists", "managing campaigns that bring real leads"],
  ["Meta Ads Specialists", "reaching customers on Facebook and Instagram"],
  ["Microsoft Ads Specialists", "unlocking cheaper clicks on Bing"],
] as const;

const promise = [
  "Lower prices than most UK agencies",
  "No compromise on quality — ever",
  "No hidden fees — you know exactly what you pay for",
  "Clear communication — we explain everything in simple language",
  "Real results — we focus on what actually grows your business",
];

const clients = [
  "Tradespeople — plumbers, electricians, joiners, builders",
  "Shops, cafes, and restaurants",
  "Online stores",
  "Professional services — accountants, solicitors, consultants",
  "Hotels and hospitality businesses",
  "Startups and new businesses",
  "Established companies wanting to grow",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute -left-24 top-16 size-[360px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-28 md:px-8 md:pt-32 lg:px-16">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
              <span className="size-1.5 rounded-full bg-accent" />
              ABOUT US
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-[17px]">
              A local digital marketing agency in Stoke-on-Trent, helping businesses across Staffordshire grow online — at prices that make sense.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Who We Are</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#4B5563]">
              <p>We are a digital marketing agency based in Stoke-on-Trent. We started this business because we saw a simple problem:</p>
              <p className="rounded-2xl border border-black/5 border-l-[3px] border-l-accent bg-white px-5 py-4 text-lg font-semibold leading-snug text-black shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                Good digital marketing was too expensive for local businesses.
              </p>
              <p>Big agencies charge thousands of pounds per month. Small businesses in Stoke and Staffordshire were being priced out. They were stuck with bad websites, no SEO, and no way to compete online.</p>
              <p className="font-semibold text-black">We decided to change that.</p>
              <p>We built a team of experts in web development, app development, graphic design, SEO, Google Ads, Meta Ads, and Microsoft Ads. We kept our prices fair. And we made it our mission to help local businesses grow online without breaking the bank.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold text-foreground">Our Simple Beliefs</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {beliefs.map((item) => (
              <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-[0_12px_36px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-1 hover:border-accent/30">
                <div className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent to-accent-end transition-transform duration-300 group-hover:scale-y-100" />
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Meet the Team Behind Your Success</h2>
            <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
              Our team is made up of specialists in every area of digital marketing. When you work with us, you are not paying for beginners to learn on your money. You are working with experienced professionals who know their craft.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {team.map(([role, text]) => (
              <li
                key={role}
                className="group rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_14px_32px_rgba(59,158,255,0.12)]"
              >
                <p className="text-sm font-bold text-black transition-colors group-hover:text-accent">{role}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold text-black">One team. All the skills you need.</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Who We Work With</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">We work with small and medium businesses across Stoke-on-Trent and Staffordshire, including:</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-card-border bg-card px-4 py-3.5 text-sm text-foreground/90 transition-colors hover:border-accent/30 hover:bg-accent/5"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-foreground/80">If you run a business in Staffordshire, we can help you grow it online.</p>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Our Promise to You</h2>
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
            <p className="mt-6 text-sm leading-relaxed text-[#4B5563]">We would rather earn a loyal client for years than make a quick profit once.</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-extrabold text-foreground">Let&apos;s Work Together</h2>
          <p className="mt-4 text-muted">Get a free, no-obligation quote today. Tell us what you need, and we will show you exactly how we can help — at a price that works for you.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">Get Your Free Quote</Link>
            <Link href="/contact" className="rounded-xl border border-card-border px-5 py-3 text-sm font-semibold text-foreground">Call Us Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
