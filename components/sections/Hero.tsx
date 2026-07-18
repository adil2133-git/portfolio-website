import CodeCard from "@/components/CodeCard";
import HeroReveal from "@/components/HeroReveal";

<HeroReveal>
    <section className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 w-fit bg-surface border border-muted/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent uppercase">Available for hire</span>
            </div>
            <h1 className="text-4xl font-semibold">Abdul Rahman Adil</h1>
            <p className="text-xl text-muted">
                Full-Stack <span className="text-accent">MERN</span> Developer
            </p>
            <p className="text-lg text-muted max-w-xl">
                Building scalable web apps with React, Next.js, Node.js, and MongoDB.
                Focused on performance, architecture, and clean code.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
                {[
                    { label: "Full-stack projects", value: "2+" },
                    { label: "Technologies", value: "10+" },
                    { label: "Internship", value: "1" },
                ].map((stat) => (
                    <div key={stat.label} className="p-4 bg-surface border border-muted/20 rounded-xl flex-1 min-w-[120px]">
                        <div className="text-2xl font-semibold text-accent">{stat.value}</div>
                        <div className="font-mono text-xs text-muted">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>

        <div className="lg:col-span-5">
            <CodeCard />
        </div>
    </section>
</HeroReveal>