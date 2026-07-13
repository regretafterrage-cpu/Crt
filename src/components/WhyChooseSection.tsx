import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Star, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    title: "Verified Developers",
    desc: "We rigorously vet our developers so you only work with the top 1% of talent.",
    icon: CheckCircle2,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise agency costs. What you see is exactly what you pay.",
    icon: Shield,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "High Quality",
    desc: "Every pixel placed with purpose. We build websites that don't just look good, but perform exceptionally.",
    icon: Star,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Fast Turnaround",
    desc: "Launch in days, not months. Our streamlined process cuts out the traditional agency bloat.",
    icon: Clock,
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Satisfaction Guarantee",
    desc: "We don't stop until you're completely happy. Unlimited revisions during the build phase.",
    icon: HeartHandshake,
    colSpan: "md:col-span-3 lg:col-span-1",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Thousands Choose CartyWeb</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've stripped away the complexity, the endless meetings, and the unpredictable costs of traditional web design.
            </p>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-sm font-medium">Customer satisfaction rate across over 10,000+ delivered projects.</p>
            </div>
          </motion.div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-white/20 dark:border-gray-800 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all ${reason.colSpan}`}
              >
                <reason.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
