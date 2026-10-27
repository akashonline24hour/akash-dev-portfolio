import { educationData } from "@/data/portfolioData";
import { GraduationCap, Calendar, Building2 } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 border-b border-slate-800/80 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Educational Qualifications
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            My academic journey and formal qualifications.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-slate-800">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Icon Node */}
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 border border-indigo-500/40 text-indigo-400 shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:border-indigo-400 transition-all shrink-0 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <GraduationCap className="w-6 h-6" />
              </div>

              {/* Education Card Container */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all shadow-xl space-y-3 group-hover:shadow-indigo-500/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                    <Calendar className="w-3 h-3 mr-1.5 text-indigo-400" />
                    {edu.duration}
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                      edu.status === "In Progress"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {edu.degree}
                </h3>

                <div className="flex items-center text-sm text-slate-400 font-medium space-x-2 pt-1">
                  <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{edu.institution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
