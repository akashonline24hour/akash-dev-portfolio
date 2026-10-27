import Link from "next/link";
import Image from "next/image";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";

export default function Hero({ info }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Professional Designation Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>PROFESSIONAL DESIGNATION</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-400">
              {info.designation}
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
              Crafting robust web applications with{" "}
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                modern code.
              </span>
            </h1>
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed">
            {info.bio}
          </p>

          {/* Action Buttons: Resume Download & Get In Touch */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={info.resumeUrl}
              download="Akash_Chandra_Paul_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-indigo-600/30"
            >
              <FaDownload className="w-4 h-4" /> Download Resume
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-slate-700 transition-all"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="pt-4 flex items-center space-x-3">
            <a
              href={info.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href={info.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href={info.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>

            <a
              href={info.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Profile Avatar Photo (Updated Interactive Glow) */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            {/* Animated Glow Border */}
            <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

            {/* Image Container Card */}
            <div className="relative rounded-3xl p-3 border bg-slate-900 border-slate-800 shadow-2xl">
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt={info.name || "Professional Developer Profile"}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
