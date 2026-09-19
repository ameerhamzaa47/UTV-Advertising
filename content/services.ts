import type { Service } from "@/types";

export type ServiceDetail = Service & {
  highlights: string[];
};

export const services: ServiceDetail[] = [
  {
    id: "seo-ai-search",
    title: "SEO & AI Search",
    description:
      "Future-proof organic growth through technical SEO, content strategy, and AI-era optimisation — capturing intent before your competitors do.",
    slug: "seo-ai-search",
    tags: ["Technical Audit", "AI Overviews", "Link Building"],
    icon: "🔍",
    highlights: [
      "Technical SEO audits and site health remediation",
      "Content strategy mapped to commercial intent",
      "AI Overview and search-era visibility planning",
      "Authority building and competitive gap analysis",
    ],
  },
  {
    id: "google-microsoft-ads",
    title: "Google & Microsoft Ads",
    description:
      "Precision-targeted paid search campaigns engineered for revenue, not clicks. Every pound tied to measurable pipeline contribution.",
    slug: "google-microsoft-ads",
    tags: ["Search Ads", "Shopping", "Performance Max"],
    icon: "🎯",
    highlights: [
      "Account rebuilds focused on CPA and ROAS",
      "Search, Shopping, and Performance Max structure",
      "Query and audience refinement that protects margin",
      "Landing page alignment for conversion quality",
    ],
  },
  {
    id: "meta-advertising",
    title: "Meta Advertising",
    description:
      "Scroll-stopping creative paired with audience science to build brand demand and drive cost-efficient acquisition across Facebook and Instagram.",
    slug: "meta-advertising",
    tags: ["Prospecting", "Retargeting", "DPA"],
    icon: "📱",
    highlights: [
      "Prospecting and retargeting funnel design",
      "Creative testing frameworks that compound",
      "Dynamic product ads for e-commerce scale",
      "Audience strategy tied to commercial stages",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Organic social strategy built for authority, not aesthetics — content that builds trust and converts followers into leads.",
    slug: "social-media-marketing",
    tags: ["LinkedIn", "Instagram", "Content Strategy"],
    icon: "📣",
    highlights: [
      "Channel strategy for LinkedIn and Instagram",
      "Content systems that support pipeline goals",
      "Thought-leadership and brand authority plays",
      "Organic-to-paid amplification where it counts",
    ],
  },
  {
    id: "web-design-cro",
    title: "Web Design & CRO",
    description:
      "High-converting landing pages and websites built around user behaviour data, not design trends. Tested, iterated, improved.",
    slug: "web-design-cro",
    tags: ["CRO Audits", "A/B Testing", "Landing Pages"],
    icon: "💻",
    highlights: [
      "CRO audits grounded in behaviour data",
      "Landing pages built for campaign intent",
      "A/B testing roadmaps with clear hypotheses",
      "UX fixes that lift conversion and lead quality",
    ],
  },
  {
    id: "strategy-analytics",
    title: "Strategy & Analytics",
    description:
      "Cross-channel marketing strategy underpinned by robust data infrastructure — so every decision is driven by insight, not instinct.",
    slug: "strategy-analytics",
    tags: ["GA4", "Dashboards", "Attribution"],
    icon: "📊",
    highlights: [
      "GA4 setup, events, and conversion tracking",
      "Dashboards that map to business KPIs",
      "Attribution models you can act on",
      "Cross-channel strategy and budget allocation",
    ],
  },
];
