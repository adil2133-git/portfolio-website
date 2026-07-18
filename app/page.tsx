import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import GithubSection from "@/components/sections/GithubSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 px-6 py-20">
      <Hero />
      <Projects />
      <GithubSection />
      <Contact />
    </main>
  );
}