import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { useState } from "react";

export const NavigationSheet = () => {
  const [showEmail, setShowEmail] = useState(false);
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmail(true);
  };
  const handleClose = () => setShowEmail(false);
  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmail(false);
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Drawer</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />

        <div className="mt-8 space-y-4">
          <Button variant="outline" className="w-full sm:hidden" onClick={handleWaitlistClick}>
            Join Waitlist
          </Button>
          <Button className="w-full xs:hidden" onClick={handleContactClick}>
            Contact
          </Button>
        </div>
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
      </SheetContent>
    </Sheet>
  );
};

