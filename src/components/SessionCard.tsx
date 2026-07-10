"use client";

import Link from "next/link";

interface SessionCardProps {
  session: {
    _id: string;
    title: string;
    shortDescription: string;
    category: string;
    price: number;
    duration: number;
    imageUrl: string;
    rating: number;
  };
}

export default function SessionCard({ session }: SessionCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
      {/* Session Image */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={session.imageUrl}
          alt={session.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 bg-secondary/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg">
          {session.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <div className="flex items-center space-x-1">
            <span>⏱️ {session.duration} Mins</span>
          </div>
          <div className="flex items-center space-x-1 text-amber-500 font-bold">
            <span>⭐ {session.rating.toFixed(1)}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-secondary line-clamp-1 hover:text-primary transition-colors">
          {session.title}
        </h3>

        <p className="text-sm text-slate-500 line-clamp-2 flex-grow">
          {session.shortDescription}
        </p>

        <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Investment</span>
            <span className="text-xl font-extrabold text-secondary">${session.price}</span>
          </div>
          <Link
            href={`/explore/${session._id}`}
            className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}