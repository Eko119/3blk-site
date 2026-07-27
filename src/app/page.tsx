import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Capabilities } from "@/components/sections/Capabilities";
import { Studio } from "@/components/sections/Studio";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/primitives/Marquee";
import { MARQUEE_PHRASES } from "@/lib/site";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee phrases={MARQUEE_PHRASES} />
      <Process />
      <Work />
      <Capabilities />
      <Studio />
      <Faq />
      <Contact />
    </>
  );
}
