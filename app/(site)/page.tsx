import { Growth } from "@/components/sections/growth";
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
    </>
  );
}
