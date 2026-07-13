import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-white to-white dark:from-blue-900/20 dark:via-background dark:to-background -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 text-sm font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2"></span>
              The smart way to build your website
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Get Your Professional Website Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Without the Hassle</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Choose your website type, submit requirements, and get matched with verified developers. Fast, affordable, and guaranteed quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection("pricing")} size="lg" className="rounded-full text-base h-14 px-8 shadow-lg shadow-blue-500/20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all border-0">
                Order Now
              </Button>
              <Button onClick={() => scrollToSection("pricing")} size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-900">
                View Pricing
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-background flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ businesses</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-lg rounded-2xl border border-white/20 bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-2xl p-2"
            >
              <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-border shadow-inner">
                <div className="bg-gray-200 dark:bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto w-1/2 h-5 bg-white dark:bg-black rounded-md opacity-50"></div>
                </div>
                <div className="h-64 sm:h-80 bg-white dark:bg-black p-4 relative">
                  <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-800 rounded-md mb-6"></div>
                  <div className="h-24 w-full bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                    <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-xl border border-border flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              </div>
              <div>
                <p className="font-bold text-sm">Project Delivered</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
