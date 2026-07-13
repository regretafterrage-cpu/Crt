import React from "react";
import { motion } from "framer-motion";
import { PenTool, Zap, Search, Smartphone, ShieldCheck, Repeat, Bot, Headset } from "lucide-react";

const features = [
  { title: "Custom Design", desc: "Tailored to your brand identity. No cookie-cutter templates.", icon: PenTool },
  { title: "Fast Delivery", desc: "Get your fully functional website in days, not months.", icon: Zap },
  { title: "SEO Friendly", desc: "Built with best practices to help you rank higher on Google.", icon: Search },
  { title: "Mobile Responsive", desc: "Looks perfect on phones, tablets, and desktops.", icon: Smartphone },
  { title: "Secure Payment", desc: "Enterprise-grade security for your transactions.", icon: ShieldCheck },
  { title: "Unlimited Revisions", desc: "We refine it until you are 100% satisfied.", icon: Repeat },
  { title: "AI-assisted", desc: "Smart tools to help generate content and layouts faster.", icon: Bot },
  { title: "Dedicated Support", desc: "Real human help whenever you need it.", icon: Headset },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything You Need, Built In</h2>
          <p className="text-lg text-muted-foreground">Every CartyWeb project includes premium features as standard. No hidden fees or upsells.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-2">
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">{feat.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
