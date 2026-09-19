import type { Metadata } from "next";
import { GrowthEngine } from "@/components/sections/growth-engine";
import { InsightsGrid } from "@/components/sections/insights-grid";
import { InsightsHero } from "@/components/sections/insights-hero";

export const metadata: Metadata = {
  title: "Insights | UVT Advertising",
  description:
    "Practical perspectives on SEO, paid media, and performance strategy from the UVT team.",
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsGrid />
    </>
  );
}
