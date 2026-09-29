import PageHeroSearch from "@/components/PageHeroSearch";
import FilterBar from "@/components/FilterBar";
import CourseCard from "@/components/CourseCard";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import { COURSES } from "@/lib/courses";

const CATEGORIES = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];

export const metadata = { title: "Find Your Next Course — ByteSpace" };

export default function CoursesPage() {
  const grid = Array.from({ length: 3 }, () => COURSES).flat();
  return (
    <main>
      <PageHeroSearch title="Find Your Next Course" />
      <section id="courses" className="mx-auto max-w-6xl px-6 py-14">
        <FilterBar />
        <div className="mt-6 flex flex-wrap gap-3">
          {CATEGORIES.map((c, i) => (
            <span key={c} className={`rounded-full px-4 py-2 text-xs ${i === 0 ? "bg-lime font-medium text-ink" : "bg-chip text-ink"}`}>{c}</span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((c, i) => (<CourseCard key={`${c.slug}-${i}`} course={c} />))}
        </div>
        <Pagination page={1} total={5} />
      </section>
      <Footer />
    </main>
  );
}
