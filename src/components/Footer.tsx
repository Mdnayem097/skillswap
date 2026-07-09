import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-primary tracking-wide">
              Skill<span className="text-accent">Swap</span>
            </Link>
            <p className="text-sm text-slate-400">
              Share your expertise, mentor global learners, and scale your professional network in real-time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/explore" className="hover:text-primary transition-colors">Explore Sessions</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Our Blog</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact info</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📧 support@skillswap.com</li>
              <li>📞 +1 (555) 019-2834</li>
              <li>📍 Dhaka, Bangladesh</li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} SkillSwap Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}