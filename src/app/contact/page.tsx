"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // আমরা ফ্রন্টএন্ডে একটি ১ সেকেন্ডের ফেক ডিলে (Delay) দিয়ে সাকসেস স্টেট দেখাচ্ছি
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen antialiased py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 space-y-6 lg:pt-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              We&apos;re here to help you grow.
            </h1>
            <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
              Have questions about booking slots, billing, or applying to be a
              verified technical mentor? Drop us a line and our team will adapt
              shortly.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-200/60">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-sm shadow-xs">
                ✉️
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Email Us
                </h4>
                <p className="text-sm font-semibold text-slate-800">
                  support@skillswap.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-sm shadow-xs">
                🏢
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  HQ Location
                </h4>
                <p className="text-sm font-semibold text-slate-800">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50">
          {success ? (
            <div className="text-center py-12 space-y-4">
              <span className="text-4xl block">🎉</span>
              <h3 className="text-xl font-bold text-slate-900">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto font-medium">
                Thank you for reaching out. One of our platform engineers or
                support staff will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-2 text-xs font-bold text-primary hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white transition-all cursor-pointer font-medium text-slate-700"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Mentor Application">Mentor Application</option>
                  <option value="Booking Issues">Booking & Refunds</option>
                  <option value="Technical Bug">Report a Bug</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  How can we help? *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us what you need help with..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-all shadow-md disabled:bg-slate-400 cursor-pointer"
              >
                {submitting ? "Sending..." : "✉️ Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
