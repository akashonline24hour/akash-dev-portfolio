import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import SkillsAndExperience from "@/components/SkillsAndExperience";
import { personalInfo } from "@/data/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-slate-950">
      <Navbar brandName={personalInfo.brandName} />
      <Hero info={personalInfo} />
      <About />
      <Education />
      <SkillsAndExperience />
    </main>
  );
}
