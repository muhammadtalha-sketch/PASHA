import Reveal from "./Reveal";
import { perspective, philosophy } from "../data/content";

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-[15px] text-brass-dark">{perspective.kicker}</p>
            <h2 className="mt-3 font-display text-[32px] font-medium leading-tight text-ink sm:text-[40px]">
              {perspective.heading}
            </h2>
          </div>
          <p className="text-[18px] leading-relaxed text-ink/70 lg:pt-1">
            {perspective.body}
          </p>
        </Reveal>

        <div className="mt-16 border-t border-ink/10">
          {philosophy.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 gap-4 border-b border-ink/10 py-9 lg:grid-cols-[280px_1fr] lg:gap-16"
            >
              <h3 className="font-display text-[21px] font-medium text-ink">
                {item.title}
              </h3>
              <p className="max-w-2xl text-[16px] leading-relaxed text-ink/65">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
