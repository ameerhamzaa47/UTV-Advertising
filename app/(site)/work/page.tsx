import type { Metadata } from "next";
import { Clients } from "@/components/sections/clients";
import { GrowthEngine } from "@/components/sections/growth-engine";
import { WorkCases } from "@/components/sections/work-cases";
import { WorkHero } from "@/components/sections/work-hero";

export const metadata: Metadata = {
  title: "Case Studies | UVT Advertising",
  description:
    "Real growth outcomes across e-commerce, B2B SaaS, healthcare, real estate, hospitality, and professional services.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkCases />
      <Clients />
    </>
  );
}
