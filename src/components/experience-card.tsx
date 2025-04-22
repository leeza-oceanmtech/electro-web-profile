
import React from "react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string[];
  logo?: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  index?: number;
}

export function ExperienceCard({
  company,
  position,
  duration,
  description,
  logo,
  variant = "primary",
  className,
  index = 0,
}: ExperienceCardProps) {
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
        "glass-panel rounded-lg p-6 transition-all duration-300",
        variants[variant],
        className,
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border border-border/50">
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className={cn("text-xl font-bold", titleClass[variant])}>
            {position}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-lg">{company}</p>
            <p className="text-sm text-muted-foreground">{duration}</p>
          </div>
          <ul className="mt-4 space-y-2">
            {description.map((item, i) => (
              <li key={i} className="text-sm flex">
                <span className="mr-2 text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ExperienceTimeline() {
  const experiences = [
    {
      company: "TechNova Industries",
      position: "Senior Frontend Developer",
      duration: "2020 - Present",
      logo: "https://via.placeholder.com/100",
      description: [
        "Led the development of a React-based SaaS platform used by 50,000+ users",
        "Implemented performance optimizations resulting in 45% faster page loads",
        "Mentored a team of 4 junior developers and established code review practices",
        "Collaborated with design team to create a comprehensive component library"
      ],
      variant: "primary" as const,
    },
    {
      company: "Digital Paradigm Solutions",
      position: "Frontend Developer",
      duration: "2018 - 2020",
      logo: "https://via.placeholder.com/100",
      description: [
        "Developed responsive web applications using React, Redux, and TypeScript",
        "Integrated RESTful APIs and implemented state management patterns",
        "Optimized application performance and improved core web vitals scores",
        "Participated in agile development processes including sprint planning"
      ],
      variant: "secondary" as const,
    },
    {
      company: "Creative Web Innovations",
      position: "Junior Web Developer",
      duration: "2016 - 2018",
      logo: "https://via.placeholder.com/100",
      description: [
        "Developed and maintained client websites using HTML, CSS, and JavaScript",
        "Collaborated with designers to implement responsive, cross-browser compatible UIs",
        "Built interactive components and implemented third-party integrations",
        "Participated in code reviews and contributed to continuous improvement initiatives"
      ],
      variant: "tertiary" as const,
    },
  ];

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          index={index}
          company={exp.company}
          position={exp.position}
          duration={exp.duration}
          description={exp.description}
          logo={exp.logo}
          variant={exp.variant}
        />
      ))}
    </div>
  );
}
