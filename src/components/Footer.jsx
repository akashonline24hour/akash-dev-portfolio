"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
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
      {/* Top Ambient Glow & Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10">
        {/* Main Glassmorphic Container Card */}
        <div className="p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Brand Title & Availability Badge */}
            <div className="space-y-3 text-center md:text-left">
              <span className="text-2xl font-black text-slate-100 tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                {personalInfo.brandName}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                Full-stack web developer crafting high-performance, responsive
                digital web applications.
              </p>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Available for new opportunities</span>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-300">
              <a
                href="#about"
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800/80 hover:text-indigo-400 transition-all"
              >
                About
              </a>
              <a
                href="#education"
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800/80 hover:text-indigo-400 transition-all"
              >
                Education
              </a>
              <a
                href="#skills"
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800/80 hover:text-indigo-400 transition-all"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800/80 hover:text-indigo-400 transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-lg hover:bg-slate-800/80 hover:text-indigo-400 transition-all"
              >
                Contact
              </a>
            </div>

            {/* Social Icons & Back to Top Button */}
            <div className="flex items-center justify-center md:justify-end gap-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all shadow-md"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all shadow-md"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all shadow-md"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>

              {/* Back to Top Interactive Button */}
              <button
                onClick={scrollToTop}
                className="p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-indigo-600/30 ml-2"
                aria-label="Scroll to top"
              >
                <FaArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Tech Info Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 px-2">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-slate-300 font-medium">
              {personalInfo.name}
            </span>
            . All rights reserved.
          </p>
          <p className="flex items-center space-x-1.5">
            <span>Built with</span>
            <FaHeart className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            <span>using Next.js &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
