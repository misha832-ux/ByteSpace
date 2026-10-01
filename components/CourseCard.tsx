import Image from "next/image";
import Link from "next/link";
import AvatarStack from "./AvatarStack";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white p-3">
      <Link href={`/courses/${course.slug}`} className="relative block h-40 overflow-hidden rounded-2xl">
        <Image src={course.image} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5 px-2 text-[10px] text-ink/80 sm:gap-2 sm:text-[11px]">
          <span className="whitespace-nowrap rounded-full bg-white/70 px-2.5 py-1 backdrop-blur sm:px-3">{course.lessons} Lessons</span>
          <span className="whitespace-nowrap rounded-full bg-white/70 px-2.5 py-1 backdrop-blur sm:px-3">{course.hours} hours 16 mins</span>
          <span className="hidden whitespace-nowrap rounded-full bg-white/70 px-2.5 py-1 backdrop-blur min-[400px]:inline sm:px-3">{course.comments} Comments</span>
        </div>
      </Link>
      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/courses/${course.slug}`} className="truncate text-base font-semibold text-ink hover:text-brand">{course.title}</Link>
          <span className="shrink-0 text-sm text-muted">{course.rating} <span className="text-black/20">★</span></span>
        </div>
        <p className="text-[11px] text-muted">by <Link href="/creators/purepearl-studio" className="text-brand">purepearl studio</Link></p>
        <div className="mt-3 flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-chip px-3 py-1.5 text-[11px] text-ink">
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor"><rect x="1" y="9" width="3" height="6" /><rect x="6" y="5" width="3" height="10" /><rect x="11" y="1" width="3" height="14" /></svg>
            {course.level}
          </span>
          <AvatarStack />
        </div>
        <p className="mt-3 pb-2 text-lg font-semibold text-brand">${course.price}<span className="text-[10px] font-normal text-muted">/lifetime</span></p>
      </div>
    </article>
  );
}
