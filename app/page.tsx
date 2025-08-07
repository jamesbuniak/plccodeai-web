import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Countdown from "@/components/countdown";
import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Pricing />
      <Countdown />
      <WaitlistForm />
      <Footer />
    </>
  );
}
