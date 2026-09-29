const PATHS: { label: string; icon: React.ReactNode }[] = [
  { label: "Design", icon: <path d="M4 20l4-1 10-10-3-3L5 16l-1 4Zm11-13 3 3" /> },
  { label: "Development", icon: <path d="M8 5h8v14H8zM11 9l-2 2 2 2m2-4 2 2-2 2" /> },
  { label: "IT & Software", icon: <path d="M5 6h14v9H5zM3 18h18" /> },
  { label: "Business", icon: <path d="M5 20V5h9v15M14 10h5v10M8 8h3M8 12h3M8 16h3" /> },
  { label: "Marketing", icon: <path d="M4 12l14-6v12L4 12Zm3 1v5h3" /> },
  { label: "Photography", icon: <path d="M4 8h4l1.500-2h5L16 8h4v11H4zM12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /> },
];

export default function Paths() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <h2 className="text-center text-2xl font-semibold text-ink md:text-3xl">Explore Diverse Learning Paths at Bytespace</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {PATHS.map((p) => (
          <a key={p.label} href="#courses" className="flex flex-col items-center gap-3 rounded-3xl border border-black/10 bg-white px-4 py-6 text-sm text-ink transition hover:shadow-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#0e0e1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p.icon}</svg>
            </span>
            {p.label}
          </a>
        ))}
      </div>
    </section>
  );
}
