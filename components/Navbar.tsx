import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-white">
        <Logo />
        <nav className="hidden items-center gap-6 min-[640px]:flex md:flex">
          <Link href="/" className="font-medium">Home</Link>
          <Link href="/courses" className="text-white/80 hover:text-white">Courses</Link>
          <Link href="/creators/purepearl-studio" className="text-white/80 hover:text-white">Creators</Link>
        </nav>
        <div className="flex items-center gap-5">
          <Link href="/login" className="text-white/80 hover:text-white">Sign In</Link>
          <Link href="/signup" className="text-white/80 hover:text-white">Join Us</Link>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Cart">
            <path d="M6 8h12l-1 12H7L6 8Zm3 0a3 3 0 0 1 6 0" />
          </svg>
        </div>
      </div>
    </header>
  );
}
