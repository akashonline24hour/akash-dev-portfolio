import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-md p-8 md:p-12 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6">
        <span className="text-7xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-slate-100">Page Not Found</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Oops! The page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-indigo-600/30"
        >
          <FaHouse className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
