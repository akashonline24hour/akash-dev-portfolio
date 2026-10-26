import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { personalInfo } from "@/data/portfolioData";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar brandName={personalInfo.brandName} />
      <Hero info={personalInfo} />
    </main>
  );
}
