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
  {
    id: "real-estate-agency",
    category: "REAL ESTATE",
    client: "Regional Property Group",
    challenge:
      "High enquiry volume but poor viewing conversion. Budget was spread thin across generic brand and location keywords.",
    solution:
      "Restructured search and Meta around high-intent listings, built project-level landing pages, and wired CRM lead scoring.",
    results: [
      "+94% Qualified Viewings",
      "−31% Cost Per Lead",
      "2.4x Listing Enquiries",
    ],
    tone: "accent-end",
    slug: "regional-property-group",
  },
  {
    id: "hospitality-hotels",
    category: "HOSPITALITY",
    client: "Boutique Hotel Collective",
    challenge:
      "Heavy OTA dependency and weak direct booking share. Seasonal demand was reactive rather than planned.",
    solution:
      "Direct-booking funnel rebuild, seasonal paid strategy, and retargeting journeys tied to stay purpose and ancillary revenue.",
    results: [
      "+56% Direct Bookings",
      "−18% OTA Share",
      "+£180K Ancillary Revenue",
    ],
    tone: "accent",
    slug: "boutique-hotel-collective",
  },
  {
    id: "professional-services-law",
    category: "PROFESSIONAL SERVICES",
    client: "National Law Firm",
    challenge:
      "Practice areas competing for the same paid budget. Brand search was strong but new-matter growth was flat.",
    solution:
      "Practice-led campaign structure, authority content hubs, and compliant creative with enquiry quality scoring for partners.",
    results: [
      "+128% Qualified Enquiries",
      "−35% Cost Per Matter",
      "Top 5 Practice Rankings",
    ],
    tone: "accent-end",
    slug: "national-law-firm",
  },
];

export const caseStudyFilters = [
  "ALL",
  "E-COMMERCE",
  "B2B SAAS",
  "HEALTHCARE",
  "REAL ESTATE",
  "HOSPITALITY",
  "PROFESSIONAL SERVICES",
] as const;
