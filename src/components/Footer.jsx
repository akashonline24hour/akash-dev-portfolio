"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa6";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden">
      {/* Subtle Glowing Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-12 border-b border-slate-900">
          {/* Brand & Status */}
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xl font-extrabold text-slate-100 tracking-tight">
              {personalInfo.brandName}
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Full-stack web developer crafting exceptional, high-performance
              digital experiences.
            </p>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-300">
            <a
              href="#about"
              className="hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              href="#education"
              className="hover:text-indigo-400 transition-colors"
            >
              Education
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Socials & Back to Top Button */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>

            {/* Back to Top Interactive Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all ml-2"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright & Tech Stack Info */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-slate-300 font-medium">
              {personalInfo.name}
            </span>
            . All rights reserved.
          </p>
          <p className="flex items-center space-x-1.5">
            <span>Built with</span>
            <FaHeart className="w-3 h-3 text-rose-500 animate-pulse" />
            <span>using Next.js &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
