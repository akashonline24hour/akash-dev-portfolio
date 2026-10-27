// src/app/error.jsx
"use client";

import { useEffect } from "react";
import { FaRotateRight } from "react-icons/fa6";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Unhandled runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-md p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6">
        <h2 className="text-2xl font-bold text-rose-400">
          Something went wrong!
        </h2>
        <p className="text-slate-400 text-sm">
          An unexpected error occurred while loading this page.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-700 transition-all"
        >
          <FaRotateRight className="w-4 h-4" /> Try Again
        </button>
      </div>
    </div>
  );
}
