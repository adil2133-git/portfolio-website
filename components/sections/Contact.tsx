"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Briefcase, Clock, MessageSquare } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { StaggerContainer, StaggerItem } from "@/components/StaggerReveal";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "d21082b4-d4a0-49c5-bc21-94b958a6cfd4");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const details = [
    { icon: Mail, label: "Email", value: "adilaadhy.dev@gmail.com", href: "mailto:adilaadhy.dev@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7994931322", href: "tel:+917994931322" },
    { icon: MapPin, label: "Location", value: "Kerala, India", href: null },
  ];

  const socials = [
    { icon: SiGithub, label: "GitHub", value: "adil2133-git", href: "https://github.com/adil2133-git" },
    { icon: FaLinkedin, label: "LinkedIn", value: "abdlrhmnadil", href: "https://www.linkedin.com/in/abdlrhmnadil" },
  ];

  const info = [
    {
      icon: Clock,
      title: "Availability",
      text: "Open to full-time roles & high-impact engineering — interning at Bridgeon Skillversity.",
    },
    {
      icon: Briefcase,
      title: "Engineering Focus",
      text: "Full-Stack: React 19, Next.js, Node.js, PostgreSQL, MongoDB, Redis, and AWS/Docker.",
    },
    {
      icon: MapPin,
      title: "Location Preference",
      text: "Kerala, India — open to remote roles, hybrid setups, and full relocation opportunities.",
    },
  ];

  return (
    <FadeIn>
      <section id="contact" className="w-full max-w-5xl flex flex-col gap-10 py-6 scroll-mt-24">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-sm text-accent uppercase tracking-widest whitespace-nowrap flex items-center gap-2">
              <MessageSquare size={15} />
              <span>06 / contact</span>
            </h2>
            <div className="h-px flex-grow bg-muted/20" />
          </div>
          <p className="text-muted text-sm sm:text-base">
            Get in touch for opportunities, technical collaboration, or questions.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            Let&apos;s Connect
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let&apos;s build scalable, reliable<br className="hidden sm:inline" /> systems together.
          </h2>
          <p className="text-muted max-w-lg text-sm sm:text-base">
            I am actively exploring full-stack engineering roles. Whether you have an open position or want to discuss technical architecture, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 flex flex-col gap-3">
            {details.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 bg-surface border border-muted/20 p-4 rounded-xl hover:border-accent/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-background border border-muted/20 flex items-center justify-center text-accent shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground truncate">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 bg-surface border border-muted/20 p-4 rounded-xl hover:border-accent/40 transition-colors"
                  >
                    <Icon size={16} className="text-accent" />
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground truncate">
                      {item.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <StaggerContainer className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 bg-surface border border-muted/20 rounded-2xl p-5 sm:p-8 shadow-lg"
            >
              <StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-mono text-[10px] text-muted uppercase tracking-widest">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="bg-background border border-muted/30 rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-mono text-[10px] text-muted uppercase tracking-widest">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="bg-background border border-muted/30 rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-[10px] text-muted uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Let's talk about..."
                    className="bg-background border border-muted/30 rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:border-accent outline-none transition-colors resize-none"
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 font-mono text-sm bg-accent text-background font-semibold py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50 cursor-pointer shadow-md"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "sent" ? (
                    "Message sent successfully ✓"
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </StaggerItem>

              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong — feel free to email me directly at adilaadhy.dev@gmail.com
                </p>
              )}
            </form>
          </StaggerContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          {info.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-surface border border-muted/20 rounded-xl p-5 flex flex-col gap-2 hover:border-accent/30 transition-colors"
              >
                <Icon size={18} className="text-accent" />
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
}