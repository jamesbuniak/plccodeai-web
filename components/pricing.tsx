"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck, Star } from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free Tier",
    price: 0,
    period: "year",
    tagline: "Try it risk-free",
    badge: null,
    label: "No credit card required",
    features: [
      "Limited AI PLC code generation",
      "1 export/day",
      "1 saved project",
      "Basic support",
    ],
    note: null,
    buttonText: "Start Free",
    buttonVariant: "outline" as const,
    buttonHref: "#signup",
    isPopular: false,
  },
  {
    id: "pro",
    name: "Pro Annual Supporter",
    price: 599,
    period: "year",
    tagline: "Back us now, get full access at launch",
    badge: "Early Supporter",
    label: "Most Popular",
    features: [
      "Unlimited exports",
      "Supported OpenXML platforms (Siemens, Rockwell, Codesys, etc.)",
      "10 saved projects",
      "Priority support",
      "Beta feature access",
    ],
    note: "Your purchase directly supports API and development costs before launch.",
    buttonText: "Get Pro",
    buttonVariant: "default" as const,
    buttonHref: "stripe_pro",
    isPopular: true,
    stripePriceId: "price_1Rtf2XLUmXA13VZnNhOrawAs",
  },
  {
    id: "founders",
    name: "Founders Annual",
    price: 1199,
    period: "year",
    tagline: "Fund the future — lock in premium access for 12 months",
    badge: "Founders Edition",
    label: null,
    features: [
      "Everything in Pro Annual",
      "LD, ST, FBD generation",
      "Unlimited saved projects",
      "Early access to new platforms & features",
      "Private feature request channel",
      "Name on supporter wall",
    ],
    note: "A one-year commitment that fuels our pre-release buildout and operations.",
    buttonText: "Join Founders",
    buttonVariant: "secondary" as const,
    buttonHref: "stripe_founders",
    isPopular: false,
    stripePriceId: "price_1Rtf3yLUmXA13VZnQSiMNvoR",
  },
];

interface PricingProps {
  compact?: boolean;
}

const Pricing = ({ compact = false }: PricingProps) => {
  // const compact = false; // Removed unused assignment
  const handleStripeCheckout = async (priceId: string) => {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div id="pricing" className="max-w-screen-xl mx-auto py-12 xs:py-20 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Pre-Release Supporter Pricing
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          PLCcode.ai is in pre-release. Your purchase funds API usage, development, and
          infrastructure so we can launch faster.
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
              {plan.stripePriceId ? (
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
                  aria-label={`Choose ${plan.name} plan for $${plan.price} per ${plan.period}`}
                  onClick={() => handleStripeCheckout(plan.stripePriceId!)}
                >
                  {plan.buttonText}
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
                  aria-label={`Choose ${plan.name} plan for $${plan.price} per ${plan.period}`}
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
          * Prices shown in USD. You can cancel anytime before renewal. Refunds available
          if we miss the public launch window.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
