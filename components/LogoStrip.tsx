const logos = [
  "globe",
  "sun",
  "bolt",
  "flower",
  "sphere",
] as const;

function LogoIcon({ type }: { type: (typeof logos)[number] }) {
  if (type === "globe") {
    return (
      <svg
        viewBox="0 0 52 52"
        className="h-11 w-11 shrink-0"
        fill="none"
      >
        <circle cx="26" cy="26" r="22" fill="currentColor" />

        <path
          d="M7 17c8 5 17 7 27 5 5-1 9-3 13-5"
          stroke="#f5f5f5"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M5 26c9 5 19 7 29 5 5-1 9-3 13-5"
          stroke="#f5f5f5"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M8 35c8 4 17 5 26 3 5-1 9-3 12-5"
          stroke="#f5f5f5"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "sun") {
    return (
      <svg
        viewBox="0 0 52 52"
        className="h-11 w-11 shrink-0"
        fill="none"
      >
        <circle cx="26" cy="26" r="10" fill="currentColor" />

        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="26"
            y1="3"
            x2="26"
            y2="10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${i * 22.5} 26 26)`}
          />
        ))}
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg
        viewBox="0 0 52 52"
        className="h-11 w-11 shrink-0"
      >
        <circle cx="26" cy="26" r="22" fill="currentColor" />

        <path
          d="M29 8 16 28h10l-3 16 13-23H26l3-13Z"
          fill="#f5f5f5"
        />
      </svg>
    );
  }

  if (type === "flower") {
    return (
      <svg
        viewBox="0 0 52 52"
        className="h-11 w-11 shrink-0"
        fill="currentColor"
      >
        <circle cx="26" cy="14" r="10" />
        <circle cx="38" cy="26" r="10" />
        <circle cx="26" cy="38" r="10" />
        <circle cx="14" cy="26" r="10" />

        <circle cx="26" cy="26" r="5" fill="#f5f5f5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 52 52"
      className="h-11 w-11 shrink-0"
      fill="none"
    >
      <circle
        cx="26"
        cy="26"
        r="21"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="26"
        cy="26"
        r="17"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="26"
        cy="26"
        r="13"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="26"
        cy="26"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="26"
        cy="26"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function LogoStrip() {
  return (
    <section className="w-full bg-[#f7f7f7]">
      <div
        className="
          mx-auto
          flex
          min-h-[110px]
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-8
          sm:px-10
          lg:px-12
        "
      >
        {logos.map((logo) => (
          <div
            key={logo}
            className="
              flex
              items-center
              gap-3
              whitespace-nowrap
              text-[#858a93]
            "
          >
            <LogoIcon type={logo} />

            <span
              className="
                text-[20px]
                font-bold
                tracking-[-0.7px]
                sm:text-[23px]
              "
            >
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}