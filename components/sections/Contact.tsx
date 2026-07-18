"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
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
        { icon: SiGithub, label: "GitHub", value: "github.com/adil2133-git", href: "https://github.com/adil2133-git" },
        { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/abdlrhmnadil", href: "https://www.linkedin.com/in/abdlrhmnadil" },];

    return (
        <FadeIn>
            <section id="contact" className="w-full max-w-4xl flex flex-col gap-8 py-12 scroll-mt-24">
                <h2 className="font-mono text-sm text-muted">connect</h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Let&apos;s build something efficient.</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                Open to new roles and collaborations — feel free to reach out.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            {details.map((item) => {
                                const Icon = item.icon;
                                const content = (
                                    <div className="flex items-center gap-4 bg-surface border border-muted/20 p-4 rounded-xl hover:border-accent/40 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-background border border-muted/20 flex items-center justify-center text-accent shrink-0">
                                            <Icon size={16} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-0.5">
                                                {item.label}
                                            </span>
                                            <span className="text-sm text-foreground">{item.value}</span>
                                        </div>
                                    </div>
                                );
                                return item.href ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div key={item.label}>{content}</div>
                                );
                            })}
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="lg:col-span-7 flex flex-col gap-4 bg-surface border border-muted/20 rounded-2xl p-6 sm:p-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="font-mono text-[10px] text-muted uppercase tracking-widest">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    className="bg-background border border-muted/30 rounded-lg px-3 py-2.5 text-sm text-foreground focus:border-accent outline-none transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="font-mono text-[10px] text-muted uppercase tracking-widest">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="bg-background border border-muted/30 rounded-lg px-3 py-2.5 text-sm text-foreground focus:border-accent outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className="font-mono text-[10px] text-muted uppercase tracking-widest">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Let's talk about..."
                                className="bg-background border border-muted/30 rounded-lg px-3 py-2.5 text-sm text-foreground focus:border-accent outline-none transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full flex items-center justify-center gap-2 font-mono text-sm bg-accent text-background font-semibold py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50"
                        >
                            {status === "sending" ? (
                                "Sending..."
                            ) : status === "sent" ? (
                                "Message sent ✓"
                            ) : (
                                <>
                                    <Send size={14} />
                                    Send Message
                                </>
                            )}
                        </button>

                        {status === "error" && (
                            <p className="text-sm text-red-400 text-center">
                                Something went wrong — try emailing me directly instead.
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </FadeIn>
    );
}