"use client";
import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Cpu,
  Zap,
  Target,
  Brain,
  Shield,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Code Generation",
    description:
      "Generate production-ready PLC code from plain language or project files. Our AI understands your requirements and delivers optimized logic for your platform.",
  },
  {
    icon: Rocket,
    title: "Accelerate Development",
    description:
      "Reduce PLC programming time by up to 80%. Focus on innovation while our AI handles the boilerplate and repetitive tasks.",
  },
  {
    icon: Target,
    title: "Multi-Platform Support",
    description:
      "Works with Studio 5000, TIA Portal, Codesys, Beckhoff, and more. Export in OpenXML, L5X, and other industry formats.",
  },
  {
    icon: Zap,
    title: "Modernize Legacy Projects",
    description:
      "Import existing PLC projects, update with AI, and export to new platforms. Breathe new life into legacy automation systems.",
  },
  {
    icon: Shield,
    title: "Data Privacy & Security",
    description:
      "Your files and logic remain private. We never share your data, and you control your project lifecycle.",
  },
  {
    icon: Cpu,
    title: "Standards Compliance",
    description:
      "All code is generated to IEC 61131-3 and industry best practices. Our AI is trained on safety and compliance requirements.",
  },
];

const Features = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        Empower Your Projects with Advanced AI Technology
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature, idx) => (
          <Card
            key={feature.title}
            className={`flex flex-col border rounded-xl overflow-hidden shadow-none transition-all duration-300 ${
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
            <CardHeader>
              <feature.icon />
              <h4 className="!mt-3 text-xl font-bold tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
