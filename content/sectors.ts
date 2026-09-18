import type { Sector } from "@/types";

export const sectorHighlights = [
  "Revenue-focused KPIs set from day one",
  "Sector-specific keyword and audience targeting",
  "Compliant creative and messaging",
  "Benchmarking against sector competitors",
  "Tailored reporting cadence and metrics",
] as const;

export const sectors: Sector[] = [
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: "🛍️",
    title: "E-commerce",
    description:
      "Scaling DTC and multi-brand retailers through channel-specific strategies that drive profitable growth — not just top-line revenue.",
  },
  {
    id: "professional-services",
    label: "Professional Services",
    icon: "⚖️",
    title: "Professional Services",
    description:
      "Winning high-intent enquiries for law, accounting, and consultancy firms with positioning and campaigns that respect trust and authority.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "🏥",
    title: "Healthcare",
    description:
      "Compliant patient acquisition and brand growth for clinics, providers, and health brands — built around regulation and real outcomes.",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    icon: "🏢",
    title: "Real Estate",
    description:
      "Generating qualified viewings and investor leads for agencies and developers with localisation, creative, and conversion-ready funnels.",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    icon: "🏨",
    title: "Hospitality",
    description:
      "Driving direct bookings and ancillary revenue for hotels, restaurants, and experiences through seasonal, demand-aware campaigns.",
  },
  {
    id: "b2b-saas",
    label: "B2B & SaaS",
    icon: "💼",
    title: "B2B & SaaS",
    description:
      "Building predictable pipeline for B2B and SaaS teams with ICP-led targeting, content, and performance channels that compound.",
  },
];
