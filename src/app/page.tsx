"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SessionCard from "@/components/SessionCard";

interface ISession {
  _id: string;
  title: string;
  shortDescription: string;
  category: string;
  price: number;
  duration: number;
  imageUrl: string;
  rating: number;
}

export default function HomePage() {
  const [featuredSessions, setFeaturedSessions] = useState<ISession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/sessions?sort=latest")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.sessions) {
          setFeaturedSessions(data.sessions.slice(0, 3));
        }
      })
      .catch((err) => console.error("Error loading featured sessions:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen antialiased space-y-24 pb-24">
      
      {/* 🚀 1. PREMIUM SPLIT-HERO BANNER SECTION */}
      <section className="relative bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200/60 pt-16 pb-20 md:pt-28 md:pb-24">
        {/* Subtle Backdrop Grid Lines Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Side: Premium Text & Value Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                1-on-1 Engineering Knowledge Swap
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Master system design <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Without the guesswork.
              </span>
            </h1>

            <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-xl font-medium leading-relaxed">
              Stop drowning in standard long tutorials. Match directly with proven mentors to break down complex codebases, architecture bottlenecks, or target system reviews live.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/explore"
                className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all text-center shadow-lg shadow-slate-900/10"
              >
                Find a Mentor
              </Link>
              <Link
                href="/register"
                className="w-full sm:w-auto px-7 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition-all text-center shadow-xs"
              >
                Become an Expert
              </Link>
            </div>
          </div>

          {/* Right Side: Trendy Tech Console UI Graphic Wrapper */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-in">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xl shadow-slate-200/80 space-y-4 relative">
              {/* Window Header Dots */}
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-amber-400 rounded-full" />
                <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                <span className="text-[11px] font-mono text-slate-400 pl-2">live-session-terminal.sh</span>
              </div>
              
              {/* Code Mock UI block */}
              <div className="space-y-3 font-mono text-xs bg-slate-950 p-4 rounded-xl text-slate-300 shadow-inner">
                <p className="text-slate-500">{`// Debugging Next.js 15 Streaming Issue`}</p>
                <p><span className="text-purple-400">const</span> session = <span className="text-blue-400">await</span> authProxy();</p>
                <p><span className="text-purple-400">if</span> (session.role === <span className="text-emerald-400">&apos;mentor&apos;</span>) &#123;</p>
                <p className="pl-4 text-emerald-400">console.log(&quot;Connected 1-on-1 with Learner ⚡&quot;);</p>
                <p>&#125;</p>
              </div>

              {/* Floating Active Mentor Status Badge */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    JD
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">John Doe (Senior Dev)</h4>
                    <p className="text-[10px] text-slate-400">Available: Next 30 Mins</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                  ONLINE
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ⚡ 2. GRID FEATURES WITH BALANCED BG CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs">
          
          <div className="p-8 space-y-4 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50/40 transition-colors">
            <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center rounded-xl font-bold text-lg">
              👥
            </div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Verified Expert Network</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              We vet every profile. Learn exclusively from creators and developers who manage high-traffic live products.
            </p>
          </div>

          <div className="p-8 space-y-4 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50/40 transition-colors">
            <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center rounded-xl font-bold text-lg">
              🎟️
            </div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Pay on Demand</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              No locked-in monthly subscriptions. Pick individual time slots whenever you reach complex roadblocks.
            </p>
          </div>

          <div className="p-8 space-y-4 hover:bg-slate-50/40 transition-colors">
            <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center rounded-xl font-bold text-lg">
              🛡️
            </div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Direct Screen Share</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Review systems, debug terminal setups, and map precise production fixes side-by-side inside call windows.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 3. LIVE FEATURED SLOTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Slots Available <span className="text-blue-600">Now</span>
            </h2>
            <p className="text-sm text-slate-400 font-medium">
              Book live sessions instantly with these top technical minds.
            </p>
          </div>
          <Link 
            href="/explore" 
            className="text-xs font-bold text-slate-700 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-xs"
          >
            Browse All Slots →
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Loading placeholder cards */}
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white border border-slate-200 h-[360px] rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : featuredSessions.length === 0 ? (
          <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-2xl text-sm text-slate-400 font-medium">
            No live mentorship slots found. Be the first mentor to publish a slot!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSessions.map((session) => (
              <SessionCard key={session._id} session={session} />
            ))}
          </div>
        )}
      </section>

      {/* 📣 4. CLEAN MINIMAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-slate-900 to-indigo-950 rounded-[2rem] p-8 md:p-16 text-center text-white shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Unblock your tech growth today
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-xs md:text-sm font-medium leading-relaxed">
              Find your ideal tech stacks mentor on SkillSwap and cut down your learning iteration loop.
            </p>
            <div className="pt-2">
              <div className="pt-2">
                <Link
                  href="/explore"
                  className="inline-block px-7 py-3.5 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-slate-100 transition-all shadow-md"
                >
                  Get Started Instantly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}