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
        question: "What is PLCopen XML (IEC 61131-10)?",
        answer:
            "A vendor-neutral XML format for PLC programs that preserves structure, comments, and metadata.",
    },
    {
        question: "Is the output production-ready?",
        answer:
            "Output is vendor-ready but must be reviewed by a qualified engineer before production use.",
    },
    {
        question: "Can you translate across vendors?",
        answer:
            "Yes, through PLCopen XML normalization and mapping templates per platform.",
    },
    {
        question: "Do you copy vendor code?",
        answer:
            "No, transformations are generated from your inputs and open standards.",
    },
    {
        question: "On-premises option?",
        answer:
            "Planned — contact us for pilot opportunities.",
    },
    {
        question: "How is my data handled?",
        answer:
            "Your files and generated code remain private to your account. We never share your projects, and you can delete your data at any time.",
    },
    {
        question: "Which PLC platforms are supported?",
        answer:
            "We support major platforms including Rockwell, Siemens, Beckhoff, CODESYS, and any system compatible with PLCopen XML.",
    },
    {
        question: "Does PLCcode.ai support Git or version control?",
        answer:
            "Yes! PLCcode.ai will offer Git integration for your PLC projects. You’ll be able to connect your GitHub, GitLab, or Bitbucket account to version, backup, and collaborate on your automation code. This makes it easy to track changes, roll back, and work with your team.",
    },
    {
        question: "Can PLCcode.ai help me convert code between PLC platforms?",
        answer:
            "Yes! PLCcode.ai is designed to help you convert automation logic between supported PLC platforms. Upload your project or describe your logic, select your target platform, and our AI will generate compatible code—making cross-vendor migrations and upgrades much easier.",
    },
    {
        question: "What does it cost and what support is available?",
        answer:
            "PLCcode.ai offers three options: Free Forever (basic access), Supporter Pass ($999 one-time for 1 year unlimited access after launch), and Founders Lifetime ($1,999 one-time, lifetime access, only 20 spots). All paid plans include priority support and exclusive benefits. See our pricing page for full details.",
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
