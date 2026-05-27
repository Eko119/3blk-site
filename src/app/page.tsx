import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </>
  );
}
