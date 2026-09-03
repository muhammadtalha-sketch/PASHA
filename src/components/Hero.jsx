import { hero, candidate } from "../data/content";

export default function Hero() {
  const tickerItems = [...hero.ticker, ...hero.ticker];

  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="42"
              height="42"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#F5F3ED" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-wrap gap-14 px-6 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:pb-20 lg:pt-24">
        <div className="flex flex-col justify-center">
          <span className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-brass-light/40 px-4 py-1.5 text-[13px] text-brass-light">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-light" />
            {hero.kicker} · {candidate.seatLabel}
          </span>

          <h1 className="max-w-2xl font-display text-[38px] font-medium leading-[1.1] tracking-tightest text-paper sm:text-[50px] lg:text-[56px]">
            {hero.headline}
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-paper/70">
            {hero.subhead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="rounded-sm bg-brass px-7 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-brass-light"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="rounded-sm border border-paper/25 px-7 py-3.5 text-[15px] font-medium text-paper transition-colors hover:border-paper/60"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="relative flex items-end">
          <div className="relative w-full overflow-hidden rounded-sm border border-paper/15 bg-ink-soft">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm border border-brass/25">
              <img
                src="https://ahmedvaseer.com/wp-content/uploads/2026/01/imgi_2_ahmed-golden-gate-JYaoRqb0.jpg"
                alt={candidate.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-paper/15 bg-ink/80 p-6 backdrop-blur">
              <p className="text-[12px] uppercase tracking-wide text-paper/45">
                {hero.snapshot.heading}
              </p>
              <dl className="mt-3 space-y-2 text-[14px]">
                <div className="flex justify-between gap-3">
                  <dt className="text-paper/55">Company</dt>
                  <dd className="text-right text-paper/85">
                    {hero.snapshot.company}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-paper/55">Seat</dt>
                  <dd className="text-right text-paper/85">
                    {hero.snapshot.seat}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-paper/55">Polling</dt>
                  <dd className="text-right text-paper/85">
                    {hero.snapshot.polling}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-paper/10 bg-ink-soft py-4">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {tickerItems.map((item, i) => (
            <span key={i} className="text-[14px] text-paper/50">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
