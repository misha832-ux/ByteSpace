import Link from "next/link";
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
        {/* Blue header band grows with its content, so long titles never spill onto white */}
        <div className="bg-grid relative pb-[76px] pt-28 sm:pt-32">
          <Navbar />
          <div className="relative mx-auto w-full max-w-5xl px-6">
            <div className="flex items-start justify-between gap-6 text-white">
              <div className="min-w-0">
                <h1 className="text-2xl font-semibold leading-tight md:text-4xl">{course.title}</h1>
                <p className="mt-2 text-sm text-white/85 md:mt-1">{course.tagline}</p>
                <p className="mt-3 text-sm md:mt-4">by <Link href="/creators/purepearl-studio" className="text-lime">purepearl studio</Link></p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs md:gap-3 md:text-sm">
                  <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-ink md:px-4 md:py-2">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor"><rect x="1" y="9" width="3" height="6" /><rect x="6" y="5" width="3" height="10" /><rect x="11" y="1" width="3" height="14" /></svg>
                    {course.level}
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-ink md:px-4 md:py-2">★ {course.rating} ({course.reviews} reviews)</span>
                  <span className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-ink md:px-4 md:py-2">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M17 8a3 3 0 1 0-3-3M22 20c0-2.7-2-5-4.5-5.8" /></svg>
                    {course.students} Students
                  </span>
                </div>
              </div>
              <button className="hidden shrink-0 items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-medium text-ink hover:brightness-95 sm:flex md:px-5 md:py-2.5 md:text-sm">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 10.5 15.4 6.5M8.6 13.5 15.4 17.5" /></svg>
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto -mt-[52px] w-full max-w-5xl px-6 pb-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:gap-5">
            <div className="min-w-0">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/10 sm:rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <div className="lg:sticky lg:top-6 lg:self-start"><CourseSidebar course={course} /></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
