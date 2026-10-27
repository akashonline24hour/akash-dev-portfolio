"use client";

import { useState } from "react";
import { Code, Server, Wrench, Layers } from "lucide-react";

const allSkills = [
  { name: "React.js", level: 92, category: "Frontend", icon: Code },
  { name: "Next.js", level: 88, category: "Frontend", icon: Layers },
  { name: "JavaScript / TS", level: 90, category: "Frontend", icon: Code },
  { name: "Tailwind CSS", level: 95, category: "Frontend", icon: Layers },
  { name: "HTML5 & CSS3", level: 95, category: "Frontend", icon: Code },
  { name: "Node.js", level: 85, category: "Backend", icon: Server },
  { name: "Express.js", level: 87, category: "Backend", icon: Server },
  { name: "MongoDB", level: 82, category: "Backend", icon: Server },
  { name: "PostgreSQL", level: 78, category: "Backend", icon: Server },
  { name: "Git & GitHub", level: 90, category: "Tools & DevOps", icon: Wrench },
  {
    name: "VS Code & Postman",
    level: 94,
    category: "Tools & DevOps",
    icon: Wrench,
  },
  {
    name: "Docker & Vercel",
    level: 75,
    category: "Tools & DevOps",
    icon: Wrench,
  },
];

const categories = ["All", "Frontend", "Backend", "Tools & DevOps"];

export default function SkillsAndExperience() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 border-b border-slate-800/80 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Visual proficiency breakdown across my core technologies and
            developer tools[cite: 5].
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${
                activeCategory === category
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition-all shadow-lg flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/40">
                  <div
                    className="h-full bg-linear-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
