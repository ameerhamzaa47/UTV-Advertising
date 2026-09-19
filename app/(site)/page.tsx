import { Clients } from "@/components/sections/clients";
import { Engineered } from "@/components/sections/engineered";
import { Faqs } from "@/components/sections/faqs";
import { Growth } from "@/components/sections/growth";
import { GrowthEngine } from "@/components/sections/growth-engine";
import { Hero } from "@/components/sections/hero";
import { Outcomes } from "@/components/sections/outcomes";
import { Process } from "@/components/sections/process";
import { Results } from "@/components/sections/results";
import { Sectors } from "@/components/sections/sectors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Results />
      <Outcomes />
      <Growth />
      <Process />
      <Sectors />
      <Clients />
      <Engineered />
      <Faqs />
      <GrowthEngine />
    </>
  );
}
