import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | UVT Advertising",
  description:
    "Straight answers about pricing, services, contracts, and timelines from UVT Advertising in Stoke-on-Trent.",
};

const groups = [
  {
    title: "Pricing & Payment",
    items: [
      ["How much do your services cost?", "It depends on what you need. A simple website costs less than a full e-commerce store. A single ad campaign costs less than managing multiple channels. We give every client a clear, fixed quote before we start — so you know exactly what you are paying. No surprises. No hidden fees."],
      ["Do you charge for quotes?", "No. Every quote is completely free. We will look at what you need and give you a clear price. There is no obligation to work with us."],
      ["Why are you cheaper than other agencies?", "We keep our prices low because we work smart, not because we cut corners. We focus on what actually grows your business and avoid unnecessary extras. You get big agency quality without the big agency price tag."],
      ["Do I have to pay everything upfront?", "No. For most projects, we take a deposit to start and the rest on completion. For ongoing services like SEO or ads management, we charge monthly."],
      ["Do you offer payment plans?", "For larger projects, we can discuss splitting payments across a few months. Just ask."],
    ],
  },
  {
    title: "Services & What We Do",
    items: [
      ["What services do you offer?", "Web Development, App Development, Graphic Design, SEO, Google Ads, Meta Ads (Facebook & Instagram), and Microsoft Ads. All under one roof. One point of contact."],
      ["Can I hire you for just one service?", "Yes. You can hire us for just a website, just SEO, just ads — whatever you need. You do not have to buy everything."],
      ["Do you work with small businesses?", "Yes. Most of our clients are small and medium businesses across Stoke-on-Trent and Staffordshire. We are built for local businesses."],
      ["Do you work with businesses outside Staffordshire?", "Yes. While our focus is Staffordshire, we work with clients across the UK remotely."],
      ["What industries do you work with?", "Tradespeople, shops, cafes and restaurants, online stores, professional services, hotels and hospitality, manufacturers and B2B companies, and startups."],
    ],
  },
  {
    title: "Working With Us",
    items: [
      ["Do I have to sign a long contract?", "No. We offer flexible arrangements. Most clients stay with us because they are happy with the results — not because they are locked in. We do not believe in trapping people."],
      ["Can I meet you face-to-face?", "Yes. If you are based in Staffordshire, we are happy to meet you at your premises or somewhere convenient. We are based in Stoke-on-Trent, so we are never far away."],
      ["How do we communicate during a project?", "Whatever works best for you. Email, phone, WhatsApp, or in-person meetings. You will always have a direct point of contact."],
      ["How quickly do you reply to messages?", "We reply to all enquiries within 24 hours, usually much sooner. If you call during business hours, you will speak to a real person."],
      ["What are your business hours?", "Monday to Friday, 9am – 6pm. We also respond to urgent messages outside these hours when possible."],
    ],
  },
  {
    title: "Results & Timelines",
    items: [
      ["How long before I see results?", "Google Ads and Meta Ads can bring results within days. SEO typically takes 3 to 6 months. A new website is live within weeks. Logos and branding are usually delivered within 1 to 2 weeks. We give you a clear timeline before we start."],
      ["How do you measure results?", "We track what matters — website enquiries and calls, Google rankings, ad clicks, leads, cost per lead, and return on investment. You get clear reports showing what is working and what we are improving."],
      ["What if I am not happy with the results?", "We will work with you to fix it. If something is not working, we will analyse why and adjust the strategy. We want you to succeed — your success is our success."],
      ["Do you guarantee results?", "No honest agency can guarantee specific numbers, because results depend on your market, your budget, and your competitors. What we do guarantee is honest work, clear communication, and a focus on what actually grows your business."],
    ],
  },
  {
    title: "Getting Started",
    items: [
      ["How do I get started?", "Get in touch through our contact page or email us. We will have a free, no-obligation chat about your business and what you need. Then we will send you a clear quote."],
      ["What information do you need from me?", "What your business does, what you want to achieve, and your rough budget if you have one. We ask for more details once we start working together."],
      ["How soon can you start?", "Usually within a week of you approving the quote. For urgent projects, we can sometimes start sooner."],
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 pb-10 pt-28 md:px-8 md:pt-32">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-accent">FAQ</p>
          <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Straight answers to the questions we get asked most. If you do not see your question here, just get in touch — we are happy to help.
          </p>
          <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">
            Ask Us a Question
          </Link>
        </div>
      </section>

      <section className="bg-background pb-16">
        <div className="mx-auto max-w-3xl space-y-10 px-5 md:px-8">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl font-extrabold text-foreground">{group.title}</h2>
              <div className="mt-4 space-y-3">
                {group.items.map(([q, a]) => (
                  <details key={q} className="group rounded-2xl border border-card-border bg-card px-5 py-4 transition-colors open:border-accent/30 open:shadow-[0_12px_32px_rgba(59,158,255,0.1)]">
                    <summary className="cursor-pointer font-semibold text-foreground group-open:text-accent">{q}</summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16 text-center">
        <h2 className="text-3xl font-extrabold text-black">Did Not Find Your Answer?</h2>
        <p className="mx-auto mt-4 max-w-xl px-5 text-[#4B5563]">
          No problem. Just get in touch and we will answer any question you have. No pressure. No pushy sales talk. Just straight answers.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">Contact Us</Link>
          <Link href="/contact" className="rounded-xl border border-black/10 px-5 py-3 text-sm font-semibold text-black">Call Us Now</Link>
        </div>
      </section>
    </>
  );
}
