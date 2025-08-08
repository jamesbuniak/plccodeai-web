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
              {/* Blue swirl SVG logo */}
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <radialGradient id="swirlGradientFooter" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8" />
                    <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.2" />
                  </radialGradient>
                  <circle cx="32" cy="32" r="28" fill="url(#swirlGradientFooter)" />
                  <path d="M32 12c11 0 20 9 20 20s-9 20-20 20-20-9-20-20" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M32 52c-8-2-14-10-14-20 0-8 6-16 14-18" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
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
                  <Link href="mailto:james@zuyzo.com" className="text-muted-foreground hover:text-foreground">
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
