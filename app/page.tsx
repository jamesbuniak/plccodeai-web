
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Countdown from "@/components/countdown";
import WaitlistForm from "@/components/waitlist-form";
import InterfaceShowcase from "@/components/interface-showcase";

import SectionFadeIn from "@/components/section-fade-in";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionFadeIn>
        <Hero />
      </SectionFadeIn>
      <SectionFadeIn>
        <Features />
      </SectionFadeIn>
      <SectionFadeIn>
        <InterfaceShowcase />
      </SectionFadeIn>
      <SectionFadeIn>
        <FAQ />
      </SectionFadeIn>
      <SectionFadeIn>
        <Pricing />
      </SectionFadeIn>
      <SectionFadeIn>
        <Countdown />
      </SectionFadeIn>
      <SectionFadeIn>
        <WaitlistForm />
      </SectionFadeIn>
      <Footer />
    </>
  );
}
