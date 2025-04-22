
export function About() {
  return (
    <section id="about" className="glass-panel mx-4 md:mx-8 rounded-lg my-8">
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
    </section>
  );
}
