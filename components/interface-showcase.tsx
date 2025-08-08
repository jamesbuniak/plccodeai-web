import { Cpu, Zap, Target, Brain, Shield, Rocket } from "lucide-react";

const interfaceFeatures = [
  {
    name: "Chat-driven workflow",
    description:
      "Interact with AI in natural language to generate, review, and optimize PLC code.",
    icon: Brain,
  },
  {
    name: "Modular design",
    description:
      "Easily manage and reuse code blocks for scalable automation projects.",
    icon: Cpu,
  },
  {
    name: "Multi-platform support",
    description:
      "Program for Studio 5000, TIA Portal, Codesys, and more—all in one place.",
    icon: Target,
  },
  {
    name: "AI code review",
    description:
      "Catch problems before they become an issue with intelligent code analysis and suggestions.",
    icon: Zap,
  },
];

const InterfaceShowcase = () => {
  return (
    <section className="overflow-hidden bg-black py-24 sm:py-32 flex items-center min-h-[80vh]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-center justify-center">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pt-4 lg:pr-8 flex flex-col justify-center h-full">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-blue-400">AI Interface Highlights</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Modern, Unified, and Powerful
              </p>
              <p className="mt-6 text-lg text-gray-200">
                Experience a next-generation interface for PLC programming, powered by advanced AI and designed for productivity.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-300 lg:max-w-none">
                {interfaceFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-blue-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="PLCcode.ai Interface Screenshot"
            src="/plccodeaiexample.png"
            width={600}
            height={400}
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-blue-400/20 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </section>
  );
};

export default InterfaceShowcase;
