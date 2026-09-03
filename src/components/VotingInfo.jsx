import Reveal from "./Reveal";
import { votingInfo, candidate } from "../data/content";

export default function VotingInfo() {
  return (
    <section id="vote" className="bg-paper-alt py-24 lg:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-[15px] text-brass-dark">{votingInfo.kicker}</p>
          <h2 className="mt-3 font-display text-[32px] font-medium leading-tight text-ink sm:text-[40px]">
            {votingInfo.heading}
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-ink/60">
            {votingInfo.intro}{" "}
            <a
              href={candidate.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="text-signal underline underline-offset-2"
            >
              pasha.org.pk
            </a>
            .
          </p>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {votingInfo.steps.map((step) => (
            <div key={step.n} className="bg-paper p-7">
              <span className="text-[13px] text-brass-dark">{step.n}</span>
              <h3 className="mt-2 font-display text-[19px] font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/55">
                {step.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
