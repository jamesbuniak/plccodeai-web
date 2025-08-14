"use client";


import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { useState } from "react";

const Navbar = () => {
  const [showEmail, setShowEmail] = useState(false);
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmail(true);
  };
  const handleClose = () => setShowEmail(false);
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex"
            onClick={handleContactClick}
          >
            Contact
          </Button>
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
          <Button
            className="hidden xs:inline-flex"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
