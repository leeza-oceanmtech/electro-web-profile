
import React, { useState } from "react";
import { NeonButton } from "./ui/neon-button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission success
    setFormStatus({
      message: "Thanks for your message! I'll get back to you soon.",
      type: "success",
    });
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    // In a real app, you'd send the form data to a server here
  };

  return (
    <div className="glass-panel rounded-lg p-6 neon-border animate-fade-in-up">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div>
          <NeonButton type="submit" className="w-full">
            Send Message
          </NeonButton>
        </div>
        {formStatus.message && (
          <div
            className={`mt-4 p-3 rounded-md ${
              formStatus.type === "success"
                ? "bg-green-500/20 border border-green-500/50"
                : "bg-red-500/20 border border-red-500/50"
            }`}
          >
            <p
              className={`text-sm ${
                formStatus.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {formStatus.message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export function ContactInfo() {
  const contactDetails = [
    {
      label: "Email",
      value: "tamaro@example.com",
      link: "mailto:tamaro@example.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/tamaro",
      link: "https://linkedin.com/in/tamaro",
    },
    {
      label: "GitHub",
      value: "github.com/tamaro",
      link: "https://github.com/tamaro",
    },
    {
      label: "Twitter",
      value: "@tamaro",
      link: "https://twitter.com/tamaro",
    },
  ];

  return (
    <div className="glass-panel rounded-lg p-6 neon-border-cyan animate-fade-in-up">
      <h3 className="text-xl font-bold mb-4 neon-text-cyan">Get In Touch</h3>
      <p className="text-foreground/80 mb-6">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      <ul className="space-y-4">
        {contactDetails.map((detail, index) => (
          <li key={index} className="flex flex-col">
            <span className="text-muted-foreground text-sm">{detail.label}:</span>
            <a
              href={detail.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-secondary transition-colors hover-glow-cyan"
            >
              {detail.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
