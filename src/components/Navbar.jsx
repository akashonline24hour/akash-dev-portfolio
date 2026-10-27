"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar({ brandName = "Akash.Dev" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo / Title */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          {brandName}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-slate-900/60 border border-slate-800/60 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 text-xs font-bold rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
          >
            Hire Me
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-bold rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg shadow-indigo-600/25"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
