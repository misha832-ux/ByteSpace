import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterBar from "@/components/FilterBar";
import CourseCard from "@/components/CourseCard";
import { Squiggle } from "@/components/Shapes";
import { CREATORS, getCreator } from "@/lib/creators";
import { COURSES } from "@/lib/courses";

export function generateStaticParams() {
  return CREATORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creator = getCreator(slug);
  return { title: creator ? `${creator.name} — ByteSpace` : "Creator — ByteSpace" };
}

export default async function CreatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  return (
    <main>
      <section className="bg-grid relative overflow-hidden pb-14 pt-28 text-white">
        <Navbar />
        <Squiggle color="white" className="right-[6%] top-16 hidden h-16 w-16 md:block" />
        <div className="relative mx-auto flex max-w-6xl items-start justify-between gap-6 px-6">
          <div className="flex items-start gap-5">
            <span className="h-20 w-20 shrink-0 rounded-2xl bg-[#f3a3b8]" aria-hidden />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-semibold md:text-3xl">{creator.name}</h1>
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-medium text-ink">Creator</span>
              </div>
              <p className="mt-1 text-white/80">{creator.role}</p>
              <div className="mt-4 max-w-2xl space-y-2 text-sm leading-6 text-white/85">
                {creator.bio.map((p) => (<p key={p.slice(0, 12)}>{p}</p>))}
              </div>
              <div className="mt-5 flex gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink">{creator.products} Products</span>
                <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink">{creator.followers} Followers</span>
              </div>
            </div>
          </div>
          <button className="hidden shrink-0 rounded-full bg-lime px-6 py-2.5 text-sm font-medium text-ink hover:brightness-95 md:block">Follow</button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <FilterBar />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 6).map((c) => (<CourseCard key={c.slug} course={c} />))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
