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
    title: "Continuous Improvement",
    description:
      "Our platform evolves with user feedback and advances in AI, ensuring you always have access to the latest automation innovations and compliance standards.",
  },
  {
    icon: Rocket,
    title: "Transformative Service",
    description:
      "PLCcode.ai is a transformative service that enhances your workflow and productivity. We do not distribute vendor intellectual property; all code generation is original and based on user input and open standards.",
  },
  {
    icon: Brain,
    title: "AI-Powered Code Generation",
    description:
      "Harness advanced neural networks to automatically generate optimized PLC code, reducing development time by up to 80%.",
  },
  {
    icon: Target,
    title: "Multi-Platform Support",
    description:
      "Works with major PLC platforms and structures, but does not copy or distribute proprietary code. All generated code is original and not affiliated with Rockwell, Siemens, or any other vendor.",
  },
  {
    icon: Zap,
    title: "Real-Time Learning",
    description:
      "Our AI continuously learns from industry best practices and your coding patterns to deliver increasingly accurate results.",
  },
  {
    icon: Shield,
    title: "Data-Driven Precision",
    description:
      "Utilize vast datasets for tailored solutions, ensuring your industrial automation projects are both innovative and reliable.",
  },
  {
    icon: Cpu,
    title: "Enhanced Accuracy",
    description:
      "Minimize errors and optimize performance with AI that understands industrial automation requirements and safety standards.",
  },
  {
    icon: Rocket,
    title: "Accelerated Development",
    description:
      "Transform weeks of programming work into hours with intelligent code generation and automated optimization workflows.",
  },
  {
    icon: Shield,
    title: "Legal Compliance",
    description:
      "All code and structures generated are original and do not infringe on intellectual property of Rockwell, Siemens, or other PLC vendors. If you have legal concerns, please contact us for clarification.",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        Empower Your Projects with Advanced AI Technology
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none"
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
            {/* Removed image placeholder */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
