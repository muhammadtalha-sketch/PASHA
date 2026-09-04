import { useEffect, useState } from "react";
import { navLinks, candidate } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="font-display text-lg tracking-tight text-ink">
          {candidate.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#vote"
          className="hidden rounded-sm bg-brass px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-brass-light md:inline-block"
        >
          How to Vote
        </a>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[17px] text-ink/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#vote"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-sm bg-brass px-5 py-3 text-center text-[15px] font-medium text-ink"
            >
              How to Vote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
