"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSlotFormClient() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Development");
  const [duration, setDuration] = useState("45");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await fetch("/api/sessions/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          duration: Number(duration),
          price: Number(price),
          imageUrl,
          shortDescription,
          fullDescription,
        }),
      });

      const data = (await res.json()) as { error?: string; success?: boolean };

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to add session");
      }

      setSuccess("🎉 Mentorship slot published successfully!");

      setTimeout(() => {
        router.push("/explore");
      }, 2000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs space-y-6">
        <div className="space-y-1">
          <h2 className="text-3xl font-extrabold text-secondary tracking-tight">
            Add New Mentorship Slot
          </h2>
          <p className="text-sm text-slate-500">
            Create a 1-on-1 session slot so learners can discover and book your
            time.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl font-medium">
            ⚠️ {error}
          </div>
        )}
        {success && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm rounded-xl font-medium">
            🎉 {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-secondary mb-1">
                Session Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Mock System Design Interview & Feedback"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-secondary mb-1">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm transition-all text-secondary font-medium cursor-pointer"
              >
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Architecture">Architecture</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-secondary mb-1">
                  Duration (Mins) *
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm transition-all text-secondary font-medium cursor-pointer"
                >
                  <option value="30">30 Mins</option>
                  <option value="45">45 Mins</option>
                  <option value="60">60 Mins</option>
                  <option value="90">90 Mins</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-1">
                  Price (USD) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  placeholder="e.g., 40"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm transition-all"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-secondary mb-1">
                Cover Image URL *
              </label>
              <input
                type="url"
                required
                placeholder="e.g., https://images.unsplash.com/photo-..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-secondary mb-1">
                Short Punchy Tagline/Description *
              </label>
              <input
                type="text"
                required
                maxLength={150}
                placeholder="Briefly summarize what the learner will gain in 1-2 sentences."
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-secondary mb-1">
                Full Detailed Description (Optional)
              </label>
              <textarea
                rows={5}
                placeholder="Elaborate on the topics covered, prerequisites, or session structure..."
                value={fullDescription}
                onChange={(e) => setFullDescription(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-sm transition-all resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary hover:bg-opacity-90 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-blue-50 disabled:bg-slate-400 cursor-pointer"
          >
            {loading ? "Publishing Slot..." : "🚀 Publish Slot"}
          </button>
        </form>
      </div>
    </div>
  );
}
