import Image from "next/image";

const FACES = ["/avatars/stack1.jpg", "/avatars/albert.jpg", "/avatars/cody.jpg", "/avatars/brooklyn.jpg"];

export default function AvatarStack({ count = "26+", size = 26, dark = false }: { count?: string; size?: number; dark?: boolean }) {
  return (
    <div className="flex items-center">
      {FACES.map((src, i) => (
        <span
          key={src}
          className="relative -ml-1.5 first:ml-0 overflow-hidden rounded-full border-2 border-white"
          style={{ width: size, height: size }}
        >
          <Image src={src} alt="" fill className="object-cover" />
        </span>
      ))}
      <span
        className={`-ml-1.5 flex items-center justify-center rounded-full text-[10px] font-medium ${dark ? "bg-ink text-white" : "bg-lime text-ink"}`}
        style={{ width: size, height: size }}
      >
        {count}
      </span>
    </div>
  );
}
