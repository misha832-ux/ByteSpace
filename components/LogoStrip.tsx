const BG = "#f5f5f6"; 

const logos = ["waves", "sun", "bolt", "clover", "sphere"] as const;
type LogoType = (typeof logos)[number];

const iconClass = "h-9 w-9 shrink-0 lg:h-10 lg:w-10 xl:h-12 xl:w-12";

function LogoIcon({ type }: { type: LogoType }) {
  if (type === "waves") {
    return (
      <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
        <defs>
          <clipPath id="ls-waves">
            <circle cx="24" cy="24" r="24" />
          </clipPath>
        </defs>
        <g clipPath="url(#ls-waves)">
          <g fill="none" stroke="currentColor" strokeWidth="3.8">
            <path d="M6 -3 C16 -4 26 1 38 6" />
            <path d="M-2 4 C7 3 12 9.5 22 12 S40 14.5 50 17.5" />
            <path d="M-2 14 C7 13.5 12 19.5 22 21.5 S40 24 50 27" />
          </g>
          <path d="M-2 24.5 C7 23 12 28.5 22 30 S40 32 50 36 V50 H-2Z" fill="currentColor" />
        </g>
      </svg>
    );
  }

  
  if (type === "sun") {
    return (
      <svg viewBox="-24 -24 48 48" className={iconClass} aria-hidden>
        <g fill="currentColor">
          {Array.from({ length: 12 }).map((_, i) => (
            <polygon
              key={i}
              points="-2.1,-9.8 2.1,-9.8 2.7,-23.8 -2.7,-23.8"
              transform={`rotate(${i * 30 + [-3, 2, -2, 3, -2, 1][i % 6]})`}
            />
          ))}
        </g>
      </svg>
    );
  }


  if (type === "bolt") {
    return (
      <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
        <circle cx="24" cy="24" r="24" fill="currentColor" />
        <polygon
          points="32.8,10.4 13.8,24.2 26.6,24.2 17.8,38.6 36.2,25.8 29.6,25.8"
          fill={BG}
          stroke={BG}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    );
  }


  if (type === "clover") {
    return (
      <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
        <circle cx="24" cy="24" r="24" fill="currentColor" />
        {[0, 90, 180, 270].map((deg) => (
          <path
            key={deg}
            d="M24 22.8 L20.25 19.05 A5.3 5.3 0 1 1 27.75 19.05 Z"
            fill={BG}
            transform={`rotate(${deg} 24 24)`}
          />
        ))}
      </svg>
    );
  }


  return (
    <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
      <defs>
        <clipPath id="ls-sphere">
          <circle cx="24" cy="24" r="24" />
        </clipPath>
      </defs>
      <g clipPath="url(#ls-sphere)" fill="none" stroke="currentColor" strokeWidth="0.6">
        {Array.from({ length: 14 }).map((_, i) => {
          const t = (i + 1) / 14;
          const c = 15 + t * 9;
          const r = 4.7 + t * 19.3;
          return <circle key={i} cx={c} cy={c} r={r} />;
        })}
      </g>
      <circle cx="15" cy="15" r="4.7" fill={BG} />
    </svg>
  );
}

export default function LogoStrip() {
  return (
    <section className="w-full" style={{ backgroundColor: BG }} aria-label="Trusted by">
      <div className="mx-auto flex min-h-[117px] w-full max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 py-8 text-[#898d95] lg:flex-nowrap lg:justify-between lg:gap-x-6 lg:px-8 lg:py-0 xl:px-10">
        {logos.map((logo) => (
          <div key={logo} className="flex items-center gap-2.5 whitespace-nowrap xl:gap-3">
            <LogoIcon type={logo} />
            <span
              className="text-[20px] font-bold leading-none tracking-[-0.04em] lg:text-[23px] xl:text-[28px]"
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
