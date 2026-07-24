import CodeCard from "@/components/CodeCard";
import HeroReveal from "@/components/HeroReveal";

export default function Hero() {
    return (
        <HeroReveal>
            <section className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                    <div data-reveal className="inline-flex items-center gap-2 px-3 py-1 w-fit bg-surface border border-muted/20 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="font-mono text-xs text-accent uppercase">Available for hire</span>
                    </div>
                    <h1 data-reveal className="text-4xl font-semibold">Abdul Rahman Adil</h1>
                    <p data-reveal className="text-xl text-muted">
                        Full-Stack <span className="text-accent">MERN</span> Developer
                    </p>
                    <p data-reveal className="text-lg text-muted max-w-xl">
                        Building scalable web apps with React, Next.js, Node.js, and MongoDB.
                        Focused on performance, architecture, and clean code.
                    </p>

                </div>

                <div data-reveal className="lg:col-span-5">
                    <CodeCard />
                </div>
            </section>
        </HeroReveal>
    )
}
