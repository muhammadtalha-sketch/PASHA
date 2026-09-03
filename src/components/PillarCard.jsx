import { useState } from "react";

export default function PillarCard({ pillar, index }) {
  const [tab, setTab] = useState("already");
  const lines = tab === "already" ? pillar.already : pillar.will;

  return (
    <div className="border border-ink/10 bg-paper">
      <div className="flex items-baseline justify-between border-b border-ink/10 px-7 pt-7 pb-5">
        <h3 className="font-display text-[21px] font-medium text-ink">
          {pillar.title}
        </h3>
        <span className="font-display text-[13px] text-brass-dark">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div
        className="flex border-b border-ink/10 px-7"
        role="tablist"
        aria-label={`${pillar.title} details`}
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "already"}
          onClick={() => setTab("already")}
          className={`border-b-2 py-3.5 pr-6 text-[14px] font-medium transition-colors ${
            tab === "already"
              ? "border-brass text-ink"
              : "border-transparent text-ink/40 hover:text-ink/70"
          }`}
        >
          Already doing
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "will"}
          onClick={() => setTab("will")}
          className={`border-b-2 py-3.5 pr-6 text-[14px] font-medium transition-colors ${
            tab === "will"
              ? "border-brass text-ink"
              : "border-transparent text-ink/40 hover:text-ink/70"
          }`}
        >
          Will do
        </button>
      </div>

      <ul className="space-y-3 px-7 py-7">
        {lines.map((line, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink/65">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
