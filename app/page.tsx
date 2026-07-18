import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Activity from "@/components/sections/Activity";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 px-6 py-20">
      <Hero />
      <Projects />
      <Activity />
      <Contact />
    </main>
  );
}