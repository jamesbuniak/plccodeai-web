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
        question: "Can PLCcode.ai help with legacy systems?",
        answer:
            "Yes, PLCcode.ai can assist with legacy PLC systems by analyzing OpenXML-formatted files and generating compatible code extensions, helping modernize and optimize older automation projects.",
    },
    {
        question: "How does PLCcode.ai stay up to date?",
        answer:
            "PLCcode.ai continuously evolves based on user feedback and advances in AI technology. We regularly update our platform to ensure you benefit from the latest automation innovations and compliance standards.",
    },
    {
        question: "How does PLCcode.ai work with my files?",
        answer:
            "You upload an OpenXML-formatted file as the basis for your project. The system analyzes the file structure, generates code for the relevant sections, and exports your project in the same format. We do not create new schemas—your original structure is preserved and extended with AI-generated code.",
    },
    {
        question: "What PLC platforms does PLCcode.ai support?",
        answer:
            "We currently support Studio 5000, TIA Portal, Codesys, and other major PLC programming platforms. Our AI is trained on industry standards for each platform.",
    },
    {
        question: "How accurate is the AI-generated PLC code?",
        answer:
            "Our AI generates highly accurate, optimized code based on industry best practices. The system continuously learns and improves with each project to maintain the highest standards.",
    },
    {
        question: "Is PLCcode.ai suitable for safety-critical applications?",
        answer:
            "Yes, our AI is trained on safety standards and best practices for industrial automation. However, we recommend thorough testing and validation for all safety-critical applications.",
    },
    {
        question: "When will PLCcode.ai be available?",
        answer:
            "We're currently in development and accepting waitlist registrations. Join our waitlist to be among the first to access PLCcode.ai when it launches.",
    },
    {
        question: "What makes PLCcode.ai different from traditional PLC programming?",
        answer:
            "PLCcode.ai leverages advanced AI to automate code generation, reduce development time by up to 80%, and minimize human errors while maintaining industry standards.",
    },
    {
        question: "How can I stay updated on PLCcode.ai progress?",
        answer:
            "Join our waitlist to receive regular updates on development progress, feature announcements, and early access opportunities for PLCcode.ai.",
    },
];

const FAQ = () => {
    return (
        <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
            <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
                Frequently Asked Questions
            </h2>
            <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
                Quick answers to common questions about PLCcode.ai and our services.
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
