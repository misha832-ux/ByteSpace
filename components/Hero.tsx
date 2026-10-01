import Image from "next/image";
import Navbar from "./Navbar";
import Person from "./Person";
import { Squiggle, Cone, Cylinder } from "./Shapes";

function Students() {
  return (
    <span className="relative block h-[2.1em] w-[11.3em]">
      <Image src="/avatars/stack-2k.png" alt="2K+ students" fill sizes="200px" className="object-contain object-left" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden pb-0">
      <Navbar />

      <Squiggle color="lime" className="-left-6 top-40 h-40 w-40 md:-left-[2%] md:top-[270px] md:h-60 md:w-60" />
      <Squiggle color="white" className="hidden md:block md:left-[14.5%] md:bottom-[404px] md:h-28 md:w-28" />
      <Cylinder className="-right-10 top-40 hidden h-56 w-32 rotate-12 md:-right-[1.5%] md:top-[285px] md:block md:h-[260px] md:w-[150px]" />
      <Cone className="hidden md:left-[79%] md:bottom-[404px] md:block md:h-32 md:w-32" />

      <div className="relative mx-auto max-w-4xl px-6 pt-36 text-center text-white">
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Get Access to Hundreds Courses Available</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm text-white/85 md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <form className="mx-auto mt-9 flex max-w-lg gap-3" action="#">
          <label className="flex h-11 flex-1 items-center gap-2 rounded-full bg-white px-4 text-sm text-muted">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.500-3.500" /></svg>
            <input placeholder="Course, topic, creator" className="w-full bg-transparent text-ink outline-none placeholder:text-muted" />
          </label>
          <button className="h-11 rounded-full bg-lime px-6 text-sm font-medium text-ink hover:brightness-95">Search</button>
        </form>
      </div>

      <div className="@container relative mx-auto mt-6 w-full max-w-[1140px]">
        <div className="relative h-[320px] md:h-[44.3cqw] md:text-[length:max(10px,1.4cqw)]">
          <div className="absolute inset-x-6 bottom-0 h-[260px] rounded-t-[50%_100%] bg-lime md:inset-x-0 md:h-[39cqw]" />

          <Person
            name="hero-person"
            width={703}
            height={688}
            className="absolute bottom-0 left-1/2 h-[300px] w-auto max-w-none -translate-x-1/2 translate-y-[21%] md:h-[57cqw]"
          />

          <div className="absolute left-[22%] top-[23%] hidden w-[12.9em] rounded-[.9em] bg-white px-[1em] py-[.75em] text-ink shadow-md md:block">
            <p className="text-[.9em] font-medium">UI/UX Design</p>
            <p className="mt-[.15em] text-[.68em] text-muted">200 Courses • 1000+ Students</p>
          </div>

          <div className="absolute left-[61%] top-[26%] hidden w-[14.6em] rounded-[.9em] bg-white px-[1em] py-[.8em] text-ink shadow-md md:block">
            <p className="text-[.8em]">Learning Progress</p>
            <p className="text-[3em] font-semibold leading-tight">55%</p>
            <div className="mt-[.4em] h-[.5em] rounded-full bg-chip"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
          </div>

          <div className="absolute left-[15.4%] top-[63%] hidden w-[16.4em] rounded-[.9em] bg-white px-[1em] py-[.8em] text-ink shadow-md md:block">
            <p className="text-[.9em] font-medium">Happy Students</p>
            <p className="mb-[.5em] text-[.7em] text-muted">4.5 (240) ★</p>
            <Students />
          </div>
        </div>
      </div>

      <span
        className="absolute bottom-[60px] left-[4%] hidden h-[240px] w-[240px] rounded-full border-[52px] border-white md:block"
        style={{ boxShadow: "inset 0 -10px 18px rgba(0,0,0,.12)" }}
        aria-hidden
      />
      <Squiggle color="white" className="hidden md:block md:bottom-[70px] md:right-[3%] md:h-48 md:w-48" />
    </section>
  );
}