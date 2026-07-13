import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ShoppingCart, Image, Utensils, Dumbbell, BookOpen, HeartPulse, Home, FileText, LayoutTemplate, UserCircle, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Business Website", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
  { name: "eCommerce Store", icon: ShoppingCart, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
  { name: "Portfolio", icon: Image, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-500/10" },
  { name: "Restaurant", icon: Utensils, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
  { name: "Gym", icon: Dumbbell, color: "text-slate-500", bg: "bg-slate-50 dark:bg-slate-500/10" },
  { name: "Tuition Center", icon: BookOpen, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
  { name: "Hospital/Clinic", icon: HeartPulse, color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10" },
  { name: "Real Estate", icon: Home, color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-500/10" },
  { name: "Blog", icon: FileText, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-500/10" },
  { name: "Landing Page", icon: LayoutTemplate, color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-500/10" },
  { name: "Personal Brand", icon: UserCircle, color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-500/10" },
  { name: "Custom Website", icon: Code, color: "text-primary", bg: "bg-primary/10" },
];

export function CategoriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-gray-50/50 dark:bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Kind of Website Do You Need?</h2>
          <p className="text-lg text-muted-foreground">Select from our specialized categories, each built with industry-best practices and customized for your specific goals.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group cursor-pointer hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-border overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4 h-full justify-center">
                  <div className={`p-4 rounded-2xl ${category.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
