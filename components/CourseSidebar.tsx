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
    <aside className="rounded-3xl bg-white p-6 text-ink shadow-xl">
      <h2 className="text-lg font-semibold">{course.lessons} Lessons ({course.hours} hours)</h2>
      <ol className="mt-4 space-y-3 text-sm">
        {[
          ["Introduction to Digital Assets", "12 mins"],
          ["Design Principles for Impacts", "21 mins"],
          ["Advanced Techniques in Digital Creation", "16 mins"],
        ].map(([label, time], i) => (
          <li key={label} className="flex items-start justify-between gap-3">
            <span><span className="text-muted">0{i + 1}</span> <span className="ml-1">{label}</span></span>
            <span className="shrink-0 text-brand">{time}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-muted">{course.lessons - 3} more videos</p>
      <p className="mt-5 text-sm leading-6 text-muted">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <p className="mt-5 text-3xl font-semibold text-brand">${course.price}<span className="text-xs font-normal text-muted">/lifetime</span></p>
      <button className="mt-4 h-11 w-full rounded-full bg-lime text-sm font-medium text-ink hover:brightness-95">Enroll Now</button>

      <h3 className="mt-8 font-semibold">This course include</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {INCLUDES.map((i) => (
          <li key={i.label} className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth="1.8">{i.icon}</svg>
            {i.label}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3 border-t border-black/10 pt-5">
        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image src="/avatars/purepearl.jpg" alt="" fill className="object-cover" />
        </span>
        <div><p className="text-sm font-medium">PurePearl Studio</p><p className="text-xs text-muted">Professional Creator</p></div>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <Link href="/creators/purepearl-studio" className="mt-4 inline-block rounded-full border border-black/15 px-5 py-2 text-sm text-ink hover:bg-chip">See Full Profile</Link>
    </aside>
  );
}
