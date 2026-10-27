"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/portfolioData";
import {
  FaGithub,
  FaXmark,
  FaCheck,
  FaArrowUpRightFromSquare,
  FaEye,
} from "react-icons/fa6";

const categories = ["All", "Full-Stack", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 border-b border-slate-800/80 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            A showcase of web applications and full-stack solutions I&apos;ve
            built.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden hover:border-indigo-500/40 transition-all shadow-xl flex flex-col"
            >
              {/* Interactive Image Preview Banner */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative h-48 w-full bg-slate-900 overflow-hidden cursor-pointer border-b border-slate-800/80 group-hover:opacity-95 transition-all"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs">
                  <FaEye className="w-4 h-4" /> Quick Preview
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors pt-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Badges & View Details Action */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-indigo-400 border border-slate-800">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold hover:bg-indigo-600 hover:border-indigo-500 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <FaEye className="w-3.5 h-3.5" /> View Project Modal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Popup with Preview Banner */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-indigo-500/30 rounded-3xl overflow-hidden shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Top Banner Image */}
            <div className="relative h-60 w-full bg-slate-950 border-b border-slate-800">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-slate-900/60"></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all z-10"
                aria-label="Close Modal"
              >
                <FaXmark className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950/90 text-indigo-300 border border-indigo-500/40">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1 drop-shadow-md">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6 pt-0">
              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-slate-300 gap-2.5"
                    >
                      <FaCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs font-medium border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-all"
                >
                  <FaArrowUpRightFromSquare className="w-3.5 h-3.5" /> Live
                  Preview
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs hover:bg-slate-700 transition-all"
                >
                  <FaGithub className="w-4 h-4" /> GitHub Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
