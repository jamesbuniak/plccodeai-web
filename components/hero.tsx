"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import FluidAnimation from "./fluid-animation";

const Hero = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
        <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-center gap-y-8 lg:gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
          <div className="max-w-xl w-full flex flex-col">
            <Badge className="rounded-full py-1 border-none max-w-fit inline-block">
              AI-Powered PLC Code Generation
            </Badge>
            <h1 className="mt-6 max-w-[28ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
              Generate, Convert, and Modernize PLC Code — in Minutes, Not Weeks
            </h1>
            <p className="mt-6 max-w-[60ch] xs:text-lg">
              AI-powered PLC development for Rockwell, Siemens, CODESYS, Beckhoff, and more. Import existing logic, translate across vendors, and export in native formats like L5X and PLCopen XML — without sacrificing quality or compliance.
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
      {/* FluidAnimation in its own section for mobile only */}
      <section className="lg:hidden w-full flex items-center justify-center py-10">
        <div
          className="mx-auto w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px]"
          style={{
            opacity: 1,
            animation: 'fadeInFluid 3.5s ease-in',
          }}
        >
          <FluidAnimation />
        </div>
      </section>
    </>
  );
};

export default Hero;
