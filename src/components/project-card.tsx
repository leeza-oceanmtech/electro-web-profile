
import React from "react";
import { cn } from "@/lib/utils";
import { NeonButton } from "./ui/neon-button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  variant = "primary",
  className,
  index = 0,
}: ProjectCardProps) {
  const variants = {
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
        "glass-panel rounded-lg overflow-hidden flex flex-col transition-all duration-500",
        variants[variant],
        className,
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={cn("text-xl font-bold mb-2", titleClass[variant])}>
          {title}
        </h3>
        
        <p className="text-sm text-foreground/80 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-background/50 border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2 mt-auto">
          {liveUrl && (
            <NeonButton
              variant="secondary"
              size="sm"
              className="flex-1"
              onClick={() => window.open(liveUrl, "_blank")}
            >
              Live Demo
            </NeonButton>
          )}
          
          {githubUrl && (
            <NeonButton
              variant="tertiary"
              size="sm"
              className="flex-1"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              GitHub
            </NeonButton>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsGrid() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with cart, checkout, and payment processing.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      variant: "primary" as const,
    },
    {
      title: "Healthcare Dashboard",
      description: "Analytics dashboard for healthcare professionals with real-time patient monitoring.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "Firebase", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      variant: "secondary" as const,
    },
    {
      title: "AI Content Generator",
      description: "Platform that uses AI to generate marketing content for small businesses.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Python", "OpenAI API", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      variant: "tertiary" as const,
    },
    {
      title: "DevOps Automation Tool",
      description: "CI/CD pipeline automation tool for streamlining development workflows.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      technologies: ["Docker", "Kubernetes", "GitHub Actions", "Go"],
      liveUrl: "#",
      githubUrl: "#",
      variant: "primary" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          index={index}
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          variant={project.variant}
        />
      ))}
    </div>
  );
}
