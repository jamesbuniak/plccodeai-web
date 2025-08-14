import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { useState } from "react";
import PrivacyPolicyPopup from "@/components/privacy-policy-popup";
import LegalPopup from "@/components/legal-popup";

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  // Removed unused handleContactClick
  const handleClose = () => setShowEmail(false);
  return (
    <>
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
                    <Link href="#waitlist" className="text-muted-foreground hover:text-foreground">
                      Join Waitlist
                    </Link>
                  </li>
                  <li>
                    <button
                      className="text-muted-foreground hover:text-foreground focus:outline-none"
                      onClick={() => setShowPrivacy(true)}
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      className="text-muted-foreground hover:text-foreground focus:outline-none"
                      onClick={() => setShowLegal(true)}
                    >
                      Legal Notice
                    </button>
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
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
          {/* Copyright */}
          <span className="text-muted-foreground text-center xs:text-start">
            &copy; 2025 <Link href="https://www.zuyzo.com" target="_blank">Zuyzo</Link>. All rights reserved.
          </span>
          {/* Social links removed as requested */}
        </div>
      </footer>
      {/* Popups rendered outside footer for valid JSX */}
      {showEmail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-background rounded-xl shadow-lg p-8 max-w-xs w-full text-center relative">
            <button
              className="absolute top-2 right-3 text-lg text-muted-foreground hover:text-foreground"
              onClick={handleClose}
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-3 text-base text-muted-foreground">
              Need to reach out about partnership, support, feedback, or anything else? Send us an email and our team will get back to you as soon as possible. We love hearing from users and collaborators—let us know how we can help!
            </p>
            <div className="mb-2 font-medium">Email:</div>
            <a href="mailto:info@zuyzo.com" className="text-primary font-medium underline break-all">info@zuyzo.com</a>
          </div>
        </div>
      )}
      {showPrivacy && (
        <PrivacyPolicyPopup open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      )}
      {showLegal && (
        <LegalPopup open={showLegal} onClose={() => setShowLegal(false)} />
      )}
    </>
  );
};

export default Footer;
