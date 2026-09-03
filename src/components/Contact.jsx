import Reveal from "./Reveal";
import { contact, candidate } from "../data/content";

export default function Contact() {
  const links = [
    candidate.phone && {
      label: "WhatsApp",
      value: candidate.phone,
      href: `https://wa.me/${candidate.phone.replace(/\D/g, "")}`,
      external: true,
    },
    candidate.email && {
      label: "Email",
      value: candidate.email,
      href: `mailto:${candidate.email}`,
    },
    candidate.linkedinUrl && {
      label: "LinkedIn",
      value: candidate.linkedin,
      href: candidate.linkedinUrl,
      external: true,
    },
    contact.calendlyUrl && {
      label: "Book a call",
      value: "15 minutes",
      href: contact.calendlyUrl,
      external: true,
    },
    contact.resumeUrl && {
      label: "Resume",
      value: "PDF",
      href: contact.resumeUrl,
      external: true,
    },
  ].filter(Boolean);

  return (
    <section className="bg-lime py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-wrap px-6 lg:px-10">
        <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-ink/70">
              <span className="h-px w-5 bg-ink/50" />
              {contact.kicker}
            </p>
            <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.05] sm:text-[52px]">
              {contact.heading}
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink/70">
              {contact.body}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="group flex items-center justify-between rounded-2xl bg-ink px-6 py-5 text-paper transition-colors hover:bg-ink-soft"
              >
                <span className="flex items-center gap-1.5 text-[16px] font-semibold">
                  {link.label}
                  <span className="text-brass-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    {link.external ? "↗" : "→"}
                  </span>
                </span>
                <span className="font-mono text-[13.5px] text-paper/55">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
