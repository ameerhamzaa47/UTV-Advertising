import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work | UVT Advertising",
  description:
    "The types of digital projects UVT Advertising handles for businesses in Stoke-on-Trent and Staffordshire.",
};

const projects = [
  {
    title: "New Websites That Bring in Customers",
    text: "We build fast, mobile-friendly websites for local businesses. Whether it is a simple one-page site for a tradesperson or a full online store, we focus on one thing: turning visitors into customers.",
    includes: [
      "Custom design based on your brand",
      "Mobile-friendly layout",
      "Fast loading speed",
      "Contact forms and enquiry capture",
      "Basic SEO setup",
      "Google Analytics and tracking",
    ],
    ideal: "Tradespeople, shops, cafes, service businesses, online stores.",
  },
  {
    title: "Getting Local Businesses Found on Google",
    text: "When someone in Stoke-on-Trent or Staffordshire searches for your service, you want to be at the top. We help local businesses rank higher on Google, appear in map results, and get more calls and enquiries.",
    includes: [
      "Keyword research for your local area",
      "Google Business Profile setup and optimisation",
      "On-page SEO (titles, descriptions, content)",
      "Local citations and directory listings",
      "Monthly ranking reports",
    ],
    ideal: "Tradespeople, shops, clinics, professional services.",
  },
  {
    title: "Paid Ads That Bring Real Leads",
    text: "Google Ads can bring customers to your business today — if they are set up properly. We build and manage campaigns that target the right people, at the right time, with the right message.",
    includes: [
      "Campaign setup and structure",
      "Keyword research and negative keywords",
      "Ad copywriting",
      "Landing page advice",
      "Budget management",
      "Monthly performance reports",
    ],
    ideal: "Businesses that want fast results and ready-to-buy customers.",
  },
  {
    title: "Facebook & Instagram Ads That Actually Work",
    text: "Social media ads are powerful when done right. We create and manage Meta Ads campaigns that reach the right audience and bring real enquiries — not just likes and shares.",
    includes: [
      "Audience research and targeting",
      "Ad creative design (images and video)",
      "Ad copywriting",
      "Campaign management",
      "Monthly reports",
    ],
    ideal: "Shops, cafes, salons, online stores, service businesses.",
  },
  {
    title: "Design That Makes You Look Professional",
    text: "Good design builds trust. We create logos, branding, and marketing materials that make small businesses look like big ones.",
    includes: [
      "Logo design",
      "Brand colours and fonts",
      "Business cards and stationery",
      "Social media templates",
      "Flyers, posters, and banners",
      "Menu and price list design",
    ],
    ideal: "New businesses, rebrands, any business wanting a professional look.",
  },
  {
    title: "Custom Apps for Your Business",
    text: "A mobile app can transform how you connect with customers. Whether it is a booking system, a loyalty app, or a customer portal, we build apps that are simple and useful.",
    includes: [
      "Custom app design",
      "iPhone and Android compatibility",
      "User-friendly interface",
      "Ongoing support and updates",
    ],
    ideal: "Restaurants, salons, gyms, service businesses, online stores.",
  },
];

const steps = [
  ["Free Consultation", "We talk about your business, your goals, and what you need. No pressure. No jargon."],
  ["Clear Proposal", "We send you a written proposal with exactly what we will do, how long it will take, and how much it costs."],
  ["We Get to Work", "Once you approve, we start. You get regular updates and can ask questions anytime."],
  ["Results & Reporting", "We show you what is working, what we are improving, and what results you are getting."],
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-28 md:px-8 md:pt-32 lg:px-16">
          <div className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-accent">PORTFOLIO</p>
          <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">Our Work</h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Real results for real businesses across Stoke-on-Trent and Staffordshire. Here is what we have been working on.
          </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold text-black">Projects We Work On</h2>
          <p className="mt-4 max-w-3xl text-[#4B5563]">
            Every business is different. Some need a brand new website. Some need more customers from Google. Some need a complete digital overhaul. Here are the types of projects we handle every day.
          </p>
          <div className="mt-8 max-w-4xl space-y-5">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_16px_36px_rgba(59,158,255,0.12)]">
                <h3 className="text-xl font-bold text-black">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{project.text}</p>
                <p className="mt-4 text-[11px] font-semibold tracking-[0.12em] text-accent">WHAT THIS TYPICALLY INCLUDES</p>
                <ul className="mt-2 space-y-1.5 text-sm text-black/80">
                  {project.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-[#4B5563]">
                  <span className="font-semibold text-black">Ideal for: </span>
                  {project.ideal}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <h2 className="text-3xl font-extrabold text-foreground">Our Simple Process</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2">
            {steps.map(([title, text], i) => (
              <li key={title} className="rounded-2xl border border-card-border bg-card p-5 shadow-[0_12px_36px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:border-accent/30">
                <p className="text-sm font-semibold text-accent">Step {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-16">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-extrabold text-black">Client Success Stories</h2>
          <p className="mt-4 text-[#4B5563]">
            Named case studies are coming soon. We only publish real client results, with permission — never invented names or numbers.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 text-center">
        <h2 className="text-3xl font-extrabold text-foreground">Want to Be Our Next Success Story?</h2>
        <p className="mx-auto mt-4 max-w-xl px-5 text-muted">
          Get a free, no-obligation quote today. Tell us about your business and what you want to achieve. We will show you exactly how we can help.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">Get Your Free Quote</Link>
          <Link href="/contact" className="rounded-xl border border-card-border px-5 py-3 text-sm font-semibold text-foreground">Call Us Now</Link>
        </div>
      </section>
    </>
  );
}
