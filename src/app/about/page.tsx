"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen antialiased py-12 md:py-20 space-y-16">
      
      {/* 🎯 1. MISSION STATEMENT */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
          Our Vision
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Democratizing Tech Mentorship.
        </h1>
        <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          SkillSwap was founded with a single core mission: to eliminate the friction of learning in isolation. We believe the fastest way to unblock a complex technical bug or architectural hurdle is a direct, 1-on-1 live session with someone who has solved it before.
        </p>
      </section>

      {/* ⚙️ 2. HOW IT WORKS (THE CORE CONSTRUCT) */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl shadow-slate-200/40 space-y-8">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
            How SkillSwap Bridges the Gap
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">For Learners</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Skip the hundreds of hours of generic pre-recorded video courses. Browse active slots created by verified senior developers, book a designated 30 to 60-minute interval, share your live code terminal, and solve production bottlenecks side-by-side.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider">For Mentors</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Give back to the engineering ecosystem while managing your own hours. Monopolize your free engineering downtime by setting custom pricing, micro-managing availability, and sharing your architectural experiences with aspiring developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 3. PLATFORM CORE PILLARS */}
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl space-y-2">
          <div className="text-xl">🛡️</div>
          <h4 className="text-sm font-bold text-slate-900">100% Vetted Quality</h4>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">We review profiles manually to ensure learners connect with engineers who deal with modern production stacks daily.</p>
        </div>
        
        <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl space-y-2">
          <div className="text-xl">⚡</div>
          <h4 className="text-sm font-bold text-slate-900">Zero Contract Overhead</h4>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">No continuous retention or expensive packages. Pay microtransactions directly on demand for the exact slots you use.</p>
        </div>

        <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl space-y-2">
          <div className="text-xl">🤝</div>
          <h4 className="text-sm font-bold text-slate-900">Direct Knowledge Swap</h4>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">Practical learning focused entirely on your custom repository bottlenecks, production deployment errors, or mock interview goals.</p>
        </div>
      </section>

      {/* 📣 4. FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-4 text-center pt-4">
        <div className="border-t border-slate-200/60 pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm font-bold text-slate-700">Ready to break the tutorial hell loop?</p>
          <Link
            href="/explore"
            className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xs"
          >
            Explore Active Slots
          </Link>
        </div>
      </section>

    </div>
  );
}