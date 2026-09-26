import type { Metadata } from "next";
import { LocationView } from "@/components/sections/location-view";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Stoke-on-Trent | UVT Advertising",
  description:
    "Web development, apps, design, SEO, Google Ads, Meta Ads, and Microsoft Ads for businesses in Stoke-on-Trent. Affordable prices.",
};

export default function StokePage() {
  return (
    <LocationView
      page={{
        eyebrow: "STOKE-ON-TRENT",
        headline: "Digital Marketing Agency in Stoke-on-Trent",
        subheadline:
          "Web development, app development, graphic design, SEO, Google Ads, Meta Ads, and Microsoft Ads — for businesses right here in Stoke-on-Trent. Affordable prices. No compromise on quality.",
        storyHeading: "Based in Stoke-on-Trent. Built for Stoke Businesses.",
        story: [
          "We are not a London agency pretending to know Stoke. We live here. We work here. We understand the local market because we are part of it.",
          "Whether you run a shop in Hanley, a cafe in Burslem, a trades business in Longton, or an online store in Tunstall, we know what it takes to get customers in Stoke-on-Trent.",
          "We offer the full package — websites, apps, design, SEO, and paid ads — all under one roof, at prices that make sense for local businesses.",
        ],
        whyHeading: "Why Work With Us in Stoke-on-Trent",
        why: [
          {
            title: "We Are Just Around the Corner",
            text: "Need to meet face-to-face? No problem. We are based in Stoke-on-Trent. We can sit down with you, understand your business, and build a plan together. No endless email chains. No waiting for a London agency to call you back.",
          },
          {
            title: "Affordable Prices for Local Businesses",
            text: "We know Stoke businesses do not have London budgets. That is why we keep our prices fair. You get professional websites, expert ad management, and quality design — without paying silly money.",
          },
          {
            title: "One Team for Everything",
            text: "Website, logo, Google Ads, SEO, social media ads — we handle it all. One point of contact. No juggling five different freelancers.",
          },
          {
            title: "We Know the Six Towns",
            text: "Hanley, Burslem, Longton, Tunstall, Fenton, Stoke. We understand how local search works across the Six Towns. We help your business show up when people nearby search for what you offer.",
          },
        ],
        servicesHeading: "What We Do for Stoke Businesses",
        services: [
          {
            title: "Web Development",
            text: "Fast, mobile-friendly websites built to bring in local customers. Whether you need a simple one-page site or a full online store, we build it right.",
          },
          {
            title: "App Development",
            text: "Custom mobile apps for Stoke businesses. Perfect for booking systems, loyalty programs, or connecting with your customers.",
          },
          {
            title: "Graphic Design",
            text: "Logos, menus, flyers, social media posts — designs that make your Stoke business look professional and stand out.",
          },
          {
            title: "SEO",
            text: "When someone in Stoke searches for your service, you want to be found. We help you rank higher on Google across Stoke-on-Trent and the surrounding areas.",
          },
          {
            title: "Google Ads",
            text: "Show up at the top of Google when local customers are ready to buy. We manage your budget carefully so every pound brings results.",
          },
          {
            title: "Meta Ads (Facebook & Instagram)",
            text: "Reach people in Stoke-on-Trent on social media. We create ads that bring real customers through your door.",
          },
          {
            title: "Microsoft Ads",
            text: "Reach customers on Bing across Staffordshire. Often cheaper clicks and less competition than Google.",
          },
        ],
        helpHeading: "We Work With All Types of Stoke Businesses",
        help: [
          "Tradespeople — plumbers, electricians, joiners, builders",
          "Shops and cafes in Hanley, Burslem, Longton, and Tunstall",
          "Online stores selling across the UK",
          "Professional services — accountants, solicitors, consultants",
          "Startups and new businesses",
          "Established companies wanting to grow",
        ],
        helpClose: "If your business is in Stoke-on-Trent, we can help you grow online.",
        promiseHeading: "Our Promise to Stoke Businesses",
        promiseClose: "We want to be the agency Stoke businesses recommend to their friends.",
        areasHeading: "Serving All of Stoke-on-Trent",
        areas:
          "Hanley | Burslem | Longton | Tunstall | Fenton | Stoke | Hartshill | Penkhull | Shelton | Abbey Hulton | Bentilee | Blurton | Meir | Trentham | And surrounding areas",
        ctaHeading: "Let's Grow Your Stoke Business Together",
        ctaText:
          "Get a free, no-obligation quote. Tell us what you need, and we will show you how we can help — at a price that works for you.",
      }}
    />
  );
}
