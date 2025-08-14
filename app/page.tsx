




"use client";
import { useState, useRef } from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
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


type SectionWithBlurProps = {
  sectionKey: string;
  activeSection: string | null;
  setActiveSection: (key: string | null) => void;
  children: React.ReactNode;
};

function SectionWithBlur(props: SectionWithBlurProps) {
  const { sectionKey, activeSection, setActiveSection, children } = props;
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);
  const handleMouseEnter = () => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    setActiveSection(sectionKey);
  };
  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => setActiveSection(null), 200) as NodeJS.Timeout;
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-300 my-8 ${activeSection && activeSection !== sectionKey ? 'blur-sm opacity-60' : ''}`}
    >
      {children}

    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmail(true);
  };
  const handleClose = () => setShowEmail(false);
  const sectionList = [
    { key: "hero", content: <Hero /> },
    { key: "features", content: <Features /> },
    { key: "howitworks", content: <HowItWorksCards /> },
    { key: "problem", content: <ProblemSolutionClientWrapper /> },
    { key: "security", content: (
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
    ) },
    { key: "pricing", content: <Pricing /> },
    { key: "faq", content: <FAQ /> },
    { key: "waitlist", content: <WaitlistForm /> },
    { key: "about", content: (
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
            <button
              className="inline-block rounded-full bg-primary text-primary-foreground px-6 py-2 font-medium hover:bg-primary/80 transition mt-2"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
        {showEmail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-background rounded-xl shadow-lg p-8 w-[90vw] max-w-[400px] aspect-[4/3] flex flex-col justify-center items-center text-center relative">
              <button
                className="absolute top-2 right-3 text-lg text-muted-foreground hover:text-foreground"
                onClick={handleClose}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="mb-3 text-base text-muted-foreground">
                Need to reach out about partnership, support, feedback, or anything else? Send us an email and our team will get back to you as soon as possible. We love hearing from users and collaborators—let us know how we can help!
              </p>
              <div className="mb-2 font-medium">Email:</div>
              <a href="mailto:info@zuyzo.com" className="text-primary font-medium underline break-all">info@zuyzo.com</a>
            </div>
          </div>
        )}
      </div>
    ) },
  ];
  return (
    <>
      <Navbar />
      {sectionList.map(({ key, content }) => {
        if (typeof content === 'undefined') {
          console.error('Section content is undefined for key:', key);
          return null;
        }
        return (
          <SectionWithBlur
            key={key}
            sectionKey={key}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            <SectionFadeIn>{content}</SectionFadeIn>
          </SectionWithBlur>
        );
      })}
      <Footer />
    </>
  );
}
