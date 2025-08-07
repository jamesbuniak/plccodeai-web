import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "What is PLCcode.ai?",
    answer:
      "PLCcode.ai is an AI-powered assistant that generates high-quality PLC code for multiple platforms. Whether you use Siemens, Rockwell, Beckhoff, CODESYS, or others, our system can create logic from plain-language descriptions, saving you hours of development time.",
  },
  {
    question: "How does it support multiple PLC brands?",
    answer:
      "We use an Open XML-based intermediate format (including PLCopen XML and platform-specific schemas like Rockwell L5X) to generate code for multiple PLC platforms. This means you can design logic once and export it to the formats your hardware supports.",
  },
  {
    question: "Which PLC platforms are supported?",
    answer:
      "At launch, PLCcode.ai supports: CODESYS & IEC 61131-3 platforms (PLCopen XML export), Beckhoff TwinCAT, Rockwell Studio 5000 / Logix 5000 (L5X export), and Siemens TIA Portal (via Openness scripting). We're actively adding more platforms based on user demand.",
  },
  {
    question: "What languages can it generate?",
    answer:
      "Our AI can create: Ladder Diagram (LD), Structured Text (ST), Function Block Diagram (FBD), and platform-specific source code (e.g., SCL for Siemens, AOI routines for Rockwell).",
  },
  {
    question: "Can I import my existing PLC programs?",
    answer:
      "Yes. You can upload PLCopen XML files and Rockwell L5X files. Our importer will parse them into an editable intermediate format so you can update or enhance them with AI before re-exporting.",
  },
  {
    question: "Is the generated code production-ready?",
    answer:
      "We follow IEC standards and common industry best practices, but every project has unique requirements. We recommend reviewing all generated logic before deploying it to production systems.",
  },
  {
    question: "Do I need programming experience to use PLCcode.ai?",
    answer:
      "No, but it helps. You can describe your control sequence in plain language, and the AI will generate PLC logic. If you're a seasoned engineer, you can fine-tune the logic, tag names, and data structures to match your company's standards.",
  },
  {
    question: "How is my data handled?",
    answer:
      "Your uploaded files and generated code remain private to your account. We do not share your projects with third parties, and you can delete your data at any time.",
  },
  {
    question: "What does it cost?",
    answer:
      "We offer: Free Plan – Try with basic exports and limited complexity, Pro Plan – Unlimited exports, advanced platforms, and complex logic generation, Enterprise Plan – White-label, API access, and on-premise deployment.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
        Frequently Asked Questions
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Everything you need to know about PLCcode.ai and how it transforms PLC programming.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none !mt-0 !mb-4 break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
