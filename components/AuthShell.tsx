import Image from "next/image";
import Logo from "./Logo";
import { Ring, Cone, Squiggle } from "./Shapes";

export default function AuthShell({ heading, blurb, children }: { heading: string; blurb: string; children: React.ReactNode }) {
  return (
    <main className="bg-grid min-h-screen px-6 py-8 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <Logo markOnly />
          <h2 className="mt-14 text-lg font-semibold">{heading}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/85">{blurb}</p>
          <div className="relative mt-10 h-[420px]">
            <div className="absolute left-0 top-24 w-52 rounded-3xl bg-white p-3 text-ink"><div className="h-28 rounded-2xl bg-[#c9ccd4]" /><p className="mt-3 text-base font-semibold">Build Digit…</p></div>
            <div className="absolute left-24 top-0 w-72 rounded-3xl bg-white p-3 text-ink shadow-xl">
              <div className="relative h-36 overflow-hidden rounded-2xl"><Image src="/courses/3.jpg" alt="" fill className="object-cover" /></div>
              <div className="mt-3 flex justify-between"><p className="font-semibold">the Power of Big Data</p><span className="text-sm text-muted">4.5 <span className="text-lime">★</span></span></div>
              <p className="text-[11px] text-muted">by <span className="text-brand">purepearl studio</span></p>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full bg-chip px-3 py-1.5 text-[11px] text-ink">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor"><rect x="1" y="9" width="3" height="6" /><rect x="6" y="5" width="3" height="10" /><rect x="11" y="1" width="3" height="14" /></svg>
                  Beginner
                </span>
                <img src="/avatars/stack-26.png" alt="" className="h-6 w-auto" />
              </div>
              <p className="mt-3 font-semibold text-brand">$25<span className="text-[10px] font-normal text-muted">/lifetime</span></p>
            </div>
            <Ring color="lime" className="left-24 top-12 h-20 w-20 !border-[14px]" />
            <Cone color="lime" className="-left-2 bottom-8 h-24 w-24" />
            <Squiggle color="white" className="left-64 bottom-14 h-20 w-20" />
            <div className="absolute bottom-0 left-44 rounded-xl bg-lime px-4 py-3 text-ink">
              <p className="text-sm font-medium">Happy Students</p><p className="mb-2 text-[11px]">4.5 (240) ★</p>
              <img src="/avatars/stack-2k.png" alt="" className="h-7 w-auto" />
            </div>
          </div>
        </div>
        <div className="flex items-center"><div className="w-full rounded-3xl bg-white p-8 text-ink md:p-10">{children}</div></div>
      </div>
    </main>
  );
}
