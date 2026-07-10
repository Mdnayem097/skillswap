"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";

interface ISession {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  price: number;
  duration: number;
  imageUrl: string;
  rating: number;
}

export default function SessionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Next.js 15-এ ক্লায়েন্ট কম্পোনেন্টে params আনবক্স করার জন্য use() হুক বেস্ট
  const { id } = use(params);

  const [session, setSession] = useState<ISession | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSessionDetails = async () => {
      try {
        const res = await fetch(`/api/sessions/${id}`);
        const data = (await res.json()) as {
          success: boolean;
          session?: ISession;
          error?: string;
        };

        if (!res.ok || !data.success) {
          throw new Error(data.error || "Session not found");
        }

        if (data.session) {
          setSession(data.session);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSessionDetails();
  }, [id]);

  const [bookingLoading, setBookingLoading] = useState(false);

  const handleBooking = async () => {
    setBookingLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: id }),
      });

      const data = (await res.json()) as {
        success: boolean;
        message?: string;
        error?: string;
      };

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Booking failed");
      }

      alert(data.message || "🎉 Booking successful!");
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-sm mt-2">
          Loading session details...
        </p>
      </div>
    );
  }

  if (error || !session) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <span className="text-4xl">⚠️</span>
        <h2 className="text-xl font-bold text-secondary">
          {error || "Session Not Found"}
        </h2>
        <Link
          href="/explore"
          className="inline-block px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold"
        >
          Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back Button */}
      <Link
        href="/explore"
        className="inline-flex items-center text-sm font-semibold text-primary hover:underline mb-6"
      >
        ← Back to Explore
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left 2 Columns: Main Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-64 md:h-96 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={session.imageUrl}
              alt={session.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">
              {session.category}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-4 text-sm text-slate-500 font-medium">
              <span>⏱️ {session.duration} Minutes Session</span>
              <span>⭐ {session.rating.toFixed(1)} Rating</span>
            </div>
            <h1 className="text-3xl font-extrabold text-secondary tracking-tight">
              {session.title}
            </h1>
          </div>

          <hr className="border-slate-200" />

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-secondary">
              About this Session
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
              {session.fullDescription || session.shortDescription}
            </p>
          </div>
        </div>

        {/* Right 1 Column: Investment & Booking Widget */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs sticky top-24 space-y-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              Session Fee
            </span>
            <div className="text-4xl font-black text-secondary">
              ${session.price}{" "}
              <span className="text-xs font-medium text-slate-500">USD</span>
            </div>
          </div>

          <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Format:</span>
              <span className="font-semibold text-secondary">
                1-on-1 Live Video
              </span>
            </div>
            <div className="flex justify-between">
              <span>Support:</span>
              <span className="font-semibold text-secondary">
                Q&A + Recording
              </span>
            </div>
          </div>

          {/* Booking Action Button */}
          <button
            onClick={handleBooking}
            disabled={bookingLoading}
            className="w-full py-3.5 bg-primary hover:bg-opacity-90 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-blue-50 disabled:bg-slate-400 cursor-pointer"
          >
            {bookingLoading
              ? "Processing Booking..."
              : "⚡ Book 1-on-1 Session"}
          </button>

          <p className="text-center text-xs text-slate-400 font-medium">
            100% Satisfaction Guarantee or full refund.
          </p>
        </div>
      </div>
    </div>
  );
}
