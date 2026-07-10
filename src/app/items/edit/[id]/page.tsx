"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function EditSlotPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Development");
  const [duration, setDuration] = useState("45");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // পেজ লোড হলে আগের ডাটা নিয়ে আসা
  useEffect(() => {
    fetch(`/api/sessions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.session) {
          const s = data.session;
          setTitle(s.title);
          setCategory(s.category);
          setDuration(String(s.duration));
          setPrice(String(s.price));
          setImageUrl(s.imageUrl);
          setShortDescription(s.shortDescription);
          setFullDescription(s.fullDescription || "");
        } else {
          setError("Failed to fetch session details.");
        }
      })
      .catch(() => setError("Error loading data"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`/api/sessions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          imageUrl,
          shortDescription,
          fullDescription,
          duration: Number(duration),
          price: Number(price),
        }),
      });

      const data = (await res.json()) as { success: boolean; error?: string };
      if (!res.ok || !data.success)
        throw new Error(data.error || "Update failed");

      setSuccess("🎉 Slot updated successfully!");
      setTimeout(() => router.push("/items/manage"), 1500);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return (
      <p className="text-center py-12 text-sm text-slate-500">
        Loading slot data...
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs space-y-6">
        <h2 className="text-2xl font-bold text-secondary">
          Edit Mentorship Slot
        </h2>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl">
            ⚠️ {error}
          </div>
        )}
        {success && (
          <div className="p-3 bg-emerald-50 text-emerald-600 text-sm rounded-xl">
            🎉 {success}
          </div>
        )}

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-secondary mb-1">
              Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-secondary mb-1">
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              >
                <option value="30">30 Mins</option>
                <option value="45">45 Mins</option>
                <option value="60">60 Mins</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-1">
                Price (USD)
              </label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary mb-1">
              Image URL
            </label>
            <input
              type="url"
              required
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary mb-1">
              Short Description
            </label>
            <input
              type="text"
              required
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-primary text-white font-bold rounded-xl text-sm"
          >
            {submitting ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
