"use client";

export default function FilterBar({ showFilter = true }: { showFilter?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-3">
        {showFilter && (
          <button className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm text-ink hover:bg-chip">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M7 12h10M10 18h4" /></svg>
            Filter
          </button>
        )}
        <button className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm text-ink hover:bg-chip">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 20V10M10 20V4M16 20v-7" /></svg>
          Level
        </button>
        <button className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm text-ink hover:bg-chip">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><rect x="14" y="14" width="6" height="6" /></svg>
          Category
        </button>
      </div>
      <button className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-sm text-ink hover:bg-chip">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M7 12h10M10 17h4" /></svg>
        Most relevant
      </button>
    </div>
  );
}
