import { useRef, useState } from "react";
import Reveal from "./Reveal";
import { presence } from "../data/content";

export default function Highlights() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const count = presence.slides.length;

  const go = (next) => setIndex((i) => (i + next + count) % count);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section className="bg-paper-alt py-24 lg:py-28">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="text-[15px] text-brass-dark">{presence.kicker}</p>
          <h2 className="mt-3 font-display text-[32px] font-medium leading-tight text-ink sm:text-[40px]">
            {presence.heading}
          </h2>
        </Reveal>

        <Reveal
          className="relative mt-12 overflow-hidden rounded-sm border border-ink/10"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {presence.slides.map((slide, i) => (
              <div
                key={slide.place}
                className="relative flex aspect-[16/7] w-full shrink-0 flex-col justify-end overflow-hidden p-8 sm:p-10"
                aria-hidden={i !== index}
              >
                <img
                  src={slide.image}
                  alt={slide.place}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: slide.focus || "center" }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <p className="relative font-display text-[26px] font-medium text-paper sm:text-[32px]">
                  {slide.place}
                </p>
                <p className="relative mt-2 text-[14px] text-paper/55">
                  {slide.note}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-ink/10 bg-paper px-6 py-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {presence.slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === index ? "bg-brass" : "bg-ink/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink/40"
            >
              ›
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
