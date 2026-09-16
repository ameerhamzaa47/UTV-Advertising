import { Hero } from "@/components/sections/hero";
import { PerformanceServices } from "@/components/sections/performance-services";
import { Results } from "@/components/sections/results";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Results />
      <PerformanceServices />
    </>
  );
}
