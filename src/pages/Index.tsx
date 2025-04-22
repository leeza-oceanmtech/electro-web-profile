
import React, { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Section, SectionTitle, SectionDivider } from "@/components/ui/section";
import { NeonButton } from "@/components/ui/neon-button";
import { TechStack } from "@/components/skill-card";
import { ProjectsGrid } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-card";
import { EducationList } from "@/components/education-card";
import { TestimonialGrid } from "@/components/testimonial-card";
import { BlogPreview } from "@/components/blog-card";
import { ContactForm, ContactInfo } from "@/components/contact-form";
import { ScrollToTop } from "@/components/scroll-to-top";

const Index = () => {
  useEffect(() => {
    // For controlling scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".opacity-0").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground pb-20">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <Section id="hero" fullHeight className="relative overflow-hidden grid-background">
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
      </Section>

      <SectionDivider />

      {/* About Me Section */}
      <Section id="about" className="glass-panel mx-4 md:mx-8 rounded-lg my-8">
        <SectionTitle
          title="About Me"
          subtitle="My journey as a developer"
          variant="primary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="opacity-0 animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-4 neon-text">Career Journey</h3>
            <p className="text-foreground/80 mb-4">
              With over 7 years of experience in frontend development, I've specialized in building modern, responsive web applications that prioritize user experience and performance.
            </p>
            <p className="text-foreground/80 mb-4">
              I started my career building websites with vanilla JavaScript and jQuery, then evolved with the industry to embrace modern frameworks like React and Vue.js. As a Senior Frontend Developer, I now lead teams to create scalable applications that solve real business problems.
            </p>
            <p className="text-foreground/80 mb-4">
              My passion lies in creating seamless interfaces that are both beautiful and functional. I have expertise in SPA development, design systems implementation, and performance optimization techniques.
            </p>
            <p className="text-foreground/80">
              I hold AWS and Google Cloud certifications, and I'm constantly expanding my knowledge through continuous learning and community involvement.
            </p>
          </div>
          <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-full w-full rounded-lg overflow-hidden neon-border-tertiary">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
                alt="Abstract representation of technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* Skills Section */}
      <Section id="skills" className="tech-grid">
        <SectionTitle
          title="Skills & Tech Stack"
          subtitle="Technologies I work with"
          variant="secondary"
        />
        <TechStack />
      </Section>

      <SectionDivider />

      {/* Projects Section */}
      <Section id="projects" className="glass-panel mx-4 md:mx-8 rounded-lg my-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work"
          variant="tertiary"
        />
        <ProjectsGrid />
      </Section>

      <SectionDivider />

      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey"
          variant="primary"
        />
        <ExperienceTimeline />
      </Section>

      <SectionDivider />

      {/* Education Section */}
      <Section id="education" className="glass-panel mx-4 md:mx-8 rounded-lg my-8">
        <SectionTitle
          title="Education & Certifications"
          subtitle="My academic background and professional qualifications"
          variant="secondary"
        />
        <EducationList />
      </Section>

      <SectionDivider />

      {/* Testimonials Section */}
      <Section id="testimonials">
        <SectionTitle
          title="Testimonials"
          subtitle="What people say about my work"
          variant="tertiary"
        />
        <TestimonialGrid />
      </Section>

      <SectionDivider />

      {/* Blog Section */}
      <Section id="blog" className="glass-panel mx-4 md:mx-8 rounded-lg my-8">
        <SectionTitle
          title="Blog & Articles"
          subtitle="Thoughts and insights on development"
          variant="primary"
        />
        <BlogPreview />
      </Section>

      <SectionDivider />

      {/* Contact Section */}
      <Section id="contact">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss your project"
          variant="secondary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </Section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20 opacity-0 animate-fade-in-up">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border/50 pt-8">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Tamaro Naam. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors hover-glow">LinkedIn</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors hover-glow">GitHub</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors hover-glow">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
