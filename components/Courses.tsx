"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { COURSES } from "@/lib/courses";

const CATEGORIES = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing",
  "Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography",
  "Productivity", "Web Development", "Data Science", "Cooking",
];

export default function Courses() {
  const [active, setActive] = useState("Featured");
  return (
    <section id="courses" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-semibold leading-snug text-ink md:text-4xl">Discover Your Passion,<br />Build Your Skills</h2>
      <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
      </p>
      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
        {CATEGORIES.map((c) => (
          <button key={c} onClick={() => setActive(c)} className={`rounded-full px-4 py-2 text-xs transition ${active === c ? "bg-lime font-medium text-ink" : "bg-chip text-ink hover:bg-black/10"}`}>{c}</button>
        ))}
        <button className="px-2 py-2 text-xs text-brand">+ More</button>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (<CourseCard key={c.slug} course={c} />))}
      </div>
    </section>
  );
}
