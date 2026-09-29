import Navbar from "./Navbar";
import Person from "./Person";
import AvatarStack from "./AvatarStack";
import { Squiggle, Ring, Cone, Cylinder } from "./Shapes";

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden pb-0">
      <Navbar />
      <Squiggle color="lime" className="-left-6 top-40 h-40 w-40 md:h-56 md:w-56" />
      <Squiggle color="white" className="left-[14%] top-[52%] hidden h-24 w-24 md:block" />
      <Cylinder className="-right-10 top-40 hidden h-56 w-32 rotate-12 md:block" />
      <Cone className="right-[14%] top-[45%] hidden h-24 w-24 md:block" />
      <Ring className="bottom-4 left-[4%] hidden h-40 w-40 md:block" />
      <Squiggle color="white" className="bottom-6 right-[4%] hidden h-40 w-40 md:block" />

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

      <div className="relative mx-auto mt-6 h-[300px] max-w-3xl md:h-[380px]">
        <div className="absolute inset-x-0 bottom-0 mx-auto h-[300px] w-[300px] rounded-t-full bg-lime md:h-[400px] md:w-[560px]" />
        <Person name="hero-person" className="absolute bottom-0 left-1/2 h-[280px] w-auto -translate-x-1/2 md:h-[370px]" />
        <div className="absolute left-0 top-10 hidden rounded-xl bg-white px-4 py-3 text-ink shadow-md md:block">
          <p className="text-sm font-medium">UI/UX Design</p>
          <p className="text-[11px] text-muted">200 Courses • 1000+ Students</p>
        </div>
        <div className="absolute right-0 top-14 hidden w-44 rounded-xl bg-white px-4 py-3 text-ink shadow-md md:block">
          <p className="text-[11px]">Learning Progress</p>
          <p className="text-3xl font-semibold">55%</p>
          <div className="mt-1 h-1.5 rounded-full bg-chip"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
        </div>
        <div className="absolute bottom-8 left-0 hidden rounded-xl bg-white px-4 py-3 text-ink shadow-md md:block">
          <p className="text-sm font-medium">Happy Students</p>
          <p className="mb-2 text-[11px] text-muted">4.5 (240) ★</p>
          <AvatarStack count="2K+" size={28} />
        </div>
      </div>
    </section>
  );
}
