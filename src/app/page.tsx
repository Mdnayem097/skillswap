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

  // FAQ State Management
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen antialiased space-y-28 pb-28">
      
      {/* 🚀 SECTION 1: PREMIUM SPLIT-HERO BANNER */}
      <section className="relative bg-gradient-to-b from-slate-100 to-[#f8fafc] border-b border-slate-200/60 pt-16 pb-20 md:pt-28 md:pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
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

          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xl shadow-slate-200/80 space-y-4 relative">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-amber-400 rounded-full" />
                <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                <span className="text-[11px] font-mono text-slate-400 pl-2">live-session-terminal.sh</span>
              </div>
              <div className="space-y-3 font-mono text-xs bg-slate-950 p-4 rounded-xl text-slate-300 shadow-inner">
                <p className="text-slate-500">{`// Debugging Next.js 15 Streaming Issue`}</p>
                <p><span className="text-purple-400">const</span> session = <span className="text-blue-400">await</span> authProxy();</p>
                <p><span className="text-purple-400">if</span> (session.role === <span className="text-emerald-400">&apos;mentor&apos;</span>) &#123;</p>
                <p className="pl-4 text-emerald-400">console.log(&quot;Connected 1-on-1 with Learner ⚡&quot;);</p>
                <p>&#125;</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">JD</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">John Doe (Senior Dev)</h4>
                    <p className="text-[10px] text-slate-400">Available: Next 30 Mins</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚡ SECTION 2: GRID FEATURES / SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs">
          <div className="p-8 space-y-4 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50/40 transition-colors">
            <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center rounded-xl font-bold text-lg">👥</div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Verified Expert Network</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">Learn exclusively from engineers who manage high-traffic live products daily.</p>
          </div>
          <div className="p-8 space-y-4 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50/40 transition-colors">
            <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center rounded-xl font-bold text-lg">🎟️</div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Pay on Demand</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">No locked-in contracts. Pick individual time slots whenever you reach blockers.</p>
          </div>
          <div className="p-8 space-y-4 hover:bg-slate-50/40 transition-colors">
            <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center rounded-xl font-bold text-lg">🛡️</div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Direct Screen Share</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">Review architectures, debug code, and map solutions live inside interactive windows.</p>
          </div>
        </div>
      </section>

      {/* 📊 SECTION 3: PLATFORM STATISTICS (New) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-xs">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900">10k+</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase">Sessions Booked</p>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <h3 className="text-2xl sm:text-4xl font-black text-blue-600">450+</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase">Verified Mentors</p>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900">99.4%</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase">Satisfaction Rate</p>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <h3 className="text-2xl sm:text-4xl font-black text-indigo-600">&lt; 15m</h3>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase">Average Match Time</p>
          </div>
        </div>
      </section>

      {/* 🗂️ SECTION 4: EXPLORE BY CATEGORIES (New) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Browse by Engineering Sphere</h2>
          <p className="text-sm text-slate-400 font-medium">Target exactly the technical ecosystem you want to optimize.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Development", "Design", "Marketing", "Management"].map((cat, i) => (
            <Link key={i} href="/explore" className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-md transition-all text-center space-y-2 group">
              <div className="text-2xl">{cat === "Development" ? "💻" : cat === "Design" ? "🎨" : cat === "Marketing" ? "📈" : "🚀"}</div>
              <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{cat}</h4>
              <p className="text-[11px] text-slate-400 font-medium">View Available Slots →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 🔥 SECTION 5: LIVE FEATURED SLOTS (DYNAMIC DURATION CONTENT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Slots Available <span className="text-blue-600">Now</span>
            </h2>
            <p className="text-sm text-slate-400 font-medium">Book live sessions instantly with these top technical minds.</p>
          </div>
          <Link href="/explore" className="text-xs font-bold text-slate-700 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-xs">
            Browse All Slots →
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ❓ SECTION 6: FREQUENTLY ASKED QUESTIONS / FAQ (New) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Answered Queries</h2>
          <p className="text-sm text-slate-400 font-medium">Clear insights regarding our tactical billing and operation flows.</p>
        </div>
        <div className="space-y-3">
          {[
            { q: "How do live call match-ups take place?", a: "Once booked, you will find direct instructions inside your dashboard details. Currently mentors communicate credentials directly via standard email hooks." },
            { q: "Can I apply for a refund if a mentor skips?", a: "Absolutely. All paid deposits remain escrowed safely. If a vendor or mentor fails to attend within 15 minutes of the deadline, full credit flows back to you." },
            { q: "Are there any hidden base subscriptions?", a: "Zero. SkillSwap is built fundamentally on top of a direct pay-per-slot standard. You only process receipts for selected specific durations." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left px-5 py-4 font-bold text-sm text-slate-800 flex justify-between items-center hover:bg-slate-50/50 cursor-pointer"
              >
                <span>{item.q}</span>
                <span className="text-xs text-slate-400">{openFaq === idx ? "▲" : "▼"}</span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 pt-1 text-xs text-slate-500 font-medium border-t border-slate-50 leading-relaxed bg-slate-50/30">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 📣 SECTION 7: CLEAN MINIMAL CALL-TO-ACTION (CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-slate-900 to-indigo-950 rounded-[2rem] p-8 md:p-16 text-center text-white shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Unblock your tech growth today</h2>
            <p className="text-slate-400 max-w-lg mx-auto text-xs md:text-sm font-medium leading-relaxed">
              Find your ideal tech stacks mentor on SkillSwap and cut down your learning iteration loop.
            </p>
            <div className="pt-2">
              <Link href="/explore" className="inline-block px-7 py-3.5 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-slate-100 transition-all shadow-md">
                Get Started Instantly
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}