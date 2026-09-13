const stats = [
  {
    value: "+120%",
    label: "Revenue Growth",
    sub: "avg. client result",
    icon: "chart" as const,
  },
  {
    value: "3.8x",
    label: "Average ROAS",
    sub: "Google & Meta Ads",
    icon: "bolt" as const,
  },
  {
    value: "+142%",
    label: "Lead Growth",
    sub: "qualified enquiries",
    icon: "target" as const,
  },
  {
    value: "-38%",
    label: "Reduced CPA",
    sub: "cost per acquisition",
    icon: "money" as const,
  },
  {
    value: "250+",
    label: "Projects Completed",
    sub: "across UK sectors",
    icon: "check" as const,
  },
];

const partners = [
  "TechScale UK",
  "Meridian Group",
  "Luminary Health",
  "Apex Capital",
  "ElevateHR",
];

function StatIcon({ type }: { type: (typeof stats)[number]["icon"] }) {
  if (type === "chart") {
    return (
      <span className="flex size-8 items-center justify-center rounded-md bg-white">
        <svg viewBox="0 0 20 20" className="size-5" aria-hidden>
          <path
            d="M3 14l4-4 3 3 6-7"
            fill="none"
            stroke="#e11d48"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  if (type === "bolt") {
    return (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
        <path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" fill="#f5c542" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="5.5"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="2.2" fill="#e11d48" />
        <path
          d="M12 12l6-6M15.5 5.5h3v3"
          fill="none"
          stroke="#e11d48"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "money") {
    return (
      <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
        <path
          d="M12 3c-2.8 0-5 1.6-5 4.2 0 2.2 1.4 3.5 3.2 4.4L9 20h6l-1.2-8.4c1.8-.9 3.2-2.2 3.2-4.4C17 4.6 14.8 3 12 3z"
          fill="#c4a574"
        />
        <circle cx="12" cy="8" r="2.2" fill="#0b1220" />
        <path
          d="M12 6.6v2.8M11 7.4h2"
          stroke="#c4a574"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <span className="flex size-8 items-center justify-center rounded-md bg-[#22c55e]">
      <svg viewBox="0 0 20 20" className="size-4" aria-hidden>
        <path
          d="M4 10.5l4 4 8-9"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Results() {
  return (
    <section className="bg-secondary py-9 md:py-11 lg:py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        <p className="text-center text-xs font-medium tracking-wide text-[#8fa3bd] sm:text-sm">
          Real Results · Measurable Growth
        </p>

        <div className="mt-6 hidden lg:flex lg:items-start">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-1 flex-col items-center px-3 py-1 text-center ${
                i > 0 ? "border-l border-white/10" : ""
              }`}
            >
              <StatIcon type={stat.icon} />
              <p className="mt-2.5 text-xl font-extrabold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white">{stat.label}</p>
              <p className="mt-0.5 text-xs text-[#8fa3bd]">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-white/10 lg:hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center bg-secondary px-3 py-5 text-center"
            >
              <StatIcon type={stat.icon} />
              <p className="mt-2.5 text-2xl font-extrabold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-0.5 text-xs text-[#8fa3bd]">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/10 pt-5 sm:mt-0 sm:justify-center sm:items-center sm:flex-row sm:gap-5 lg:mt-7 w-full">
          <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-center sm:gap-5">
            <p className="shrink-0 text-[11px] font-semibold tracking-[0.14em] text-[#8fa3bd] mb-2 sm:mb-0 text-center sm:text-left">
              TRUSTED BY
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
              {partners.map((name) => (
                <span
                  key={name}
                  className="rounded-md border border-[#3d4f6a]/80 px-3 py-1.5 text-xs font-medium text-[#c5d0e0] sm:text-sm text-center"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
}
