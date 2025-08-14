"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import FluidAnimation from "./fluid-animation";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-center gap-y-8 lg:gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl w-full flex flex-col">
          <Badge className="rounded-full py-1 border-none max-w-fit inline-block">
            AI-Powered PLC Code Generation
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Automate Industrial Logic. <br className="hidden xs:inline" /> Accelerate Innovation.
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Instantly generate, modernize, and optimize PLC code for Rockwell, Siemens, Codesys, and more. Upload your project or describe your logic—our AI delivers production-ready code in minutes, not weeks. <span className="font-semibold">No vendor lock-in. No manual drudgery. Just results.</span>
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
          {/* Animation below buttons on mobile */}
          <div className="flex lg:hidden w-full items-center justify-center mt-10">
            <Image
              src="/blueball.png"
              alt="Blue Ball Animation"
              width={400}
              height={400}
              className="w-full max-w-md aspect-square mx-auto"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        {/* Desktop animation position */}
        <div className="hidden lg:flex relative w-full max-w-lg xl:max-w-xl aspect-square mx-auto items-center justify-center">
          <div
            style={{
              opacity: 1,
              animation: 'fadeInFluid 3.5s ease-in',
            }}
            className="w-full h-full"
          >
            <FluidAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
