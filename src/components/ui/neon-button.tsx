
import React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const variantClasses = {
      primary: "bg-primary/10 text-primary border-primary hover:bg-primary/20 neon-border button-glow",
      secondary: "bg-secondary/10 text-secondary border-secondary hover:bg-secondary/20 neon-border-cyan button-glow",
      tertiary: "bg-tertiary/10 text-tertiary border-tertiary hover:bg-tertiary/20 neon-border-pink button-glow",
    };

    const sizeClasses = {
      sm: "py-1 px-3 text-sm",
      md: "py-2 px-5 text-base",
      lg: "py-3 px-8 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";

export { NeonButton };
