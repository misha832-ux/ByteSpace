import Image from "next/image";
import AvatarStack from "./AvatarStack";

export type Course = { title: string; image: string };

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white p-3">
      <div className="relative h-40 overflow-hidden rounded-2xl">
        <Image src={course.image} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 text-[11px] text-ink/80">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((t) => (
            <span key={t} className="rounded-full bg-white/70 px-3 py-1 backdrop-blur">{t}</span>
          ))}
        </div>
      </div>
      <div className="px-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-base font-semibold text-ink">{course.title}</h3>
          <span className="shrink-0 text-sm text-muted">4.5 <span className="text-black/20">★</span></span>
        </div>
        <p className="text-[11px] text-muted">by <span className="text-brand">purepearl studio</span></p>
        <div className="mt-3 flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-chip px-3 py-1.5 text-[11px] text-ink">
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor"><rect x="1" y="9" width="3" height="6" /><rect x="6" y="5" width="3" height="10" /><rect x="11" y="1" width="3" height="14" /></svg>
            Beginner
          </span>
          <AvatarStack />
        </div>
        <p className="mt-3 pb-2 text-lg font-semibold text-brand">$25<span className="text-[10px] font-normal text-muted">/lifetime</span></p>
      </div>
    </article>
  );
}
