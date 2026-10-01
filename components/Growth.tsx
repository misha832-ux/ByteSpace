import Image from "next/image";
import Person from "./Person";
import AvatarStack from "./AvatarStack";
import { Squiggle } from "./Shapes";

const Check = () => (
  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand">
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#fff" strokeWidth="2"><path d="m3 6 2 2 4-4" /></svg>
  </span>
);

export default function Growth() {
  return (
    <div className="bg-soft">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">Your Path to Professional Growth Starts Here!</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>
          <dl className="mt-8 flex gap-8">
            {[["12K", "Students"], ["70+", "Courses"], ["16", "Creators"]].map(([n, l]) => (
              <div key={l}><dt className="text-3xl font-medium text-brand">{n}</dt><dd className="text-sm text-muted">{l}</dd></div>
            ))}
          </dl>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex gap-4">
            <div className="w-3/5 rounded-3xl bg-white p-3 shadow-lg">
              <div className="relative h-28 overflow-hidden rounded-2xl"><Image src="/courses/1.jpg" alt="" fill sizes="224px" className="object-cover" /></div>
              <p className="mt-3 text-sm font-semibold">Learn Figma from Basic</p>
              <p className="text-[11px] text-muted">by <span className="text-brand">purepearl studio</span></p>
              <p className="mt-4 font-semibold text-brand">$25<span className="text-[10px] font-normal text-muted">/lifetime</span></p>
            </div>
            <div className="w-2/5 self-start rounded-xl bg-white px-4 py-3 shadow-md">
              <p className="text-[11px]">Learning Progress</p>
              <p className="text-3xl font-semibold">55%</p>
              <div className="mt-1 h-1.5 rounded-full bg-chip"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
            </div>
          </div>
          <div className="relative mt-5 h-[320px]">
            <Person name="growth-person" className="absolute bottom-0 right-0 h-full w-auto" />
            <Squiggle color="lime" className="-right-4 top-0 h-28 w-28" />
          </div>
        </div>
      </section>

      <section id="creators" className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 md:grid-cols-2">
        <div className="relative mx-auto h-[480px] w-full max-w-md">
          <div className="absolute left-0 top-0 w-44 rounded-xl bg-brand p-3 text-white">
            <p className="text-sm">Total Revenue</p><p className="text-[9px] opacity-70">July 1-28</p>
            <p className="text-xl font-semibold">$120.29</p>
            <div className="mt-1 h-1.5 rounded-full bg-white/30"><div className="h-full w-2/3 rounded-full bg-lime" /></div>
          </div>
          <div className="absolute left-0 top-[115px] w-36 rounded-xl bg-brand p-3 text-white">
            <p className="text-sm">Year to Date</p><p className="text-[9px] opacity-70">2023</p>
            <p className="text-xl font-semibold">$1,200.38</p>
            <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] text-ink">+12$</span>
          </div>
          <Person name="creator-person" className="absolute bottom-0 right-0 h-[380px] w-auto" />
          <Squiggle color="lime" className="right-16 top-0 h-28 w-28" />
          <div className="absolute bottom-0 left-0 rounded-xl bg-white px-4 py-3 shadow-md">
            <p className="text-sm font-medium">Happy Students</p><p className="mb-2 text-[11px] text-muted">4.5 (240) ★</p>
            <AvatarStack count="2K+" size={28} />
          </div>
        </div>
        <div className="md:pl-8">
          <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">Create &amp; Manage Courses Easily.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted"><b className="font-medium text-ink">ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check />{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
