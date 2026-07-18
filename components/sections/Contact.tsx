"use client";

import { useState } from "react";
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

    return (
        <>
            <FadeIn>
                <section id="contact" className="w-full max-w-3xl flex flex-col gap-8 py-12 scroll-mt-24">
                    <h2 className="font-mono text-sm text-muted">connect</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="flex flex-col justify-center gap-4">
                            <h3 className="text-2xl font-semibold">Let&apos;s build something efficient.</h3>
                            <p className="text-muted">
                                Open to new roles and collaborations — feel free to reach out.
                            </p>

                            <div className="flex flex-col gap-3 mt-2">
                                <a
                                    href="mailto:adilaadhy.dev@gmail.com"
                                    className="font-mono text-sm border border-muted/30 px-4 py-3 rounded-lg hover:border-accent hover:text-accent transition-colors"
                                >
                                    adilaadhy.dev@gmail.com
                                </a>
                                <a
                                    href="https://github.com/adil2133-git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-sm border border-muted/30 px-4 py-3 rounded-lg hover:border-accent hover:text-accent transition-colors"
                                >
                                    github.com/adil2133-git
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/abdlrhmnadil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-sm border border-muted/30 px-4 py-3 rounded-lg hover:border-accent hover:text-accent transition-colors"
                                >
                                    linkedin.com/in/abdlrhmnadil
                                </a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-surface border border-muted/20 rounded-xl p-6">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="font-mono text-xs text-muted">name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    className="bg-background border border-muted/30 rounded-lg px-3 py-2 text-foreground focus:border-accent outline-none transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="font-mono text-xs text-muted">email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="bg-background border border-muted/30 rounded-lg px-3 py-2 text-foreground focus:border-accent outline-none transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="font-mono text-xs text-muted">message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Let's talk about..."
                                    className="bg-background border border-muted/30 rounded-lg px-3 py-2 text-foreground focus:border-accent outline-none transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="font-mono text-sm bg-accent text-background font-semibold py-2.5 rounded-lg hover:brightness-110 transition-all disabled:opacity-50"
                            >
                                {status === "sending" ? "Sending..." : status === "sent" ? "Message sent ✓" : "Send Message"}
                            </button>

                            {status === "error" && (
                                <p className="text-sm text-red-400">Something went wrong — try emailing me directly instead.</p>
                            )}
                        </form>
                    </div>
                </section>
            </FadeIn>
        </>
    );
}