import type { Metadata } from "next";
import { LocationView } from "@/components/sections/location-view";

export const metadata: Metadata = {
  title: "Digital Marketing Agency for Staffordshire | UVT Advertising",
  description:
    "Websites, apps, design, SEO, and ads for businesses across Staffordshire. Based in Stoke-on-Trent. Fair prices.",
};

export default function StaffordshirePage() {
  return (
    <LocationView
      page={{
        eyebrow: "STAFFORDSHIRE",
        headline: "Digital Marketing Agency for Staffordshire Businesses",
        subheadline:
          "Web development, app development, graphic design, SEO, Google Ads, Meta Ads, and Microsoft Ads — for businesses across Staffordshire. Affordable prices. No compromise on quality.",
        storyHeading: "Helping Staffordshire Businesses Grow Online",
        story: [
          "From Stafford to Leek, from Newcastle-under-Lyme to Uttoxeter, we help businesses across Staffordshire get more customers online.",
          "We are based in Stoke-on-Trent, which means we are right in the heart of Staffordshire. We understand the county, the local market, and what customers here are looking for.",
          "Whether you run a farm shop in Cheadle, a hotel in Stone, a manufacturer in Stafford, or a service business in Newcastle-under-Lyme, we can help you grow.",
        ],
        whyHeading: "Why Work With Us in Staffordshire",
        why: [
          {
            title: "Local to Staffordshire",
            text: "We are not a big city agency. We are based in Stoke-on-Trent, in the middle of Staffordshire. We know the area. We understand the local market. And we can meet you face-to-face, wherever you are in the county.",
          },
          {
            title: "Affordable Prices",
            text: "Staffordshire businesses should not have to pay London prices. We keep our rates fair and honest, so you get professional digital marketing without the big city price tag.",
          },
          {
            title: "All Services in One Place",
            text: "Website, app, design, SEO, Google Ads, Meta Ads, Microsoft Ads — we handle everything. One team. One contact. No hassle.",
          },
          {
            title: "Coverage Across the Whole County",
            text: "From the north of Staffordshire to the south, from the east to the west, we help businesses in every corner of the county get found online.",
          },
        ],
        servicesHeading: "What We Do for Staffordshire Businesses",
        services: [
          {
            title: "Web Development",
            text: "Fast, professional websites that bring in customers from across Staffordshire. Mobile-friendly and built to convert.",
          },
          {
            title: "App Development",
            text: "Custom apps for Staffordshire businesses. Booking systems, customer portals, loyalty apps — built for your needs.",
          },
          {
            title: "Graphic Design",
            text: "Logos, branding, social media graphics, print design. We make your Staffordshire business look the part.",
          },
          {
            title: "SEO",
            text: "Rank higher on Google when people in Staffordshire search for your service. We help you get found in Stafford, Leek, Stone, Newcastle-under-Lyme, and beyond.",
          },
          {
            title: "Google Ads",
            text: "Show your business at the top of Google when local customers search. We manage your budget so every pound works hard.",
          },
          {
            title: "Meta Ads (Facebook & Instagram)",
            text: "Reach the right people across Staffordshire on social media. Real leads, not just likes.",
          },
          {
            title: "Microsoft Ads",
            text: "Reach customers on Bing across the county. Often cheaper clicks and less competition.",
          },
        ],
        helpHeading: "We Work With Businesses Across Staffordshire",
        help: [
          "Tradespeople — plumbers, electricians, builders, joiners",
          "Shops, cafes, and restaurants",
          "Hotels and hospitality businesses",
          "Online stores selling across the UK",
          "Professional services — accountants, solicitors, consultants",
          "Manufacturers and B2B companies",
          "Startups and growing businesses",
        ],
        helpClose: "If your business is in Staffordshire, we can help you grow online.",
        promiseHeading: "Our Promise to Staffordshire Businesses",
        promiseClose: "We want to be the agency Staffordshire businesses trust and recommend.",
        areasHeading: "Serving Businesses Across Staffordshire",
        areas:
          "Stoke-on-Trent | Newcastle-under-Lyme | Stafford | Leek | Stone | Cheadle | Uttoxeter | Kidsgrove | Biddulph | Alsager | Sandbach | Rugeley | Cannock | Lichfield | Tamworth | Burton upon Trent | And surrounding areas",
        ctaHeading: "Let's Grow Your Staffordshire Business Together",
        ctaText:
          "Get a free, no-obligation quote. Tell us what you need, and we will show you how we can help — at a price that works for you.",
      }}
    />
  );
}
