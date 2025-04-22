
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  index?: number;
}

export function TestimonialCard({
  content,
  name,
  role,
  company,
  avatar,
  variant = "primary",
  className,
  index = 0,
}: TestimonialCardProps) {
  const variants = {
    primary: "neon-border hover-glow",
    secondary: "neon-border-cyan hover-glow-cyan",
    tertiary: "neon-border-pink hover-glow-pink",
  };

  const quoteColor = {
    primary: "text-primary/30",
    secondary: "text-secondary/30",
    tertiary: "text-tertiary/30",
  };

  return (
    <div
      className={cn(
        "glass-panel rounded-lg p-6 relative transition-all duration-300",
        variants[variant],
        className,
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Large quote mark */}
      <div
        className={cn(
          "absolute -top-2 -left-2 text-6xl font-serif leading-none",
          quoteColor[variant]
        )}
      >
        "
      </div>

      <div className="pt-4">
        <p className="text-foreground/90 mb-6 italic">{content}</p>

        <div className="flex items-center mt-auto">
          {avatar && (
            <div className="mr-3 h-10 w-10 overflow-hidden rounded-full border border-border/50">
              <img
                src={avatar}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialGrid() {
  const testimonials = [
    {
      content:
        "Tamaro is an exceptional developer who consistently delivers high-quality code. Their attention to detail and problem-solving skills make them a valuable asset to any development team.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechNova Industries",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      variant: "primary" as const,
    },
    {
      content:
        "Working with Tamaro was a game-changer for our project. They quickly understood our requirements and delivered solutions that exceeded our expectations. Their technical expertise is matched by their excellent communication skills.",
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Paradigm",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      variant: "secondary" as const,
    },
    {
      content:
        "Tamaro has a rare combination of technical excellence and creative problem-solving. They transformed our outdated platform into a modern, user-friendly application that our customers love.",
      name: "Emily Rodriguez",
      role: "Director of Engineering",
      company: "Innovative Solutions",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      variant: "tertiary" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          index={index}
          content={testimonial.content}
          name={testimonial.name}
          role={testimonial.role}
          company={testimonial.company}
          avatar={testimonial.avatar}
          variant={testimonial.variant}
        />
      ))}
    </div>
  );
}
