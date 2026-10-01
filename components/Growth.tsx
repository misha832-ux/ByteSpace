import Image from "next/image";
import Person from "./Person";
import { Squiggle } from "./Shapes";

const Check = () => (
  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand">
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#fff" strokeWidth="2"><path d="m3 6 2 2 4-4" /></svg>
  </span>
);


function Students({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block aspect-[232/43] ${className}`}>
      <Image src="/avatars/stack-2k.png" alt="2K+ students" fill sizes="260px" className="object-contain" />
      <span className="absolute right-0 top-0 flex h-full w-[19%] items-center justify-center rounded-full bg-lime text-[1.15em] font-medium text-ink">2K+</span>
    </span>
  );
}


function Coil({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 185" className={`absolute ${className}`} aria-hidden style={{ filter: "drop-shadow(0 6px 8px rgba(120,150,0,.25))" }}>
      <defs>
        <linearGradient id="coil-lime" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#eaff4a" /><stop offset="1" stopColor="#c4f000" /></linearGradient>
      </defs>
      <path d="M146 20 C118 8 78 12 50 24 C28 34 36 46 70 48 C104 50 130 54 124 68 C118 80 84 84 56 92 C32 99 34 112 66 114 C98 116 122 120 114 134 C106 146 76 150 54 158" fill="none" stroke="url(#coil-lime)" strokeWidth="27" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Progress({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute rounded-[.8em] bg-white px-[.9em] py-[.7em] shadow-md ${className}`}>
      <p className="text-[.75em]">Learning Progress</p>
      <p className="text-[2.6em] font-semibold leading-tight">55%</p>
      <div className="mt-[.3em] h-[.45em] rounded-full bg-chip"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
    </div>
  );
}


export default function Growth() {
  return (
    <div className="bg-soft overflow-x-clip">
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

        <div className="@container mx-auto w-full max-w-[480px]">
          <div className="relative h-[96cqw] text-[length:3.333cqw]">
            <Squiggle color="lime" className="-right-[2%] top-[12%] h-[7em] w-[7em]" />
            <div className="absolute left-0 top-0 w-[62.5%] rounded-[1.6em] bg-white p-[.6em] shadow-lg">
              <div className="relative h-[9.4em] overflow-hidden rounded-[1.1em]">
                <Image src="/courses/1.jpg" alt="" fill sizes="300px" className="object-cover" />
                <div className="absolute bottom-[.5em] left-[.5em] flex gap-[.4em] text-[.62em] text-white">
                  <span className="rounded-full bg-black/45 px-[.8em] py-[.3em]">17 Lessons</span>
                  <span className="rounded-full bg-black/45 px-[.8em] py-[.3em]">2 hours 16 min</span>
                </div>
              </div>
              <p className="mt-[.8em] px-[.3em] text-[1.05em] font-semibold">Learn Figma from Basic</p>
              <p className="px-[.3em] text-[.7em] text-muted">by <span className="text-brand">purepearl studio</span></p>
              <span className="ml-[.3em] mt-[.7em] inline-flex items-center gap-[.4em] rounded-[.5em] bg-chip px-[.7em] py-[.3em] text-[.65em]">
                <svg viewBox="0 0 12 12" className="h-[1em] w-[1em]" fill="currentColor"><rect x="1" y="7" width="2.500" height="4" /><rect x="5" y="4" width="2.500" height="7" /><rect x="9" y="1" width="2.500" height="10" opacity=".3" /></svg>
                Beginner
              </span>
              <p className="mt-[.5em] px-[.3em] pb-[.3em] text-[1.25em] font-semibold text-brand">$25<span className="text-[.5em] font-normal text-muted">/lifetime</span></p>
            </div>

            <div className="pointer-events-none absolute inset-0 [clip-path:inset(-30%_-40%_0_-10%)]">
              <div className="absolute -right-[19%] bottom-0 w-[125%] translate-y-[21%]">
                <Person name="growth-person" width={703} height={688} className="h-auto w-full" />
              </div>
            </div>

            <Progress className="right-0 top-[38%] w-[37%] text-ink" />
          </div>
        </div>
      </section>

      <section id="creators" className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 md:grid-cols-2">
        <div className="@container mx-auto w-full max-w-[480px]">
          <div className="relative h-[62.8em] text-[length:1.639cqw]">
            <div className="absolute left-0 top-[.5em] h-[13.5em] w-[25em] rounded-[1.6em] bg-brand px-[2em] pt-[1.9em] text-white">
              <p className="text-[1.9em] leading-none">Total Revenue</p>
              <p className="mt-[.5em] text-[.9em] leading-none opacity-80">July 1-28</p>
              <p className="mt-[.9em] text-[2.9em] font-semibold leading-none">$120.29</p>
              <div className="mt-[1em] h-[1em] w-[17em] rounded-full bg-white"><div className="h-full w-[68%] rounded-full bg-lime" /></div>
            </div>
            <div className="absolute left-0 top-[17.5em] h-[15.2em] w-[15.2em] rounded-[1.6em] bg-brand px-[2em] pt-[2.1em] text-white">
              <p className="text-[1.9em] leading-none">Year to Date</p>
              <p className="mt-[.6em] text-[.9em] leading-none opacity-80">2023</p>
              <p className="mt-[.9em] text-[2.7em] font-semibold leading-none">$1,200.38</p>
              <span className="mt-[1.1em] inline-block rounded-full bg-lime px-[1em] py-[.55em] text-[.85em] leading-none text-ink">+12$</span>
            </div>

            <div className="pointer-events-none absolute inset-0 [clip-path:inset(-30%_-40%_0_-10%)]">
              <div className="absolute left-[1.8em] top-[-4.6em] w-[63.7em]">
                <Person name="creator-person" width={579} height={719} className="h-auto w-full" />
              </div>
            </div>

            <Coil className="left-[37.5em] top-[12.2em] h-[17.5em] w-[16em] -rotate-12" />

            <div className="absolute left-[32em] top-[42.2em] w-[29em] rounded-[1.6em] bg-white px-[1.6em] py-[1.5em] text-ink shadow-lg">
              <p className="text-[1.9em] font-medium leading-none">Happy Students</p>
              <p className="mt-[.6em] text-[1.05em] leading-none text-muted">4.5 (240) <span className="text-lime">★</span></p>
              <Students className="mt-[.9em] w-[25.8em]" />
            </div>
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