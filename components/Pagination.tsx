export default function Pagination({ page = 1, total = 5 }: { page?: number; total?: number }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
      <button aria-label="Previous page" disabled={page <= 1} className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink disabled:opacity-40">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 6-6 6 6 6" /></svg>
      </button>
      {pages.map((p) => (
        <button key={p} aria-current={p === page} className={`h-9 w-9 rounded-full text-sm ${p === page ? "font-semibold text-ink" : "text-muted hover:text-ink"}`}>{p}</button>
      ))}
      <button aria-label="Next page" disabled={page >= total} className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink disabled:opacity-40">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6" /></svg>
      </button>
    </nav>
  );
}
