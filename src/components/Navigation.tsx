import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">CartyWeb</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <Button onClick={() => scrollToSection("pricing")} className="rounded-full shadow-md hover:shadow-lg transition-all" variant="default">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
