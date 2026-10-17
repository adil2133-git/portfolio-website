import Hero from "@/components/sections/Hero";
import AboutIntro from "@/components/sections/AboutIntro";
import Projects from "@/components/sections/Projects";
import ExperienceEducation from "@/components/sections/ExperienceEducation";
import SkillsSection from "@/components/sections/SkillsSection";
import Activity from "@/components/sections/Activity";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 sm:gap-24 px-4 sm:px-6 py-10 sm:py-20 max-w-7xl mx-auto w-full">
      <Hero />
      <AboutIntro />
      <Projects />
      <ExperienceEducation />
      <SkillsSection />
      <Activity />
      <Contact />
    </main>
  );
}