import Reveal from "./Reveal";
import PillarCard from "./PillarCard";
import { pillars } from "../data/content";

export default function Pillars() {
  return (
    <section id="pillars" className="bg-paper-alt py-24 lg:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[15px] text-brass-dark">{pillars.kicker}</p>
          <h2 className="mt-3 font-display text-[32px] font-medium leading-tight text-ink sm:text-[40px]">
            {pillars.heading}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/60">
            {pillars.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.items.map((pillar, i) => (
            <Reveal key={pillar.title}>
              <PillarCard pillar={pillar} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
