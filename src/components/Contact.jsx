"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaPaperPlane,
} from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 border-b border-slate-800/80 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Contact Details & Socials */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
              Let&apos;s Work Together
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Have a project in mind, a question, or want to say hi? Feel free
              to reach out directly through email, WhatsApp, or the form.
            </p>
          </div>

          {/* Quick Contact Info Cards */}
          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 transition-all flex items-center space-x-4 shadow-lg group"
            >
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Email Address
                </p>
                <p className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors">
                  {personalInfo.contact.email}
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/${personalInfo.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center space-x-4 shadow-lg group"
            >
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  WhatsApp
                </p>
                <p className="text-sm font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
                  {personalInfo.contact.whatsapp}
                </p>
              </div>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Connect On Socials
            </h4>
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2"
            >
              <FaPaperPlane className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            {submitted && (
              <p className="text-center text-xs font-semibold text-emerald-400 pt-2 animate-fade-in">
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
