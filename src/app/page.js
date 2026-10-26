import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar brandName="<Akash.dev />" />
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to Akash.dev</h1>
        <p className="text-slate-400 mt-4">
          Building responsive full-stack applications.
        </p>
      </div>
    </main>
  );
}
