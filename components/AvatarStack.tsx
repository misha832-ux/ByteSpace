const COLORS = ["#0e0e1a", "#f28ab2", "#f5b83d", "#5a6fd6", "#2a2a35", "#b45f4a"];

export default function AvatarStack({ count = "26+", size = 26, dark = false }: { count?: string; size?: number; dark?: boolean }) {
  return (
    <div className="flex items-center">
      {COLORS.slice(0, 5).map((c, i) => (
        <span
          key={i}
          className="-ml-1.5 first:ml-0 rounded-full border-2 border-white"
          style={{ width: size, height: size, background: c }}
        />
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
