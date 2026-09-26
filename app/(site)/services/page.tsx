import type { Metadata } from "next";
import { ServicesPageView } from "@/components/sections/services-page-view";

export const metadata: Metadata = {
  title: "Services | UVT Advertising",
  description:
    "Web development, app development, graphic design, SEO, Google Ads, Meta Ads, and Microsoft Ads for Staffordshire businesses.",
};

export default function ServicesPage() {
  return <ServicesPageView />;
}
