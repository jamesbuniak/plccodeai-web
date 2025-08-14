"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck, Star } from "lucide-react";

const plans = [
  {
    id: "donate",
    name: "Support Our Mission",
    price: 0,
    period: "donation",
    tagline: "Help us build the future of PLC programming. Any amount helps!",
    badge: null,
    label: "Open Donation",
    features: [
      "Support open industrial automation",
      "Fund development and infrastructure",
      "Get project updates and early access news",
      "Beta access for supporters",
    ],
    note: "Your donation directly supports the development and growth of PLCcode.ai. All supporters will receive beta access and project updates. Thank you for helping us make automation better for everyone!",
    buttonText: null, // Will use custom button
    buttonVariant: "outline" as const,
    buttonHref: null,
    isPopular: false,
  },
  {
    id: "supporter",
    name: "Supporter Pass (1 Year)",
    price: 999,
    period: "one-time",
    tagline: "Unlock everything for a full year after launch.",
    badge: "Best Value",
    label: "Most Popular",
    features: [
      "Unlimited access for 1 year after launch",
      "All platforms & features included",
      "Priority email support",
      "Recognition as a founding supporter",
      "Direct feedback channel to the team",
    ],
    note: "Your one-time purchase helps us build and launch PLCcode.ai. You'll receive a full year of unlimited access after we go live. Cancel anytime before renewal.",
    buttonText: "Support for $999",
    buttonVariant: "default" as const,
    buttonHref: "#support",
    isPopular: true,
    stripePriceId: "price_1Rw6clLUmXA13VZnqjtm4G9S",
  },
  {
    id: "founder",
    name: "Founders Lifetime (Limited)",
    price: 1999,
    period: "one-time",
    tagline: "Lifetime access. Shape the roadmap. Only 20 spots!",
    badge: "Founders Edition",
    label: "Limited: 20 spots",
    features: [
      "Unlimited lifetime access for one user",
      "All platforms & features, forever",
      "Direct input on product roadmap",
      "Private calls with the team",
      "Recognition on our website",
      "VIP support & roadmap influence",
    ],
    note: "Only 20 Founders spots available. This is a one-time opportunity for lifetime access and a direct line to influence the future of PLCcode.ai.",
    buttonText: "Become a Founder ($1,999)",
    buttonVariant: "secondary" as const,
    buttonHref: "#founder",
    isPopular: false,
    stripePriceId: "price_1Rw6ftLUmXA13VZn8EfGUigD",
  },
];

const Pricing = () => {

  return (
    <div id="pricing" className="max-w-screen-xl mx-auto py-12 xs:py-20 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Support PLCcode.ai — Early Access & Lifetime Deals
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          PLCcode.ai is in pre-release. Your support funds development, API usage, and infrastructure so we can launch faster and build the best AI-powered PLC platform. Choose your path below — lifetime deals and early access are limited!
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={cn(
              "relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
              {
                "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 md:scale-110":
                  plan.isPopular,
                "hover:shadow-primary/10": plan.isPopular,
              }
            )}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {plan.label}
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-6">
              {/* Tier Badge */}
              {plan.badge && (
                <Badge
                  variant={plan.isPopular ? "default" : "secondary"}
                  className="mx-auto mb-3 w-fit"
                >
                  {plan.badge}
                </Badge>
              )}

              {/* Plan Name */}
              <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>

              {/* Price */}
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground ml-1">
                  / {plan.period}
                </span>
              </div>

              {/* Tagline */}
              <CardDescription className="text-sm font-medium">
                {plan.tagline}
              </CardDescription>

              {/* Free Tier Label */}
              {plan.label && !plan.isPopular && (
                <Badge variant="outline" className="mt-2 mx-auto w-fit">
                  {plan.label}
                </Badge>
              )}
            </CardHeader>

            <CardContent className="px-6">
              <Separator className="mb-6" />

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CircleCheck className="h-4 w-4 mt-0.5 text-green-600 dark:text-green-500 shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Support Note */}
              {plan.note && (
                <div className="bg-muted/50 rounded-lg p-3 mb-6">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {plan.note}
                  </p>
                </div>
              )}
            </CardContent>

            <CardFooter className="px-6 pt-0">
              {plan.id === "donate" ? (
                <Button
                  variant={plan.buttonVariant}
                  size="lg"
                  className="w-full rounded-full font-medium transition-all duration-200"
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      const res = await fetch('/api/stripe/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ priceId: 'price_1Rw4ZfLUmXA13VZnFFwDOBUy' })
                      });
                      const data = await res.json();
                      if (data.url) {
                        window.location.href = data.url;
                      } else if (data.error) {
                        alert('Checkout error: ' + data.error);
                      }
                    } catch (err) {
                      alert('Unexpected error: ' + (err instanceof Error ? err.message : String(err)));
                    }
                  }}
                  aria-label="Support with a Donation"
                >
                  Support with a Donation
                </Button>
              ) : (
                <Button
                  variant={plan.buttonVariant}
                  size="lg"
                  className={cn(
                    "w-full rounded-full font-medium transition-all duration-200",
                    {
                      "bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl":
                        plan.isPopular,
                    }
                  )}
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      if (!plan.stripePriceId) return;
                      const res = await fetch('/api/stripe/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ priceId: plan.stripePriceId })
                      });
                      const data = await res.json();
                      if (data.url) {
                        window.location.href = data.url;
                      } else if (data.error) {
                        alert('Checkout error: ' + data.error);
                      }
                    } catch (err) {
                      alert('Unexpected error: ' + (err instanceof Error ? err.message : String(err)));
                    }
                  }}
                  aria-label={`Choose ${plan.name} plan for $${plan.price} one-time`}
                >
                  {plan.buttonText}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Footnote */}
      <div className="text-center mt-12">
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          * Prices shown in USD. Founders Lifetime is strictly limited to 20 spots. All paid plans are one-time payments — no subscriptions, no hidden fees.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
