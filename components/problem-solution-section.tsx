"use client";
import { motion } from "framer-motion";

export default function ProblemSolutionSection() {
  return (
    <div id="problem-solution" className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6">
      <div className="mb-12 flex flex-col items-center">
        <h2 className="relative text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto mb-2">
          Why PLC Programming Needs to Change
          <span className="block absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-32 h-2 bg-gradient-to-r from-primary/80 to-accent/80 rounded-full animate-underline-glow" />
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-semibold text-xl mb-2">The Problem</h3>
          <ul className="list-disc ml-6 text-muted-foreground">
            {[
              <span key="p1"><span className="font-semibold text-foreground">Industrial automation is the backbone of modern civilization</span>—but PLC programming is stuck in the past.</span>,
              <span key="p2">Manual PLC coding is slow, error-prone, and <span className="font-semibold text-foreground">dangerously hard to scale</span> for today&apos;s complex systems.</span>,
              <span key="p3">Vendor lock-in and proprietary formats <span className="font-semibold text-foreground">shackle innovation</span> and make upgrades risky and expensive.</span>,
              <span key="p4">Legacy projects are <span className="font-semibold text-foreground">fragile, undocumented, and nearly impossible to modernize</span> without heroic effort.</span>,
              <span key="p5">The global shortage of skilled automation engineers is <span className="font-semibold text-foreground">slowing progress in every industry</span>.</span>,
            ].map((content, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="mb-2"
              >
                {content}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">Our Solution</h3>
          <ul className="list-disc ml-6">
            {[
              <span key="s1"><span className="font-semibold text-foreground">AI-powered code generation</span> slashes development time by up to 80% and eliminates human error.</span>,
              <span key="s2">OpenXML-based workflow <span className="font-semibold text-foreground">breaks vendor lock-in</span> and future-proofs your automation.</span>,
              <span key="s3">Instantly modernize legacy projects and <span className="font-semibold text-foreground">harden your codebase</span> for the next generation of industrial challenges.</span>,
              <span key="s4">Empower your team to focus on <span className="font-semibold text-foreground">innovation, safety, and resilience</span>—not boilerplate.</span>,
              <span key="s5">Build automation that is <span className="font-semibold text-foreground">secure, scalable, and ready for tomorrow</span>.</span>,
            ].map((content, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="mb-2"
              >
                {content}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
