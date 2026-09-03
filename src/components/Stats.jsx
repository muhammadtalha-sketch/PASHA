import Reveal from "./Reveal";
import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="bg-ink py-20 text-paper">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {stats.items.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-medium text-brass-light num-tick sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-[14px] text-paper/55">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
