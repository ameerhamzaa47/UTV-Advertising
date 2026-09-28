import Link from "next/link";

export type LocationContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  storyHeading: string;
  story: string[];
  whyHeading: string;
  why: { title: string; text: string }[];
  servicesHeading: string;
  services: { title: string; text: string }[];
  helpHeading: string;
  help: string[];
  helpClose: string;
  promiseHeading: string;
  promiseClose: string;
  areasHeading: string;
  areas: string;
  ctaHeading: string;
  ctaText: string;
};

export function LocationView({ page }: { page: LocationContent }) {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute -left-24 top-20 size-[380px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-[320px] rounded-full bg-accent-end/10 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-28 md:px-8 md:pt-32 lg:px-16">
          <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-accent shadow-[0_0_24px_rgba(59,158,255,0.14)]">
            <span className="size-1.5 rounded-full bg-accent" />
            {page.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] text-foreground sm:text-5xl">
            {page.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-[17px]">
            {page.subheadline}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-accent to-accent-end px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(59,158,255,0.35)]"
          >
            Get a Free Quote
          </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">{page.storyHeading}</h2>
            <p className="mt-6 rounded-2xl border border-black/5 border-l-[3px] border-l-accent bg-white px-5 py-4 text-lg font-semibold leading-snug text-black shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              {page.story[0]}
            </p>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#4B5563]">
              {page.story.slice(1).map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold text-foreground">{page.whyHeading}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {page.why.map((item) => (
              <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-[0_12px_36px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_44px_rgba(59,158,255,0.14)]">
                <div className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-accent to-accent-end transition-transform duration-300 group-hover:scale-y-100" />
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold text-black">{page.servicesHeading}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.services.map((item) => (
              <article key={item.title} className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_16px_36px_rgba(59,158,255,0.12)]">
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{item.text}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className="mt-8 inline-flex text-sm font-semibold text-accent">
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{page.helpHeading}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.help.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-card-border bg-card px-4 py-3.5 text-sm text-foreground/90 transition-colors hover:border-accent/30 hover:bg-accent/5"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-foreground/80">{page.helpClose}</p>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">{page.promiseHeading}</h2>
          <ul className="mt-6 space-y-2.5">
            {[
              "Lower prices than most UK agencies",
              "No compromise on quality — ever",
              "No hidden fees",
              "Clear communication in simple language",
              "Real results that grow your business",
            ].map((item) => (
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
          <p className="mt-6 text-sm leading-relaxed text-[#4B5563]">{page.promiseClose}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold text-foreground">{page.areasHeading}</h2>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {page.areas.split(" | ").map((area) => (
              <li
                key={area}
                className="rounded-full border border-card-border bg-card/60 px-3.5 py-1.5 text-sm text-foreground/90"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-extrabold text-foreground">{page.ctaHeading}</h2>
          <p className="mt-4 text-muted">{page.ctaText}</p>
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
