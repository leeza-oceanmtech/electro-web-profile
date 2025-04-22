
import { NeonButton } from "@/components/ui/neon-button";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden grid-background min-h-screen">
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent bg-repeat-y bg-[length:100%_5px] animate-scan-line opacity-20"></div>
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-center text-center h-full gap-6 relative z-20">
        <div className="animate-float mb-2">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden neon-border animate-pulse-glow">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-tertiary/20 backdrop-blur-sm"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-text-flicker neon-text">
          Tamaro <span className="text-gradient-purple">Naam</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light animate-pulse-glow neon-text-cyan relative inline-block">
          <span className="relative z-10">Senior Frontend Developer</span>
          <span className="absolute inset-0 bg-secondary/10 blur-xl -z-10"></span>
        </h2>
        
        <p className="max-w-lg text-lg md:text-xl mt-4 text-foreground/90 overflow-hidden whitespace-nowrap border-r-4 border-primary/70 pr-1">
          <span className="animate-typing">Crafting seamless web experiences with React & TypeScript</span>
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <NeonButton variant="primary" size="lg">
            <a href="/resume.pdf" download>
              View Resume
            </a>
          </NeonButton>
          <NeonButton variant="secondary" size="lg">
            <a href="#contact">Contact Me</a>
          </NeonButton>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse-glow"></div>
          </div>
        </div>
      </div>
      
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-lines z-0 opacity-5"></div>
    </section>
  );
}
