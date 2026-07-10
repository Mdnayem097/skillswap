"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen antialiased py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Section */}
        <div className="space-y-3 text-left border-b border-slate-200 pb-6">
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
            Last Updated: July 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-slate-600 text-sm font-medium leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              At SkillSwap, we collect core transactional identity data to
              maintain your role-based infrastructure. This includes your name,
              verified email address, authentication passwords encrypted via
              secure cryptographic hash protocols, and profile details provided
              during dual-role registration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              2. How We Use Your Architecture Data
            </h2>
            <p>
              Your system metrics and dashboard logs are strictly utilized to
              provide live matchmaking services. Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-500">
              <li>
                To map, display, and manage mentor slots on the global discovery
                grid.
              </li>
              <li>
                To verify user roles (`mentor` vs. `learner`) across session
                endpoints via JWT tokens.
              </li>
              <li>
                To compile historical session booking receipts visible inside
                active dashboard panels.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              3. Cookies and Session State Processing
            </h2>
            <p>
              We enforce high-security **HTTP-only cookie tokens** to maintain
              persistent authorization states. These session tokens carry
              cryptographic payloads (`jose` / native JWT configuration) and
              prevent cross-site identity spoofing. We do not transmit tracking
              metadata to third-party profiling vendors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              4. Data Protection and Encryption Safeguards
            </h2>
            <p>
              All platform queries stream directly into authenticated **MongoDB
              Atlas Cloud Clusters**. Access configurations are locked via
              strict IP address access management hooks. Your records remain
              persistent unless you explicitly dispatch a deletion protocol to
              our system administration node.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              5. Contacting the System Administrator
            </h2>
            <p>
              If you wish to review, alter, or discard your platform profile
              context parameters, please issue an inquiry directly through our
              custom structural intake desk at the{" "}
              <Link
                href="/contact"
                className="text-blue-600 hover:underline font-bold"
              >
                Contact Page
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Footer Navigation Back to Safety */}
        <div className="pt-6 border-t border-slate-200/60 text-center">
          <Link
            href="/"
            className="text-xs font-bold text-slate-700 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-xs"
          >
            ← Return to Core Platform
          </Link>
        </div>
      </div>
    </div>
  );
}
