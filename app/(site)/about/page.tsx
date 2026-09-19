import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutValues } from "@/components/sections/about-values";
import { Engineered } from "@/components/sections/engineered";
import { GrowthEngine } from "@/components/sections/growth-engine";
import { Process } from "@/components/sections/process";

export const metadata: Metadata = {
  title: "About Us | UVT Advertising",
  description:
    "UVT is a UK-founded performance marketing agency — senior UK leadership, specialist delivery, and commercial outcomes that compound.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutValues />
    </>
  );
}
