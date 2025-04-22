
import React from "react";
import { cn } from "@/lib/utils";
import { NeonButton } from "./ui/neon-button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  url: string;
  tags: string[];
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  index?: number;
}

export function BlogCard({
  title,
  excerpt,
  date,
  image,
  url,
  tags,
  variant = "primary",
  className,
  index = 0,
}: BlogCardProps) {
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
        "glass-panel rounded-lg overflow-hidden transition-all duration-300",
        variants[variant],
        className,
        "opacity-0 animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-background/50 border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <h3 className={cn("text-xl font-bold mb-2", titleClass[variant])}>
          {title}
        </h3>
        <p className="text-sm text-foreground/80 mb-4">{excerpt}</p>
        <NeonButton
          variant={variant}
          size="sm"
          onClick={() => window.open(url, "_blank")}
        >
          Read More
        </NeonButton>
      </div>
    </div>
  );
}

export function BlogPreview() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn how to architect large-scale React applications with best practices for state management, code splitting, and performance optimization.",
      date: "April 15, 2023",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      url: "#",
      tags: ["React", "Architecture", "Performance"],
      variant: "primary" as const,
    },
    {
      title: "Modern CSS Techniques Every Developer Should Know",
      excerpt: "Discover powerful CSS features like Grid, Custom Properties, and Container Queries that can transform your frontend development workflow.",
      date: "March 22, 2023",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
      url: "#",
      tags: ["CSS", "Frontend", "Design"],
      variant: "secondary" as const,
    },
    {
      title: "Leveraging TypeScript for Better Code Quality",
      excerpt: "How TypeScript's type system can help catch bugs early, improve developer experience, and make your codebase more maintainable.",
      date: "February 10, 2023",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      url: "#",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      variant: "tertiary" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post, index) => (
        <BlogCard
          key={index}
          index={index}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          image={post.image}
          url={post.url}
          tags={post.tags}
          variant={post.variant}
        />
      ))}
    </div>
  );
}
