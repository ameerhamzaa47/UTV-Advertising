"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { agency } from "@/content/agency";

const needs = [
  "Website Design / Development",
  "App Development",
  "Graphic Design / Branding",
  "SEO",
  "Google Ads",
  "Meta Ads (Facebook & Instagram)",
  "Microsoft Ads",
  "Full Digital Marketing Package",
  "Not Sure Yet — Need Advice",
];

const sources = [
  "Google Search",
  "Google Ads",
  "Facebook / Instagram",
  "Referral from someone",
  "Local networking",
  "Other",
];

const field =
  "w-full rounded-xl border border-card-border bg-navy/40 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus:border-accent/50";

export function ContactPageView() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Business: ${data.get("business") || "—"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Help with: ${data.get("need")}`,
      `Heard about us: ${data.get("source") || "—"}`,
      "",
      String(data.get("message") || ""),
    ];
    window.location.href = `mailto:${agency.email}?subject=${encodeURIComponent(
      "Website enquiry",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pt-32 lg:px-16">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-accent">CONTACT</p>
          <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Ready to grow your business online? Tell us what you need. We will give you a free, no-obligation quote — usually within 24 hours.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={onSubmit} className="relative overflow-hidden rounded-2xl border border-card-border bg-card p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <h2 className="text-xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-2 text-sm text-muted">
                Fill in the form below and we will get back to you as soon as possible. No pushy sales calls. No pressure. Just a straight answer about how we can help.
              </p>
              {sent && (
                <p className="mt-4 rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent">
                  Opening your email app. If nothing opens, email {agency.email} directly.
                </p>
              )}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-muted">
                  Your Name *
                  <input name="name" required className={`${field} mt-1.5`} />
                </label>
                <label className="block text-xs font-semibold text-muted">
                  Business Name (optional)
                  <input name="business" className={`${field} mt-1.5`} />
                </label>
                <label className="block text-xs font-semibold text-muted">
                  Email Address *
                  <input name="email" type="email" required className={`${field} mt-1.5`} />
                </label>
                <label className="block text-xs font-semibold text-muted">
                  Phone Number *
                  <input name="phone" required className={`${field} mt-1.5`} />
                </label>
              </div>
              <label className="mt-4 block text-xs font-semibold text-muted">
                What do you need help with?
                <select name="need" className={`${field} mt-1.5`} defaultValue={needs[0]}>
                  {needs.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block text-xs font-semibold text-muted">
                Tell us about your project *
                <textarea name="message" required rows={5} className={`${field} mt-1.5`} />
              </label>
              <label className="mt-4 block text-xs font-semibold text-muted">
                How did you hear about us? (optional)
                <select name="source" className={`${field} mt-1.5`} defaultValue="">
                  <option value="">Select</option>
                  {sources.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <button type="submit" className="mt-6 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">
                Send Message
              </button>
              <p className="mt-3 text-xs text-muted">
                We reply to every message. If you do not hear from us within 24 hours, please email us directly.
              </p>
            </form>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Other Ways to Reach Us</h2>
              <div className="rounded-2xl border border-card-border bg-card p-5 text-sm text-muted">
                <p className="font-semibold text-foreground">Email</p>
                <a href={`mailto:${agency.email}`} className="mt-1 block text-accent">{agency.email}</a>
                <p className="mt-1">We reply within 24 hours</p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card p-5 text-sm text-muted">
                <p className="font-semibold text-foreground">WhatsApp</p>
                <a href={agency.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-1 block text-accent">{agency.whatsapp}</a>
                <p className="mt-1">Message us anytime during opening hours</p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card p-5 text-sm text-muted">
                <p className="font-semibold text-foreground">Address</p>
                <p className="mt-1">{agency.address}</p>
                <p>Serving businesses across Staffordshire and the UK</p>
                <p className="mt-2">{agency.hours}</p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card p-5 text-sm text-muted">
                <p className="font-semibold text-foreground">Social</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {agency.socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-card-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-card-border bg-card p-5">
                <h3 className="text-lg font-bold text-foreground">Book a Free 30-Minute Call</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Sometimes it is easier to just talk. Book a free, no-obligation call and we will discuss your business, your goals, and how we can help. No pressure. No jargon. Just a friendly chat.
                </p>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(agency.email)}&su=${encodeURIComponent("Book a free 30-minute call")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex cursor-pointer text-sm font-semibold text-accent"
                >
                  Book a Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Areas We Cover</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#4B5563]">
            We are based in Stoke-on-Trent and serve businesses across Staffordshire, including:
          </p>
          <ul className="mt-6 flex max-w-4xl flex-wrap gap-2.5">
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
              "Kidsgrove",
              "Biddulph",
              "And surrounding areas",
            ].map((area) => (
              <li
                key={area}
                className="rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-sm text-black/80 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[#4B5563]">We also work with clients across the UK remotely.</p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Before You Get in Touch</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              ["Do you charge for quotes?", "No. Every quote is completely free. We will look at what you need and give you a clear price with no hidden fees."],
              ["Do I have to sign a long contract?", "No. We offer flexible arrangements. Most clients stay with us because they are happy with the results — not because they are locked in."],
              ["Can I meet you face-to-face?", "Yes. If you are based in Staffordshire, we are happy to meet you at your premises or somewhere convenient for you."],
              ["How quickly will you reply?", "We reply to all enquiries within 24 hours, usually much sooner."],
            ].map(([q, a]) => (
              <article key={q} className="rounded-2xl border border-card-border bg-card px-5 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                <h3 className="font-bold text-foreground">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-16 text-center">
        <h2 className="text-3xl font-extrabold text-foreground">Let&apos;s Talk About Growing Your Business</h2>
        <p className="mx-auto mt-4 max-w-xl px-5 text-muted">
          Whether you need a new website, better Google rankings, or ads that actually bring in customers — we are here to help. Get in touch today and let&apos;s get started.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">
            Send Us a Message
          </Link>
          <a href={`mailto:${agency.email}`} className="rounded-xl border border-card-border px-5 py-3 text-sm font-semibold text-foreground">
            Email Us Now
          </a>
        </div>
      </section>
    </>
  );
}
