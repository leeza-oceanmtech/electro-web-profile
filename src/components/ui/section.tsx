
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

export function Section({ 
  id, 
  className, 
  children, 
  fullHeight = false 
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-4 py-16 md:py-24", 
        fullHeight && "min-h-screen flex flex-col justify-center",
        className
      )}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export function SectionTitle({ 
  title, 
  subtitle, 
  align = "center",
  className,
  variant = "primary"
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const gradientClasses = {
    primary: "text-gradient-purple neon-text",
    secondary: "text-gradient-cyan neon-text-cyan",
    tertiary: "text-gradient-pink neon-text-pink",
  };
  
  return (
    <div className={cn("mb-16", alignmentClasses[align], className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4 inline-block",
        gradientClasses[variant]
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground mt-2">{subtitle}</p>
      )}
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="w-2 h-2 rounded-full bg-primary mx-2 animate-pulse-glow"></div>
      <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </div>
  );
}
