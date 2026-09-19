import type { Metadata } from "next";
import { GrowthEngine } from "@/components/sections/growth-engine";
import { Process } from "@/components/sections/process";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesList } from "@/components/sections/services-list";

export const metadata: Metadata = {
  title: "Services | UVT Advertising",
  description:
    "SEO & AI Search, Google & Microsoft Ads, Meta Advertising, Social, Web Design & CRO, and Strategy & Analytics — built around commercial growth.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Process />
      <GrowthEngine />
    </>
  );
}
