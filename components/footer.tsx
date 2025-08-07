import { Separator } from "@/components/ui/separator";
import {
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-screen-xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo and Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold tracking-tight">PLCcode.ai</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Revolutionizing industrial automation with AI-powered PLC programming.
              Transform your development workflow with intelligent code generation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h6 className="font-semibold text-foreground mb-4">Product</h6>
              <ul className="space-y-3">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#waitlist" className="text-muted-foreground hover:text-foreground">
                    Join Waitlist
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold text-foreground mb-4">Company</h6>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="mailto:admin@plccode.ai" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="https://www.plccode.ai" target="_blank">
            PLCcode.ai
          </Link>
          . All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="#" target="_blank">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <YoutubeIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <GithubIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
