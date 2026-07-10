"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ISession {
  _id: string;
  title: string;
  category: string;
  price: number;
  duration: number;
  rating: number;
}

interface IBooking {
  _id: string;
  learnerName: string;
  learnerEmail: string;
  status: string;
  createdAt: string;
  sessionId: {
    title: string;
    duration: number;
    price: number;
  } | null;
}

export default function ManageSlotsPage() {
  const [sessions, setSessions] = useState<ISession[]>([]);
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ১. মেন্টরের স্লট নিয়ে আসা
        const resSlots = await fetch("/api/sessions/mentor");
        const dataSlots = await resSlots.json();

        // ২. মেন্টরের কাছে আসা বুকিংগুলো নিয়ে আসা
        const resBookings = await fetch("/api/bookings/mentor");
        const dataBookings = await resBookings.json();

        if (dataSlots.success) setSessions(dataSlots.sessions);
        if (dataBookings.success) setBookings(dataBookings.bookings);
      } catch (err: unknown) {
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this mentorship slot?"))
      return;
    try {
      const res = await fetch(`/api/sessions/${id}`, { method: "DELETE" });
      if (res.ok) {
        setSessions((prev) => prev.filter((session) => session._id !== id));
      }
    } catch (err) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 text-sm mt-2">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* ---------------- SECTION 1: MANAGE SLOTS ---------------- */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-secondary tracking-tight">
              Manage Your Slots
            </h1>
            <p className="text-sm text-slate-500">
              Track, review, or add new live 1-on-1 performance slots.
            </p>
          </div>
          <Link
            href="/items/add"
            className="px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-opacity-90 transition-all"
          >
            ➕ Create New Slot
          </Link>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
            <p className="text-sm text-slate-500">
              You haven&apos;t published any slots yet.
            </p>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Session Topic</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium">
                {sessions.map((session) => (
                  <tr key={session._id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-bold text-secondary">
                      {session.title}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-lg">
                        {session.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      ⏱️ {session.duration} Mins
                    </td>
                    <td className="px-6 py-4 font-extrabold">
                      ${session.price}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Link
                        href={`/explore/${session._id}`}
                        className="text-xs bg-slate-100 text-secondary px-3 py-1.5 rounded-lg"
                      >
                        View
                      </Link>
                      <Link
                        href={`/items/edit/${session._id}`}
                        className="text-xs bg-blue-50 text-primary px-3 py-1.5 rounded-lg"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(session._id)}
                        className="text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ---------------- SECTION 2: INCOMING BOOKINGS ---------------- */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-secondary tracking-tight">
            Incoming Bookings
          </h2>
          <p className="text-sm text-slate-500">
            See who has booked your slots and is waiting for mentorship.
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
            <p className="text-sm text-slate-500">
              No bookings received yet. Once a learner books your session, it
              will appear here!
            </p>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4">Learner Info</th>
                  <th className="px-6 py-4">Booked Session</th>
                  <th className="px-6 py-4">Paid Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium">
                {bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4">
                      <div className="font-bold text-secondary">
                        {booking.learnerName}
                      </div>
                      <div className="text-xs text-slate-400 font-normal">
                        {booking.learnerEmail}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-medium">
                      {booking.sessionId ? (
                        booking.sessionId.title
                      ) : (
                        <span className="text-red-400 italic">
                          Deleted Session
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-extrabold text-emerald-600">
                      ${booking.sessionId ? booking.sessionId.price : 0}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide">
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
