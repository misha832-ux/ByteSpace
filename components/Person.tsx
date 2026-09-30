import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

export default function Person({ name, className = "", width = 420, height = 460 }: { name: string; className?: string; width?: number; height?: number }) {
  const file = `/images/${name}.png`;
  const exists = fs.existsSync(path.join(process.cwd(), "public", file));
  if (exists) return <Image src={file} alt="" width={width} height={height} className={className} priority />;
  return (
    <svg viewBox="0 0 200 220" className={className} aria-hidden>
      <defs><linearGradient id={`g-${name}`} x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#3a4a8a" /><stop offset="1" stopColor="#1c2350" /></linearGradient></defs>
      <path d="M20 220c0-52 34-78 80-78s80 26 80 78Z" fill={`url(#g-${name})`} />
      <circle cx="100" cy="80" r="42" fill="#e8b89a" />
      <path d="M58 76c0-30 18-46 44-46s40 16 40 42c-10-16-30-22-84 4Z" fill="#4a2f22" />
    </svg>
  );
}
