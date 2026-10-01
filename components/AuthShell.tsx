import Image from "next/image";
import Logo from "./Logo";

const Bars = () => (
  <svg viewBox="0 0 16 16" className="h-[1em] w-[1em]" fill="currentColor"><rect x="1" y="9" width="3" height="6" /><rect x="6" y="5" width="3" height="10" opacity=".35" /><rect x="11" y="1" width="3" height="14" opacity=".35" /></svg>
);

function CourseCard({ className, image, title, chips, rating = false }: { className: string; image: string; title: string; chips: string[]; rating?: boolean }) {
  return (
    <div className={`absolute overflow-hidden rounded-[1.7em] bg-white px-[.7em] pt-[.7em] text-ink ${className}`}>
      <div className={`relative overflow-hidden rounded-[1.1em] ${rating ? "h-[8.9em]" : "h-[8.8em]"}`}>
        <Image src={image} alt="" fill sizes="320px" className="object-cover" />
        <div className="absolute bottom-[.7em] left-[.6em] flex gap-[.5em] whitespace-nowrap text-[.55em] text-ink/70">
          {chips.map((c) => <span key={c} className="rounded-full bg-white/60 px-[1.2em] py-[.7em] backdrop-blur-sm">{c}</span>)}
        </div>
      </div>
      <div className="mt-[.9em] flex items-start justify-between px-[.2em]">
        <p className="whitespace-nowrap text-[.93em] font-semibold leading-tight">{title}</p>
        {rating && <span className="whitespace-nowrap text-[.85em] leading-tight text-muted">4.5 <span className="text-[1.2em] text-lime">★</span></span>}
      </div>
      <p className="mt-[.25em] px-[.2em] text-[.58em] text-muted">by <span className="text-brand">purepearl studio</span></p>
      <div className="mt-[.8em] flex items-center gap-[.55em] px-[.2em]">
        <span className="inline-flex items-center gap-[.5em] rounded-full bg-chip px-[1em] py-[.45em] text-[.6em]"><Bars />Beginner</span>
        <span className="relative block h-[1.5em] w-[6em]"><Image src="/avatars/stack-26.png" alt="" fill sizes="90px" className="object-contain object-left" /></span>
      </div>
      <p className="mt-[.4em] px-[.2em] text-[.9em] font-semibold text-brand">$25<span className="text-[.5em] font-normal text-muted">/lifetime</span></p>
    </div>
  );
}

export default function AuthShell({ heading, blurb, children }: { heading: string; blurb: string; children: React.ReactNode }) {
  return (
    <main className="bg-grid min-h-screen px-6 py-8 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="lg:hidden"><Logo /></div>
        <div className="relative hidden lg:block">
          <Logo markOnly />
          <h2 className="mt-14 text-lg font-semibold">{heading}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/85">{blurb}</p>
          <div className="@container mt-10 w-full max-w-[480px]">
            <div className="relative h-[25.4em] text-[length:4.545cqw]">
              <CourseCard
                className="left-0 top-[4em] h-[17.4em] w-[16.8em]"
                image="/courses/2.jpg"
                title="Build Digital"
                chips={["17 Lessons"]}
              />

              <CourseCard
                className="left-[5.07em] top-0 h-[17.3em] w-[16.93em] shadow-xl"
                image="/courses/3.jpg"
                title="the Power of Big Data"
                chips={["17 Lessons", "2 hours 16 mins", "59 Comments"]}
                rating
              />

              <span
                className="absolute left-[2.3em] top-[2.2em] h-[3.8em] w-[4.4em] -rotate-[25deg] rounded-[50%] border-[1.05em] border-lime"
                style={{ boxShadow: "inset -.15em -.25em .3em rgba(0,0,0,.18), 0 .2em .4em rgba(0,0,0,.12)" }}
                aria-hidden
              />

              <svg viewBox="-8 -8 183 197" className="absolute left-[.1em] top-[19em] h-[6.4em] w-[5.9em]" aria-hidden>
                <defs><linearGradient id="auth-cone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e6ff3a" /><stop offset="1" stopColor="#c4f000" /></linearGradient></defs>
                <polygon points="130,0 0,143 167,181" fill="url(#auth-cone)" stroke="url(#auth-cone)" strokeWidth="14" strokeLinejoin="round" />
              </svg>

              <svg viewBox="0 0 170 185" className="absolute left-[17em] top-[15.2em] h-[6.2em] w-[5.7em] rotate-[8deg]" aria-hidden style={{ filter: "drop-shadow(0 4px 5px rgba(0,0,0,.18))" }}>
                <defs><linearGradient id="auth-coil" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#dfe2ea" /></linearGradient></defs>
                <path d="M146 20 C118 8 78 12 50 24 C28 34 36 46 70 48 C104 50 130 54 124 68 C118 80 84 84 56 92 C32 99 34 112 66 114 C98 116 122 120 114 134 C106 146 76 150 54 158" fill="none" stroke="url(#auth-coil)" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="absolute left-[10.2em] top-[19.8em] h-[5.6em] w-[11.8em] rounded-[1em] bg-lime px-[.8em] pt-[.6em] text-ink shadow-md">
                <p className="text-[.95em] font-medium leading-tight">Happy Students</p>
                <p className="text-[.6em] leading-tight">4.8 (240) <span className="text-brand">★</span></p>
                <span className="relative mt-[.3em] block h-[1.9em] w-[10.2em]"><Image src="/avatars/stack-2k.png" alt="2K+ students" fill sizes="180px" className="object-contain object-left" /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center"><div className="w-full rounded-3xl bg-white p-6 text-ink sm:p-8 md:p-10">{children}</div></div>
      </div>
    </main>
  );
}