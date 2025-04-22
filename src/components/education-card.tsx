
import React from "react";
import { cn } from "@/lib/utils";

interface EducationCardProps {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  courses?: string[];
  logo?: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  index?: number;
}

export function EducationCard({
  degree,
  institution,
  duration,
  description,
  courses,
  logo,
  variant = "primary",
  className,
  index = 0,
}: EducationCardProps) {
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
              alt={`${institution} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className={cn("text-xl font-bold", titleClass[variant])}>
            {degree}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-lg">{institution}</p>
            <p className="text-sm text-muted-foreground">{duration}</p>
          </div>
          
          {description && (
            <p className="mt-3 text-sm text-foreground/80">{description}</p>
          )}
          
          {courses && courses.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium mb-1">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-1">
                {courses.map((course, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-background/50 border border-border/50"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function EducationList() {
  const educationItems = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      duration: "2014 - 2016",
      description: "Specialized in Software Engineering and Distributed Systems",
      courses: ["Advanced Algorithms", "Distributed Systems", "Machine Learning", "Software Architecture"],
      logo: "https://via.placeholder.com/100",
      variant: "primary" as const,
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      duration: "2010 - 2014",
      description: "Graduated with honors, GPA 3.85/4.0",
      courses: ["Data Structures", "Web Development", "Database Systems", "UI/UX Design"],
      logo: "https://via.placeholder.com/100",
      variant: "tertiary" as const,
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      duration: "2018",
      description: "Professional certification for designing distributed systems on AWS",
      logo: "https://via.placeholder.com/100",
      variant: "secondary" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {educationItems.map((item, index) => (
        <EducationCard
          key={index}
          index={index}
          degree={item.degree}
          institution={item.institution}
          duration={item.duration}
          description={item.description}
          courses={item.courses}
          logo={item.logo}
          variant={item.variant}
        />
      ))}
    </div>
  );
}
