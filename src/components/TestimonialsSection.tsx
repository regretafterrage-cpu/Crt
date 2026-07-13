import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "I needed a professional website for my real estate agency but didn't have the time to learn WordPress or deal with flaky freelancers. CartyWeb delivered a stunning site in 8 days.",
    name: "Sarah Jenkins",
    role: "Founder, Prime Realty",
    initials: "SJ",
    rating: 5,
  },
  {
    quote: "The process is incredibly smooth. I submitted my brand colors and a rough outline, and their developer completely nailed the vibe I was going for. Worth every penny.",
    name: "Marcus Chen",
    role: "CEO, Elevate Fitness",
    initials: "MC",
    rating: 5,
  },
  {
    quote: "We've used CartyWeb for three different product landing pages now. The consistency and quality are unmatched. It's like having an in-house design team on standby.",
    name: "Elena Rodriguez",
    role: "Marketing Director, TechFlow",
    initials: "ER",
    rating: 5,
  },
  {
    quote: "I was skeptical about the 'no hassle' claim, but they actually mean it. The dashboard made reviewing and requesting changes incredibly simple.",
    name: "David O'Connor",
    role: "Owner, The Rustic Spoon",
    initials: "DO",
    rating: 4,
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Loved by Business Owners Worldwide</h2>
          <p className="text-lg text-muted-foreground">Don't just take our word for it. Hear from the founders who built their online presence with us.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-border shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`} />
                  ))}
                </div>
                <p className="text-sm md:text-base leading-relaxed mb-6">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center gap-3 mt-auto">
                <Avatar>
                  <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 font-medium">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
