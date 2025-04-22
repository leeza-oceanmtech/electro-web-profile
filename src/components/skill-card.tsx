
import React from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  skills: string[];
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export function SkillCard({ title, skills, variant = "primary", className }: SkillCardProps) {
  const variantClasses = {
    primary: "neon-border hover-glow",
    secondary: "neon-border-cyan hover-glow-cyan",
    tertiary: "neon-border-pink hover-glow-pink",
  };

  const titleClass = {
    primary: "neon-text",
    secondary: "neon-text-cyan",
    tertiary: "neon-text-pink",
  };

  return (
    <div 
      className={cn(
        "glass-panel p-6 rounded-lg transition-all duration-300 h-full", 
        variantClasses[variant],
        className
      )}
    >
      <h3 className={cn("text-xl font-bold mb-4", titleClass[variant])}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm bg-background border border-border/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    devops: ["Docker", "CI/CD", "GitHub Actions", "AWS", "Vercel"],
    tools: ["VS Code", "Figma", "Jira", "Git", "Webpack"]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-fade-in-up">
      <SkillCard title="Frontend" skills={skills.frontend} variant="primary" />
      <SkillCard title="Backend" skills={skills.backend} variant="secondary" />
      <SkillCard title="DevOps" skills={skills.devops} variant="tertiary" />
      <SkillCard title="Tools" skills={skills.tools} variant="primary" />
    </div>
  );
}
