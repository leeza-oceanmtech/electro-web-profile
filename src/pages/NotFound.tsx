import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NeonButton } from "@/components/ui/neon-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground grid-background">
      <div className="text-center glass-panel p-10 rounded-lg neon-border animate-pulse-glow">
        <h1 className="text-8xl font-bold mb-4 neon-text animate-text-flicker">404</h1>
        <p className="text-xl text-gradient-cyan mb-8">Signal lost in the matrix</p>
        <NeonButton variant="secondary" size="lg">
          <a href="/">Return to Home</a>
        </NeonButton>
      </div>
    </div>
  );
};

export default NotFound;
