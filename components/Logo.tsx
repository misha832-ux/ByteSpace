import Link from "next/link";

export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path fill="#d4ff00" d="M4 3a3 3 0 0 1 3-3h3v11.2c1.4-1.3 3.3-2 5.4-2C21.8 9.2 26 13 26 18.6S21.800 28 15.400 28H7a3 3 0 0 1-3-3V3Zm11.200 12.400c-2.300 0-4 1.500-4 3.600s1.700 3.600 4 3.600 3.800-1.500 3.800-3.600-1.600-3.600-3.800-3.600Z" />
    </svg>
  );
}

export default function Logo({ dark = false, markOnly = false }: { dark?: boolean; markOnly?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="ByteSpace home">
      <LogoMark />
      {!markOnly && (
        <span className={`font-heading text-xl font-bold ${dark ? "text-ink" : "text-white"}`}>ByteSpace</span>
      )}
    </Link>
  );
}
