import Image from "next/image";

const VARIANTS = {
  "26+": { src: "/avatars/stack-26.png", w: 128, h: 32 },
  "2K+": { src: "/avatars/stack-2k.png", w: 232, h: 43 },
} as const;

export default function AvatarStack({ count = "26+", size = 26 }: { count?: "26+" | "2K+"; size?: number }) {
  const variant = VARIANTS[count] ?? VARIANTS["26+"];
  const height = size + 6; 
  const width = Math.round((variant.w / variant.h) * height);
  return (
    <span className="relative inline-block" style={{ width, height }}>
      <Image src={variant.src} alt={`${count} students`} fill sizes={`${width}px`} className="object-contain" />
    </span>
  );
}
