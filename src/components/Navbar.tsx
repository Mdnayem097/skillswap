"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const loggedOutLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
  ];

  const loggedInLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Add Slot", href: "/items/add" },
    { name: "Manage Slots", href: "/items/manage" },
    { name: "Contact", href: "/contact" },
  ];

  const activeLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  return (
    <nav className="sticky top-0 z-50 bg-secondary text-white shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary tracking-wide">
              Skill<span className="text-accent">Swap</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {activeLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Auth Toggle Button (For Testing Purpose) */}
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="ml-4 px-4 py-2 text-xs font-semibold bg-primary hover:bg-opacity-90 text-white rounded-xl transition-all duration-200 shadow-sm"
            >
              {isLoggedIn ? "Logout (Demo)" : "Login (Demo)"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-in">
          {activeLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
              setIsOpen(false);
            }}
            className="w-full text-left block px-3 py-2 text-base font-medium bg-primary text-white rounded-xl mt-2"
          >
            {isLoggedIn ? "Logout (Demo)" : "Login (Demo)"}
          </button>
        </div>
      )}
    </nav>
  );
}