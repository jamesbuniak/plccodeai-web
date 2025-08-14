




"use client";
import { useState } from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import FAQ from "@/components/faq-new";
import WaitlistForm from "@/components/waitlist-form";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import SectionFadeIn from "@/components/section-fade-in";
import ProblemSolutionClientWrapper from "@/components/problem-solution-client-wrapper";
import SupportUsButton from "@/components/support-us-button";


function HowItWorksCards() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const steps = [
    {
      title: "Upload or Describe",
      desc: "Start by uploading your PLC project file (OpenXML, L5X, etc.) or describing your automation logic in plain language. Our AI parses your input and prepares it for code generation.",
    },
    {
      title: "AI Code Generation",
      desc: "Our advanced AI engine analyzes your requirements and generates optimized, standards-compliant PLC code for your chosen platform—Studio 5000, TIA Portal, Codesys, and more.",
    },
    {
      title: "Export & Integrate",
      desc: "Download your new or updated PLC project in the original format, ready to import into your engineering environment. Iterate, refine, and deploy with confidence.",
    },
  ];
  return (
    <div id="how-it-works" className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto mb-10">How PLCcode.ai Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className={`bg-accent/60 rounded-2xl shadow-sm p-7 flex flex-col items-start h-full transition-all duration-300 ${
              hoveredIdx !== null && hoveredIdx !== idx
                ? "blur-sm opacity-60"
                : hoveredIdx === idx
                ? "scale-105 z-10"
                : ""
            }`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{ cursor: "pointer" }}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-4 text-lg">{idx + 1}</div>
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-base text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



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
      {/* How it works section */}
      <SectionFadeIn>
        <HowItWorksCards />
      </SectionFadeIn>
      {/* Problem/Solution section */}
      <SectionFadeIn>
        <ProblemSolutionClientWrapper />
      </SectionFadeIn>
      {/* Security & Compliance section */}
      <SectionFadeIn>
        <div id="security" className="max-w-screen-xl mx-auto w-full py-16 xs:py-28 px-6">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto mb-10">Security & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h3 className="font-semibold text-xl mb-3">Your Data, Your Control</h3>
              <p className="text-base text-muted-foreground mb-2">All files and projects remain private to your account. We never share your data, and you can delete your projects at any time.</p>
              <ul className="list-disc ml-6 text-muted-foreground text-sm">
                <li>Data is encrypted in transit and at rest</li>
                <li>Only you can access your uploaded files and generated code</li>
                <li>Delete your data at any time from your dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3">Standards-Driven</h3>
              <p className="text-base text-muted-foreground mb-2">We follow IEC 61131-3 and industry best practices for all code generation. Our AI is trained on safety standards and compliance requirements for industrial automation.</p>
              <ul className="list-disc ml-6 text-muted-foreground text-sm">
                <li>All code is generated to IEC and industry standards</li>
                <li>Regular security audits and compliance reviews</li>
                <li>Continuous improvement based on user and industry feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionFadeIn>
      {/* Pricing section */}
      <SectionFadeIn>
        <Pricing />
      </SectionFadeIn>
      {/* Testimonials section */}
      <SectionFadeIn>
        <Testimonial />
      </SectionFadeIn>
      {/* FAQ section */}
      <SectionFadeIn>
        <FAQ />
      </SectionFadeIn>
      {/* Waitlist section */}
      <SectionFadeIn>
        <WaitlistForm />
      </SectionFadeIn>
      {/* About section */}
      <SectionFadeIn>
        <div id="about" className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto mb-8">About PLCcode.ai</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground text-center mb-8">
            PLCcode.ai is built by automation engineers for automation engineers. Our mission is to make industrial automation faster, safer, and more accessible through the power of AI. We believe in open standards, user privacy, and continuous improvement. Join us as we shape the future of PLC programming.
          </p>
          <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-accent/60 rounded-xl px-6 py-7 flex flex-col h-full justify-center items-center text-center">
              <h3 className="text-xl font-semibold mb-2">Support Us</h3>
              <p className="mb-3 text-base text-muted-foreground">If you like what we&apos;re building and want to help us grow, you can support our mission directly.</p>
              <SupportUsButton />
            </div>
            <div className="bg-accent/60 rounded-xl px-6 py-7 flex flex-col h-full justify-center items-center text-center">
              <h3 className="text-xl font-semibold mb-2">Partner with Us</h3>
              <p className="mb-3 text-base text-muted-foreground">We&apos;re always looking for passionate engineers, early adopters, and industry partners. If you want to collaborate, contribute, or just share your ideas, we&apos;d love to hear from you.</p>
              <a href="mailto:james@zuyzo.com" className="inline-block rounded-full bg-primary text-primary-foreground px-6 py-2 font-medium hover:bg-primary/80 transition mt-2">Contact Us</a>
            </div>
          </div>
        </div>
      </SectionFadeIn>
      <Footer />
    </>
  );
}
