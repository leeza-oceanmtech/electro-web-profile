import React from "react";
import { Navigation } from "@/components/navigation";
import { Section, SectionTitle, SectionDivider } from "@/components/ui/section";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Hero } from "@/sections/hero/Hero";
import { About } from "@/sections/about/About";
import { TechStack } from "@/components/skill-card";
import { ProjectsGrid } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-card";
import { EducationList } from "@/components/education-card";
import { TestimonialGrid } from "@/components/testimonial-card";
import { BlogPreview } from "@/components/blog-card";
import { ContactForm, ContactInfo } from "@/components/contact-form";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground pb-20">
      <Navigation />
      <ScrollToTop />

      {/* Hero Section */}
      <Hero />

      <SectionDivider />

      {/* About Me Section */}
      <About />

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
