import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most Starter projects are completed within 14 days. Professional packages take about 10 days due to priority handling, and Enterprise projects can be launched in as little as 7 days depending on complexity."
  },
  {
    question: "Can I request changes after delivery?",
    answer: "Yes! Every package includes a set number of revisions (2 for Starter, 5 for Professional, unlimited for Enterprise) during the build phase. Once the site is live, we hand over the keys and you can make minor copy/image changes yourself."
  },
  {
    question: "What if I'm not satisfied with the design?",
    answer: "We offer a satisfaction guarantee. You'll review the initial design concepts before we start developing. If the first draft isn't what you envisioned, we'll pivot based on your feedback until we get it right."
  },
  {
    question: "Do I own the website?",
    answer: "100%. Once final payment is made and the site is handed over, you own all the code, assets, and content. We don't hold your site hostage with proprietary systems."
  },
  {
    question: "Is my payment secure?",
    answer: "Yes, all payments are processed securely through Stripe. We never store your credit card information on our servers."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "We offer optional maintenance packages starting at $49/mo which includes hosting, security updates, and minor content updates. However, you are free to host and maintain the site yourself."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gray-50/50 dark:bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about the product and billing.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full bg-white dark:bg-gray-900 rounded-2xl border border-border p-4 shadow-sm">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className={i === faqs.length - 1 ? "border-0" : ""}>
                  <AccordionTrigger className="text-left font-medium text-base md:text-lg hover:no-underline py-4 px-2 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-2 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
