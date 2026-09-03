import Reveal from "./Reveal";
import { globalExperience } from "../data/content";

export default function Global() {
  return (
    <section id="global" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="text-[15px] text-brass-dark">{globalExperience.kicker}</p>
          <h2 className="mt-3 font-display text-[32px] font-medium leading-tight text-ink sm:text-[40px]">
            {globalExperience.heading}
          </h2>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h3 className="text-[15px] font-medium text-ink">Regions served</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {globalExperience.regions.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[14px] text-ink/70"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-medium text-ink">Industries</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {globalExperience.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[14px] text-ink/70"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-brass/30 bg-brass/[0.06] p-6">
            <h3 className="font-display text-[19px] font-medium text-ink">
              Thought leadership
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
              {globalExperience.thoughtLeadership}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
