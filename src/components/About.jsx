import { BookOpen, Code2, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 border-b border-slate-800/80 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            A closer look at my programming journey, technical focus, and life
            outside of code.
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Journey Card - Cyan Accent */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              My Programming Journey
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              What started as sheer curiosity quickly evolved into a dedicated
              commitment to software engineering. Today, I focus on building
              robust, scalable full-stack applications with a strong emphasis on
              clean code architecture and modern web standards.
            </p>
          </div>

          {/* Work I Enjoy Card - Violet Accent */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              Work I Enjoy
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              I thrive when engineering high-performance, reactive user
              interfaces with Next.js and Tailwind CSS, backed by efficient
              backend services. I love tackling complex logic, refining
              component design systems, and delivering seamless user
              experiences.
            </p>
          </div>

          {/* Hobbies & Interests Card - Rose/Pink Accent */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-rose-500/50 transition-all shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              Hobbies & Interests
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              When I am not writing code, you can find me exploring landscape
              photography, sharpening my tactical focus through chess, or
              playing table tennis. Immersing myself in nature and listening to
              tech podcasts keeps me balanced and inspired.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
