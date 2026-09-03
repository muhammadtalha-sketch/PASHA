import { candidate, footer, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/10 py-14 text-paper/60">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-[20px] font-medium text-paper">
              {candidate.name}
            </p>
            <p className="mt-1 text-[14px]">
              {candidate.role} · {candidate.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-paper">
                {link.label}
              </a>
            ))}
            <a href={candidate.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-paper">
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-paper/10 pt-6 text-[13px] text-paper/40">
          <p>{footer.disclaimer}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} {candidate.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
