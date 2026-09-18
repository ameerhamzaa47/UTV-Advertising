import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "ecommerce-fashion",
    category: "E-COMMERCE",
    client: "UK Fashion Retailer",
    challenge:
      "Traffic had plateaued after a site migration. Organic revenue was declining despite rising ad spend.",
    solution:
      "Full technical SEO overhaul, category page restructure, and a content-led strategy targeting commercial intent keywords.",
    results: [
      "+187% Organic Traffic",
      "+£240K Monthly Revenue",
      "−22% Paid Dependency",
    ],
    tone: "accent",
    slug: "uk-fashion-retailer",
  },
  {
    id: "b2b-saas-hr",
    category: "B2B SAAS",
    client: "HR Tech Platform",
    challenge:
      "Cost per lead from Google Ads had risen 60% in 12 months. Lead quality was poor and sales cycles too long.",
    solution:
      "Rebuilt campaign architecture around job title and intent signals, introduced LinkedIn retargeting, and tightened landing page CRO.",
    results: [
      "−42% Cost Per Lead",
      "+3.1x Pipeline Growth",
      "38% Faster Sales Cycle",
    ],
    tone: "accent-end",
    slug: "hr-tech-platform",
  },
  {
    id: "healthcare-medical",
    category: "HEALTHCARE",
    client: "Private Medical Group",
    challenge:
      "Multiple clinic locations struggling to generate consistent private patient enquiries through digital channels.",
    solution:
      "Geo-targeted Meta and Google campaigns with location-specific landing pages, plus schema-enhanced local SEO strategy.",
    results: ["3.8x ROAS", "+210% Enquiries", "Top 3 Local Rankings"],
    tone: "accent",
    slug: "private-medical-group",
  },
];
