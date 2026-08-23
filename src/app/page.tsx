import { About } from "@/components/sections/About";
import { Affiliations } from "@/components/sections/Affiliations";
import { Contact } from "@/components/sections/Contact";
import { FiverrProof } from "@/components/sections/FiverrProof";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Work />
      <Affiliations />
      <FiverrProof />
      <Services />
      <About />
      <Contact />
    </>
  );
}
