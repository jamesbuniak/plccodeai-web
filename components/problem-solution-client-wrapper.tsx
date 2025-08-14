"use client";
import dynamic from "next/dynamic";
const DynamicProblemSolutionSection = dynamic(() => import("@/components/problem-solution-section"), { ssr: false });

export default function ProblemSolutionClientWrapper() {
  return <DynamicProblemSolutionSection />;
}
