import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

const INCLUDES = [
  { label: "Learning Resources", icon: <path d="M4 5h9l3 3h4v11H4z" /> },
  { label: "Quality Lesson Videos", icon: <path d="M3 6h13v12H3zM16 10l5-3v10l-5-3" /> },
  { label: "Certificate of Completion", icon: <path d="M6 3h9l3 3v11H6zM9 14l2 2 4-4" /> },
  { label: "Private Consultation", icon: <path d="M4 12a8 8 0 1 1 8 8M4 12h4m-4 0 3-3m-3 3 3 3" /> },
];

export default function CourseSidebar({ course }: { course: Course }) {
  return (
    <aside className="rounded-2xl bg-white p-3 text-ink shadow-xl lg:rounded-3xl lg:p-6">
      <h2 className="text-[11px] font-semibold lg:text-lg">{course.lessons} Lessons ({course.hours} hours)</h2>
      <ol className="mt-3 space-y-2 text-[8px] lg:mt-4 lg:space-y-3 lg:text-sm">
        {[
          ["Introduction to Digital Assets", "12 mins"],
          ["Design Principles for Impacts", "21 mins"],
          ["Advanced Techniques in Digital Creation", "16 mins"],
        ].map(([label, time], i) => (
          <li key={label} className="flex items-start justify-between gap-3">
            <span><span className="text-muted">0{i + 1}</span> <span className="ml-1">{label}</span></span>
            <span className="shrink-0 text-[8px] text-brand lg:text-sm">{time}</span>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-[8px] text-muted lg:mt-3 lg:text-sm">{course.lessons - 3} more videos</p>
      <p className="mt-3 text-[8px] leading-4 text-muted lg:mt-5 lg:text-sm lg:leading-6">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <p className="mt-3 text-xl font-semibold lg:mt-5 lg:text-3xl text-brand">${course.price}<span className="text-xs font-normal text-muted">/lifetime</span></p>
      <button className="mt-2 h-8 w-full lg:mt-4 lg:h-11 rounded-full bg-lime text-[9px] font-medium lg:text-sm text-ink hover:brightness-95">Enroll Now</button>

      <h3 className="mt-5 text-[10px] font-semibold lg:mt-8 lg:text-base">This course include</h3>
      <ul className="mt-3 space-y-2 text-[8px] lg:mt-4 lg:space-y-3 lg:text-sm">
        {INCLUDES.map((i) => (
          <li key={i.label} className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-brand lg:h-4 lg:w-4" fill="none" stroke="currentColor" strokeWidth="1.8">{i.icon}</svg>
            {i.label}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-2 lg:mt-6 lg:gap-3 border-t border-black/10 pt-5">
        <span className="relative h-7 w-7 lg:h-10 lg:w-10 shrink-0 overflow-hidden rounded-full">
          <Image src="/avatars/purepearl.jpg" alt="" fill sizes="40px" className="object-cover" />
        </span>
        <div><p className="text-[9px] font-medium lg:text-sm">PurePearl Studio</p><p className="text-[7px] text-muted lg:text-xs">Professional Creator</p></div>
      </div>
      <p className="mt-3 text-[8px] leading-4 text-muted lg:mt-4 lg:text-sm lg:leading-6">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <Link href="/creators/purepearl-studio" className="mt-3 inline-block rounded-full border border-black/15 px-3 py-1.5 text-[8px] lg:px-5 lg:py-2 lg:text-sm text-ink hover:bg-chip">See Full Profile</Link>
    </aside>
  );
}
