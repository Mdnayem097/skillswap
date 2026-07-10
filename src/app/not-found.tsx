"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#f8fafc] min-h-[85vh] antialiased flex flex-col items-center justify-center px-4 text-center space-y-6">
      
      {/* 🔮 Modern Ambient Blur Visual */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-blue-200/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-3">
        {/* Big Tech Error Code */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-slate-200 select-none">
          404
        </h1>
        
        {/* Subtitles */}
        <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
          Page Blocked or Missing.
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto font-medium leading-relaxed">
          The slot route or architecture path you are trying to lookup does not exist in our system schema. Let&apos;s get you back on track.
        </p>
      </div>

      {/* Navigation Call to Action */}
      <div className="relative z-10 pt-2">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-5 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 cursor-pointer"
        >
          <span>🏠 Return to Homepage</span>
        </Link>
      </div>

    </div>
  );
}