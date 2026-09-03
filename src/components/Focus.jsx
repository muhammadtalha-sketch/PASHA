import Reveal from "./Reveal";
import { focusAreas } from "../data/content";

export default function Focus() {
  return (
    <section id="focus" className="bg-ink py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-[15px] text-brass-light">{focusAreas.kicker}</p>
            <h2 className="mt-3 font-display text-[32px] font-medium leading-tight sm:text-[40px]">
              {focusAreas.heading}
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-paper/55">
            {focusAreas.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-0 border-t border-paper/15 md:grid-cols-2">
          {focusAreas.items.map((area, i) => (
            <div
              key={area.title}
              className={`border-b border-paper/15 py-8 ${
                i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
              }`}
            >
              <h3 className="font-display text-[21px] font-medium text-paper">
                {area.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-paper/60">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
