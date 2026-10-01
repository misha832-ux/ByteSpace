import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseSidebar from "@/components/CourseSidebar";
import CourseDetailTabs from "@/components/CourseDetailTabs";
import { COURSES, getCourse } from "@/lib/courses";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course ? `${course.title} — ByteSpace` : "Course — ByteSpace" };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main>
      <section className="relative bg-white">
        <div className="bg-grid absolute inset-x-0 top-0 h-[356px]" aria-hidden />
        <Navbar />
        <div className="relative mx-auto w-full max-w-[450px] px-0 pb-10 pt-32 sm:max-w-5xl sm:px-6">
          <div className="flex items-start justify-between gap-6 text-white">
            <div>
              <h1 className="text-xl font-semibold md:text-4xl">{course.title}</h1>
              <p className="mt-1 text-[10px] text-white/85 md:text-sm">{course.tagline}</p>
              <p className="mt-2 text-[9px] md:mt-4 md:text-sm">by <a href="/creators/purepearl-studio" className="text-lime">purepearl studio</a></p>
              <div className="mt-3 flex flex-wrap gap-2 text-[9px] md:mt-4 md:gap-3 md:text-sm">
                <span className="flex items-center gap-2 rounded-full bg-white px-2.5 py-1 text-ink md:px-4 md:py-2">
                  <svg viewBox="0 0 16 16" className="h-3 w-3 md:h-3.5 md:w-3.5" fill="currentColor"><rect x="1" y="9" width="3" height="6" /><rect x="6" y="5" width="3" height="10" /><rect x="11" y="1" width="3" height="14" /></svg>
                  {course.level}
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white px-2.5 py-1 text-ink md:px-4 md:py-2">★ {course.rating} ({course.reviews} reviews)</span>
                <span className="flex items-center gap-2 rounded-full bg-white px-2.5 py-1 text-ink md:px-4 md:py-2">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 md:h-3.5 md:w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.500 2.700-6 6-6s6 2.500 6 6M17 8a3 3 0 1 0-3-3M22 20c0-2.700-2-5-4.500-5.800" /></svg>
                  {course.students} Students
                </span>
              </div>
            </div>
            <button className="hidden shrink-0 items-center gap-2 rounded-full bg-lime px-4 py-2 text-[10px] sm:flex md:px-5 md:py-2.5 md:text-sm font-medium text-ink hover:brightness-95 sm:flex md:flex">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 10.5 15.4 6.5M8.6 13.5 15.4 17.5" /></svg>
              Share
            </button>
          </div>

          <div className="mt-6 grid grid-cols-[minmax(0,1fr)_155px] gap-5 max-[479px]:grid-cols-1 sm:grid-cols-[minmax(0,1fr)_155px] lg:grid-cols-[1fr_360px]">
            <div>
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-white/10">
                <img src={course.video ?? course.image} alt="" className="h-full w-full object-cover" />
                {!course.video && (
                  <button aria-label="Play video" className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40 backdrop-blur">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </button>
                )}
              </div>
              <div className="mt-6 text-ink md:mt-10">
                <CourseDetailTabs course={course} />
              </div>
            </div>
            <div className="sticky top-6 self-start max-[479px]:static"><CourseSidebar course={course} /></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
