type P = { className?: string };

/* Simple CSS/SVG stand-ins for the 3D shapes in the design. */
export function Squiggle({ className = "", color = "lime" }: P & { color?: "lime" | "white" }) {
  const c = color === "lime" ? "#d4ff00" : "#ffffff";
  return (
    <svg viewBox="0 0 120 120" className={`absolute ${className}`} aria-hidden>
      <path d="M12 30 C50 10 90 20 100 32 C90 44 40 40 20 54 C50 60 95 56 104 70 C80 86 40 80 16 92" fill="none" stroke={c} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Ring({ className = "", color = "white" }: P & { color?: "lime" | "white" }) {
  const c = color === "lime" ? "#d4ff00" : "#ffffff";
  return (
    <span
      className={`absolute rounded-full ${className}`}
      style={{ border: `28px solid ${c}`, boxShadow: "inset 0 -8px 14px rgba(0,0,0,.10)" }}
      aria-hidden
    />
  );
}

export function Cone({ className = "", color = "white" }: P & { color?: "lime" | "white" }) {
  const c = color === "lime" ? "#d4ff00" : "#f6f6f6";
  return (
    <svg viewBox="0 0 100 100" className={`absolute ${className}`} aria-hidden>
      <polygon points="50,4 96,90 6,84" fill={c} stroke={c} strokeWidth="8" strokeLinejoin="round" />
    </svg>
  );
}

export function Cylinder({ className = "", color = "lime" }: P & { color?: "lime" | "white" }) {
  return (
    <span
      className={`absolute rounded-[28px] ${className}`}
      style={{ background: color === "lime" ? "linear-gradient(135deg,#e6ff3d,#c7f500)" : "linear-gradient(135deg,#fff,#e9e9ee)" }}
      aria-hidden
    />
  );
}
