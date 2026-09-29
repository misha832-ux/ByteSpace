import Navbar from "./Navbar";
import { Squiggle } from "./Shapes";

export default function PageHeroSearch({ title, dropdownLabel = "Courses" }: { title: string; dropdownLabel?: string }) {
  return (
    <section className="bg-grid relative overflow-hidden pb-20 pt-36">
      <Navbar />
      <Squiggle color="white" className="left-[6%] top-16 hidden h-16 w-16 md:block" />
      <Squiggle color="lime" className="right-[8%] top-10 hidden h-20 w-20 md:block" />
      <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
        <h1 className="text-3xl font-semibold md:text-4xl">{title}</h1>
        <form className="mx-auto mt-8 flex max-w-xl gap-3" action="#">
          <label className="flex h-11 flex-1 items-center gap-2 rounded-full bg-white px-4 text-sm text-muted">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.500-3.500" /></svg>
            <input placeholder="Search" className="w-full bg-transparent text-ink outline-none placeholder:text-muted" />
          </label>
          <button className="flex h-11 items-center gap-1.5 rounded-full bg-lime px-5 text-sm font-medium text-ink hover:brightness-95">
            {dropdownLabel}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
          </button>
        </form>
      </div>
    </section>
  );
}
