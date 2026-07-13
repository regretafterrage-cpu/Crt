import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: 299,
    description: "Perfect for small businesses looking to establish an online presence.",
    features: [
      "5-page website",
      "Basic SEO setup",
      "Mobile responsive",
      "2 design revisions",
      "14-day delivery",
      "Contact form integration"
    ],
    highlighted: false,
    cta: "Start with Starter"
  },
  {
    name: "Professional",
    price: 699,
    description: "The complete package for growing businesses that need more power.",
    features: [
      "10-page website",
      "Advanced SEO optimization",
      "Custom unique design",
      "5 design revisions",
      "eCommerce ready (up to 50 products)",
      "10-day delivery priority",
      "CMS integration"
    ],
    highlighted: true,
    cta: "Choose Professional"
  },
  {
    name: "Enterprise",
    price: 1499,
    description: "Unrestricted power for brands that dominate their market.",
    features: [
      "Unlimited pages",
      "Full SEO suite & strategy",
      "Bespoke animations & interactions",
      "Unlimited revisions",
      "Custom integrations & APIs",
      "7-day lightning delivery",
      "Priority 24/7 support"
    ],
    highlighted: false,
    cta: "Contact Sales"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50/50 dark:bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">One-time payment. No hidden fees. Own your website forever.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 bg-white dark:bg-gray-900 border ${
                tier.highlighted 
                  ? "border-blue-500 shadow-2xl shadow-blue-500/20 md:-translate-y-4 z-10" 
                  : "border-border shadow-lg"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 h-10">{tier.description}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-black">${tier.price}</span>
                <span className="text-muted-foreground"> / one-time</span>
              </div>
              
              <Button 
                className={`w-full mb-8 rounded-full ${
                  tier.highlighted 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md" 
                    : ""
                }`}
                variant={tier.highlighted ? "default" : "outline"}
                size="lg"
              >
                {tier.cta}
              </Button>
              
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What's included</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
