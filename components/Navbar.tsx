"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators/purepearl-studio", label: "Creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm text-white sm:py-6">
        <Logo />

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Main">
          <Link href="/" className="font-medium">Home</Link>
          <Link href="/courses" className="text-white/80 hover:text-white">Courses</Link>
          <Link href="/creators/purepearl-studio" className="text-white/80 hover:text-white">Creators</Link>
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <Link href="/login" className="hidden text-white/80 hover:text-white sm:inline">Sign In</Link>
          <Link href="/signup" className="hidden text-white/80 hover:text-white sm:inline">Join Us</Link>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Cart">
            <path d="M6 8h12l-1 12H7L6 8Zm3 0a3 3 0 0 1 6 0" />
          </svg>

          <button
            type="button"
            className="-mr-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="mx-4 rounded-3xl bg-white p-3 text-ink shadow-xl sm:hidden"
        >
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium hover:bg-chip"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 grid grid-cols-2 gap-3 border-t border-black/10 p-2 pt-4">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-full border border-black/15 text-sm font-medium hover:bg-chip"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-full bg-lime text-sm font-medium hover:brightness-95"
            >
              Join Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
