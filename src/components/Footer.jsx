import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          &copy; {currentYear}{" "}
          <span className="text-indigo-400 font-semibold">
            {personalInfo.name}
          </span>
          . All rights reserved.
        </p>
        <p className="flex items-center space-x-1">
          <span>Built with Next.js, Tailwind CSS &amp; React Icons</span>
        </p>
      </div>
    </footer>
  );
}
