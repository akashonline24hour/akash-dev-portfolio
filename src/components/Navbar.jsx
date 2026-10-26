import Link from "next/link";

export default function Navbar({ brandName }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent"
        >
          {brandName}
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link
            href="#skills"
            className="hover:text-cyan-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#education"
            className="hover:text-cyan-400 transition-colors"
          >
            Education
          </Link>
          <Link
            href="#projects"
            className="hover:text-cyan-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div>
          <Link
            href="#contact"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
