import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/help", label: "Help Center" },
  { href: "/careers", label: "Careers" },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto bg-slate-50 dark:bg-slate-950 font-body text-sm border-t border-slate-200/50 dark:border-slate-800/50 text-on-surface">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold font-headline text-on-surface">
          ClassTeams
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-on-surface-variant hover:text-primary hover:underline transition-all opacity-80 hover:opacity-100"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="text-on-surface-variant">
          © 202 ClassTeams. The Digital Atheneum.| Lufika Ayu Fatimah - Modul 7
        </div>
      </div>
    </footer>
  );
}
