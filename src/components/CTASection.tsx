import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-blue-600 dark:bg-blue-900 -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-400/40 via-blue-600/0 to-transparent -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses who chose CartyWeb to launch their online presence. Fast, professional, and built just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-base bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 shadow-xl border-0">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-base bg-blue-700/30 text-white border-blue-400/50 hover:bg-blue-700/50 hover:text-white backdrop-blur-sm">
              Talk to Us
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-blue-200">No credit card required to submit requirements.</p>
        </motion.div>
      </div>
    </section>
  );
}
