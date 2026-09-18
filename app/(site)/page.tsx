import { Growth } from "@/components/sections/growth";
import { Hero } from "@/components/sections/hero";
import { Outcomes } from "@/components/sections/outcomes";
import { Results } from "@/components/sections/results";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Results />
      <Outcomes />
      <Growth />
    </>
  );
}
