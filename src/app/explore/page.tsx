"use client";

import { useState, useEffect } from "react";
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

export default function ExplorePage() {
  const [sessions, setSessions] = useState<ISession[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("latest");
  const [loading, setLoading] = useState(true);

  const categories = ["all", "Development", "Design", "Architecture"];

  useEffect(() => {
    const fetchFilteredSessions = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams({ search, category, sort }).toString();
        const res = await fetch(`/api/sessions?${query}`);
        const data = (await res.json()) as { success: boolean; sessions: ISession[] };
        
        if (data.success) {
          setSessions(data.sessions);
        }
      } catch (error) {
        console.error("Failed to load sessions", error);
      } finally {
        setLoading(false);
      }
    };

    // ডেবোন্স (Debounce) ইফেক্ট দেওয়ার জন্য সামান্য ডিলে দিয়ে কল করা যাতে প্রতি ক্লিকে সার্ভারে চাপ না পড়ে
    const delayDebounceFn = setTimeout(() => {
      fetchFilteredSessions();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, category, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Section */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-4xl font-extrabold text-secondary tracking-tight">
          Explore Mentorship <span className="text-primary">Sessions</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-sm md:text-base">
          Discover expert-led sessions tailored to fast-track your learning, clear blockers, and build career momentum.
        </p>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        
        {/* Search Input */}
        <div className="relative flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search by topic, keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm transition-all"
          />
          <span className="absolute right-3 top-3 text-slate-400 text-sm">🔍</span>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <label className="text-xs font-bold text-secondary uppercase tracking-wider">Sort By</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary text-secondary font-medium transition-all cursor-pointer"
          >
            <option value="latest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* Category Navigation (Pills UI) */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all ${
              category === cat
                ? "bg-secondary text-white border-secondary shadow-xs"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {cat === "all" ? "📂 All Categories" : cat}
          </button>
        ))}
      </div>

      {/* Grid Status / Loading */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-slate-100 border border-slate-200 h-80 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : sessions.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-xl space-y-2">
          <span className="text-4xl block">📦</span>
          <h3 className="text-lg font-bold text-secondary">No sessions found</h3>
          <p className="text-sm text-slate-500">Try adjusting your keywords or category filters.</p>
        </div>
      ) : (
        /* Sessions Responsive Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session) => (
            <SessionCard key={session._id} session={session} />
          ))}
        </div>
      )}

    </div>
  );
}