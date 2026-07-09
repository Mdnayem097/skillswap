import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION (Height: 65vh) */}
      <section className="relative h-[65vh] flex items-center justify-center bg-secondary text-white overflow-hidden px-4">
        {/* Background Decorative Gradient Blurs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent opacity-20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6 z-10">
          <span className="px-4 py-1.5 text-xs font-semibold bg-slate-800 text-accent border border-slate-700 rounded-full inline-block animate-pulse">
            🚀 Learn from Verified Tech Experts
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Bridge Your Knowledge Gap with{" "}
            <span className="text-primary">SkillSwap</span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto">
            Book instant 1-on-1 micro-consulting sessions, code reviews, and
            career mentorship slots with top-tier professionals.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/explore"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-medium rounded-xl hover:bg-opacity-90 transition-all shadow-lg text-center"
            >
              Explore Sessions ➜
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 text-slate-200 font-medium rounded-xl hover:bg-slate-700 transition-all text-center border border-slate-700"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Requirements Rule: Clear Visual Flow Indicator to Next Section */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#statistics" className="text-slate-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <section
        id="statistics"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 md:p-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-extrabold text-primary">15,000+</h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Minutes Mentored
            </p>
          </div>
          <div className="space-y-2 border-y sm:border-y-0 sm:border-x border-slate-100 py-6 sm:py-0">
            <h3 className="text-4xl font-extrabold text-secondary">450+</h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Verified Experts
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-extrabold text-accent">4.9/5★</h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Average Session Rating
            </p>
          </div>
        </div>
      </section>

      {/* 3. TOP CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-secondary">
            Browse Top Capabilities
          </h2>
          <p className="mt-2 text-slate-500">
            Find guidance across critical modern domains and frameworks.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Full Stack Development",
              desc: "Next.js, TypeScript, Node.js",
              icon: "💻",
            },
            {
              title: "UI/UX Architecture",
              desc: "Figma Component Systems, UX Research",
              icon: "🎨",
            },
            {
              title: "DevOps & Cloud",
              desc: "Docker, AWS Ecosystem, CI/CD",
              icon: "☁️",
            },
            {
              title: "System Design",
              desc: "Scalable Databases, Microservices",
              icon: "⚙️",
            },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-6 rounded-xl hover:border-primary hover:shadow-md transition-all group"
            >
              <span className="text-4xl mb-4 block">{cat.icon}</span>
              <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section
        id="how-it-works"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900 text-white rounded-xl py-12 px-8 md:p-16 scroll-mt-20"
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Simple 3-Step Process</h2>
          <p className="mt-2 text-slate-400">
            How to unlock instant professional alignment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            {
              step: "01",
              title: "Find Your Expert",
              desc: "Filter through verified professionals based on active technical stack or business mastery.",
            },
            {
              step: "02",
              title: "Select a Time Slot",
              desc: "Pick a direct schedule that works perfectly for your immediate debugging or deep-dive needs.",
            },
            {
              step: "03",
              title: "Scale Your Skills",
              desc: "Connect live on our dedicated channel for secure, efficient code collaboration or strategy architecture.",
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-3 relative">
              <span className="text-5xl font-black text-slate-800 block">
                {item.step}
              </span>
              <h3 className="text-xl font-bold text-accent">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HIGHLIGHTS / WHY US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary tracking-tight">
              Engineered for Fast, Impactful Knowledge Exchanges
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We eliminate traditional course drag. Instead of filtering through
              hours of generalized video tutorials, get precise answers directly
              tailored to your active production blockers.
            </p>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                ✅ Strictly Peer-Reviewed and Verified Experts
              </li>
              <li className="flex items-center gap-2">
                ✅ Integrated Payment Infrastructure & Escrow Protection
              </li>
              <li className="flex items-center gap-2">
                ✅ On-Demand Scheduling System Integration
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary to-purple-600 h-64 md:h-80 rounded-xl shadow-inner flex items-center justify-center text-white text-lg font-bold p-6 text-center">
            Your Next Production Breakthrough is Just a 30-Minute Meeting Away.
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-secondary">Success Stories</h2>
          <p className="mt-2 text-slate-500">
            See how real developers bypassed critical deployment roadblocks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Rahat Karim",
              role: "Junior Frontend Engineer",
              text: "I was stuck on a complex Next.js middleware routing architecture for three days. Booked a 30-minute session and solved it live. Absolutely game-changing.",
            },
            {
              name: "Sarah Jenkins",
              role: "UI Designer",
              text: "Getting raw, unedited UX feedback from a senior product designer helped me structure my system workflow with supreme confidence. Totally worth it.",
            },
            {
              name: "Tanvir Ahmed",
              role: "CS Student",
              text: "The mock system design interview slot prepared me for top-tier agency reviews. The direct feedback loop is something university labs just cannot simulate.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between shadow-sm"
            >
              <p className="text-sm italic text-slate-600">"{t.text}"</p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-secondary">{t.name}</h4>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CALL TO ACTION & FAQ PREVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8 md:p-12">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            Ready to Level Up Your Integration Speed?
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">
            Join thousands of modern engineers optimizing their workflows by
            gaining direct, actionable architectural clarity.
          </p>
        </div>
        <div>
          <Link
            href="/explore"
            className="px-8 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all inline-block shadow-md shadow-emerald-100"
          >
            Find a Mentor Now
          </Link>
        </div>
      </section>
    </div>
  );
}
