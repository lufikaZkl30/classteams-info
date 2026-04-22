"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
  { href: "/experiment", label: "Experiment" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm font-headline tracking-tight text-on-surface bg-slate-50 dark:bg-slate-800/50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold font-headline text-primary"
        >
          ClassTeams
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary hover:opacity-90 transition-all duration-300"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <button className="cta-gradient-bg text-on-primary px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-300 active:scale-95 ease-in-out">
          Get Started
        </button>
      </div>
    </header>
  );
}
